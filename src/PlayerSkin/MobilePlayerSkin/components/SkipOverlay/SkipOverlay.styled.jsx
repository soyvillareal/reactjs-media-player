import styled, { keyframes } from 'styled-components';

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
