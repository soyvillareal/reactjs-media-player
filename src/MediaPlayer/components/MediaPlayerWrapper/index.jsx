import React from 'react';
import { StyledMediaPlayerWrapper } from './MediaPlayerWrapper.styled';

const MediaPlayerWrapper = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledMediaPlayerWrapper ref={ref} {...props}>
      {children}
    </StyledMediaPlayerWrapper>
  );
});

MediaPlayerWrapper.displayName = 'MediaPlayerWrapper';

export default MediaPlayerWrapper;
