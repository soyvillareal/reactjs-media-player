import styled, { css, keyframes } from 'styled-components';

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
