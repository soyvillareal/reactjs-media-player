import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobilePlayerSkin,
  StyledOverlay,
  StyledMobileTopBar,
  StyledMobileCenterControls,
  StyledMobileBottomBar,
  StyledMobileTimeRail,
  StyledMobilePlayButton,
  StyledMobileNavButton,
  StyledMobileSettingsButton,
  StyledMobileFullscreenButton,
  StyledMobileTime,
  StyledMobileSpinner,
  StyledMobileProgressContainer,
  StyledMobileProgressTrack,
  StyledMobileProgressBuffered,
  StyledMobileProgressFilled,
  StyledMobileProgressHandle,
} from './MobilePlayerSkin.styled';

import { GlobalStyle, StyledOverlayPoster, StyledPoster } from '../PlayerSkin.styled';
import SkipOverlay from './SkipOverlay';
import ContextMenu from '../ContextMenu';
import TopState from '../TopState';
import PreventedTip from '../PreventedTip';
import MobileSettingsPanel from './MobileSettingsPanel';

import useMobileAutoHide from '../../hooks/useMobileAutoHide';
import useDoubleTapSkip from '../../hooks/useDoubleTapSkip';
import usePlayerSkinWrapped from '../../hooks/usePlayerSkinWrapped';
import useAppDispatch from '../../hooks/context/useAppDispatch';
import useAppSelector from '../../hooks/context/useAppSelector';

import { formatTime } from '../../utils';

const PlayIcon = () => (
  <svg viewBox="0 0 56 56" preserveAspectRatio="xMidYMid meet" fill="none" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M 41.543 28.638 L 15.115 43.848 C 14.81 44.028 14.548 44.048 14.329 43.91 C 14.11 43.772 14 43.526 14 43.168 L 14 12.832 C 14 12.474 14.11 12.226 14.329 12.09 C 14.548 11.952 14.81 11.972 15.115 12.152 L 41.543 27.36 C 41.848 27.54 42 27.752 42 28 C 42 28.248 41.848 28.46 41.543 28.638 Z"
    />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 56 56" preserveAspectRatio="xMidYMid meet" fill="none" width="100%" height="100%">
    <rect fill="currentColor" x="12" y="12" width="8" height="32" />
    <rect fill="currentColor" x="36" y="12" width="8" height="32" />
  </svg>
);

const PrevIcon = () => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M 25.184 9.17 C 25.377 9.021 25.542 8.97 25.676 9.017 C 25.809 9.063 25.875 9.189 25.875 9.392 L 25.875 26.608 C 25.875 26.811 25.809 26.937 25.676 26.983 C 25.542 27.03 25.377 26.979 25.184 26.83 L 14.262 18.526 C 14.17 18.456 14.103 18.382 14.063 18.304 L 14.063 26.235 C 14.063 26.437 13.965 26.613 13.77 26.761 C 13.575 26.908 13.344 26.983 13.078 26.983 L 11.109 26.983 C 10.843 26.983 10.612 26.908 10.418 26.761 C 10.223 26.613 10.125 26.437 10.125 26.235 L 10.125 9.765 C 10.125 9.563 10.223 9.387 10.418 9.239 C 10.612 9.092 10.843 9.017 11.109 9.017 L 13.078 9.017 C 13.344 9.017 13.575 9.092 13.77 9.239 C 13.965 9.387 14.063 9.563 14.063 9.765 L 14.063 17.695 C 14.103 17.617 14.17 17.544 14.262 17.473 Z"
    />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M 10.816 9.17 C 10.623 9.021 10.458 8.97 10.324 9.017 C 10.191 9.063 10.125 9.189 10.125 9.392 L 10.125 26.608 C 10.125 26.811 10.191 26.937 10.324 26.983 C 10.458 27.03 10.623 26.979 10.816 26.83 L 21.738 18.526 C 21.83 18.456 21.897 18.382 21.937 18.304 L 21.937 26.235 C 21.937 26.437 22.035 26.613 22.23 26.761 C 22.425 26.908 22.656 26.983 22.922 26.983 L 24.891 26.983 C 25.157 26.983 25.388 26.908 25.582 26.761 C 25.777 26.613 25.875 26.437 25.875 26.235 L 25.875 9.765 C 25.875 9.563 25.777 9.387 25.582 9.239 C 25.388 9.092 25.157 9.017 24.891 9.017 L 22.922 9.017 C 22.656 9.017 22.425 9.092 22.23 9.239 C 22.035 9.387 21.937 9.563 21.937 9.765 L 21.937 17.695 C 21.897 17.617 21.83 17.544 21.738 17.473 Z"
    />
  </svg>
);

