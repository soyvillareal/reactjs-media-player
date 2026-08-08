import React from 'react';
import { compareProps, propTypes } from './Icons.constants';

const UnfullscreenIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="currentColor">
      <path d="M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"></path>
    </svg>
  );
};

UnfullscreenIcon.displayName = 'UnfullscreenIcon';

UnfullscreenIcon.propTypes = propTypes;

export default React.memo(UnfullscreenIcon, compareProps);
