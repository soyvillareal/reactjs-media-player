import React from 'react';
import PropTypes from 'prop-types';

import { StyledMobilePlayerSkin, StyledOverlay } from './MobilePlayerSkin.styled';
import { GlobalStyle, StyledOverlayPoster, StyledPoster } from '../Commons/SharedStyles';

import MobileTopBar from './components/MobileTopBar';
import MobileCenterControls from './components/MobileCenterControls';
import MobileBottomBar from './components/MobileBottomBar';
import SkipOverlay from './components/SkipOverlay';
import MobileSettingsPanel from './components/MobileSettingsPanel';
import ContextMenu from '../Commons/ContextMenu';
import TopState from '../Commons/TopState';
import PreventedTip from '../Commons/PreventedTip';

import useMobileAutoHide from '../../hooks/useMobileAutoHide';
import useDoubleTapSkip from '../../hooks/useDoubleTapSkip';
import usePlayerSkinWrapped from '../../hooks/usePlayerSkinWrapped';
import useAppDispatch from '../../hooks/context/useAppDispatch';
import useAppSelector from '../../hooks/context/useAppSelector';

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

    const handleOpenSettings = React.useCallback((e) => {
      e.stopPropagation();
      setSettingsPanelVisible(true);
    }, []);

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
        <MobileTopBar
          visible={controlsVisible && !settingsPanelVisible}
          onOpenSettings={handleOpenSettings}
          settingsLabel={i18n.settings || 'Settings'}
        />

        {/* Mobile settings panel (fullscreen overlay) */}
        <MobileSettingsPanel
          visible={settingsPanelVisible}
          qualities={qualities}
          playbackRate={playbackRate}
          onChangeSettings={handleChangeSettings}
          onClose={handleCloseSettings}
        />

        {/* Center controls: Prev | Play/Pause | Next */}
        <MobileCenterControls
          visible={controlsVisible && !settingsPanelVisible}
          isLoading={isLoading}
          paused={paused}
          ended={ended}
          onPlayPause={handlePlayPauseClick}
          i18n={i18n}
        />

        {/* Bottom bar: Time | Progress | Fullscreen — all in one row */}
        <MobileBottomBar
          visible={controlsVisible && !settingsPanelVisible}
          live={live}
          currentTime={currentTime}
          duration={duration}
          buffered={buffered}
          fullscreen={fullscreen}
          i18n={i18n}
          onChangeCurrentTime={changeCurrentTime}
          onSeeking={onSeeking}
          onRequestFullscreen={requestFullscreen}
          onExitFullscreen={exitFullscreen}
        />

        {/* Mobile renders its own loading spinner in the center play button,
            so TopState only handles kernel/error messages here. */}
        <TopState hasResource={hasResource} kernelMsg={kernelMsg} />
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
