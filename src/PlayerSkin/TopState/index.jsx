import React from 'react';
import PropTypes from 'prop-types';

import { StyledKernel } from './TopState.styled';
import SpinnerLoading from '../Commons/Icons/SpinnerLoading';

const TopState = ({ hasResource, loading, kernelMsg = null }) => {
  if (hasResource === false) {
    return null;
  }

  if (kernelMsg) {
    return (
      <StyledKernel>
        {kernelMsg.type}: {kernelMsg.detail}
      </StyledKernel>
    );
  }

  if (loading) {
    return <SpinnerLoading />;
  }
  return null;
};

TopState.propTypes = {
  hasResource: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  kernelMsg: PropTypes.object,
};

export default React.memo(
  TopState,
  (p, n) => p.hasResource === n.hasResource && p.loading === n.loading && p.kernelMsg === n.kernelMsg,
);
