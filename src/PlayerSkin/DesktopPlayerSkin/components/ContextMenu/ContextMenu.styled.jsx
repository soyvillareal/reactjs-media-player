import React from 'react';
import styled from 'styled-components';

const StyledContextMenu = React.forwardRef(({ showing, positionX, positionY, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

StyledContextMenu.displayName = 'StyledContextMenu';

export const StyledContextMenuContainer = styled(StyledContextMenu)`
  position: absolute;
  border-radius: 4px;
  background: rgba(15, 15, 15, 0.9);
  transition: all 0.1s;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  padding: 8px 0;
  z-index: 9999;
  color: #fff;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    PingFang SC,
    Hiragino Sans GB,
    Microsoft YaHei,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
  font-variant: tabular-nums;
  font-size: 11px;
  line-height: 1.5;

  ${({ showing, positionX, positionY }) => `
        display: ${showing ? 'block' : 'none'};
        top: ${positionY}px;
        left: ${positionX}px;
    `}
`;

const ContextMenuItem = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);

ContextMenuItem.displayName = 'ContextMenuItem';

export const StyledContextMenuItem = styled(ContextMenuItem)`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  height: 40px;
  &:hover {
    background: rgba(255, 255, 255, 0.1) !important;
  }
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 49px;
    `
      : `
    height: 40px;
  `}
`;

export const StyledContextMenuLabel = styled.span`
  padding: 0 12px;
  font-size: 118%;
`;

export const StyledContextMenuChecked = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 109%;
  margin-right: 12px;
  margin-left: auto;
`;
