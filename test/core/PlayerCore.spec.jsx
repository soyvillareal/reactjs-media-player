import { render, screen, fireEvent } from '@testing-library/react';
import PlayerCore from '../../src/core/PlayerCore';
import {
  DASH_GLOBAL,
  DASH_SDK_URL,
  FLV_GLOBAL,
  FLV_SDK_URL,
  HLS_GLOBAL,
  HLS_SDK_URL,
} from '../../src/core/core.constants';
import { getSDK, hasAudio, supportsWebKitPresentationMode } from '../../src/utils/player';
import { DashMock, FlvMock, HlsMock } from '../__mocks__/core';

jest.mock('../../src/utils/player');

describe('PlayerCore Component', () => {
  let props = {
    onMount: jest.fn(),
    onPlay: jest.fn(),
    onBuffer: jest.fn(),
    onBufferEnd: jest.fn(),
    onPause: jest.fn(),
    onEnded: jest.fn(),
    onError: jest.fn(),
    onPlayBackRateChange: jest.fn(),
    onEnablePIP: jest.fn(),
    onDisablePIP: jest.fn(),
    onSeek: jest.fn(),
    onReady: jest.fn(),
    onLoaded: jest.fn(),
    url: 'test-url.mp4',
    config: {
      hlsVersion: '1.0.0',
      dashVersion: '1.0.0',
      flvVersion: '1.0.0',
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      forceDisableHls: false,
    },
  };

  describe('PlyerCore Lifecycle', () => {
    afterEach(() => {
      jest.clearAllMocks();
      jest.resetModules();
    });

    it('calls onMount on componentDidMount', () => {
      render(<PlayerCore {...props} />);
      expect(props.onMount).toHaveBeenCalled();
    });

    it('adds event listeners to the player on componentDidMount', () => {
      render(<PlayerCore {...props} />);
      const player = document.createElement('video');
      jest.spyOn(player, 'addEventListener');

      const instance = new PlayerCore(props);
      instance.player = player;
      instance.componentDidMount();

      expect(player.addEventListener).toHaveBeenCalledWith('play', instance.onPlay);
      expect(player.addEventListener).toHaveBeenCalledWith('pause', instance.onPause);
    });

    it('should set playsinline attributes if playsinline prop is true', () => {
      render(<PlayerCore {...props} playsinline={true} />);
      const player = screen.getByTestId('video-element');

      expect(player.getAttribute('playsinline')).toBe('');
      expect(player.getAttribute('webkit-playsinline')).toBe('');
      expect(player.getAttribute('x5-playsinline')).toBe('');
    });

    it('should call onError with correct arguments on error event', () => {
      render(<PlayerCore {...props} />);

      const player = screen.getByTestId('video-element');

      fireEvent.error(player, { target: player });
      expect(props.onError).toHaveBeenCalledWith(expect.anything(), undefined, undefined, undefined);
    });

    it('should handle enterpictureinpicture and leavepictureinpicture events', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('enterpictureinpicture'));
      expect(props.onEnablePIP).toHaveBeenCalled();

      fireEvent(player, new Event('leavepictureinpicture'));
      expect(props.onDisablePIP).toHaveBeenCalled();
    });

    it('should not add HLS listeners if shouldUseHLS returns false', () => {
      const spyAddEventListener = jest.spyOn(HTMLMediaElement.prototype, 'addEventListener');

      render(<PlayerCore {...props} url="video-file.m3u8" />);
      const spyShouldUseHLS = jest.spyOn(PlayerCore.prototype, 'shouldUseHLS').mockReturnValue(false);
      expect(spyAddEventListener).not.toHaveBeenCalledWith('canplay', expect.any(Function));
      spyAddEventListener.mockRestore();
      spyShouldUseHLS.mockRestore();
    });

    it('should call onSeek with correct currentTime on seeked event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      player.currentTime = 50;
      fireEvent.seeked(player);
      expect(props.onSeek).toHaveBeenCalledWith(50);
    });
  });

  describe('PlayerCore Instance', () => {
    it('should initialize the correct SDK based on URL extension for HLS', async () => {
      getSDK.mockResolvedValue(Promise.resolve(HlsMock));
      const hlsProps = { ...props, url: 'video-file.m3u8' };
      const instance = new PlayerCore(hlsProps);
      instance.load(hlsProps.url, true);
      expect(getSDK).toHaveBeenCalledWith(HLS_SDK_URL.replace('VERSION', props.config.hlsVersion), HLS_GLOBAL);
    });

    it('should initialize the correct SDK based on URL extension for DASH', async () => {
      getSDK.mockResolvedValue(Promise.resolve(DashMock));
      const dashProps = { ...props, url: 'video-file.mpd' };
      const instance = new PlayerCore(dashProps);
      instance.load(dashProps.url, true);
      expect(getSDK).toHaveBeenCalledWith(DASH_SDK_URL.replace('VERSION', props.config.dashVersion), DASH_GLOBAL);
    });

    it('should initialize the correct SDK based on URL extension for FLV', async () => {
      getSDK.mockResolvedValue(Promise.resolve(FlvMock));
      const flvProps = { ...props, url: 'video-file.flv' };
      const instance = new PlayerCore(flvProps);
      instance.load(flvProps.url, true);
      expect(getSDK).toHaveBeenCalledWith(FLV_SDK_URL.replace('VERSION', props.config.flvVersion), FLV_GLOBAL);
    });

    it('should handle media streams correctly', () => {
      const stream = new MediaStream();
      const streamProps = { ...props, url: stream };

      const instance = new PlayerCore(streamProps);
      const videoElement = document.createElement('video');

      instance.player = videoElement;

      instance.load(streamProps.url, true);

      expect(instance.player.srcObject).toBe(stream);
    });

    it('should call removeListeners on removeEventListener for unsupported formats', () => {
      const spyRemoveListeners = jest.spyOn(PlayerCore.prototype, 'removeListeners');

      const unsupportedProps = { ...props, url: 'unsupported-format.xyz' };
      const instance = new PlayerCore(unsupportedProps);

      const videoElement = document.createElement('video');
      instance.player = videoElement;

      instance.componentWillUnmount();
      expect(spyRemoveListeners).toHaveBeenCalled();
    });

    it('should not initialize HLS/DASH/FLV if forceDisableHls is true', () => {
      const newProps = { ...props, config: { ...props.config, forceDisableHls: true } };
      const instance = new PlayerCore(newProps);

      const videoElement = document.createElement('video');
      instance.player = videoElement;

      const spyShouldUseHLS = jest.spyOn(instance, 'shouldUseHLS');

      instance.componentDidMount();
      expect(spyShouldUseHLS).toHaveBeenCalledTimes(2);
      expect(getSDK).not.toHaveBeenCalled();
    });

    it('should remove src attribute and listeners on unmount if exists', () => {
      const instance = new PlayerCore(props);
      const videoElement = document.createElement('video');
      instance.player = videoElement;
      const spyRemoveAttribute = jest.spyOn(videoElement, 'removeAttribute');
      const spyRemoveListeners = jest.spyOn(instance, 'removeListeners');
      instance.componentWillUnmount();
      expect(spyRemoveAttribute).toHaveBeenCalled();
      expect(spyRemoveListeners).toHaveBeenCalled();

      spyRemoveAttribute.mockRestore();
      spyRemoveListeners.mockRestore();
    });

    it('removes event listeners on componentWillUnmount', () => {
      const player = document.createElement('video');
      jest.spyOn(player, 'removeEventListener');

      const instance = new PlayerCore(props);
      instance.player = player;
      instance.componentWillUnmount();

      expect(player.removeEventListener).toHaveBeenCalledWith('play', instance.onPlay);
      expect(player.removeEventListener).toHaveBeenCalledWith('pause', instance.onPause);
    });

    it('calls onPlay callback with hasAudio', () => {
      const player = document.createElement('video');
      jest.spyOn(player, 'play');
      props.onPlay.mockImplementation((e) => {
        e.hasAudio = true;
      });

      const instance = new PlayerCore(props);
      instance.player = player;

      instance.onPlay({ type: 'play' });
      expect(props.onPlay).toHaveBeenCalledWith(expect.objectContaining({ hasAudio: true }));
    });

    it('calls onBuffer when the player emits waiting event', () => {
      const player = document.createElement('video');
      const instance = new PlayerCore(props);
      instance.player = player;

      instance.onBuffer({ type: 'waiting' });
      expect(props.onBuffer).toHaveBeenCalledWith({ type: 'waiting' });
    });

    it('handles PIP enable and disable events', () => {
      const player = document.createElement('video');
      const instance = new PlayerCore(props);
      instance.player = player;

      instance.onEnablePIP({ type: 'enterpictureinpicture' });
      expect(props.onEnablePIP).toHaveBeenCalledWith({ type: 'enterpictureinpicture' });

      instance.onDisablePIP({ type: 'leavepictureinpicture' });
      expect(props.onDisablePIP).toHaveBeenCalledWith({ type: 'leavepictureinpicture' });
    });
  });

  describe('PlayerCore Methods', () => {
    let instance;
    let mockPlayer;

    beforeEach(() => {
      mockPlayer = {
        currentTime: 0,
        volume: 1,
        muted: false,
        requestPictureInPicture: jest.fn(),
        webkitSetPresentationMode: jest.fn(),
        playbackRate: 1,
        seekable: {
          length: 1,
          end: jest.fn().mockReturnValue(300),
        },
        buffered: {
          length: 1,
          end: jest.fn().mockReturnValue(150),
        },
      };
      instance = new PlayerCore(props);
      instance.player = mockPlayer;
    });

    it('seekTo sets currentTime and calls pause if keepPlaying is false', () => {
      instance.pause = jest.fn();
      instance.seekTo(50, false);
      expect(mockPlayer.currentTime).toBe(50);
      expect(instance.pause).toHaveBeenCalled();
    });

    it('seekTo sets currentTime and does not call pause if keepPlaying is true', () => {
      instance.pause = jest.fn();
      instance.seekTo(100, true);
      expect(mockPlayer.currentTime).toBe(100);
      expect(instance.pause).not.toHaveBeenCalled();
    });

    it('setVolume updates the player volume', () => {
      instance.setVolume(0.5);
      expect(mockPlayer.volume).toBe(0.5);
    });

    it('mute sets player.muted to true', () => {
      instance.mute();
      expect(mockPlayer.muted).toBe(true);
    });

    it('unmute sets player.muted to false', () => {
      instance.unmute();
      expect(mockPlayer.muted).toBe(false);
    });

    it('enablePIP calls requestPictureInPicture if supported', () => {
      document.pictureInPictureElement = null;
      instance.enablePIP();
      expect(mockPlayer.requestPictureInPicture).toHaveBeenCalled();
    });

    it('enablePIP calls webkitSetPresentationMode for Safari', () => {
      mockPlayer.requestPictureInPicture = null;
      document.pictureInPictureElement = null;
      supportsWebKitPresentationMode.mockReturnValue(true);
      instance.enablePIP();
      expect(mockPlayer.webkitSetPresentationMode).toHaveBeenCalledWith('picture-in-picture');
    });

    it('disablePIP calls exitPictureInPicture if supported', () => {
      document.exitPictureInPicture = jest.fn();
      document.pictureInPictureElement = mockPlayer;
      instance.disablePIP();
      expect(document.exitPictureInPicture).toHaveBeenCalled();
    });

    it('disablePIP calls webkitSetPresentationMode to "inline"', () => {
      document.exitPictureInPicture = null;
      supportsWebKitPresentationMode.mockReturnValue(true);
      instance.disablePIP();
      expect(mockPlayer.webkitSetPresentationMode).toHaveBeenCalledWith('inline');
    });

    it('setPlaybackRate updates the player playbackRate', () => {
      instance.setPlaybackRate(1.5);
      expect(mockPlayer.playbackRate).toBe(1.5);
    });

    it('getDuration returns seekable end if duration is Infinity', () => {
      mockPlayer.duration = Infinity;
      expect(instance.getDuration()).toBe(300);
    });

    it('getDuration returns player duration if not Infinity', () => {
      mockPlayer.duration = 200;
      expect(instance.getDuration()).toBe(200);
    });

    it('getCurrentTime returns the currentTime of the player', () => {
      mockPlayer.currentTime = 120;
      expect(instance.getCurrentTime()).toBe(120);
    });

    it('getSecondsLoaded returns 0 if buffered length is 0', () => {
      mockPlayer.buffered.length = 0;
      expect(instance.getSecondsLoaded()).toBe(0);
    });

    it('getSecondsLoaded returns the end of buffered range if duration is greater', () => {
      mockPlayer.duration = 200;
      expect(instance.getSecondsLoaded()).toBe(150);
    });

    it('getSecondsLoaded returns duration if buffered end exceeds duration', () => {
      mockPlayer.duration = 100;
      expect(instance.getSecondsLoaded()).toBe(100);
    });

    it('onEnablePIP calls onEnablePIP callback', () => {
      instance.onEnablePIP();
      expect(props.onEnablePIP).toHaveBeenCalled();
    });

    it('onPlayBackRateChange calls onPlayBackRateChange callback', () => {
      instance.onPlayBackRateChange({ target: { playbackRate: 1.5 } });
      expect(props.onPlayBackRateChange).toHaveBeenCalledWith(1.5);
    });

    it('onPlay calls onPlay callback and hasAudio is true', () => {
      const spyInstanceOnPlay = jest.spyOn(instance, 'onPlay');
      hasAudio.mockReturnValue(true);
      const result = instance.onPlay({ type: 'play' });

      expect(hasAudio).toHaveBeenCalled();
      expect(props.onPlay).toHaveBeenCalledWith(expect.objectContaining({ hasAudio: true }));
      expect(spyInstanceOnPlay).toHaveBeenCalled();
      expect(spyInstanceOnPlay).toHaveBeenCalledWith({ type: 'play' });
      expect(result).toBeUndefined();

      spyInstanceOnPlay.mockRestore();
    });
  });
});
