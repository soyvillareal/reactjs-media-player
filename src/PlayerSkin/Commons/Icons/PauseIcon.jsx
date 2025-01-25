import React from 'react';
import { compareProps, propTypes } from './Icons.constants';

const PauseIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg height={width} width={height} version="1.1" viewBox="0 0 36 36" fill="currentColor">
      <rect x="12" y="10" width="3" height="16"></rect>
      <rect x="21" y="10" width="3" height="16"></rect>
    </svg>
  );
};

PauseIcon.displayName = 'PauseIcon';

PauseIcon.propTypes = propTypes;

export default React.memo(PauseIcon, compareProps);
