import React from 'react';
import PropTypes from 'prop-types';

import { StyledSliderWrapper } from '../../../Volume/Volume.styled';
import useVolumeSlider from '../../../../hooks/useVolumeSlider';
import { VolumeSliderContainer, VolumeSliderThumb, VolumeSliderTrack } from './VolumeSlider.styled';

const VolumeSlider = ({ fullscreen, value, isDisabled, onChange }) => {
  const { thumbLeft, sliderRef, thumbRef, onMouseMove, onMouseDown, handleChange } = useVolumeSlider({
    fullscreen,
    value,
    onChange,
  });

  return (
    <StyledSliderWrapper
      ref={sliderRef}
      role="slider"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={Math.round(value)}
      aria-valuetext={`${Math.round(value)}%`}
      onClick={handleChange}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      isFullscreen={fullscreen}
    >
      <VolumeSliderContainer onMouseMove={onMouseMove} isFullscreen={fullscreen}>
        <VolumeSliderTrack style={{ width: `${value}%` }} isFullscreen={fullscreen} isDisabled={isDisabled} />
        <VolumeSliderThumb
          ref={thumbRef}
          style={{ left: `${thumbLeft}px` }}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          isFullscreen={fullscreen}
          isDisabled={isDisabled}
        />
      </VolumeSliderContainer>
    </StyledSliderWrapper>
  );
};

VolumeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(
  VolumeSlider,
  (p, n) =>
    p.fullscreen === n.fullscreen && p.value === n.value && p.onChange === n.onChange && p.isDisabled === n.isDisabled,
);
