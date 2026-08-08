import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileCenterControls,
  StyledMobilePlayButton,
  StyledMobileNavButton,
  StyledMobileSpinner,
} from './MobileCenterControls.styled';
import { PlayIcon, PauseIcon, PrevIcon, NextIcon } from '../../icons';

const MobileCenterControls = ({ visible, isLoading, paused, ended, onPlayPause, i18n }) => (
  <StyledMobileCenterControls visible={visible}>
    <StyledMobileNavButton
      aria-label={i18n.previous || 'Previous'}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <PrevIcon />
    </StyledMobileNavButton>

    {isLoading ? (
      <StyledMobileSpinner onClick={(e) => e.stopPropagation()}>
        <div />
      </StyledMobileSpinner>
    ) : (
      <StyledMobilePlayButton
        aria-label={paused ? i18n.play : i18n.pause}
        onClick={(e) => {
          e.stopPropagation();
          onPlayPause();
        }}
      >
        {paused || ended ? <PlayIcon /> : <PauseIcon />}
      </StyledMobilePlayButton>
    )}

    <StyledMobileNavButton
      aria-label={i18n.next || 'Next'}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <NextIcon />
    </StyledMobileNavButton>
  </StyledMobileCenterControls>
);

MobileCenterControls.propTypes = {
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  ended: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    previous: PropTypes.string,
    next: PropTypes.string,
    play: PropTypes.string,
    pause: PropTypes.string,
  }).isRequired,
};

export default React.memo(MobileCenterControls);
