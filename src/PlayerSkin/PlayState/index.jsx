import React from 'react';
import PropTypes from 'prop-types';

import { StyledPlayButton } from './PlayState.styled';
import PlayIcon from '../Commons/Icons/PlayIcon';
import SpinnerLoading from '../Commons/Icons/SpinnerLoading';

const PlayState = ({ hasResource, loading, paused, ended, seeking, waiting, kernelMsg, onClick }) => {
  if (hasResource === false || loading || kernelMsg) {
    return null;
  }

  if (waiting || seeking) {
    return <SpinnerLoading />;
  } else {
    return (
      <StyledPlayButton showing={paused || ended} onClick={onClick}>
        <PlayIcon width="20%" height="100%" />
      </StyledPlayButton>
    );
  }
};

PlayState.propTypes = {
  hasResource: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  ended: PropTypes.bool.isRequired,
  seeking: PropTypes.bool.isRequired,
  waiting: PropTypes.bool.isRequired,
  kernelMsg: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(
  PlayState,
  (p, n) =>
    p.hasResource === n.hasResource &&
    p.loading === n.loading &&
    p.paused === n.paused &&
    p.ended === n.ended &&
    p.seeking === n.seeking &&
    p.waiting === n.waiting &&
    p.kernelMsg === n.kernelMsg &&
    p.onClick === n.onClick,
);
