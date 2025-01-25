import React from 'react';
import PropTypes from 'prop-types';

import { StyledMutedIcon, StyledPeventedTip, StyledPeventedTipClicked, StyledPlayCircle } from './PreventedTip.styled';
import useAppSelector from '../../hooks/context/useAppSelector';

const PreventedTip = ({ hasResource = false, prevented, paused, muted, currentTime, onClick }) => {
  const { i18n } = useAppSelector();

  const [preventedClicked, setPreventedClicked] = React.useState(false);

  const handleClick = (e) => {
    setPreventedClicked(true);
    onClick(e);
  };

  const renderPreventedClickedTip = React.useCallback(() => {
    if (hasResource === false || prevented === false || paused) {
      return null;
    }

    if (muted === true && !preventedClicked) {
      return (
        <React.Fragment key="preventedClickedTip">
          <StyledPeventedTipClicked onClick={handleClick} />
          <StyledPeventedTip>
            <StyledMutedIcon />
            {i18n.clickToUnmute}
          </StyledPeventedTip>
        </React.Fragment>
      );
    }

    return null;
  }, [hasResource, prevented, preventedClicked]);

  const renderPreventedTip = React.useCallback(() => {
    if (hasResource === false || prevented === false) {
      return null;
    }

    if (currentTime === 0 && paused) {
      return (
        <React.Fragment key="preventedTip">
          <StyledPeventedTip>
            <StyledPlayCircle />
            {i18n.playbackStuckClickResumePlayback}
          </StyledPeventedTip>
        </React.Fragment>
      );
    }

    return null;
  }, [currentTime, paused]);

  return [renderPreventedTip(), renderPreventedClickedTip()];
};

PreventedTip.propTypes = {
  hasResource: PropTypes.bool.isRequired,
  prevented: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  currentTime: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(
  PreventedTip,
  (p, n) =>
    p.hasResource === n.hasResource &&
    p.prevented === n.prevented &&
    p.paused === n.paused &&
    p.muted === n.muted &&
    p.currentTime === n.currentTime &&
    p.onClick === n.onClick,
);
