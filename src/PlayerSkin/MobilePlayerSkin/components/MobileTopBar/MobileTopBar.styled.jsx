import styled, { css } from 'styled-components';

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
