import React from 'react';
import styled from 'styled-components';
import { StyledPlayerSkin } from '../../../PlayerSkin.styled';
import { StyledMediaPlayerWrapper } from '../../../../MediaPlayer/components/MediaPlayerWrapper/MediaPlayerWrapper.styled';

export const SliderContainer = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);

SliderContainer.displayName = 'SliderContainer';

export const VolumeSliderContainer = styled(SliderContainer)`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
          height: 4px;
        `
      : `
          height: 2px;
        `}
`;

export const SliderTrack = React.forwardRef(({ isFullscreen, isDisabled, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

SliderTrack.displayName = 'SliderTrack';

export const VolumeSliderTrack = styled(SliderTrack)`
  border-radius: 2px;
  ${({ isDisabled }) =>
    isDisabled
      ? `
    background-color: #a4a4a4;
  `
      : `
    background-color: #fff;
  `}
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
          height: 4px;
        `
      : `
          height: 2px;
        `}
`;

export const SliderThumb = React.forwardRef(({ isFullscreen, isDisabled, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

SliderThumb.displayName = 'SliderThumb';

export const VolumeSliderThumb = styled(SliderThumb)`
  ${StyledMediaPlayerWrapper} ${StyledPlayerSkin} & {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(50% - 10px);
    ${({ isDisabled }) =>
      isDisabled
        ? `
      background-color: #a4a4a4;
    `
        : `
      background-color: #fff;
    `}
    ${({ isFullscreen }) =>
      isFullscreen
        ? `
      width: 18px;
      height: 18px;
    `
        : `
      width: 14px;
      height: 14px;
    `}
  }
`;
