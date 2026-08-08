import React from 'react';
import styled from 'styled-components';

import { backdropImg } from './Controls.constants';

const Controls = React.forwardRef(({ hiding, ...rest }, ref) => <div ref={ref} {...rest} />);

Controls.displayName = 'Controls';

export const StyledControls = styled(Controls)`
  display: flex;
  bottom: 0;
  position: absolute;
  width: 100%;
  transition: opacity 0.3s;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    z-index: 4;
    width: 100%;
    height: 2000%;
    pointer-events: none;
    background-repeat: repeat-x;
    background-position: bottom;
    background-image: url(${backdropImg});
    transition: opacity 0.3s;
  }
  ${({ hiding }) => {
    return hiding
      ? `
      opacity: 0;
    `
      : `
      opacity: 1;
    `;
  }}
`;
