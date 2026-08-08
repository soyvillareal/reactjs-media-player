import React from 'react';
import PropTypes from 'prop-types';

import { StyledMobileTopBar, StyledMobileSettingsButton } from './MobileTopBar.styled';
import { SettingsGearIcon } from '../../icons';

const MobileTopBar = ({ visible, onOpenSettings, settingsLabel }) => (
  <StyledMobileTopBar visible={visible}>
    <StyledMobileSettingsButton onClick={onOpenSettings} aria-label={settingsLabel}>
      <SettingsGearIcon />
    </StyledMobileSettingsButton>
  </StyledMobileTopBar>
);

MobileTopBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOpenSettings: PropTypes.func.isRequired,
  settingsLabel: PropTypes.string.isRequired,
};

export default React.memo(MobileTopBar);
