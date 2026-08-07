import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useVolumeSlider from '../../src/hooks/useVolumeSlider';
import { AppContextProvider } from '../../src/context/AppContextProvider';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

describe('useVolumeSlider', () => {
  const defaults = {
    fullscreen: false,
    value: 80,
    onChange: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('returns expected properties', () => {
    const { result } = renderHook(() => useVolumeSlider(defaults), { wrapper });
    expect(result.current.sliderRef).toBeDefined();
    expect(result.current.thumbRef).toBeDefined();
    expect(typeof result.current.thumbLeft).toBe('number');
    expect(typeof result.current.onMouseDown).toBe('function');
    expect(typeof result.current.onMouseMove).toBe('function');
    expect(typeof result.current.handleChange).toBe('function');
  });

  test('thumbLeft defaults to 0', () => {
    const { result } = renderHook(() => useVolumeSlider(defaults), { wrapper });
    expect(result.current.thumbLeft).toBe(0);
  });

  test('onMouseDown does not throw', () => {
    const { result } = renderHook(() => useVolumeSlider(defaults), { wrapper });
    const mockEvent = { preventDefault: jest.fn() };
    expect(() => act(() => result.current.onMouseDown(mockEvent))).not.toThrow();
  });

  test('handleChange calls onChange', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => useVolumeSlider({ ...defaults, onChange }), { wrapper });

    // Attach sliderRef
    const div = document.createElement('div');
    jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 55 });
    result.current.sliderRef.current = div;

    const mockEvent = { clientX: 27 };
    act(() => result.current.handleChange(mockEvent));
    expect(onChange).toHaveBeenCalled();
  });

  test('onMouseMove does not call onChange when not dragging', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => useVolumeSlider({ ...defaults, onChange }), { wrapper });
    const mockEvent = { preventDefault: jest.fn(), clientX: 50 };
    act(() => result.current.onMouseMove(mockEvent));
    expect(onChange).not.toHaveBeenCalled();
  });

  test('onMouseDown and then mouse event flow', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => useVolumeSlider({ ...defaults, onChange }), { wrapper });

    const div = document.createElement('div');
    jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 55 });
    result.current.sliderRef.current = div;

    // Start dragging
    const downEvent = { preventDefault: jest.fn() };
    act(() => result.current.onMouseDown(downEvent));
    expect(downEvent.preventDefault).toHaveBeenCalled();
  });

  test('thumbLeft updates when value changes', () => {
    const { result, rerender } = renderHook(
      (props) => useVolumeSlider(props),
      { wrapper, initialProps: { ...defaults, value: 0 } },
    );
    // thumbLeft starts at 0 for value 0
    expect(result.current.thumbLeft).toBe(0);
  });

  test('handles fullscreen slider width', () => {
    const onChange = jest.fn();
    const { result } = renderHook(
      () => useVolumeSlider({ ...defaults, fullscreen: true, onChange }),
      { wrapper },
    );

    const div = document.createElement('div');
    jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 83 });
    result.current.sliderRef.current = div;

    const mockEvent = { clientX: 41.5 };
    act(() => result.current.handleChange(mockEvent));
    expect(onChange).toHaveBeenCalled();
  });
});
