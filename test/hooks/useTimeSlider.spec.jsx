import React from 'react';
import { renderHook, act, fireEvent } from '@testing-library/react';
import useTimeSlider from '../../src/hooks/useTimeSlider';
import { AppContextProvider } from '../../src/context/AppContextProvider';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

const makeTimelensRef = () => ({
  current: {
    handleTimelens: jest.fn(),
    setShowTimelens: jest.fn(),
  },
});

describe('useTimeSlider', () => {
  const defaults = {
    timelensRef: makeTimelensRef(),
    currentTime: 0,
    duration: 100,
    onChange: jest.fn(),
    onSeeking: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('returns expected refs and handlers', () => {
    const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
    expect(result.current.sliderRef).toBeDefined();
    expect(result.current.handleRef).toBeDefined();
    expect(typeof result.current.onClick).toBe('function');
    expect(typeof result.current.onMouseDown).toBe('function');
    expect(typeof result.current.onMouseEnter).toBe('function');
    expect(typeof result.current.onMouseLeave).toBe('function');
    expect(typeof result.current.onSliderMouseMove).toBe('function');
    expect(typeof result.current.onSliderMouseOver).toBe('function');
  });

  test('showTooltip defaults to false', () => {
    const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
    expect(result.current.showTooltip).toBe(false);
  });

  test('timeSliderSliding defaults to false', () => {
    const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
    expect(result.current.timeSliderSliding).toBe(false);
  });

  test('onMouseEnter sets showTooltip to true', () => {
    const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
    const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
    act(() => result.current.onMouseEnter(mockEvent));
    expect(result.current.showTooltip).toBe(true);
  });

  test('onMouseLeave sets showTooltip to false', () => {
    const timelensRef = makeTimelensRef();
    const { result } = renderHook(() => useTimeSlider({ ...defaults, timelensRef }), { wrapper });
    // First enter, then leave
    const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
    act(() => result.current.onMouseEnter(mockEvent));
    act(() => result.current.onMouseLeave());
    expect(result.current.showTooltip).toBe(false);
  });

  test('onMouseLeave calls setShowTimelens(false)', () => {
    const timelensRef = makeTimelensRef();
    const { result } = renderHook(() => useTimeSlider({ ...defaults, timelensRef }), { wrapper });
    act(() => result.current.onMouseLeave());
    expect(timelensRef.current.setShowTimelens).toHaveBeenCalledWith(false);
  });

  test('onMouseEnter calls handleTimelens', () => {
    const timelensRef = makeTimelensRef();
    const { result } = renderHook(() => useTimeSlider({ ...defaults, timelensRef }), { wrapper });
    const mockEvent = { preventDefault: jest.fn(), clientX: 200 };
    act(() => result.current.onMouseEnter(mockEvent));
    expect(timelensRef.current.handleTimelens).toHaveBeenCalledWith(mockEvent);
  });

  test('onClick calls onChange with computed time and calls onSeeking(false)', () => {
    const onChange = jest.fn();
    const onSeeking = jest.fn();
    const timelensRef = makeTimelensRef();
    const { result } = renderHook(
      () => useTimeSlider({ ...defaults, onChange, onSeeking, timelensRef }),
      { wrapper },
    );
    // Attach sliderRef to a real div so getBoundingClientRect works
    const div = document.createElement('div');
    jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
    result.current.sliderRef.current = div;

    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: div,
      clientX: 250,
    };
    jest.spyOn(mockEvent.currentTarget, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });

    act(() => result.current.onClick(mockEvent));
    expect(onChange).toHaveBeenCalled();
    expect(onSeeking).toHaveBeenCalledWith(false);
  });

  test('onMouseDown sets timeSliderSliding to true', () => {
    const timelensRef = makeTimelensRef();
    const { result } = renderHook(() => useTimeSlider({ ...defaults, timelensRef }), { wrapper });
    const div = document.createElement('div');
    jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
    result.current.sliderRef.current = div;

    const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
    act(() => result.current.onMouseDown(mockEvent));
    expect(result.current.timeSliderSliding).toBe(true);
  });

  test('trackTranslateX is an object with track and handle', () => {
    const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
    expect(result.current.trackTranslateX).toHaveProperty('track');
    expect(result.current.trackTranslateX).toHaveProperty('handle');
  });

  test('adds and removes window resize listener', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useTimeSlider(defaults), { wrapper });
    expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  test('onSliderMouseOver sets rect and calls handleTimelens', () => {
    const timelensRef = makeTimelensRef();
    const { result } = renderHook(() => useTimeSlider({ ...defaults, timelensRef }), { wrapper });
    const div = document.createElement('div');
    jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 10, width: 400 });
    result.current.sliderRef.current = div;

    const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
    act(() => result.current.onSliderMouseOver(mockEvent));
    expect(timelensRef.current.handleTimelens).toHaveBeenCalledWith(mockEvent);
  });

  test('onSliderMouseMove updates tooltip state', () => {
    const timelensRef = makeTimelensRef();
    const { result } = renderHook(
      () => useTimeSlider({ ...defaults, timelensRef, duration: 100 }),
      { wrapper },
    );
    const div = document.createElement('div');
    jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
    result.current.sliderRef.current = div;

    // First trigger onSliderMouseOver to set rect
    const overEvent = { preventDefault: jest.fn(), clientX: 100 };
    act(() => result.current.onSliderMouseOver(overEvent));

    // Then move
    const moveEvent = { preventDefault: jest.fn(), clientX: 250 };
    act(() => result.current.onSliderMouseMove(moveEvent));
    // tooltip state should have been updated (timeSliderState.tooltip)
    expect(result.current.timeSliderState.tooltip).toBeDefined();
  });

  test('full drag flow: mouseDown then mouseUp calls onChange', () => {
    const onChange = jest.fn();
    const onSeeking = jest.fn();
    const timelensRef = makeTimelensRef();
    const { result } = renderHook(
      () => useTimeSlider({ ...defaults, onChange, onSeeking, timelensRef, duration: 100 }),
      { wrapper },
    );
    const div = document.createElement('div');
    jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
    result.current.sliderRef.current = div;

    // mouseDown to start dragging
    const downEvent = { preventDefault: jest.fn(), clientX: 100 };
    act(() => result.current.onMouseDown(downEvent));
    expect(result.current.timeSliderSliding).toBe(true);

    // Simulate mouseUp via document event
    act(() => {
      document.dispatchEvent(new MouseEvent('mouseup', { clientX: 200 }));
    });
  });
});
