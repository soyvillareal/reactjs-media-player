import PropTypes, { node } from 'prop-types';
import i18n from '../i18n';

const { string, bool, number, array, oneOfType, shape, object, func } = PropTypes;

const availableLanguages = Object.keys(i18n);

export const propTypes = {
  url: string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      resolution: PropTypes.number.isRequired,
    }).isRequired,
  ),
  fullHDQualityBreak: PropTypes.number,
  spriteVTTFile: PropTypes.string,
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  progressInterval: number,
  playsinline: bool,
  language: PropTypes.oneOf(availableLanguages),
  poster: string,
  pip: bool,
  stopOnUnmount: bool,
  fallback: node,
  waiting: bool,
  prevented: bool,
  wrapper: oneOfType([string, func, shape({ render: func.isRequired })]),
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
  url: '',
  sources: [],
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  fallback: null,
  waiting: false,
  prevented: false,
  wrapper: 'div',
  language: availableLanguages[0],
  poster: '',
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
