import React from 'react';

import useVolume from './useVolume';
import useFullscreen from './useFullscreen';
import { buildSettingsLabel } from '../PlayerSkin/Controls/components/SettingsButton/DropdownOverlay.constants';
import useAppSelector from './context/useAppSelector';
import { eventsKeyCodes, keyMappings } from '../PlayerSkin/PlayerSkin.constants';

const usePlayerSkinWrapper = ({
  ref,
  playerRef,
  url,
  player,
  fullHDQualityBreak,
  sources,
  prevented,
  muted,
  updateState,
}) => {
  const { i18n } = useAppSelector();
  const videoRef = React.useRef(null);
  const playerSkinRef = React.useRef(null);
  const { requestFullscreen, exitFullscreen, requestToggleFullscreen } = useFullscreen({
    updateState: ({ fullscreen }) => {
      updateState((prev) => ({
        ...prev,
        isFullScreen: fullscreen,
      }));
    },
    videoRef,
    playerRef,
  });

  const qualities = React.useMemo(() => {
    if (sources.length > 0) {
      return sources.map((source) => ({
        label: buildSettingsLabel({
          label: 'quality',
          value: source.resolution.toString(),
          i18n: i18n,
        }),
        value: source.resolution.toString(),
        isFullHD: fullHDQualityBreak !== undefined && source.resolution >= fullHDQualityBreak,
      }));
    }
    return [];
  }, [sources, fullHDQualityBreak, i18n]);

  const { onMutedClick, changeVolume, updateVolumeWithCallback } = useVolume({
    prevented,
    muted,
    videoRef,
    src: url,
    updateState: ({ muted, volume }) =>
      updateState((prev) => ({
        ...prev,
        isMuted: muted ?? false,
        volume: volume ?? 0,
      })),
  });

  const changeCurrentTime = React.useCallback(
    (time) => {
      if (!player) {
        return;
      }

      updateState((prev) => ({ ...prev, played: time }));
      player.seekTo(time);
    },
    [player],
  );

  const updateCurrentTimeWithCallback = React.useCallback(
    (callback) => {
      if (!player) {
        return;
      }
      const currenTime = player.getCurrentTime() || 0;
      const duration = player.getDuration() || 0;
      const newCurrentTime = callback(currenTime, duration);
      changeCurrentTime(newCurrentTime);
    },
    [player],
  );

  const memorizedProps = React.useMemo(() => {
    return {
      onPlayClick: () => player && updateState((prev) => ({ ...prev, playing: true })),
      onPauseClick: () => player && updateState((prev) => ({ ...prev, playing: false })),
      onTogglePlay: () =>
        player &&
        updateState((prev) => ({
          ...prev,
          playing: !prev.playing,
        })),
      changePlaybackRate: (rate) => player && updateState((prev) => ({ ...prev, playbackRate: rate })),
      changePlayBackQuality: (quality) => {
        if (player) {
          updateState((prev) => ({ ...prev, playbackQuality: quality }));
        }
      },
      requestPictureInPicture: () => player && updateState((prev) => ({ ...prev, isPIP: true })),
      exitPictureInPicture: () => player && updateState((prev) => ({ ...prev, isPIP: false })),
      onSeeking: (seeking) => player && updateState((prev) => ({ ...prev, seeking: seeking })),
      onMutedClick: () => player && onMutedClick(),
      onLoopClick: () => player && updateState((prev) => ({ ...prev, loop: !prev.loop })),
      onPreventedClick: () => updateState((prev) => ({ ...prev, isMuted: false, volume: 1 })),
      changeCurrentTime,
    };
  }, [player]);

  const handleKeyDown = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const keyMapping = eventsKeyCodes[e.which || e.keyCode] || keyMappings[e.key];
      if (!player) {
        return;
      }

      playerSkinRef.current?.showControls();

      switch (keyMapping) {
        case 'SPACE_KEY': {
          updateState((prev) => ({ ...prev, playing: !prev.playing }));
          break;
        }
        case 'F_KEY': {
          requestToggleFullscreen();
          break;
        }
        case 'MUTE_KEY': {
          onMutedClick();
          break;
        }
        case 'ARROW_LEFT_KEY': {
          updateCurrentTimeWithCallback((currentTime) => {
            const newTime = currentTime - 5;
            return newTime < 0 ? 0 : newTime;
          });
          break;
        }
        case 'ARROW_RIGHT_KEY': {
          updateCurrentTimeWithCallback((currentTime, duration) => {
            const newTime = currentTime + 5;
            return newTime >= duration ? duration : newTime;
          });
          break;
        }
        case 'ARROW_UP_KEY': {
          updateVolumeWithCallback((lastVolume) => {
            const newVolume = lastVolume + 0.1;
            return newVolume >= 1 ? 1 : newVolume;
          });
          break;
        }
        case 'ARROW_DOWN_KEY': {
          updateVolumeWithCallback((lastVolume) => {
            const newVolume = lastVolume - 0.1;
            return newVolume < 0 ? 0 : newVolume;
          });
          break;
        }
        default: {
          break;
        }
      }
    },
    [player],
  );

  React.useImperativeHandle(ref, () => ({
    handleKeyDown,
  }));

  React.useEffect(() => {
    videoRef.current = player?.getPlayer() ?? null;
  }, [player?.getPlayer]);

  return {
    playerSkinRef,
    videoRef,
    qualities,
    memorizedProps,
    handleKeyDown,
    requestFullscreen,
    exitFullscreen,
    changeVolume,
  };
};

export default usePlayerSkinWrapper;
