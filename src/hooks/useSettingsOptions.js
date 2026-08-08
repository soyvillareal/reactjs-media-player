import React, { useEffect } from 'react';

import useAppSelector from './context/useAppSelector';
import useAppDispatch from './context/useAppDispatch';
import { initialSettings } from './hooks.constants';
import { buildSettingsLabel } from '../PlayerSkin/DesktopPlayerSkin/components/Controls/components/SettingsButton/DropdownOverlay.constants';
import { settingsOverlayFn } from '../PlayerSkin/DesktopPlayerSkin/components/Controls/components/SettingsButton/SettingsButton.constants';
import { buildIconProps } from '../PlayerSkin/Commons/constants';

const useSettingsOptions = ({ live, fullHDQualityBreak, qualities, playbackRate, changeSettings, fullscreen }) => {
  const { i18n } = useAppSelector();
  const dispatch = useAppDispatch();

  const dropdownRef = React.useRef(null);
  const [settings, setSettings] = React.useState(initialSettings);
  const [values, setValues] = React.useState({
    quality: {
      label: qualities[0]?.label ?? '',
      value: qualities[0]?.value ?? '',
      isFullHD: qualities[0]?.isFullHD ?? false,
    },
    speed: {
      label: i18n.normal,
      value: '1',
    },
  });

  useEffect(() => {
    const playbackRateStr = playbackRate.toString();
    setValues((prev) => ({
      ...prev,
      speed: {
        label: buildSettingsLabel({
          label: 'speed',
          value: playbackRateStr,
          i18n,
        }),
        value: playbackRateStr,
      },
    }));
  }, [i18n, playbackRate]);

  const handleButtonClick = React.useCallback(
    (e) => {
      e.stopPropagation();
      dispatch((state) => {
        const shouldClose = !state.subMenuVisible ? !state.menuVisible : false;
        return {
          menuVisible: shouldClose,
          subMenuVisible: false,
        };
      });
      setSettings((state) => ({
        ...initialSettings,
        generalMenu: !state.speed && !state.quality ? !state.generalMenu : false,
      }));
    },
    [dispatch],
  );

  const handleMenuClick = React.useCallback(
    (itemValue) => {
      return (value) => {
        setValues((prev) => ({
          ...prev,
          [itemValue]: {
            label: buildSettingsLabel({
              label: itemValue,
              value,
              i18n,
            }),
            value: value,
            isFullHD: fullHDQualityBreak !== undefined && Number(value ?? '0') >= fullHDQualityBreak,
          },
        }));
        dispatch({
          menuVisible: false,
          subMenuVisible: false,
        });
        setSettings(initialSettings);
      };
    },
    [fullHDQualityBreak, i18n, dispatch],
  );

  const handleMenuItemClick = React.useCallback(
    (itemValue) => {
      dispatch({
        menuVisible: false,
        subMenuVisible: true,
      });
      setSettings((prev) => ({
        ...prev,
        generalMenu: false,
        [itemValue]: true,
      }));
    },
    [dispatch],
  );

  const handleGoBack = React.useCallback(
    (itemValue) => {
      return () => {
        dispatch({
          menuVisible: true,
          subMenuVisible: false,
        });
        setSettings((prev) => ({
          ...prev,
          generalMenu: true,
          [itemValue]: false,
        }));
      };
    },
    [dispatch],
  );

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch({
          menuVisible: false,
          subMenuVisible: false,
        });
        setSettings(initialSettings);
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [dispatch]);

  const settingsOptions = React.useMemo(() => {
    return settingsOverlayFn({
      qualityOptions: qualities,
      live,
      i18n,
    });
  }, [live, qualities, i18n]);

  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  // Track previous values to only call changeSettings when user makes a selection
  const prevValuesRef = React.useRef(values);
  React.useEffect(() => {
    const prev = prevValuesRef.current;
    if (prev !== values) {
      prevValuesRef.current = values;
      const changed = {};
      if (prev.speed?.value !== values.speed?.value) {
        changed.speed = values.speed;
      }
      if (prev.quality?.value !== values.quality?.value) {
        changed.quality = values.quality;
      }
      if (changed.speed || changed.quality) {
        changeSettings(changed);
      }
    }
  }, [values, changeSettings]);

  return {
    dropdownRef,
    settings,
    values,
    iconProps,
    settingsOptions,
    handleButtonClick,
    handleMenuItemClick,
    handleMenuClick,
    handleGoBack,
  };
};

export default useSettingsOptions;
