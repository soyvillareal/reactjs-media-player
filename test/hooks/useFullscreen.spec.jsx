import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useFullscreen from '../../src/hooks/useFullscreen';

describe('useFullscreen', () => {
  let playerRef;
  let videoRef;
  let updateState;

  beforeEach(() => {
    playerRef = { current: document.createElement('div') };
    videoRef = { current: document.createElement('video') };
    updateState = jest.fn();

    // Mock fullscreen APIs
    playerRef.current.requestFullscreen = jest.fn();
    playerRef.current.webkitRequestFullscreen = jest.fn();
    document.exitFullscreen = jest.fn();
    document.webkitExitFullscreen = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const getHook = () =>
    renderHook(() => useFullscreen({ updateState, videoRef, playerRef }));

  test('returns requestFullscreen, exitFullscreen, requestToggleFullscreen', () => {
    const { result } = getHook();
    expect(typeof result.current.requestFullscreen).toBe('function');
    expect(typeof result.current.exitFullscreen).toBe('function');
    expect(typeof result.current.requestToggleFullscreen).toBe('function');
  });

  test('requestFullscreen calls requestFullscreen on player element', () => {
    const { result } = getHook();
    act(() => result.current.requestFullscreen());
    expect(playerRef.current.requestFullscreen).toHaveBeenCalled();
  });

  test('requestFullscreen uses msRequestFullscreen as fallback', () => {
    playerRef.current.requestFullscreen = undefined;
    playerRef.current.msRequestFullscreen = jest.fn();
    const { result } = getHook();
    act(() => result.current.requestFullscreen());
    expect(playerRef.current.msRequestFullscreen).toHaveBeenCalled();
  });

  test('requestFullscreen uses webkitRequestFullscreen as fallback', () => {
    playerRef.current.requestFullscreen = undefined;
    playerRef.current.msRequestFullscreen = undefined;
    playerRef.current.webkitRequestFullscreen = jest.fn();
    const { result } = getHook();
    act(() => result.current.requestFullscreen());
    expect(playerRef.current.webkitRequestFullscreen).toHaveBeenCalled();
  });

  test('requestFullscreen uses video webkitEnterFullScreen as last resort', () => {
    playerRef.current.requestFullscreen = undefined;
    playerRef.current.msRequestFullscreen = undefined;
    playerRef.current.webkitRequestFullscreen = undefined;
    videoRef.current.webkitEnterFullScreen = jest.fn();
    const { result } = getHook();
    act(() => result.current.requestFullscreen());
    expect(videoRef.current.webkitEnterFullScreen).toHaveBeenCalled();
  });

  test('requestFullscreen logs error when playerRef is null', () => {
    playerRef.current = null;
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { result } = getHook();
    act(() => result.current.requestFullscreen());
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test('exitFullscreen calls document.exitFullscreen', () => {
    const { result } = getHook();
    act(() => result.current.exitFullscreen());
    expect(document.exitFullscreen).toHaveBeenCalled();
  });

  test('exitFullscreen uses msExitFullscreen as fallback', () => {
    document.exitFullscreen = undefined;
    document.msExitFullscreen = jest.fn();
    const { result } = getHook();
    act(() => result.current.exitFullscreen());
    expect(document.msExitFullscreen).toHaveBeenCalled();
    document.msExitFullscreen = undefined;
  });

  test('exitFullscreen uses webkitExitFullscreen as fallback', () => {
    document.exitFullscreen = undefined;
    document.webkitExitFullscreen = jest.fn();
    const { result } = getHook();
    act(() => result.current.exitFullscreen());
    expect(document.webkitExitFullscreen).toHaveBeenCalled();
  });

  test('requestToggleFullscreen calls requestFullscreen when not in fullscreen', () => {
    Object.defineProperty(document, 'fullscreenElement', {
      value: null,
      configurable: true,
    });
    const { result } = getHook();
    act(() => result.current.requestToggleFullscreen());
    expect(playerRef.current.requestFullscreen).toHaveBeenCalled();
  });

  test('requestToggleFullscreen calls exitFullscreen when already fullscreen', () => {
    Object.defineProperty(document, 'fullscreenElement', {
      value: playerRef.current,
      configurable: true,
    });
    const { result } = getHook();
    act(() => result.current.requestToggleFullscreen());
    expect(document.exitFullscreen).toHaveBeenCalled();
    // Reset
    Object.defineProperty(document, 'fullscreenElement', { value: null, configurable: true });
  });

  test('adds and removes fullscreen event listeners', () => {
    const addSpy = jest.spyOn(document, 'addEventListener');
    const removeSpy = jest.spyOn(document, 'removeEventListener');
    const { unmount } = renderHook(() => useFullscreen({ updateState, videoRef, playerRef }));
    expect(addSpy).toHaveBeenCalledWith('fullscreenchange', expect.any(Function));
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('fullscreenchange', expect.any(Function));
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
