import React from 'react';
import styled from 'styled-components';

import GeneralButton from '../Commons/Buttons/StyledGeneralButton';
import { sliderWith } from '../PlayerSkin.constants';

export const SliderWrapper = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);

SliderWrapper.displayName = 'SliderWrapper';

export const StyledSliderWrapper = styled(SliderWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 0px;
  overflow: hidden;
  -webkit-user-drag: element;
  -webkit-user-select: none;
  -moz-transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  -webkit-transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 54px;
  `
      : `
    height: 36px;
  `}
`;

export const SliderContainer = React.forwardRef(({ isSliding, isFullscreen, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

SliderContainer.displayName = 'SliderContainer';

export const StyledSliderContainer = styled(SliderContainer)`
  display: flex;
  padding-right: 3px;
  @media (max-width: 575px) {
    display: none;
  }

  ${({ isSliding, isFullscreen }) => {
    return isSliding
      ? `
      & ${StyledSliderWrapper} {
        width: ${sliderWith(isFullscreen)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `
      : `
          & ${GeneralButton}:hover ~ ${StyledSliderWrapper},
          & ${StyledSliderWrapper}:hover {
              width: ${sliderWith(isFullscreen)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `;
  }}
`;