const FullscreenIcon = () => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M 10 16 L 10 10.5 C 10 10.224 10.224 10 10.5 10 L 16 10 L 16 12 L 12 12 L 12 16 Z M 26 16 L 26 12 L 22 12 L 22 10 L 26.5 10 C 26.776 10 27 10.224 27 10.5 L 27 16 Z M 26 20 L 27 20 L 27 25.5 C 27 25.776 26.776 26 26.5 26 L 22 26 L 22 24 L 26 24 Z M 10 20 L 10 25.5 C 10 25.776 10.224 26 10.5 26 L 16 26 L 16 24 L 12 24 L 12 20 Z"
    />
  </svg>
);

const ExitFullscreenIcon = () => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path
      fill="currentColor"
      d="M 14 14 L 14 10 L 12 10 L 12 14.5 C 12 14.776 12.224 15 12.5 15 L 17 15 L 17 13 L 14 13 Z M 22 14 L 22 10 L 24 10 L 24 14.5 C 24 14.776 23.776 15 23.5 15 L 19 15 L 19 13 L 22 13 Z M 22 22 L 22 26 L 24 26 L 24 21.5 C 24 21.224 23.776 21 23.5 21 L 19 21 L 19 23 L 22 23 Z M 14 22 L 14 26 L 12 26 L 12 21.5 C 12 21.224 12.224 21 12.5 21 L 17 21 L 17 23 L 14 23 Z"
    />
  </svg>
);

