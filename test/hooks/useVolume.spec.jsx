import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useVolume from '../../src/hooks/useVolume';

describe('useVolume', () => {
  let videoRef;
  let updateState;

  beforeEach(() => {
    const videoElement = document.createElement('video');
    videoElement.volume = 1;
    videoElement.muted = false;
    videoRef = { current: videoElement };
    updateState = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const getHook = (overrides = {}) =>
    renderHook(() =>
      useVolume({
        prevented: false,
        muted: false,
        videoRef,
        src: 'test.mp4',
        updateState,
        ...overrides,
      }),
    );

  test('returns onMutedClick, changeVolume, updateVolumeWithCallback', () => {
    const { result } = getHook();
    expect(typeof result.current.onMutedClick).toBe('function');
    expect(typeof result.current.changeVolume).toBe('function');
    expect(typeof result.current.updateVolumeWithCallback).toBe('function');
  });

  describe('changeVolume', () => {
    test('sets volume to 0 and muted to true when v=0', () => {
      const { result } = getHook();
      act(() => result.current.changeVolume(0));
      expect(videoRef.current.volume).toBe(0);
      expect(updateState).toHaveBeenCalledWith(expect.objectContaining({ volume: 0, muted: true }));
    });

    test('sets volume and unmutes when v > 0 and was muted', () => {
      videoRef.current.muted = true;
      const { result } = getHook({ muted: true });
      act(() => result.current.changeVolume(0.5));
      expect(videoRef.current.volume).toBe(0.5);
      expect(updateState).toHaveBeenCalledWith(expect.objectContaining({ volume: 0.5, muted: false }));
    });

    test('does nothing when videoRef.current is null', () => {
      videoRef.current = null;
      const { result } = getHook();
      expect(() => act(() => result.current.changeVolume(0.5))).not.toThrow();
      expect(updateState).not.toHaveBeenCalled();
    });
  });

  describe('onMutedClick', () => {
    test('toggles muted state', () => {
      const { result } = getHook();
      act(() => result.current.onMutedClick());
      expect(updateState).toHaveBeenCalled();
    });

    test('sets volume to 1 when currently muted and muted=true', () => {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
      const { result } = getHook({ muted: true });
      act(() => result.current.onMutedClick());
      expect(updateState).toHaveBeenCalledWith(expect.objectContaining({ volume: 1 }));
    });

    test('does nothing when videoRef.current is null', () => {
      videoRef.current = null;
      const { result } = getHook();
      expect(() => act(() => result.current.onMutedClick())).not.toThrow();
      expect(updateState).not.toHaveBeenCalled();
    });

    test('sets volume to 0 when not muted', () => {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      const { result } = getHook({ muted: false });
      act(() => result.current.onMutedClick());
      expect(updateState).toHaveBeenCalledWith(expect.objectContaining({ muted: true }));
    });
  });

  describe('updateVolumeWithCallback', () => {
    test('calls callback and changeVolume with new value', () => {
      videoRef.current.volume = 0.5;
      const { result } = getHook();
      act(() => result.current.updateVolumeWithCallback((v) => Math.min(v + 0.1, 1)));
      expect(updateState).toHaveBeenCalledWith(expect.objectContaining({ volume: expect.any(Number) }));
    });

    test('does nothing when videoRef.current is null', () => {
      videoRef.current = null;
      const { result } = getHook();
      expect(() => act(() => result.current.updateVolumeWithCallback((v) => v))).not.toThrow();
    });
  });

  describe('volumechange event listener', () => {
    test('registers volumechange listener', () => {
      const spy = jest.spyOn(videoRef.current, 'addEventListener');
      getHook();
      expect(spy).toHaveBeenCalledWith('volumechange', expect.any(Function));
      spy.mockRestore();
    });

    test('unregisters volumechange listener on unmount', () => {
      const spy = jest.spyOn(videoRef.current, 'removeEventListener');
      const { unmount } = getHook();
      unmount();
      expect(spy).toHaveBeenCalledWith('volumechange', expect.any(Function));
      spy.mockRestore();
    });
  });
});
