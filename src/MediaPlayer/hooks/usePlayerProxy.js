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

  // Stable ref for updateState to prevent infinite re-render loops.
  // updateState (React setState) is stable by React's contract, but its identity
  // can change when passed through intermediate components. Using a ref avoids
  // re-triggering the network speed useEffect on every render.
  const updateStateRef = React.useRef(updateState);
  updateStateRef.current = updateState;

  // Keep all consumer callbacks in refs so the proxy object stays stable
  const callbacksRef = React.useRef({
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
  });
  callbacksRef.current = {
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
  };

  // Keep reactive values in refs for the proxy closures
  const preventedRef = React.useRef(prevented);
  preventedRef.current = prevented;
  const seekingRef = React.useRef(playerState.seeking);
  seekingRef.current = playerState.seeking;

  // Only log the fullHDQualityBreak warning once per set of sources
  const warnedRef = React.useRef(false);
  React.useEffect(() => {
    warnedRef.current = false;
  }, [sources, fullHDQualityBreak]);

  if (sources.length > 0 && !warnedRef.current) {
    const resolutions = sources.map((source) => source.resolution);
    if (resolutions.includes(fullHDQualityBreak) === false) {
      console.error(
        `ReactJSMediaPlayer: Invalid fullHDQualityBreak value "${fullHDQualityBreak}". Accepted resolutions are: ${resolutions.join(', ')}. Falling back to highest available.`,
      );
      warnedRef.current = true;
    }
  }

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      if (sources && sources.length > 0) {
        const sourcesIndexByResolution = indexBy(sources, 'resolution');
        if (autoVideoUrl === null && sourcesIndexByResolution) {
          try {
            const speed = await measureNetworkSpeedGeneratedFile();
            if (cancelled) return;
            const speeds = Object.keys(sourcesIndexByResolution).map(Number);
            const recommendedQuality = getRecommendedVideoQuality(speed || 0, speeds);

            if (speed !== null && recommendedQuality) {
              setAutoVideoUrl(sourcesIndexByResolution[recommendedQuality?.toString()]?.src ?? sources[0].src);
              updateStateRef.current((prev) => ({ ...prev, playbackQuality: recommendedQuality }));
            } else {
              const sourceQuality = sources[0].src;
              setAutoVideoUrl(sourceQuality);
              updateStateRef.current((prev) => ({ ...prev, playbackQuality: Number(sourceQuality) }));
            }
          } catch (error) {
            if (cancelled) return;
            // Fallback to first source on error
            const sourceQuality = sources[0].src;
            setAutoVideoUrl(sourceQuality);
            updateStateRef.current((prev) => ({ ...prev, playbackQuality: Number(sourceQuality) }));
          }
        }
      }
    })();
    return () => {
      cancelled = true;
    };
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

  // Build proxy object once — uses refs to always read latest callback/state
  const proxyMemorized = React.useMemo(
    () => ({
      onBuffer: (...args) => {
        if (callbacksRef.current.onBuffer) {
          callbacksRef.current.onBuffer(...args);
        }
      },
      onBufferEnd: (...args) => {
        if (callbacksRef.current.onBufferEnd) {
          callbacksRef.current.onBufferEnd(...args);
        }
      },
      onDisablePIP: (e) => {
        if (callbacksRef.current.onDisablePIP) {
          callbacksRef.current.onDisablePIP(e);
        }
        updateStateRef.current((prev) => ({ ...prev, isPIP: false }));
      },
      onDuration: (duration) => {
        if (callbacksRef.current.onDuration) {
          callbacksRef.current.onDuration(duration);
        }
        updateStateRef.current((prev) => ({ ...prev, duration: duration }));
      },
      onEnablePIP: (e) => {
        if (callbacksRef.current.onEnablePIP) {
          callbacksRef.current.onEnablePIP(e);
        }
        updateStateRef.current((prev) => ({ ...prev, isPIP: true }));
      },
      onEnded: (e) => {
        if (callbacksRef.current.onEnded) {
          callbacksRef.current.onEnded(e);
        }
        updateStateRef.current((prev) => ({ ...prev, isEnded: true }));
      },
      onError: (e, data, hls, HLS) => {
        if (callbacksRef.current.onError) {
          callbacksRef.current.onError(e, data, hls, HLS);
        }
        // Skip recoverable errors that hls.js handles internally
        const skipErrors = ['networkError'];
        const recoverableDetails = [
          'bufferStalledError',
          'bufferNudgeOnStall',
          'bufferAppendError',
          'fragParsingError',
        ];
        const isRecoverable =
          skipErrors.includes(data?.type) ||
          (data?.type === 'mediaError' && recoverableDetails.includes(data?.details));
        if (!isRecoverable) {
          updateStateRef.current((prev) => ({
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
        if (callbacksRef.current.onPause) {
          callbacksRef.current.onPause(e);
        }
        updateStateRef.current((prev) => ({ ...prev, playing: false }));
      },
      onPlay: (e) => {
        if (callbacksRef.current.onPlay) {
          callbacksRef.current.onPlay(e);
        }
        updateStateRef.current((prev) => ({
          ...prev,
          playing: true,
          isEnded: false,
          hasAudio: preventedRef.current ? true : (e?.hasAudio ?? false),
        }));
      },
      onPlayBackQualityChange: (quality) => {
        if (callbacksRef.current.onPlayBackQualityChange) {
          callbacksRef.current.onPlayBackQualityChange(quality);
        }
        updateStateRef.current((prev) => ({ ...prev, playbackQuality: quality }));
      },
      onPlayBackRateChange: (rate) => {
        if (callbacksRef.current.onPlayBackRateChange) {
          callbacksRef.current.onPlayBackRateChange(rate);
        }
        updateStateRef.current((prev) => ({ ...prev, playbackRate: rate }));
      },
      onProgress: (state) => {
        if (callbacksRef.current.onProgress) {
          callbacksRef.current.onProgress(state);
        }
        if (!seekingRef.current) {
          updateStateRef.current((prev) => ({ ...prev, played: state.playedSeconds, loaded: state.loaded }));
        }
      },
      onReady: (e) => {
        if (callbacksRef.current.onReady) {
          callbacksRef.current.onReady(e);
        }
        updateStateRef.current((prev) => ({ ...prev, isLoading: false }));
      },
      onSeek: (time) => {
        if (callbacksRef.current.onSeek) {
          callbacksRef.current.onSeek(time);
        }
        updateStateRef.current((prev) => ({ ...prev, seek: time }));
      },
      onStart: () => {
        if (callbacksRef.current.onStart) {
          callbacksRef.current.onStart();
        }
      },
      onLoaded: (...args) => {
        if (callbacksRef.current.onLoaded) {
          callbacksRef.current.onLoaded(...args);
        }
      },
      onMount: (...args) => {
        if (callbacksRef.current.onMount) {
          callbacksRef.current.onMount(...args);
        }
      },
    }),
    // Empty deps — stable forever, reads current values from refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    ...proxyMemorized,
    videoUrl: videoUrl ?? autoVideoUrl,
  };
};

export default usePlayerProxy;
