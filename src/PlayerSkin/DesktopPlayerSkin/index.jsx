import React from 'react';

import PreventedTip from './components/PreventedTip';
import PlayState from './components/PlayState';
import TopState from './components/TopState';

import {
  GlobalStyle,
  StyledBezelTextVolume,
  StyledBezelTextVolumeWrapper,
  StyledOverlayPoster,
  StyledPlayerSkin,
  StyledPoster,
} from './DesktopPlayerSkin.styled';
import { eventsKeyCodes, keyMappings } from './DesktopPlayerSkin.constants';
import Controls from './components/Controls';
import ControlBar from './components/ControlBar';
import TimeSlider from './components/TimeSlider';
import Volume from './components/Volume';
import PlayTime from './components/PlayTime';
import PlayButton from './components/Controls/components/PlayButton';
import FullscreenButton from './components/Controls/components/FullscreenButton';

import useAutoHide from '../../hooks/useAutoHide';
import SettingsButton from './components/Controls/components/SettingsButton';
import usePlayerSkinWrapped from '../../hooks/usePlayerSkinWrapped';
import useAppDispatch from '../../hooks/context/useAppDispatch';
import ContextMenu from './components/ContextMenu';

const DesktopPlayerSkin = React.forwardRef(
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

    const [showBezel, setShowBezel] = React.useState(false);
    const timerRef = React.useRef();
    const contextMenuRef = React.useRef(null);

    const { showControls, hideControls } = useAutoHide({
      hasResource,
      loading,
      prevented,
      paused,
      ended,
      waiting,
      seeking,
      kernelMsg,
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

    React.useEffect(() => {
      if (playerRef.current) {
        const playerElement = playerRef.current;
        const handleKeyDown = (e) => {
          const keyMapping = eventsKeyCodes[e.which || e.keyCode] || keyMappings[e.key];
          clearTimeout(timerRef.current);
          if (keyMapping === 'ARROW_UP_KEY' || keyMapping === 'ARROW_DOWN_KEY') {
            setShowBezel(true);
            timerRef.current = setTimeout(() => setShowBezel(false), 2000);
          } else {
            setShowBezel(false);
          }
        };
        playerElement.addEventListener('keydown', handleKeyDown);

        return () => {
          clearTimeout(timerRef.current);
          playerElement.removeEventListener('keydown', handleKeyDown);
        };
      }
    }, [muted, volume, playerRef]);

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

    return (
      <StyledPlayerSkin
        onContextMenu={handleContextMenu}
        onMouseLeave={hideControls}
        onMouseMove={showControls}
        onTouchStart={showControls}
        onMouseEnter={showControls}
        onClick={showControls}
      >
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
        <StyledBezelTextVolumeWrapper>
          <StyledBezelTextVolume
            style={{
              display: showBezel ? 'inline-block' : 'none',
            }}
          >
            {Math.round(volume * 100)}%
          </StyledBezelTextVolume>
        </StyledBezelTextVolumeWrapper>
        <ContextMenu
          ref={contextMenuRef}
          fullscreen={fullscreen}
          position={contextMenuPosition}
          menuItems={contextMenuItems}
        />
        <PlayState
          hasResource={hasResource}
          loading={loading}
          paused={paused}
          ended={ended}
          waiting={waiting}
          seeking={seeking}
          kernelMsg={kernelMsg}
          onClick={onTogglePlay}
        />
        <Controls>
          {false === live && (
            <TimeSlider
              spriteVTTFile={spriteVTTFile}
              currentTime={currentTime}
              duration={duration}
              buffered={buffered}
              onChange={changeCurrentTime}
              onSeeking={onSeeking}
              fullscreen={fullscreen}
            />
          )}
          <ControlBar
            extra={
              <>
                <SettingsButton
                  live={live}
                  qualities={qualities}
                  playbackRate={playbackRate}
                  fullscreen={fullscreen}
                  fullHDQualityBreak={fullHDQualityBreak}
                  changeSettings={handleChangeSettings}
                />
                <FullscreenButton
                  fullscreen={fullscreen}
                  requestFullscreen={requestFullscreen}
                  exitFullscreen={exitFullscreen}
                />
              </>
            }
            fullscreen={fullscreen}
          >
            <PlayButton
              fullscreen={fullscreen}
              paused={paused}
              ended={ended}
              onPauseClick={onPauseClick}
              onPlayClick={onPlayClick}
            />
            <Volume
              fullscreen={fullscreen}
              isMuted={muted}
              forceMuted={!hasAudio}
              volume={volume}
              onMutedClick={onMutedClick}
              changeVolume={changeVolume}
            />
            <PlayTime live={live} currentTime={currentTime} duration={duration} />
          </ControlBar>
        </Controls>
        <TopState hasResource={hasResource} loading={loading} kernelMsg={kernelMsg} />
      </StyledPlayerSkin>
    );
  },
);

DesktopPlayerSkin.displayName = 'DesktopPlayerSkin';

export default DesktopPlayerSkin;
