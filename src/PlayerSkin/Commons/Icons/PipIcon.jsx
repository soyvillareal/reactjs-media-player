import React from 'react';
import { compareProps, propTypes } from './Icons.constants';

const PipIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="currentColor">
      <path d="M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z" />
    </svg>
  );
};

PipIcon.displayName = 'PipIcon';

PipIcon.propTypes = propTypes;

export default React.memo(PipIcon, compareProps);
