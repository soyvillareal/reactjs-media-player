import React from 'react';
import { render, screen, act } from '@testing-library/react';
import PlayerProxy from '../../src/core/PlayerProxy';
import PlayerCore from '../../src/core/PlayerCore';

// ─── Shared mock setup ────────────────────────────────────────────────────────
const mockPlayerCoreInstance = {
  load: jest.fn(),
  play: jest.fn(),
  pause: jest.fn(),
  stop: jest.fn(),
  mute: jest.fn(),
  unmute: jest.fn(),
  setVolume: jest.fn(),
  enablePIP: jest.fn(),
  disablePIP: jest.fn(),
  setPlaybackRate: jest.fn(),
  seekTo: jest.fn(),
  getDuration: jest.fn(() => 120),
  getCurrentTime: jest.fn(() => 30),
  getSecondsLoaded: jest.fn(() => 60),
  getPlayer: jest.fn(),
};

jest.mock('../../src/core/PlayerCore', () =>
  jest.fn().mockImplementation((props) => {
    props.onMount?.(mockPlayerCoreInstance);
    return <video data-testid="video-element" />;
  }),
);

const baseProps = {
  loop: false,
  muted: false,
  pip: false,
  playbackRate: 1,
  playbackQuality: 1080,
  playsinline: false,
  progressInterval: 1000,
  progressFrequency: 100,
  stopOnUnmount: true,
  volume: 0.8,
  url: 'video.mp4',
  width: '640px',
  height: '360px',
  playing: false,
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
  activePlayer: PlayerCore,
  disableDeferredLoading: true,
  onProgress: jest.fn(),
  onReady: jest.fn(),
  onStart: jest.fn(),
  onPlay: jest.fn(),
  onPause: jest.fn(),
  onBuffer: jest.fn(),
  onBufferEnd: jest.fn(),
  onEnded: jest.fn(),
  onError: jest.fn(),
  onDuration: jest.fn(),
  onSeek: jest.fn(),
  onPlayBackRateChange: jest.fn(),
  onPlayBackQualityChange: jest.fn(),
  onEnablePIP: jest.fn(),
  onDisablePIP: jest.fn(),
};

afterEach(() => jest.clearAllMocks());

// ─── handleReady ─────────────────────────────────────────────────────────────
describe('PlayerProxy – handleReady', () => {
  test('calls onReady when mounted', () => {
    render(<PlayerProxy {...baseProps} />);
    const instance = new PlayerProxy(baseProps);
    instance.mounted = true;
    instance.player = mockPlayerCoreInstance;
    act(() => instance.handleReady());
    expect(baseProps.onReady).toHaveBeenCalled();
  });

  test('does not call onReady when not mounted', () => {
    render(<PlayerProxy {...baseProps} />);
    const instance = new PlayerProxy(baseProps);
    instance.mounted = false;
    instance.player = mockPlayerCoreInstance;
    act(() => instance.handleReady());
    expect(baseProps.onReady).not.toHaveBeenCalled();
  });

  test('calls setVolume when volume is set and not muted', () => {
    render(<PlayerProxy {...baseProps} volume={0.5} />);
    const instance = new PlayerProxy({ ...baseProps, volume: 0.5, muted: false });
    instance.mounted = true;
    instance.player = mockPlayerCoreInstance;
    act(() => instance.handleReady());
    expect(mockPlayerCoreInstance.setVolume).toHaveBeenCalledWith(0.5);
  });

  test('calls player.play when playing is true and no loadOnReady', () => {
    const instance = new PlayerProxy({ ...baseProps, playing: true });
    instance.mounted = true;
    instance.player = mockPlayerCoreInstance;
    act(() => instance.handleReady());
    expect(mockPlayerCoreInstance.play).toHaveBeenCalled();
  });

  test('loads loadOnReady URL when set', () => {
    const instance = new PlayerProxy(baseProps);
    instance.mounted = true;
    instance.player = mockPlayerCoreInstance;
    instance.loadOnReady = 'deferred.mp4';
    act(() => instance.handleReady());
    expect(mockPlayerCoreInstance.load).toHaveBeenCalledWith('deferred.mp4', true);
    expect(instance.loadOnReady).toBeNull();
  });
});