const MobileProgressBar = ({ currentTime, duration, buffered, onChange, onSeeking }) => {
  const containerRef = React.useRef(null);
  const isDragging = React.useRef(false);

  const progress = duration > 0 ? currentTime / duration : 0;
  const bufferedProgress = buffered || 0;

  const handleInteraction = React.useCallback(
    (clientX) => {
      if (!containerRef.current || !duration) return;
      const rect = containerRef.current.getBoundingClientRect();
      const fraction = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const newTime = fraction * duration;
      onChange(newTime);
    },
    [duration, onChange],
  );

  const handleMouseDown = React.useCallback(
    (e) => {
      isDragging.current = true;
      if (onSeeking) onSeeking(true);
      handleInteraction(e.clientX);

      const handleMouseMove = (ev) => {
        if (isDragging.current) {
          handleInteraction(ev.clientX);
        }
      };
      const handleMouseUp = () => {
        isDragging.current = false;
        if (onSeeking) onSeeking(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [handleInteraction, onSeeking],
  );

  const handleTouchStart = React.useCallback(
    (e) => {
      isDragging.current = true;
      if (onSeeking) onSeeking(true);
      const touch = e.touches[0];
      handleInteraction(touch.clientX);

      const handleTouchMove = (ev) => {
        if (isDragging.current && ev.touches[0]) {
          handleInteraction(ev.touches[0].clientX);
        }
      };
      const handleTouchEnd = () => {
        isDragging.current = false;
        if (onSeeking) onSeeking(false);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    },
    [handleInteraction, onSeeking],
  );

  return (
    <StyledMobileProgressContainer
      ref={containerRef}
      role="slider"
      aria-label="Barra de tiempo"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(currentTime)}
      aria-valuetext={formatTime(Math.round(currentTime))}
      tabIndex={0}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <StyledMobileProgressTrack />
      <StyledMobileProgressBuffered style={{ width: `${bufferedProgress * 100}%` }} />
      <StyledMobileProgressFilled style={{ width: `${progress * 100}%` }} />
      <StyledMobileProgressHandle style={{ left: `${progress * 100}%` }} />
    </StyledMobileProgressContainer>
  );
};

const MobilePlayerSkin = React.forwardRef(
  (
    {
      videoRef,
      playerRef,
      live = false,
      hasResource = false,
      hasAudio,
      prevented,
      loading,
      paused,
      ended,
      seeking,
      waiting,
      duration,
      buffered = null,
      currentTime,
      muted,
      volume,
      pictureInPictureEnabled,
      pip,
      fullscreen,
      qualities,
      spriteVTTFile,
      fullHDQualityBreak,
      playbackRate,
      loop,
      poster,
      onPlayClick,
      onPauseClick,
      onTogglePlay,
      changePlaybackRate,
      changePlayBackQuality,
      changeVolume,
      onMutedClick,
      changeCurrentTime,
      requestPictureInPicture,
      exitPictureInPicture,
      requestFullscreen,
      exitFullscreen,
      onSeeking,
      onLoopClick,
      onPreventedClick,
      kernelMsg = null,
    },
    ref,
  ) => {
    const dispatch = useAppDispatch();
    const { i18n } = useAppSelector();
    const contextMenuRef = React.useRef(null);

    const { controlsVisible, toggleControls, showControls, hideControls } = useMobileAutoHide({
      hasResource,
      loading,
      prevented,
      paused,
      ended,
      waiting,
      seeking,
    });

    const { skipState, handleTapLeft, handleTapRight } = useDoubleTapSkip({
      currentTime,
      duration,
      changeCurrentTime,
      showControls,
    });

    const { contextMenuItems, contextMenuPosition, handleContextMenu } = usePlayerSkinWrapped({
      fullscreen,
      contextMenuRef,
      pip,
      loop,
      pictureInPictureEnabled,
      requestPictureInPicture,
      exitPictureInPicture,
      onLoopClick,
    });

    React.useEffect(() => {
      dispatch({
        videoRef,
        playerRef,
      });
    }, [videoRef, playerRef, dispatch]);

    React.useImperativeHandle(
      ref,
      () => ({
        showControls,
        hideControls,
      }),
      [showControls, hideControls],
    );

    const handleChangeSettings = React.useCallback(
      ({ quality, speed }) => {
        if (speed) {
          changePlaybackRate(Number(speed.value ?? 1));
        }
        if (quality) {
          changePlayBackQuality(Number(quality.value) ?? 0);
        }
      },
      [changePlaybackRate, changePlayBackQuality],
    );

    const [settingsPanelVisible, setSettingsPanelVisible] = React.useState(false);

    const handleOpenSettings = React.useCallback(
      (e) => {
        e.stopPropagation();
        setSettingsPanelVisible(true);
      },
      [],
    );

    const handleCloseSettings = React.useCallback(() => {
      setSettingsPanelVisible(false);
    }, []);

    const handlePlayPauseClick = React.useCallback(() => {
      if (paused || ended) {
        onPlayClick();
      } else {
        onPauseClick();
      }
    }, [paused, ended, onPlayClick, onPauseClick]);

    const isLoading = (waiting || seeking || loading) && !paused && !ended;

    return (
      <StyledMobilePlayerSkin onContextMenu={handleContextMenu} onClick={toggleControls}>
        <GlobalStyle />

        <PreventedTip
          hasResource={hasResource}
          prevented={prevented}
          paused={paused}
          muted={muted}
          currentTime={currentTime}
          onClick={onPreventedClick}
        />

        {poster && (
          <StyledOverlayPoster
            style={{
              opacity: currentTime <= 0 || ended ? 1 : 0,
            }}
          >
            <StyledPoster
              style={{
                backgroundImage: `url(${poster})`,
              }}
            />
          </StyledOverlayPoster>
        )}

        <ContextMenu
          ref={contextMenuRef}
          fullscreen={fullscreen}
          position={contextMenuPosition}
          menuItems={contextMenuItems}
        />

        {/* Dark overlay when controls visible */}
        <StyledOverlay visible={controlsVisible && hasResource && !ended && !prevented} />

        {/* Double-tap skip areas */}
        <SkipOverlay skipState={skipState} onTapLeft={handleTapLeft} onTapRight={handleTapRight} i18n={i18n} />

        {/* Settings button — top right */}
        <StyledMobileTopBar visible={controlsVisible && !settingsPanelVisible}>
          <StyledMobileSettingsButton onClick={handleOpenSettings} aria-label={i18n.settings || 'Settings'}>
            <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <path
                fill="currentColor"
                d="M 27.452 17.699 C 27.408 16.709 27.211 15.734 26.866 14.806 L 28.396 13.381 C 28.685 13.102 28.753 12.663 28.561 12.31 C 27.951 11.182 27.166 10.156 26.237 9.27 C 25.954 8.996 25.522 8.948 25.187 9.154 L 23.379 10.28 C 22.566 9.715 21.667 9.282 20.72 8.996 L 20.534 6.903 C 20.504 6.5 20.195 6.173 19.794 6.12 C 19.237 6.039 18.673 5.999 18.11 6 C 17.391 5.997 16.675 6.061 15.969 6.188 C 15.587 6.249 15.293 6.558 15.253 6.941 L 15.029 9.081 C 14.156 9.378 13.331 9.798 12.579 10.333 L 10.819 9.197 C 10.483 8.981 10.043 9.025 9.757 9.304 C 8.811 10.21 8.016 11.262 7.405 12.422 C 7.218 12.768 7.281 13.198 7.563 13.475 L 9.105 14.96 C 8.821 15.752 8.641 16.578 8.573 17.418 L 6.586 18.115 C 6.207 18.24 5.966 18.613 6.004 19.009 C 6.091 20.334 6.394 21.637 6.903 22.862 C 7.048 23.232 7.431 23.454 7.824 23.398 L 9.907 23.098 C 10.312 23.783 10.803 24.414 11.367 24.977 L 10.631 27.005 C 10.496 27.377 10.624 27.79 10.943 28.021 C 12.006 28.799 13.192 29.398 14.451 29.793 C 14.833 29.917 15.251 29.758 15.454 29.413 L 16.53 27.61 C 16.993 27.687 17.463 27.73 17.933 27.738 C 18.287 27.74 18.641 27.723 18.993 27.682 L 20.067 29.544 C 20.254 29.895 20.655 30.072 21.041 29.972 C 22.305 29.638 23.505 29.094 24.591 28.367 C 24.927 28.146 25.07 27.724 24.937 27.344 L 24.249 25.349 C 24.931 24.743 25.525 24.043 26.009 23.269 L 28.091 23.603 C 28.483 23.667 28.868 23.452 29.021 23.084 C 29.543 21.894 29.871 20.629 29.993 19.335 C 30.046 18.931 29.807 18.547 29.423 18.414 Z M 27.689 21.779 L 25.161 21.376 L 24.556 22.344 C 24.161 22.981 23.677 23.557 23.118 24.056 L 22.261 24.831 L 23.118 27.263 C 22.523 27.611 21.894 27.898 21.241 28.119 L 19.957 25.867 L 18.855 25.979 C 18.571 26.012 18.284 26.027 17.999 26.026 C 17.611 26.017 17.224 25.982 16.842 25.919 L 15.651 25.693 L 14.341 27.917 C 13.685 27.671 13.059 27.356 12.472 26.976 L 13.368 24.531 L 12.575 23.749 C 12.116 23.283 11.715 22.765 11.38 22.203 L 10.794 21.217 L 8.261 21.581 C 8.035 20.918 7.875 20.232 7.781 19.536 L 10.211 18.68 L 10.288 17.558 C 10.34 16.872 10.486 16.198 10.717 15.551 L 11.088 14.488 L 9.23 12.695 C 9.587 12.11 10.002 11.56 10.467 11.056 L 12.61 12.442 L 13.547 11.77 C 14.163 11.336 14.838 10.991 15.552 10.747 L 16.602 10.396 L 16.872 7.803 C 17.278 7.748 17.687 7.719 18.096 7.712 C 18.358 7.712 18.619 7.712 18.886 7.751 L 19.113 10.319 L 20.23 10.657 C 21.005 10.891 21.74 11.245 22.406 11.707 L 23.327 12.349 L 25.512 10.987 C 25.964 11.476 26.369 12.005 26.721 12.571 L 24.853 14.326 L 25.281 15.417 C 25.56 16.176 25.723 16.973 25.761 17.78 L 25.813 18.94 L 28.219 19.819 C 28.109 20.488 27.93 21.144 27.689 21.779 Z M 17.972 22.267 C 14.675 22.267 12.614 18.699 14.262 15.845 C 15.912 12.992 20.034 12.992 21.683 15.845 C 22.065 16.507 22.263 17.257 22.257 18.02 C 22.252 20.377 20.331 22.282 17.972 22.267 Z M 18.028 15.417 C 16.05 15.395 14.788 17.52 15.758 19.244 C 16.727 20.968 19.2 20.998 20.209 19.296 C 20.444 18.901 20.568 18.447 20.568 17.987 C 20.568 16.579 19.436 15.433 18.028 15.417 Z"
              />
            </svg>
          </StyledMobileSettingsButton>
        </StyledMobileTopBar>

        {/* Mobile settings panel (fullscreen overlay) */}
        <MobileSettingsPanel
          visible={settingsPanelVisible}
          qualities={qualities}
          playbackRate={playbackRate}
          onChangeSettings={handleChangeSettings}
          onClose={handleCloseSettings}
        />

        {/* Center controls: Prev | Play/Pause | Next */}
        <StyledMobileCenterControls visible={controlsVisible && !settingsPanelVisible}>
          <StyledMobileNavButton
            aria-label={i18n.previous || 'Previous'}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <PrevIcon />
          </StyledMobileNavButton>

          {isLoading ? (
            <StyledMobileSpinner onClick={(e) => e.stopPropagation()}>
              <div />
            </StyledMobileSpinner>
          ) : (
            <StyledMobilePlayButton
              aria-label={paused ? i18n.play : i18n.pause}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPauseClick();
              }}
            >
              {paused || ended ? <PlayIcon /> : <PauseIcon />}
            </StyledMobilePlayButton>
          )}

          <StyledMobileNavButton
            aria-label={i18n.next || 'Next'}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <NextIcon />
          </StyledMobileNavButton>
        </StyledMobileCenterControls>

        {/* Bottom bar: Time | Progress | Fullscreen — all in one row */}
        <StyledMobileBottomBar visible={controlsVisible && !settingsPanelVisible} onClick={(e) => e.stopPropagation()}>
          {false === live && (
            <>
              <StyledMobileTime>
                {formatTime(Math.round(currentTime))} / {formatTime(Math.round(duration))}
              </StyledMobileTime>
              <StyledMobileTimeRail>
                <MobileProgressBar
                  currentTime={currentTime}
                  duration={duration}
                  buffered={buffered}
                  onChange={changeCurrentTime}
                  onSeeking={onSeeking}
                />
              </StyledMobileTimeRail>
            </>
          )}
          <StyledMobileFullscreenButton
            aria-label={fullscreen ? i18n.exitFullscreen : i18n.fullscreen}
            onClick={fullscreen ? exitFullscreen : requestFullscreen}
          >
            {fullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
          </StyledMobileFullscreenButton>
        </StyledMobileBottomBar>

        <TopState hasResource={hasResource} loading={loading} kernelMsg={kernelMsg} />
      </StyledMobilePlayerSkin>
    );
  },
);

MobilePlayerSkin.displayName = 'MobilePlayerSkin';

MobilePlayerSkin.propTypes = {
  spriteVTTFile: PropTypes.string,
  videoRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(HTMLVideoElement) })])
    .isRequired,
  playerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement) })])
    .isRequired,
  prevented: PropTypes.bool,
  waiting: PropTypes.bool,
  live: PropTypes.bool.isRequired,
  hasResource: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  ended: PropTypes.bool.isRequired,
  seeking: PropTypes.bool.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  buffered: PropTypes.number.isRequired || null,
  currentTime: PropTypes.number.isRequired,
  changeCurrentTime: PropTypes.func.isRequired,
  muted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  changeVolume: PropTypes.func.isRequired,
  onMutedClick: PropTypes.func.isRequired,
  changePlaybackRate: PropTypes.func.isRequired,
  changePlayBackQuality: PropTypes.func.isRequired,
  pictureInPictureEnabled: PropTypes.bool.isRequired,
  pip: PropTypes.bool.isRequired,
  requestPictureInPicture: PropTypes.func.isRequired,
  exitPictureInPicture: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  qualities: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      isFullHD: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  playbackRate: PropTypes.number.isRequired,
  loop: PropTypes.bool.isRequired,
  requestFullscreen: PropTypes.func.isRequired,
  exitFullscreen: PropTypes.func.isRequired,
  onLoopClick: PropTypes.func.isRequired,
  onPreventedClick: PropTypes.func.isRequired,
  kernelMsg: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    }),
    PropTypes.oneOf([undefined]),
  ]),
  fullHDQualityBreak: PropTypes.number,
  poster: PropTypes.string.isRequired,
  hasAudio: PropTypes.bool,
};

