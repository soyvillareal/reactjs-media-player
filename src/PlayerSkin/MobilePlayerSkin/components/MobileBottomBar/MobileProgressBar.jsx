import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileProgressContainer,
  StyledMobileProgressTrack,
  StyledMobileProgressBuffered,
  StyledMobileProgressFilled,
  StyledMobileProgressHandle,
} from './MobileProgressBar.styled';
import { formatTime } from '../../../../utils';

const MobileProgressBar = ({ currentTime, duration, buffered, onChange, onSeeking }) => {
  const containerRef = React.useRef(null);
  const isDragging = React.useRef(false);

  const progress = duration > 0 ? currentTime / duration : 0;
  const bufferedProgress = buffered || 0;

  const handleInteraction = React.useCallback(
    (clientX) => {
      if (!containerRef.current || !duration) return;
      const rect = containerRef.current.getBoundingClientRect();
      const fraction = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const newTime = fraction * duration;
      onChange(newTime);
    },
    [duration, onChange],
  );

  const handleMouseDown = React.useCallback(
    (e) => {
      isDragging.current = true;
      if (onSeeking) onSeeking(true);
      handleInteraction(e.clientX);

      const handleMouseMove = (ev) => {
        if (isDragging.current) {
          handleInteraction(ev.clientX);
        }
      };
      const handleMouseUp = () => {
        isDragging.current = false;
        if (onSeeking) onSeeking(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [handleInteraction, onSeeking],
  );

  const handleTouchStart = React.useCallback(
    (e) => {
      isDragging.current = true;
      if (onSeeking) onSeeking(true);
      const touch = e.touches[0];
      handleInteraction(touch.clientX);

      const handleTouchMove = (ev) => {
        if (isDragging.current && ev.touches[0]) {
          handleInteraction(ev.touches[0].clientX);
        }
      };
      const handleTouchEnd = () => {
        isDragging.current = false;
        if (onSeeking) onSeeking(false);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    },
    [handleInteraction, onSeeking],
  );

  return (
    <StyledMobileProgressContainer
      ref={containerRef}
      role="slider"
      aria-label="Barra de tiempo"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(currentTime)}
      aria-valuetext={formatTime(Math.round(currentTime))}
      tabIndex={0}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <StyledMobileProgressTrack />
      <StyledMobileProgressBuffered style={{ width: `${bufferedProgress * 100}%` }} />
      <StyledMobileProgressFilled style={{ width: `${progress * 100}%` }} />
      <StyledMobileProgressHandle style={{ left: `${progress * 100}%` }} />
    </StyledMobileProgressContainer>
  );
};

MobileProgressBar.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  buffered: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onSeeking: PropTypes.func,
};

export default React.memo(MobileProgressBar);
