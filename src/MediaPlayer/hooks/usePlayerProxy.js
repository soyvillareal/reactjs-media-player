import React from 'react';

import { indexBy } from '../../utils';
import { getRecommendedVideoQuality, measureNetworkSpeedGeneratedFile } from '../MediaPlayer.contants';

const usePlayerProxy = ({
  onBuffer,
  onBufferEnd,
  onDisablePIP,
  onDuration,
  onEnablePIP,
  onEnded,
  onError,
  onPause,
  onPlay,
  onPlayBackQualityChange,
  onPlayBackRateChange,
  onProgress,
  onReady,
  onSeek,
  onStart,
  onLoaded,
  onMount,
  updateState,
  playerState,
  extraProps: { url, sources, fullHDQualityBreak, prevented },
}) => {
  const [autoVideoUrl, setAutoVideoUrl] = React.useState(null);

  const resolutions = sources.map((source) => source.resolution);

  if (sources.length > 0 && resolutions.includes(fullHDQualityBreak) === false) {
    throw new Error(`Invalid values in fullHDQualityBreak. Accepted resolutions are: ${resolutions.join(', ')}`);
  }

  React.useEffect(() => {
    (async () => {
      if (sources && sources.length > 0) {
        const sourcesIndexByResolution = indexBy(sources, 'resolution');
        if (autoVideoUrl === null && sourcesIndexByResolution) {
          const speed = await measureNetworkSpeedGeneratedFile();
          const speeds = Object.keys(sourcesIndexByResolution).map(Number);
          const recommendedQuality = getRecommendedVideoQuality(speed || 0, speeds);

          if (speed !== null && recommendedQuality) {
            setAutoVideoUrl(sourcesIndexByResolution[recommendedQuality?.toString()]?.src ?? sources[0].src);
            updateState((prev) => ({ ...prev, playbackQuality: recommendedQuality }));
          } else {
            const sourceQuality = sources[0].src;
            setAutoVideoUrl(sourceQuality);
            updateState((prev) => ({ ...prev, playbackQuality: Number(sourceQuality) }));
          }
        }
      }
    })();
  }, [sources, autoVideoUrl]);

  const videoUrl = React.useMemo(() => {
    if (sources && sources.length > 0) {
      const sourcesIndexByResolution = indexBy(sources, 'resolution');
      if (playerState.playbackQuality === null || playerState.playbackQuality === undefined) {
        if (autoVideoUrl !== null) {
          return autoVideoUrl;
        }
        return sources[0].src;
      }
      return sourcesIndexByResolution[playerState.playbackQuality]?.src ?? sources[0].src;
    }
    return url;
  }, [url, sources, playerState.playbackQuality, autoVideoUrl]);

  const proxyMemorized = React.useMemo(
    () => ({
      onBuffer: onBuffer,
      onBufferEnd: onBufferEnd,
      onDisablePIP: (e) => {
        if (onDisablePIP) {
          onDisablePIP(e);
        }
        updateState((prev) => ({ ...prev, isPIP: false }));
      },
      onDuration: (duration) => {
        if (onDuration) {
          onDuration(duration);
        }
        updateState((prev) => ({ ...prev, duration: duration }));
      },
      onEnablePIP: (e) => {
        if (onEnablePIP) {
          onEnablePIP(e);
        }
        updateState((prev) => ({ ...prev, isPIP: true }));
      },
      onEnded: (e) => {
        if (onEnded) {
          onEnded(e);
        }
        updateState((prev) => ({ ...prev, isEnded: true }));
      },
      onError: (e, data, hls, HLS) => {
        onError(e, data, hls, HLS);
        const skipErrors = ['networkError']; // Put here the errors that you want to skip
        if (skipErrors.includes(data?.type) === false) {
          updateState((prev) => ({
            ...prev,
            kernelError: data
              ? {
                  type: data?.type || 'UnknownError',
                  detail: data?.error?.message || 'Something was wrong with the playback. Please try again.',
                }
              : null,
            isLoading: false,
            playing: false,
          }));
        }
      },
      onPause: (e) => {
        if (onPause) {
          onPause(e);
        }
        updateState((prev) => ({ ...prev, playing: false }));
      },
      onPlay: (e) => {
        if (onPlay) {
          onPlay(e);
        }
        updateState((prev) => ({
          ...prev,
          playing: true,
          isEnded: false,
          hasAudio: prevented ? true : (e?.hasAudio ?? false),
        }));
      },
      onPlayBackQualityChange: (quality) => {
        if (onPlayBackQualityChange) {
          onPlayBackQualityChange(quality);
        }
        updateState((prev) => ({ ...prev, playbackQuality: quality }));
      },
      onPlayBackRateChange: (rate) => {
        if (onPlayBackRateChange) {
          onPlayBackRateChange(rate);
        }
        updateState((prev) => ({ ...prev, playbackRate: rate }));
      },
      onProgress: (state) => {
        if (onProgress) {
          onProgress(state);
        }
        if (!playerState.seeking) {
          updateState((prev) => ({ ...prev, played: state.playedSeconds, loaded: state.loaded }));
        }
      },
      onReady: (e) => {
        if (onReady) {
          onReady(e);
        }
        updateState((prev) => ({ ...prev, isLoading: false }));
      },
      onSeek: (time) => {
        if (onSeek) {
          onSeek(time);
        }
        updateState((prev) => ({ ...prev, seek: time }));
      },
      onStart: () => {
        if (onStart) {
          onStart();
        }
      },
      onLoaded: onLoaded,
      onMount: onMount,
    }),
    [playerState.seeking, prevented],
  );

  return {
    ...proxyMemorized,
    videoUrl: videoUrl ?? autoVideoUrl,
  };
};

export default usePlayerProxy;
