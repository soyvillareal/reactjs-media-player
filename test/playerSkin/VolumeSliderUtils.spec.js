import { getVolume } from '../../src/PlayerSkin/DesktopPlayerSkin/components/Controls/components/VolumeSlider/utils';

describe('VolumeSlider utils - getVolume', () => {
  const makeSliderRef = (left, width) => ({
    current: {
      getBoundingClientRect: () => ({ left, width }),
    },
  });

  test('returns 0 when sliderRef.current is null', () => {
    expect(getVolume({ clientX: 100, sliderRef: { current: null }, isFullcreen: false })).toBe(0);
  });

  test('returns 0 when clientX is at the left edge', () => {
    const sliderRef = makeSliderRef(50, 55);
    expect(getVolume({ clientX: 50, sliderRef, isFullcreen: false })).toBe(0);
  });

  test('returns 100 when clientX is at or past the right edge', () => {
    const sliderRef = makeSliderRef(0, 55);
    // sliderWith(false) = 55, clientX = 55, offsetX = 55, percentage = 100
    expect(getVolume({ clientX: 55, sliderRef, isFullcreen: false })).toBe(100);
  });

  test('clamps to 0 when clientX is before left edge', () => {
    const sliderRef = makeSliderRef(50, 55);
    expect(getVolume({ clientX: 10, sliderRef, isFullcreen: false })).toBe(0);
  });

  test('clamps to 100 when clientX is past right edge', () => {
    const sliderRef = makeSliderRef(0, 55);
    expect(getVolume({ clientX: 200, sliderRef, isFullcreen: false })).toBe(100);
  });

  test('returns ~50% for midpoint in normal mode', () => {
    // sliderWith(false) = 55, left = 0, clientX = 27.5
    const sliderRef = makeSliderRef(0, 55);
    const result = getVolume({ clientX: 27.5, sliderRef, isFullcreen: false });
    expect(result).toBeCloseTo(50, 0);
  });

  test('uses fullscreen slider width when isFullcreen is true', () => {
    // sliderWith(true) = 83, left = 0, clientX = 83
    const sliderRef = makeSliderRef(0, 83);
    expect(getVolume({ clientX: 83, sliderRef, isFullcreen: true })).toBe(100);
  });
});
