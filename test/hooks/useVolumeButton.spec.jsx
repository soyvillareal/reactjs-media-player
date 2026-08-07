import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useVolumeButton from '../../src/hooks/useVolumeButton';
import { AppContextProvider } from '../../src/context/AppContextProvider';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

describe('useVolumeButton', () => {
  const defaults = {
    fullscreen: false,
    isMuted: false,
    volume: 0.8,
    forceMuted: false,
    changeVolume: jest.fn(),
    onMutedClick: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('returns expected functions and values', () => {
    const { result } = renderHook(() => useVolumeButton(defaults), { wrapper });
    expect(typeof result.current.titleMemorized).toBe('string');
    expect(typeof result.current.renderIcon).toBe('function');
    expect(typeof result.current.handleOnClick).toBe('function');
    expect(typeof result.current.handleChange).toBe('function');
  });

  test('titleMemorized is mute label when not muted', () => {
    const { result } = renderHook(() => useVolumeButton({ ...defaults, isMuted: false, volume: 0.8 }), { wrapper });
    expect(result.current.titleMemorized).toContain('Mute');
  });

  test('titleMemorized is activateSound when muted', () => {
    const { result } = renderHook(() => useVolumeButton({ ...defaults, isMuted: true }), { wrapper });
    expect(result.current.titleMemorized).toBe('Activate sound');
  });

  test('titleMemorized is thisVideoHasNoSound when forceMuted', () => {
    const { result } = renderHook(
      () => useVolumeButton({ ...defaults, forceMuted: true }),
      { wrapper },
    );
    expect(result.current.titleMemorized).toBe('This video has no sound');
  });

  test('titleMemorized is activateSound when volume is 0', () => {
    const { result } = renderHook(() => useVolumeButton({ ...defaults, volume: 0 }), { wrapper });
    expect(result.current.titleMemorized).toBe('Activate sound');
  });

  test('renderIcon returns a React element', () => {
    const { result } = renderHook(() => useVolumeButton(defaults), { wrapper });
    const icon = result.current.renderIcon();
    expect(React.isValidElement(icon)).toBe(true);
  });

  test('renderIcon returns muted icon when muted', () => {
    const { result } = renderHook(
      () => useVolumeButton({ ...defaults, isMuted: true }),
      { wrapper },
    );
    const icon = result.current.renderIcon();
    expect(React.isValidElement(icon)).toBe(true);
  });

  test('handleChange calls changeVolume with value/100 when not forceMuted', () => {
    const changeVolume = jest.fn();
    const { result } = renderHook(
      () => useVolumeButton({ ...defaults, changeVolume, forceMuted: false }),
      { wrapper },
    );
    act(() => result.current.handleChange(50));
    expect(changeVolume).toHaveBeenCalledWith(0.5);
  });

  test('handleChange does not call changeVolume when forceMuted', () => {
    const changeVolume = jest.fn();
    const { result } = renderHook(
      () => useVolumeButton({ ...defaults, changeVolume, forceMuted: true }),
      { wrapper },
    );
    act(() => result.current.handleChange(50));
    expect(changeVolume).not.toHaveBeenCalled();
  });

  test('handleOnClick calls onMutedClick when not forceMuted', () => {
    const onMutedClick = jest.fn();
    const { result } = renderHook(
      () => useVolumeButton({ ...defaults, onMutedClick, forceMuted: false }),
      { wrapper },
    );
    act(() => result.current.handleOnClick());
    expect(onMutedClick).toHaveBeenCalled();
  });

  test('handleOnClick does not call onMutedClick when forceMuted', () => {
    const onMutedClick = jest.fn();
    const { result } = renderHook(
      () => useVolumeButton({ ...defaults, onMutedClick, forceMuted: true }),
      { wrapper },
    );
    act(() => result.current.handleOnClick());
    expect(onMutedClick).not.toHaveBeenCalled();
  });
});
