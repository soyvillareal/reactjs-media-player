import React from 'react';
import { render } from '@testing-library/react';
import MediaPlayerSkin from '../../src/MediaPlayer/components/MediaPlayerSkin/index';

// Mock the heavy child components to avoid deep rendering
jest.mock('../../src/core/PlayerProxy', () => {
  return jest.fn((props) => {
    props.onMount?.({
      load: jest.fn(),
      play: jest.fn(),
      pause: jest.fn(),
      stop: jest.fn(),
      getDuration: jest.fn(() => 120),
      getCurrentTime: jest.fn(() => 0),
      getSecondsLoaded: jest.fn(() => 0),
      getPlayer: jest.fn(() => null),
      setVolume: jest.fn(),
      seekTo: jest.fn(),
      setPlaybackRate: jest.fn(),
      mute: jest.fn(),
      unmute: jest.fn(),
      enablePIP: jest.fn(),
      disablePIP: jest.fn(),
    });
    return <video data-testid="proxy-video" />;
  });
});

jest.mock('../../src/MediaPlayer/MediaPlayer.contants', () => ({
  measureNetworkSpeedGeneratedFile: jest.fn().mockResolvedValue(5),
  getRecommendedVideoQuality: jest.fn().mockReturnValue(720),
}));

const noop = () => {};

const baseProps = {
  activePlayer: jest.fn((props) => {
    props.onMount?.({
      load: jest.fn(),
      play: jest.fn(),
      pause: jest.fn(),
      stop: jest.fn(),
      getDuration: jest.fn(() => 120),
      getCurrentTime: jest.fn(() => 0),
      getSecondsLoaded: jest.fn(() => 0),
      getPlayer: jest.fn(() => null),
      setVolume: jest.fn(),
      seekTo: jest.fn(),
      setPlaybackRate: jest.fn(),
      mute: jest.fn(),
      unmute: jest.fn(),
      enablePIP: jest.fn(),
      disablePIP: jest.fn(),
    });
    return <video data-testid="proxy-video" />;
  }),
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

describe('MediaPlayerSkin', () => {
  test('renders without crashing', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with url provided', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} url="test.m3u8" />);
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

  test('renders with pip=true', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} pip={true} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with loop=true', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} loop={true} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with prevented=true', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} prevented={true} muted={true} playing={true} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with waiting=true', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} waiting={true} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with sources instead of url', () => {
    const sources = [
      { src: 'video_1080.m3u8', resolution: 1080 },
      { src: 'video_720.m3u8', resolution: 720 },
    ];
    const { container } = render(
      <MediaPlayerSkin {...baseProps} url="" sources={sources} fullHDQualityBreak={1080} />,
    );
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with poster', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} poster="poster.jpg" />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders with language es', () => {
    const { container } = render(<MediaPlayerSkin {...baseProps} language="es" />);
    expect(container.firstChild).not.toBeNull();
  });
});
