import React from 'react';
import styled from 'styled-components';

export const Tooltip = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);

Tooltip.displayName = 'Tooltip';

export const StyledTooltip = styled(Tooltip)`
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    bottom: 13px;
  `
      : `
    bottom: 10px;
  `}
`;

export const Tip = React.forwardRef(({ isFullscreen, showTooltipOnly, ...rest }, ref) => <div ref={ref} {...rest} />);

Tip.displayName = 'Tip';

export const StyledTip = styled(Tip)`
  display: inline-block;
  padding: 0.4em 0.8em;
  transform: translateX(-50%);
  font-weight: 500;
  text-align: center;
  color: #fff;
  ${({ showTooltipOnly }) =>
    showTooltipOnly &&
    `
    border-radius: 4px;
    background: #333;
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #333 transparent transparent transparent;
    }
  `}
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    font-size: 18px;
  `
      : `
    font-size: 12px;
  `}
`;