// ─── handlePlay ──────────────────────────────────────────────────────────────
describe('PlayerProxy – handlePlay', () => {
  test('calls onStart on first play', () => {
    const instance = new PlayerProxy(baseProps);
    instance.player = mockPlayerCoreInstance;
    instance.startOnPlay = true;
    act(() => instance.handlePlay({}));
    expect(baseProps.onStart).toHaveBeenCalled();
    expect(instance.startOnPlay).toBe(false);
  });

  test('calls setPlaybackRate when playbackRate != 1 on first play', () => {
    const instance = new PlayerProxy({ ...baseProps, playbackRate: 1.5 });
    instance.player = mockPlayerCoreInstance;
    instance.startOnPlay = true;
    act(() => instance.handlePlay({}));
    expect(mockPlayerCoreInstance.setPlaybackRate).toHaveBeenCalledWith(1.5);
  });

  test('calls onPlay callback', () => {
    const onPlay = jest.fn();
    const instance = new PlayerProxy({ ...baseProps, onPlay });
    instance.player = mockPlayerCoreInstance;
    act(() => instance.handlePlay({ type: 'play' }));
    expect(onPlay).toHaveBeenCalledWith({ type: 'play' });
  });

  test('seeks to seekOnPlay when set', () => {
    const instance = new PlayerProxy(baseProps);
    instance.player = mockPlayerCoreInstance;
    instance.isReady = true;
    instance.seekOnPlay = 30;
    act(() => instance.handlePlay({}));
    expect(mockPlayerCoreInstance.seekTo).toHaveBeenCalledWith(30, undefined);
    expect(instance.seekOnPlay).toBeNull();
  });
});

// ─── handlePause ─────────────────────────────────────────────────────────────
describe('PlayerProxy – handlePause', () => {
  test('calls onPause when not loading', () => {
    const onPause = jest.fn();
    const instance = new PlayerProxy({ ...baseProps, onPause });
    instance.isLoading = false;
    act(() => instance.handlePause({ type: 'pause' }));
    expect(onPause).toHaveBeenCalled();
  });

  test('does not call onPause when loading', () => {
    const onPause = jest.fn();
    const instance = new PlayerProxy({ ...baseProps, onPause });
    instance.isLoading = true;
    act(() => instance.handlePause({ type: 'pause' }));
    expect(onPause).not.toHaveBeenCalled();
  });
});

// ─── handleEnded ─────────────────────────────────────────────────────────────
describe('PlayerProxy – handleEnded', () => {
  test('calls onEnded when loop is false', () => {
    const onEnded = jest.fn();
    const instance = new PlayerProxy({ ...baseProps, loop: false, onEnded });
    instance.player = mockPlayerCoreInstance;
    act(() => instance.handleEnded());
    expect(onEnded).toHaveBeenCalled();
    expect(instance.isPlaying).toBe(false);
  });

  test('does not call onEnded when loop is true', () => {
    const onEnded = jest.fn();
    const instance = new PlayerProxy({ ...baseProps, loop: true, onEnded });
    instance.player = mockPlayerCoreInstance;
    instance.isReady = true;
    act(() => instance.handleEnded());
    expect(onEnded).not.toHaveBeenCalled();
  });

  test('seeks to 0 when loopOnEnded is true and loop is true', () => {
    const instance = new PlayerProxy({
      ...baseProps,
      loop: true,
      activePlayer: {
        defaultProps: { config: { loopOnEnded: true } },
      },
    });
    instance.player = mockPlayerCoreInstance;
    instance.isReady = true;
    act(() => instance.handleEnded());
    expect(mockPlayerCoreInstance.seekTo).toHaveBeenCalledWith(0, undefined);
  });
});

