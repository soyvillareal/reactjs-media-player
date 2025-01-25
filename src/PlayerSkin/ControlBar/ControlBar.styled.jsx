import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

export const ControlBar = forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);

ControlBar.displayName = 'ControlBar';

export const StyledControlBar = styled(ControlBar)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  z-index: 6;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 54px;
  `
      : `
    height: 36px;
  `}
`;

const commonsStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`;

export const StyledLeftItem = styled.div`
  ${commonsStyles}
  justify-content: flex-start;
  margin-left: 15px;
`;

export const StyledRightItem = styled.div`
  ${commonsStyles}
  justify-content: flex-end;
  margin-right: 15px;
`;
