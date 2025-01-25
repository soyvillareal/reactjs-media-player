import React from 'react';
import PropTypes from 'prop-types';

import { StyledControlText, StyledLiveDot } from './PlayTime.styled';
import { formatTime } from '../../utils';
import useAppSelector from '../../hooks/context/useAppSelector';

const PlayTime = ({ live, duration, currentTime }) => {
  const { i18n } = useAppSelector();

  return (
    <StyledControlText role="timer" aria-live="off">
      {formatTime(Math.round(currentTime))}
      {live ? (
        <StyledControlText>
          <StyledLiveDot />
          {i18n.live}
        </StyledControlText>
      ) : (
        ` / ${formatTime(Math.round(duration))}`
      )}
    </StyledControlText>
  );
};

PlayTime.propTypes = {
  live: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default React.memo(
  PlayTime,
  (p, n) => p.live === n.live && p.duration === n.duration && p.currentTime === n.currentTime,
);
