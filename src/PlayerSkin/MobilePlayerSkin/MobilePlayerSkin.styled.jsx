import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export const StyledMobilePlayerSkin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  touch-action: manipulation;
  font-family: Helvetica, Arial, sans-serif;
`;

const Overlay = React.forwardRef(({ visible, ...rest }, ref) => <div ref={ref} {...rest} />);
Overlay.displayName = 'Overlay';

export const StyledOverlay = styled(Overlay)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export const StyledMobileTopBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 7;
  padding: 8px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`;

export const StyledMobileCenterControls = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  z-index: 7;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`;

export const StyledMobileBottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 7;
  display: flex;
  align-items: center;
  padding: 0px 16px 8px 16px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`;

export const StyledMobileTimeRail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
`;

export const StyledMobileProgressContainer = styled.div`
  flex: 1;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledMobileProgressTrack = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
`;

export const StyledMobileProgressBuffered = styled.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  transform-origin: left;
`;

export const StyledMobileProgressFilled = styled.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: #cb0e0b;
  border-radius: 1px;
  transform-origin: left;
`;

export const StyledMobileProgressHandle = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cb0e0b;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const StyledMobileProgressInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
`;

export const StyledMobilePlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const StyledMobileNavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`;

export const StyledMobileSettingsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const StyledMobileFullscreenButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.8;
  flex-shrink: 0;
  margin-left: 4px;
  & > svg {
    width: 36px;
    height: 36px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const StyledMobileTime = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 6px;
`;

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledMobileSpinner = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: ${spinAnimation} 0.8s linear infinite;
  }
`;

const seekFade = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const StyledSkipOverlay = styled.div`
  position: absolute;
  top: 0;
  ${({ direction }) => (direction === 'forward' ? 'right: 0;' : 'left: 0;')}
  width: 50%;
  height: 100%;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s linear;
  pointer-events: none;
`;

export const StyledSkipIconContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ direction }) => (direction === 'backward' ? 'transform: rotate(180deg);' : '')}
  & > svg {
    width: 20px;
    height: 20px;
    animation: ${seekFade} 1s infinite;
    opacity: 0;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`;

export const StyledSkipText = styled.span`
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
`;

export const StyledSkipTapArea = styled.button`
  position: absolute;
  top: 0;
  ${({ direction }) => (direction === 'forward' ? 'right: 0;' : 'left: 0;')}
  width: 50%;
  height: 100%;
  z-index: 6;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
`;
