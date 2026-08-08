import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledSkipOverlay,
  StyledSkipIconContainer,
  StyledSkipText,
  StyledSkipTapArea,
} from './MobilePlayerSkin.styled';

const SkipChevron = () => (
  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" width="20" height="20">
    <path fill="#ccc" d="M8 5v14l11-7z" />
  </svg>
);

const SkipOverlay = ({ skipState, onTapLeft, onTapRight, i18n }) => {
  const secondsLabel = i18n?.seconds || 'seconds';

  return (
    <>
      <StyledSkipTapArea direction="backward" onClick={onTapLeft} aria-label="Skip backward" />
      <StyledSkipTapArea direction="forward" onClick={onTapRight} aria-label="Skip forward" />

      {skipState.visible && skipState.direction === 'backward' && (
        <StyledSkipOverlay direction="backward" visible>
          <StyledSkipIconContainer direction="backward">
            <SkipChevron />
            <SkipChevron />
            <SkipChevron />
          </StyledSkipIconContainer>
          <StyledSkipText>
            {skipState.seconds} {secondsLabel}
          </StyledSkipText>
        </StyledSkipOverlay>
      )}

      {skipState.visible && skipState.direction === 'forward' && (
        <StyledSkipOverlay direction="forward" visible>
          <StyledSkipIconContainer direction="forward">
            <SkipChevron />
            <SkipChevron />
            <SkipChevron />
          </StyledSkipIconContainer>
          <StyledSkipText>
            {skipState.seconds} {secondsLabel}
          </StyledSkipText>
        </StyledSkipOverlay>
      )}
    </>
  );
};

SkipOverlay.propTypes = {
  skipState: PropTypes.shape({
    direction: PropTypes.oneOf(['forward', 'backward', null]),
    visible: PropTypes.bool.isRequired,
    seconds: PropTypes.number.isRequired,
  }).isRequired,
  onTapLeft: PropTypes.func.isRequired,
  onTapRight: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    seconds: PropTypes.string,
  }),
};

export default React.memo(SkipOverlay);
