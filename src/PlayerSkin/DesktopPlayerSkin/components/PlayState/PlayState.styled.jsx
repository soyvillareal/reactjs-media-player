import React from 'react';
import styled from 'styled-components';

const PlayButton = React.forwardRef(({ showing, ...rest }, ref) => <button ref={ref} {...rest} />);

PlayButton.displayName = 'PlayButton';

export const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #fff;
  border: 0;
  background: rgba(0, 0, 0, 0.5) !important;
  font-size: 64px;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.3s;
  ${({ showing }) =>
    showing
      ? `
    opacity: 1;
    cursor: pointer;
  `
      : `
    opacity: 0;
    cursor: default;
  `}
`;
