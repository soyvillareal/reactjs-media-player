import React from 'react';
import styled, { css } from 'styled-components';

export const StyledMobilePlayerSkin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  touch-action: manipulation;
  font-family: Helvetica, Arial, sans-serif;
`;

const Overlay = React.forwardRef(({ visible, ...rest }, ref) => <div ref={ref} {...rest} />);
Overlay.displayName = 'Overlay';

export const StyledOverlay = styled(Overlay)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;
