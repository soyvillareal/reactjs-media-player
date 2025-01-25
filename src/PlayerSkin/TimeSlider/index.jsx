import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledSlideRail,
  StyledSliderContainer,
  StyledSliderBuffered,
  StyledSliderHandle,
  StyledSliderHandleRail,
  StyledTrack,
  StyledSliderContent,
} from './TimeSlider.styled';
import Timelens from './components/Timelens';
import TimeTooltip from './components/TimeTooltip';
import useTimeSlider from '../../hooks/useTimeSlider';
import { formatTime } from '../../utils';
import useAppSelector from '../../hooks/context/useAppSelector';

const TimeSlider = ({
  spriteVTTFile,
  currentTime,
  duration,
  buffered: bufferedScaleX,
  onChange,
  onSeeking,
  fullscreen,
}) => {
  const { i18n } = useAppSelector();
  const timelensRef = React.useRef(null);

  const {
    sliderRef,
    handleRef,
    showTooltip,
    timeSliderSliding,
    timeSliderState,
    trackTranslateX,
    onClick,
    onMouseDown,
    onSliderMouseOver,
    onSliderMouseMove,
    onMouseEnter,
    onMouseLeave,
  } = useTimeSlider({
    timelensRef,
    currentTime,
    duration,
    onChange,
    onSeeking,
  });

  return (
    <StyledSliderContainer
      ref={sliderRef}
      role="slider"
      aria-label={i18n.timeBar}
      aria-valuemin={0}
      aria-valuemax={duration}
      aria-valuenow={currentTime}
      aria-valuetext={formatTime(Math.round(currentTime))}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={() => {}}
      onMouseOver={onSliderMouseOver}
      onMouseMove={onSliderMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={() => {}}
      isSliding={timeSliderSliding}
      isFullscreen={fullscreen}
    >
      <StyledSliderContent>
        <StyledSlideRail isFullscreen={fullscreen}>
          <StyledSliderBuffered style={{ transform: `scaleX(${bufferedScaleX})` }} />
          <StyledTrack style={{ transform: `translateX(${trackTranslateX.track}%)` }} />
        </StyledSlideRail>
        <StyledSliderHandleRail style={{ transform: `translateX(${trackTranslateX.handle}%)` }}>
          <StyledSliderHandle
            ref={handleRef}
            type="button"
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
            isFullscreen={fullscreen}
          />
        </StyledSliderHandleRail>
      </StyledSliderContent>
      <TimeTooltip
        sliderRef={sliderRef}
        showTooltip={showTooltip}
        duration={duration}
        tooltip={timeSliderSliding ? timeSliderState.value : timeSliderState.tooltip}
        showTooltipOnly={!spriteVTTFile}
        fullscreen={fullscreen}
      />
      {spriteVTTFile && (
        <Timelens
          ref={timelensRef}
          sliderRef={sliderRef}
          duration={duration}
          spriteVTTFile={spriteVTTFile}
          fullscreen={fullscreen}
        />
      )}
    </StyledSliderContainer>
  );
};

TimeSlider.propTypes = {
  spriteVTTFile: PropTypes.string,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  buffered: PropTypes.number.isRequired || null,
  onChange: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(
  TimeSlider,
  (p, n) =>
    p.spriteVTTFile === n.spriteVTTFile &&
    p.currentTime === n.currentTime &&
    p.duration === n.duration &&
    p.buffered === n.buffered &&
    p.onChange === n.onChange &&
    p.onSeeking === n.onSeeking &&
    p.fullscreen === n.fullscreen,
);