export default React.memo(
  MobilePlayerSkin,
  (p, n) =>
    p.spriteVTTFile === n.spriteVTTFile &&
    p.videoRef === n.videoRef &&
    p.playerRef === n.playerRef &&
    p.live === n.live &&
    p.hasResource === n.hasResource &&
    p.hasAudio === n.hasAudio &&
    p.loading === n.loading &&
    p.prevented === n.prevented &&
    p.paused === n.paused &&
    p.ended === n.ended &&
    p.seeking === n.seeking &&
    p.waiting === n.waiting &&
    p.duration === n.duration &&
    p.currentTime === n.currentTime &&
    p.buffered === n.buffered &&
    p.muted === n.muted &&
    p.volume === n.volume &&
    p.pictureInPictureEnabled === n.pictureInPictureEnabled &&
    p.pip === n.pip &&
    p.fullscreen === n.fullscreen &&
    p.qualities === n.qualities &&
    p.playbackRate === n.playbackRate &&
    p.loop === n.loop &&
    p.kernelMsg === n.kernelMsg &&
    p.fullHDQualityBreak === n.fullHDQualityBreak &&
    p.poster === n.poster &&
    p.onPauseClick === n.onPauseClick &&
    p.onPlayClick === n.onPlayClick &&
    p.onTogglePlay === n.onTogglePlay &&
    p.changeCurrentTime === n.changeCurrentTime &&
    p.onMutedClick === n.onMutedClick &&
    p.changeVolume === n.changeVolume &&
    p.changePlaybackRate === n.changePlaybackRate &&
    p.changePlayBackQuality === n.changePlayBackQuality &&
    p.requestPictureInPicture === n.requestPictureInPicture &&
    p.exitPictureInPicture === n.exitPictureInPicture &&
    p.requestFullscreen === n.requestFullscreen &&
    p.exitFullscreen === n.exitFullscreen &&
    p.onSeeking === n.onSeeking &&
    p.onLoopClick === n.onLoopClick &&
    p.onPreventedClick === n.onPreventedClick,
);
