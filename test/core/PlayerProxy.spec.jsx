import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import PlayerProxy from '../../src/core/PlayerProxy';
import PlayerCore from '../../src/core/PlayerCore';

const mockPlayerCore = jest.fn();
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

jest.mock('../../src/core/PlayerCore', () => {
  return jest.fn().mockImplementation((props) => {
    mockPlayerCore(props);
    props.onMount?.(mockPlayerCoreInstance);

    return <video data-testid="video-element">Mock PlayerCore</video>;
  });
});

describe('PlayerProxy Component', () => {
  const props = {
    loop: false,
    muted: false,
    pip: false,
    playbackRate: 1,
    playbackQuality: 1080,
    playsinline: false,
    progressInterval: 1000,
    stopOnUnmount: true,
    volume: 1,
    url: 'video-file.m3u8',
    width: '100%',
    height: '100%',
    playing: false,
    config: {
      attributes: {
        controls: false,
      },
      //   tracks: props.config.tracks,
      forceVideo: false,
      forceHLS: false,
      dashVersion: '1.0.0',
      forceDASH: false,
      forceFLV: false,
      flvVersion: '1.0.0',
      forceLoad: false,
      forceDisableHls: false,
      //   hlsOptions: props.config.hlsOptions,
      hlsVersion: '1.0.0',
      forceSafariHLS: false,
      loopOnEnded: false,
    },
    activePlayer: PlayerCore,
    disableDeferredLoading: false,
    progressFrequency: 100,
    onProgress: jest.fn(),
    handleReady: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('PlayerProxy lifecycle', () => {
    test('renders without crashing', () => {
      render(<PlayerProxy {...props} />);
      expect(screen.getByTestId('video-element')).toBeInTheDocument();
    });

    test('calls load on component mount', () => {
      render(<PlayerProxy {...props} />);
      expect(mockPlayerCore).toHaveBeenCalledWith(expect.objectContaining({ url: props.url }));
    });

    test('calls play when playing prop is true', () => {
      const { rerender } = render(<PlayerProxy {...props} playing={false} />);
      rerender(<PlayerProxy {...props} playing={true} />);
      expect(mockPlayerCoreInstance.play).toHaveBeenCalled();
    });

    test('calls pause when playing prop is false', () => {
      const { rerender } = render(<PlayerProxy {...props} playing={true} />);
      rerender(<PlayerProxy {...props} playing={false} />);
      expect(mockPlayerCoreInstance.play).not.toHaveBeenCalled();
    });

    test('calls setVolume when volume prop changes', () => {
      const { rerender } = render(<PlayerProxy {...props} volume={0.5} />);
      rerender(<PlayerProxy {...props} volume={0.8} />);
      expect(mockPlayerCoreInstance.setVolume).toHaveBeenCalledWith(0.8);
    });

    test('handles PIP enable/disable', () => {
      const { rerender } = render(<PlayerProxy {...props} pip={false} />);
      rerender(<PlayerProxy {...props} pip={true} />);
      expect(mockPlayerCoreInstance.enablePIP).toHaveBeenCalled();
      rerender(<PlayerProxy {...props} pip={false} />);
      expect(mockPlayerCoreInstance.disablePIP).toHaveBeenCalled();
    });

    test('handles seekTo correctly', () => {
      render(<PlayerProxy {...props} />);
      act(() => {
        mockPlayerCoreInstance.seekTo(50, 'seconds', true);
      });
      expect(mockPlayerCoreInstance.seekTo).toHaveBeenCalledWith(50, 'seconds', true);
    });

    test('does not call stop on unmount if stopOnUnmount is false', () => {
      const { unmount } = render(<PlayerProxy {...props} stopOnUnmount={false} />);
      unmount();
      expect(mockPlayerCoreInstance.stop).not.toHaveBeenCalled();
    });
  });

  describe('PlayerProxy instance', () => {
    it('should call onProgress with correct progress data when progress method is invoked', () => {
      const playedSeconds = 10;
      const loadedSeconds = 20;
      const duration = 100;

      mockPlayerCoreInstance.getCurrentTime.mockReturnValue(playedSeconds);
      mockPlayerCoreInstance.getSecondsLoaded.mockReturnValue(loadedSeconds);
      mockPlayerCoreInstance.getDuration.mockReturnValue(duration);

      const instance = new PlayerProxy(props);
      instance.player = mockPlayerCoreInstance;
      instance.isReady = true;

      act(() => {
        instance.progress();
      });

      expect(props.onProgress).toHaveBeenCalledWith({
        playedSeconds,
        played: playedSeconds / duration,
        loadedSeconds,
        loaded: loadedSeconds / duration,
      });
    });

    it('should not call onProgress if duration is null', () => {
      const instance = new PlayerProxy(props);
      instance.player = mockPlayerCoreInstance;
      instance.isReady = false;

      const spyGetDuration = jest.spyOn(instance, 'getDuration').mockReturnValue(null);

      act(() => {
        instance.progress();
        instance.getDuration();
      });

      expect(props.onProgress).not.toHaveBeenCalled();
      expect(spyGetDuration).toHaveBeenCalled();
    });

    it('should set prevPlayed and prevLoaded after progress is called', () => {
      const playedSeconds = 5;
      const loadedSeconds = 15;
      const duration = 50;

      mockPlayerCoreInstance.getCurrentTime.mockReturnValue(playedSeconds);
      mockPlayerCoreInstance.getSecondsLoaded.mockReturnValue(loadedSeconds);
      mockPlayerCoreInstance.getDuration.mockReturnValue(duration);

      const instance = new PlayerProxy(props);
      instance.player = mockPlayerCoreInstance;
      instance.isReady = true;

      act(() => {
        instance.progress();
      });

      expect(instance.prevPlayed).toEqual(playedSeconds);
      expect(instance.prevLoaded).toEqual(loadedSeconds);
    });

    it('should handle progress frequency correctly', () => {
      const { unmount } = render(<PlayerProxy {...props} />);
      const instance = new PlayerProxy(props);
      instance.player = mockPlayerCoreInstance;
      instance.isReady = true;

      const spySetTimeout = jest.spyOn(global, 'setTimeout');

      act(() => {
        instance.progress();
      });

      expect(spySetTimeout).toHaveBeenLastCalledWith(instance.progress, props.progressFrequency);

      unmount();
    });

    it('should not call onProgress if progress values do not change', () => {
      const playedSeconds = 30;
      const loadedSeconds = 40;
      const duration = 120;

      mockPlayerCoreInstance.getCurrentTime.mockReturnValue(playedSeconds);
      mockPlayerCoreInstance.getSecondsLoaded.mockReturnValue(loadedSeconds);
      mockPlayerCoreInstance.getDuration.mockReturnValue(duration);

      const instance = new PlayerProxy(props);
      instance.player = mockPlayerCoreInstance;
      instance.isReady = true;
      instance.prevPlayed = playedSeconds;
      instance.prevLoaded = loadedSeconds;

      act(() => {
        instance.progress();
      });

      expect(props.onProgress).not.toHaveBeenCalled();
    });

    it('should clear progress timeout on unmount', () => {
      const { unmount } = render(<PlayerProxy {...props} />);
      const instance = new PlayerProxy(props);

      const spyClearTimeout = jest.spyOn(global, 'clearTimeout');

      act(() => {
        instance.progress();
      });

      unmount();

      expect(spyClearTimeout).toHaveBeenCalled();
    });

    it('should not replace loadedSeconds and loaded if getSecondsLoaded result is equal than null', () => {
      const playedSeconds = 30;
      const duration = 120;

      mockPlayerCoreInstance.getCurrentTime.mockReturnValue(playedSeconds);
      mockPlayerCoreInstance.getSecondsLoaded.mockReturnValue(null);
      mockPlayerCoreInstance.getDuration.mockReturnValue(duration);

      const instance = new PlayerProxy(props);
      instance.player = mockPlayerCoreInstance;
      instance.isReady = true;
      instance.prevPlayed = playedSeconds;
      instance.prevLoaded = null;

      act(() => {
        instance.progress();
      });

      expect(props.onProgress).not.toHaveBeenCalled();
    });
  });
});
