import React from 'react';
import PropTypes from 'prop-types';

import { StyledControlBar, StyledLeftItem, StyledRightItem } from './ControlBar.styled';

const ControlBar = ({ children, extra, fullscreen }) => {
  return (
    <StyledControlBar isFullscreen={fullscreen}>
      <StyledLeftItem>{children}</StyledLeftItem>
      <StyledRightItem>{extra}</StyledRightItem>
    </StyledControlBar>
  );
};

ControlBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  extra: PropTypes.node.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(
  ControlBar,
  (p, n) => p.fullscreen === n.fullscreen && p.children === n.children && p.extra === n.extra,
);
