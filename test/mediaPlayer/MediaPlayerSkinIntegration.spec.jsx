import React from 'react';
import { render } from '@testing-library/react';
import MediaPlayerSkin from '../../src/MediaPlayer/components/MediaPlayerSkin/index';

jest.mock('../../src/core/PlayerProxy', () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock('../../src/MediaPlayer/MediaPlayer.contants', () => ({
  measureNetworkSpeedGeneratedFile: jest.fn().mockResolvedValue(5),
  getRecommendedVideoQuality: jest.fn().mockReturnValue(720),
}));

const noop = () => {};

const baseProps = {
  activePlayer: () => null,
  player: null,
  url: 'video.mp4',
  sources: [],
  fullHDQualityBreak: undefined,
  spriteVTTFile: undefined,
  live: false,
  language: 'en',
  poster: '',
  loop: false,
  muted: false,
  pip: false,
  playbackRate: 1,
  playsinline: false,
  progressInterval: 1000,
  stopOnUnmount: true,
  volume: 0.8,
  width: '640px',
  height: '360px',
  playing: false,
  prevented: false,
  waiting: false,
  disableDeferredLoading: true,
  progressFrequency: 100,
  config: {
    attributes: {},
    tracks: [],
    forceVideo: false,
    forceHLS: false,
    dashVersion: '4.7.4',
    forceDASH: false,
    forceFLV: false,
    flvVersion: '1.6.2',
    forceLoad: false,
    forceDisableHls: false,
    hlsOptions: {},
    hlsVersion: '1.5.7',
    forceSafariHLS: false,
    loopOnEnded: false,
  },
  onBuffer: noop,
  onBufferEnd: noop,
  onDisablePIP: noop,
  onDuration: noop,
  onEnablePIP: noop,
  onEnded: noop,
  onError: noop,
  onPause: noop,
  onPlay: noop,
  onPlayBackQualityChange: noop,
  onPlayBackRateChange: noop,
  onProgress: noop,
  onReady: noop,
  onSeek: noop,
  onStart: noop,
  onLoaded: noop,
  onMount: noop,
};

describe('MediaPlayerSkin integration', () => {
  test('renders without crashing', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with playing=true', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} playing={true} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with muted=true', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} muted={true} />);
    expect(container.firstChild).not.toBeNull();
  });
});
