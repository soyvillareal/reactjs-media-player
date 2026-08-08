import { buildSettingsLabel } from '../../src/PlayerSkin/DesktopPlayerSkin/components/Controls/components/SettingsButton/DropdownOverlay.constants';
import { settingsOverlayFn } from '../../src/PlayerSkin/DesktopPlayerSkin/components/Controls/components/SettingsButton/SettingsButton.constants';
import en from '../../src/i18n/en';

describe('buildSettingsLabel', () => {
  test('returns quality label as "<value>p" for quality type', () => {
    expect(buildSettingsLabel({ label: 'quality', value: '720', i18n: en })).toBe('720p');
  });

  test('returns i18n.normal for speed "1"', () => {
    expect(buildSettingsLabel({ label: 'speed', value: '1', i18n: en })).toBe(en.normal);
  });

  test('returns raw value for speed != 1', () => {
    expect(buildSettingsLabel({ label: 'speed', value: '1.5', i18n: en })).toBe('1.5');
  });

  test('returns raw value for unknown label', () => {
    expect(buildSettingsLabel({ label: 'other', value: 'foo', i18n: en })).toBe('foo');
  });
});

describe('settingsOverlayFn', () => {
  test('includes speed option when not live', () => {
    const options = settingsOverlayFn({ qualityOptions: [], live: false, i18n: en });
    const speedOption = options.find((o) => o.value === 'speed');
    expect(speedOption).toBeDefined();
    expect(speedOption.label).toBe(en.speed);
  });

  test('does not include speed option when live', () => {
    const options = settingsOverlayFn({ qualityOptions: [], live: true, i18n: en });
    const speedOption = options.find((o) => o.value === 'speed');
    expect(speedOption).toBeUndefined();
  });

  test('includes quality option when qualityOptions is non-empty', () => {
    const qualityOptions = [{ label: '720p', value: '720', isFullHD: false }];
    const options = settingsOverlayFn({ qualityOptions, live: false, i18n: en });
    const qualityOption = options.find((o) => o.value === 'quality');
    expect(qualityOption).toBeDefined();
    expect(qualityOption.options).toBe(qualityOptions);
  });

  test('does not include quality option when qualityOptions is empty', () => {
    const options = settingsOverlayFn({ qualityOptions: [], live: false, i18n: en });
    const qualityOption = options.find((o) => o.value === 'quality');
    expect(qualityOption).toBeUndefined();
  });

  test('speed options include correct values', () => {
    const options = settingsOverlayFn({ qualityOptions: [], live: false, i18n: en });
    const speedOption = options.find((o) => o.value === 'speed');
    const values = speedOption.options.map((o) => o.value);
    expect(values).toContain('2');
    expect(values).toContain('1');
    expect(values).toContain('0.5');
    expect(values).toContain('0.25');
  });

  test('returns empty array when live and no quality options', () => {
    const options = settingsOverlayFn({ qualityOptions: [], live: true, i18n: en });
    expect(options).toHaveLength(0);
  });
});
