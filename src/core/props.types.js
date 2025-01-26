import PropTypes from 'prop-types';

const { string, bool, number, array, oneOfType, shape, object, func } = PropTypes;

export const propTypes = {
  url: string,
  fullHDQualityBreak: PropTypes.number,
  spriteVTTFile: PropTypes.string,
  playing: bool,
  loop: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  config: shape({
    attributes: object,
    tracks: array,
    forceVideo: bool,
    forceHLS: bool,
    forceSafariHLS: bool,
    forceDisableHls: bool,
    forceDASH: bool,
    forceFLV: bool,
    hlsOptions: object,
    hlsVersion: string,
    dashVersion: string,
    flvVersion: string,
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onPlayBackRateChange: func,
  onPlayBackQualityChange: func,
  onProgress: func,
  onEnablePIP: func,
  onDisablePIP: func,
};

const noop = () => {};

export const defaultProps = {
  playing: false,
  loop: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  config: {
    attributes: {},
    tracks: [],
    forceVideo: false,
    forceHLS: false,
    forceDASH: false,
    forceFLV: false,
    hlsOptions: {},
    hlsVersion: '1.5.7',
    dashVersion: '4.7.4',
    flvVersion: '1.6.2',
    forceDisableHls: false,
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onPlayBackRateChange: noop,
  onPlayBackQualityChange: noop,
  onProgress: noop,
  onEnablePIP: noop,
  onDisablePIP: noop,
};
