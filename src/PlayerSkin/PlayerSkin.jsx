import React from 'react';
import PropTypes from 'prop-types';

import DesktopPlayerSkin from './DesktopPlayerSkin';
import MobilePlayerSkin from './MobilePlayerSkin';
import { isMobile } from '../utils/device';

const PlayerSkin = React.forwardRef((props, ref) => {
  const { forceMobile, ...rest } = props;
  const useMobileSkin = forceMobile ?? isMobile;

  if (useMobileSkin) {
    return <MobilePlayerSkin ref={ref} {...rest} />;
  }

  return <DesktopPlayerSkin ref={ref} {...rest} />;
});

PlayerSkin.displayName = 'PlayerSkin';

PlayerSkin.propTypes = {
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
  duration: PropTypes.number.isRequired,
  buffered: PropTypes.number.isRequired || null,
  currentTime: PropTypes.number.isRequired,
  changeCurrentTime: PropTypes.func.isRequired,
  muted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  changeVolume: PropTypes.func.isRequired,
  onMutedClick: PropTypes.func.isRequired,
  changePlaybackRate: PropTypes.func.isRequired,
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
  forceMobile: PropTypes.bool,
};

export default React.memo(
  PlayerSkin,
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
    p.forceMobile === n.forceMobile &&
    p.onPauseClick === n.onPauseClick &&
    p.onPlayClick === n.onPlayClick &&
    p.onTogglePlay === n.onTogglePlay &&
    p.changeCurrentTime === n.changeCurrentTime &&
    p.onMutedClick === n.onMutedClick &&
    p.changeVolume === n.changeVolume &&
    p.changePlaybackRate === n.changePlaybackRate &&
    p.requestPictureInPicture === n.requestPictureInPicture &&
    p.exitPictureInPicture === n.exitPictureInPicture &&
    p.requestFullscreen === n.requestFullscreen &&
    p.exitFullscreen === n.exitFullscreen &&
    p.onSeeking === n.onSeeking &&
    p.onLoopClick === n.onLoopClick &&
    p.onPreventedClick === n.onPreventedClick,
);
