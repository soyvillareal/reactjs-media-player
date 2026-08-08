import React from 'react';
import styled from 'styled-components';

export const TimelensThumbnail = React.forwardRef(({ isFullscreen, showing, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

TimelensThumbnail.displayName = 'TimelensThumbnail';

export const StyledTimelensThumbnail = styled(TimelensThumbnail)`
  background: #fff;
  border: solid #fff 2px !important;
  border-radius: 2px;
  background-clip: content-box;
  width: 0;
  height: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 0.2s,
    z-index 0.2s;
  transform: translateY(-100%) translateY(-7px);
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
      top: -45px;
    `
      : `
      top: -35px;
    `}
  ${({ showing }) =>
    showing
      ? `
        opacity: 1;
    `
      : `
        opacity: 0;
    `}
`;

export const StyledTimelensRail = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;
