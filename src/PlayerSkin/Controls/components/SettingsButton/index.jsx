import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownContentValue,
  StyledDropdownItem,
  StyledDropdownList,
  StyledDropdownOverlay,
  StyledDropdownTitle,
  StyledDropdownValue,
} from './SettingsButton.styled';
import StyledGeneralButton from '../../../Commons/Buttons/StyledGeneralButton';
import SettingsIcon from '../../../Commons/Icons/SetttingsIcon';
import ArrowRightIcon from '../../../Commons/Icons/ArrowRightIcon';
import { StyledDropdownOverlayScrolled } from './DropdownOverlay/DropdownOverlay.styled';
import useAppSelector from '../../../../hooks/context/useAppSelector';
import useSettingsOptions from '../../../../hooks/useSettingsOptions';

const SettingsButton = ({ live, qualities, playbackRate, fullHDQualityBreak, changeSettings, fullscreen }) => {
  const { i18n } = useAppSelector();

  const {
    dropdownRef,
    settings,
    values,
    iconProps,
    settingsOptions,
    handleButtonClick,
    handleMenuItemClick,
    handleMenuClick,
    handleGoBack,
  } = useSettingsOptions({
    live,
    fullHDQualityBreak,
    qualities,
    playbackRate,
    changeSettings,
    fullscreen,
  });

  return (
    <StyledDropdownContainer ref={dropdownRef}>
      <StyledDropdownButton
        type="button"
        aria-label={i18n.settings}
        title={i18n.settings}
        aria-expanded={settings.generalMenu}
        onClick={handleButtonClick}
        isFullscreen={fullscreen}
        isFullHD={values.quality?.isFullHD}
        isExpanded={settings.generalMenu}
        isTooltipActive
      >
        <SettingsIcon {...iconProps} />
      </StyledDropdownButton>
      <StyledDropdownOverlay
        hiding={settings.generalMenu}
        singleOption={live || qualities.length === 0}
        isFullscreen={fullscreen}
      >
        <StyledDropdownList>
          {settingsOptions.map((item, i) => (
            <StyledDropdownItem key={i}>
              <StyledGeneralButton onClick={() => handleMenuItemClick(item.value)} isFullscreen={fullscreen} isText>
                <StyledDropdownTitle>{item.label}</StyledDropdownTitle>
                <StyledDropdownContentValue>
                  <StyledDropdownValue>{values[item.value]?.label}</StyledDropdownValue>
                  <ArrowRightIcon width={28} height={28} />
                </StyledDropdownContentValue>
              </StyledGeneralButton>
            </StyledDropdownItem>
          ))}
        </StyledDropdownList>
      </StyledDropdownOverlay>
      {settingsOptions.map((item, i) => (
        <StyledDropdownOverlayScrolled
          key={i}
          hiding={settings[item.value]}
          title={item.label}
          options={item.options}
          value={values[item.value]?.value}
          isFullscreen={fullscreen}
          onClick={handleMenuClick(item.value)}
          goBack={handleGoBack(item.value)}
        />
      ))}
    </StyledDropdownContainer>
  );
};

SettingsButton.propTypes = {
  live: PropTypes.bool.isRequired,
  qualities: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  playbackRate: PropTypes.number.isRequired,
  fullHDQualityBreak: PropTypes.number,
  changeSettings: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(
  SettingsButton,
  (p, n) =>
    p.live === n.live &&
    p.qualities === n.qualities &&
    p.playbackRate === n.playbackRate &&
    p.fullHDQualityBreak === n.fullHDQualityBreak &&
    p.changeSettings === n.changeSettings &&
    p.fullscreen === n.fullscreen,
);
