import React from 'react';
import styled from 'styled-components';
import { StyledTooltip } from './components/TimeTooltip/TimeTooltip.styled';
import { StyledMediaPlayerWrapper } from '../../MediaPlayer/components/MediaPlayerWrapper/MediaPlayerWrapper.styled';
import { StyledPlayerSkin } from '../PlayerSkin.styled';

export const StyledSliderContent = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`;

export const SliderHandle = React.forwardRef(({ isFullscreen, ...rest }, ref) => <button ref={ref} {...rest} />);

SliderHandle.displayName = 'SliderHandle';

export const StyledSliderHandle = styled(SliderHandle)`
  ${StyledMediaPlayerWrapper} ${StyledPlayerSkin} & {
    position: absolute;
    cursor: pointer;
    padding: 0;
    margin: 0;
    pointer-events: none;
    outline: 0 transparent none;
    border: transparent 0 none;
    box-shadow: none;
    border-radius: 50%;
    background-color: #cb0e0b !important;
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -webkit-transform: scale(0);
    ${({ isFullscreen }) =>
      isFullscreen
        ? `
      width: 20px;
      height: 20px;
      top: -3px;
      right: -9px;
    `
        : `
      width: 12px;
      height: 12px;
      top: 0px;
      right: -6px;
    `}
  }
`;

const commonsSliderHandleStyles = `
  -moz-transform: none;
  -ms-transform: none;
  -webkit-transform: none;
  transform: none;
  -moz-transition: -moz-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  -ms-transition: -ms-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  box-shadow: 0 0 0 5px rgba(255, 0, 0, 0.2);
  outline: 0 transparent none;
  pointer-events: auto;
  opacity: 1;
`;

export const Slider = React.forwardRef(({ isSliding, isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);

Slider.displayName = 'Slider';

export const StyledSliderContainer = styled(Slider)`
  width: 100%;
  flex-grow: 1;
  position: absolute;
  top: -5px;
  z-index: 6;
  cursor: pointer;
  user-select: none;
  &:focus {
    outline: 0 transparent none;
  }
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 6px;
  `
      : `
    height: 4px;
  `}
  & ${StyledSliderContent} {
    -moz-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
  }
  & ${StyledSliderHandle} {
    @media (hover: none), (pointer: coarse) {
      pointer-events: auto;
      opacity: 1;
      box-shadow: none;
    }
  }
  ${({ isSliding }) => {
    return isSliding
      ? `
          & ${StyledSliderContent} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${StyledSliderHandle} {
            ${commonsSliderHandleStyles}
          }
          & ${StyledTooltip} {
            display: block;
          }
        `
      : `
        &:focus ${StyledSliderContent},
        &:hover ${StyledSliderContent} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${StyledSliderHandle},
        &:hover ${StyledSliderHandle} {
          ${commonsSliderHandleStyles}
        }
      `;
  }}
`;

export const SlideRail = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);

SlideRail.displayName = 'SlideRail';

export const StyledSlideRail = styled(SlideRail)`
  position: absolute;
  top: 0px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 6px;
  `
      : `
    height: 4px;
  `}
`;

export const StyledSliderBuffered = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const StyledTrack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: #f00;
`;

export const StyledSliderHandleRail = styled.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;
