import React from 'react';
import { compareProps, propTypes } from './Icons.constants';

const PlayIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg height={height} width={width} viewBox="0 0 36 36" fill="currentColor">
      <path d="M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"></path>
    </svg>
  );
};

PlayIcon.displayName = 'PlayIcon';

PlayIcon.propTypes = propTypes;

export default React.memo(PlayIcon, compareProps);
