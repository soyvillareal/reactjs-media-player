import React from 'react';
import styled, { css } from 'styled-components';

import useAppSelector from '../../../hooks/context/useAppSelector';
import { StyledMediaPlayerWrapper } from '../../../MediaPlayer/components/MediaPlayerWrapper/MediaPlayerWrapper.styled';
import { StyledPlayerSkin } from '../../PlayerSkin.styled';

const baseButtonStyles = css`
  display: flex;
  position: relative;
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  &:focus,
  &:hover {
    opacity: 1;
  }
  &:disabled {
    cursor: not-allowed;
    color: #a4a4a4;
  }
  & * {
    pointer-events: none;
  }
`;

const textButtonStyles = css`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`;

const fullscreenButton = css`
  width: 54px;
  height: 54px;
`;

const normalButton = css`
  width: 36px;
  height: 36px;
`;

const fullscreenText = css`
  font-size: 145% !important;
`;

const TooltipText = React.forwardRef(({ isFullscreen = false, title, ...rest }, ref) => <div ref={ref} {...rest} />);

TooltipText.displayName = 'TooltipText';

const StyledTooltipText = styled(TooltipText)`
  display: flex;
  position: absolute;
  pointer-events: none;
  font-weight: 500;
  z-index: 7;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 5px 10px;
  min-height: 25px;
  white-space: pre;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    top: -45px;
    font-size: 130%;
  `
      : `
    top: -35px;
    font-size: 90%;
  `}
`;

const GeneralButton = React.forwardRef(
  ({ isText, isFullscreen = false, isTooltipActive = false, isFakeDisabled = false, title, ...rest }, ref) => {
    const state = useAppSelector();
    const tooltipRef = React.useRef(null);
    const [tooltipLeft, setTooltipLeft] = React.useState(null);

    const handleMouseEnter = React.useCallback(
      (e) => {
        if (rest.onMouseEnter) {
          rest.onMouseEnter(e);
        }

        const tooltipElement = tooltipRef?.current;
        const playerElement = state.playerRef?.current;
        if (
          !tooltipElement ||
          !playerElement ||
          playerElement.querySelectorAll('[aria-expanded="true"]').length > 0 ||
          isTooltipActive === false
        ) {
          setTooltipLeft(null);
          return;
        }

        const tooltipRect = tooltipElement.getBoundingClientRect();
        const playerRect = playerElement.getBoundingClientRect();
        const targetElement = e.target.hasAttribute('aria-expanded') ? e.target.parentElement : e.target;
        const buttonWidth = targetElement?.offsetWidth || 0;
        const buttonLeft = targetElement?.offsetLeft || 0;

        if (buttonLeft + buttonWidth / 2 <= tooltipRect.width / 2) {
          setTooltipLeft(-buttonLeft + 15);
        } else if (buttonLeft <= 15) {
          setTooltipLeft(0);
        } else if (buttonLeft + tooltipRect.width / 2 > playerRect.width - 15) {
          setTooltipLeft(-1 * (tooltipRect.width - buttonWidth));
        } else {
          setTooltipLeft(-1 * (tooltipRect.width / 2 - buttonWidth / 2));
        }
      },
      [isTooltipActive, rest, state.playerRef],
    );

    const handleMouseLeave = React.useCallback(
      (e) => {
        setTooltipLeft(null);
        if (rest.onMouseLeave) {
          rest.onMouseLeave(e);
        }
      },
      [rest],
    );

    const handleClick = React.useCallback(
      (e) => {
        if (isFakeDisabled === false) {
          setTooltipLeft(null);
        }
        if (rest.onClick) {
          rest.onClick(e);
        }
      },
      [rest, isFakeDisabled],
    );

    const handleMouseDown = React.useCallback(
      (e) => {
        if (isFakeDisabled === false) {
          setTooltipLeft(null);
        }
        if (rest.onMouseDown) {
          rest.onMouseDown(e);
        }
      },
      [rest, isFakeDisabled],
    );

    return (
      <button
        ref={ref}
        title={title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        {...rest}
      >
        {rest.children}
        <StyledTooltipText
          ref={tooltipRef}
          isFullscreen={isFullscreen}
          style={{
            opacity: tooltipLeft === null ? 0 : 1,
            left: tooltipLeft || 0,
          }}
        >
          {title}
        </StyledTooltipText>
      </button>
    );
  },
);

GeneralButton.displayName = 'GeneralButton';

const StyledGeneralButton = styled(GeneralButton)`
  ${StyledMediaPlayerWrapper} ${StyledPlayerSkin} & {
    ${baseButtonStyles}
    ${({ isFullscreen, isText }) => !isText && (isFullscreen ? fullscreenButton : normalButton)}
    ${({ isFullscreen, isText }) => isFullscreen && isText && fullscreenText}
    ${({ isText }) => isText && textButtonStyles}
    ${({ isFakeDisabled }) =>
      isFakeDisabled &&
      `
      color: #a4a4a4;
    `}
  }
`;

export default StyledGeneralButton;
