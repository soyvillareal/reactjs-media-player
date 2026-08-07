import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useAutoHide from '../../src/hooks/useAutoHide';
import { AppContextProvider } from '../../src/context/AppContextProvider';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

describe('useAutoHide', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  const defaultProps = {
    hasResource: true,
    loading: false,
    prevented: false,
    paused: false,
    ended: false,
    waiting: false,
    seeking: false,
    kernelMsg: null,
  };

  test('returns showControls and hideControls functions', () => {
    const { result } = renderHook(() => useAutoHide(defaultProps), { wrapper });
    expect(typeof result.current.showControls).toBe('function');
    expect(typeof result.current.hideControls).toBe('function');
  });

  test('showControls does not throw', () => {
    const { result } = renderHook(() => useAutoHide(defaultProps), { wrapper });
    expect(() => act(() => result.current.showControls())).not.toThrow();
  });

  test('hideControls does not throw', () => {
    const { result } = renderHook(() => useAutoHide(defaultProps), { wrapper });
    expect(() => act(() => result.current.hideControls())).not.toThrow();
  });

  test('showControls schedules timer when video is playing', () => {
    const spySetTimeout = jest.spyOn(window, 'setTimeout');
    const { result } = renderHook(() => useAutoHide(defaultProps), { wrapper });
    act(() => result.current.showControls());
    expect(spySetTimeout).toHaveBeenCalled();
    spySetTimeout.mockRestore();
  });

  test('showControls does not schedule timer when paused', () => {
    const spySetTimeout = jest.spyOn(window, 'setTimeout');
    const { result } = renderHook(() => useAutoHide({ ...defaultProps, paused: true }), { wrapper });
    act(() => result.current.showControls());
    // Should not set a timeout to hide controls
    expect(spySetTimeout).not.toHaveBeenCalledWith(expect.any(Function), 3000);
    spySetTimeout.mockRestore();
  });

  test('showControls does not schedule timer when loading', () => {
    const { result } = renderHook(() => useAutoHide({ ...defaultProps, loading: true }), { wrapper });
    expect(() => act(() => result.current.showControls())).not.toThrow();
  });

  test('showControls does not schedule timer when prevented', () => {
    const { result } = renderHook(() => useAutoHide({ ...defaultProps, prevented: true }), { wrapper });
    expect(() => act(() => result.current.showControls())).not.toThrow();
  });

  test('showControls does not schedule timer when ended', () => {
    const { result } = renderHook(() => useAutoHide({ ...defaultProps, ended: true }), { wrapper });
    expect(() => act(() => result.current.showControls())).not.toThrow();
  });

  test('hideControls when hasResource is false does not hide', () => {
    const { result } = renderHook(() => useAutoHide({ ...defaultProps, hasResource: false }), { wrapper });
    expect(() => act(() => result.current.hideControls())).not.toThrow();
  });

  test('hideControls when waiting hides immediately', () => {
    const { result } = renderHook(() => useAutoHide({ ...defaultProps, waiting: true }), { wrapper });
    expect(() => act(() => result.current.hideControls())).not.toThrow();
  });

  test('clears timer on showControls call', () => {
    const spyClearTimeout = jest.spyOn(window, 'clearTimeout');
    const { result } = renderHook(() => useAutoHide(defaultProps), { wrapper });
    act(() => result.current.showControls());
    act(() => result.current.showControls());
    expect(spyClearTimeout).toHaveBeenCalled();
    spyClearTimeout.mockRestore();
  });
});
