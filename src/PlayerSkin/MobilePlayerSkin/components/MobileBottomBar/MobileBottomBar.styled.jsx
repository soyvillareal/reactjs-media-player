import styled, { css } from 'styled-components';

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

export const StyledMobileTime = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 6px;
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
