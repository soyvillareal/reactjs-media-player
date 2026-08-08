import React from 'react';
import PropTypes from 'prop-types';

import { StyledKernel } from './TopState.styled';
import SpinnerLoading from '../Icons/SpinnerLoading';

/**
 * TopState renders top-level player state: kernel/error messages and,
 * optionally, a loading spinner.
 *
 * @param {boolean} showLoadingSpinner - When false, the built-in loading
 *   spinner is not rendered. Useful for skins (e.g. mobile) that display
 *   their own loading indicator elsewhere.
 */
const TopState = ({ hasResource, loading = false, kernelMsg = null }) => {
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
  showLoadingSpinner: PropTypes.bool,
};

export default React.memo(
  TopState,
  (p, n) =>
    p.hasResource === n.hasResource &&
    p.loading === n.loading &&
    p.kernelMsg === n.kernelMsg &&
    p.showLoadingSpinner === n.showLoadingSpinner,
);
