import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useSettingsOptions from '../../src/hooks/useSettingsOptions';
import { AppContextProvider } from '../../src/context/AppContextProvider';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

const qualityOptions = [
  { label: '1080p', value: '1080', isFullHD: true },
  { label: '720p', value: '720', isFullHD: false },
];

describe('useSettingsOptions', () => {
  const defaults = {
    live: false,
    fullHDQualityBreak: 1080,
    qualities: qualityOptions,
    playbackRate: 1,
    changeSettings: jest.fn(),
    fullscreen: false,
  };

  beforeEach(() => jest.clearAllMocks());

  test('returns expected properties', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    expect(result.current.dropdownRef).toBeDefined();
    expect(result.current.settings).toBeDefined();
    expect(result.current.values).toBeDefined();
    expect(result.current.settingsOptions).toBeDefined();
    expect(typeof result.current.handleButtonClick).toBe('function');
    expect(typeof result.current.handleMenuClick).toBe('function');
    expect(typeof result.current.handleMenuItemClick).toBe('function');
    expect(typeof result.current.handleGoBack).toBe('function');
  });

  test('initial settings has generalMenu, speed, quality as false', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    expect(result.current.settings.generalMenu).toBe(false);
    expect(result.current.settings.speed).toBe(false);
    expect(result.current.settings.quality).toBe(false);
  });

  test('settingsOptions includes speed when not live', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const speedOption = result.current.settingsOptions.find((o) => o.value === 'speed');
    expect(speedOption).toBeDefined();
  });

  test('settingsOptions excludes speed when live', () => {
    const { result } = renderHook(() => useSettingsOptions({ ...defaults, live: true }), { wrapper });
    const speedOption = result.current.settingsOptions.find((o) => o.value === 'speed');
    expect(speedOption).toBeUndefined();
  });

  test('settingsOptions includes quality when qualityOptions provided', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const qualOption = result.current.settingsOptions.find((o) => o.value === 'quality');
    expect(qualOption).toBeDefined();
  });

  test('handleButtonClick toggles generalMenu', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const mockEvent = { stopPropagation: jest.fn() };
    act(() => result.current.handleButtonClick(mockEvent));
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  test('handleMenuItemClick opens submenu for given item', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    act(() => result.current.handleMenuItemClick('speed'));
    expect(result.current.settings.speed).toBe(true);
    expect(result.current.settings.generalMenu).toBe(false);
  });

  test('handleGoBack returns a function that resets to general menu', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    act(() => result.current.handleMenuItemClick('speed'));
    const goBack = result.current.handleGoBack('speed');
    act(() => goBack());
    expect(result.current.settings.generalMenu).toBe(true);
    expect(result.current.settings.speed).toBe(false);
  });

  test('handleMenuClick returns a function that updates values', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const handler = result.current.handleMenuClick('speed');
    act(() => handler('1.5'));
    expect(result.current.values.speed.value).toBe('1.5');
  });

  test('handleMenuClick marks quality as fullHD when above threshold', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const handler = result.current.handleMenuClick('quality');
    act(() => handler('1080'));
    expect(result.current.values.quality.isFullHD).toBe(true);
  });

  test('values.speed label is Normal for playbackRate 1', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    expect(result.current.values.speed.label).toBe('Normal');
  });

  test('iconProps adjusts for fullscreen', () => {
    const { result } = renderHook(
      () => useSettingsOptions({ ...defaults, fullscreen: true }),
      { wrapper },
    );
    expect(result.current.iconProps.width).toBe(54);
  });

  test('changeSettings is called when values change via user interaction', () => {
    const changeSettings = jest.fn();
    const { result } = renderHook(() => useSettingsOptions({ ...defaults, changeSettings }), { wrapper });
    // Simulate user changing speed
    const handler = result.current.handleMenuClick('speed');
    act(() => handler('1.5'));
    expect(changeSettings).toHaveBeenCalled();
  });
});
