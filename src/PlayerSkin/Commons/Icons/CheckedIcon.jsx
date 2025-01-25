import React from 'react';
import { compareProps, propTypes } from './Icons.constants';

const CheckedIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z" />
    </svg>
  );
};

CheckedIcon.displayName = 'CheckedIcon';

CheckedIcon.propTypes = propTypes;

export default React.memo(CheckedIcon, compareProps);