// ─── handleError ─────────────────────────────────────────────────────────────
describe('PlayerProxy – handleError', () => {
  test('calls onError with all arguments', () => {
    const onError = jest.fn();
    const instance = new PlayerProxy({ ...baseProps, onError });
    act(() => instance.handleError('event', 'data', 'hls', 'Hls'));
    expect(onError).toHaveBeenCalledWith('event', 'data', 'hls', 'Hls');
    expect(instance.isLoading).toBe(false);
  });
});

// ─── handleLoaded ────────────────────────────────────────────────────────────
describe('PlayerProxy – handleLoaded', () => {
  test('sets isLoading to false', () => {
    const instance = new PlayerProxy(baseProps);
    instance.isLoading = true;
    act(() => instance.handleLoaded());
    expect(instance.isLoading).toBe(false);
  });
});

// ─── handleDurationCheck ─────────────────────────────────────────────────────
describe('PlayerProxy – handleDurationCheck', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  test('calls onDuration when duration is available', () => {
    const onDuration = jest.fn();
    const instance = new PlayerProxy({ ...baseProps, onDuration });
    instance.isReady = true;
    instance.player = { ...mockPlayerCoreInstance, getDuration: jest.fn(() => 120) };
    act(() => instance.handleDurationCheck());
    expect(onDuration).toHaveBeenCalledWith(120);
    expect(instance.onDurationCalled).toBe(true);
  });

  test('schedules retry when duration is not yet available', () => {
    const instance = new PlayerProxy(baseProps);
    instance.isReady = true;
    instance.player = { ...mockPlayerCoreInstance, getDuration: jest.fn(() => null) };
    const spy = jest.spyOn(global, 'setTimeout');
    act(() => instance.handleDurationCheck());
    expect(spy).toHaveBeenCalledWith(instance.handleDurationCheck, 100);
    spy.mockRestore();
  });
});

// ─── seekTo ──────────────────────────────────────────────────────────────────
describe('PlayerProxy – seekTo', () => {
  test('stores seekOnPlay when not ready and amount != 0', () => {
    jest.useFakeTimers();
    const instance = new PlayerProxy(baseProps);
    instance.isReady = false;
    act(() => instance.seekTo(30));
    expect(instance.seekOnPlay).toBe(30);
    jest.useRealTimers();
  });

  test('does not store seekOnPlay when amount is 0', () => {
    const instance = new PlayerProxy(baseProps);
    instance.isReady = false;
    act(() => instance.seekTo(0));
    expect(instance.seekOnPlay).toBeNull();
  });

  test('seeks by fraction when type is "fraction"', () => {
    const instance = new PlayerProxy(baseProps);
    instance.isReady = true;
    instance.player = { ...mockPlayerCoreInstance, getDuration: jest.fn(() => 100) };
    act(() => instance.seekTo(0.5, 'fraction'));
    expect(instance.player.seekTo).toHaveBeenCalledWith(50, undefined);
  });

  test('warns when seeking fraction without duration', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const instance = new PlayerProxy(baseProps);
    instance.isReady = true;
    instance.player = { ...mockPlayerCoreInstance, getDuration: jest.fn(() => 0) };
    act(() => instance.seekTo(0.5, 'fraction'));
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  test('infers fraction when amount is between 0 and 1 and type not given', () => {
    const instance = new PlayerProxy(baseProps);
    instance.isReady = true;
    instance.player = { ...mockPlayerCoreInstance, getDuration: jest.fn(() => 100) };
    act(() => instance.seekTo(0.5));
    expect(instance.player.seekTo).toHaveBeenCalledWith(50, undefined);
  });

  test('seeks by seconds when type is "seconds"', () => {
    const instance = new PlayerProxy(baseProps);
    instance.isReady = true;
    instance.player = mockPlayerCoreInstance;
    act(() => instance.seekTo(45, 'seconds'));
    expect(mockPlayerCoreInstance.seekTo).toHaveBeenCalledWith(45, undefined);
  });
});

// ─── componentDidUpdate ──────────────────────────────────────────────────────
describe('PlayerProxy – componentDidUpdate', () => {
  test('defers load when isLoading and URL changes', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(<PlayerProxy {...baseProps} url="video.mp4" />);
    const instance = new PlayerProxy({ ...baseProps, url: 'new-video.mp4' });
    instance.player = mockPlayerCoreInstance;
    instance.isLoading = true;
    // Simulate URL change while loading, no forceLoad, disableDeferredLoading=false
    const prevProps = { ...baseProps, url: 'video.mp4', disableDeferredLoading: false };
    act(() => instance.componentDidUpdate({ ...prevProps, url: 'video.mp4' }));
    warn.mockRestore();
  });

  test('calls mute when muted changes to true', () => {
    const instance = new PlayerProxy({ ...baseProps, muted: true });
    instance.player = mockPlayerCoreInstance;
    act(() => instance.componentDidUpdate({ ...baseProps, muted: false }));
    expect(mockPlayerCoreInstance.mute).toHaveBeenCalled();
  });

  test('calls unmute when muted changes to false', () => {
    const instance = new PlayerProxy({ ...baseProps, muted: false, volume: 0.8 });
    instance.player = mockPlayerCoreInstance;
    jest.useFakeTimers();
    act(() => instance.componentDidUpdate({ ...baseProps, muted: true }));
    expect(mockPlayerCoreInstance.unmute).toHaveBeenCalled();
    jest.useRealTimers();
  });

  test('calls setPlaybackRate when playbackRate changes', () => {
    const instance = new PlayerProxy({ ...baseProps, playbackRate: 1.5 });
    instance.player = mockPlayerCoreInstance;
    act(() => instance.componentDidUpdate({ ...baseProps, playbackRate: 1 }));
    expect(mockPlayerCoreInstance.setPlaybackRate).toHaveBeenCalledWith(1.5);
  });

  test('returns early when no player', () => {
    const instance = new PlayerProxy(baseProps);
    instance.player = null;
    expect(() => act(() => instance.componentDidUpdate(baseProps))).not.toThrow();
  });
});

// ─── componentWillUnmount ────────────────────────────────────────────────────
describe('PlayerProxy – componentWillUnmount', () => {
  test('calls stop and disablePIP on unmount when ready and stopOnUnmount', () => {
    const { unmount } = render(<PlayerProxy {...baseProps} stopOnUnmount={true} />);
    mockPlayerCoreInstance.getDuration.mockReturnValue(120);
    // Mark as ready via handleReady
    const instance = new PlayerProxy({ ...baseProps, stopOnUnmount: true });
    instance.player = mockPlayerCoreInstance;
    instance.isReady = true;
    act(() => instance.componentWillUnmount());
    expect(mockPlayerCoreInstance.stop).toHaveBeenCalled();
    expect(mockPlayerCoreInstance.disablePIP).toHaveBeenCalled();
  });
});

// ─── render ──────────────────────────────────────────────────────────────────
describe('PlayerProxy – render', () => {
  test('renders null when no activePlayer', () => {
    const { container } = render(<PlayerProxy {...baseProps} activePlayer={null} />);
    expect(container.firstChild).toBeNull();
  });
});

// ─── getInternalPlayer ───────────────────────────────────────────────────────
describe('PlayerProxy – getInternalPlayer', () => {
  test('returns null when player is null', () => {
    const instance = new PlayerProxy(baseProps);
    instance.player = null;
    expect(instance.getInternalPlayer('hls')).toBeNull();
  });

  test('returns player key value when player exists', () => {
    const instance = new PlayerProxy(baseProps);
    instance.player = { hls: 'hls-instance' };
    expect(instance.getInternalPlayer('hls')).toBe('hls-instance');
  });
});
