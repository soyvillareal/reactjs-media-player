import styled, { css } from 'styled-components';

export const StyledSettingsOverlay = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
`;

export const StyledSettingsHeader = styled.div`
  padding: 9px 18px 9px 36px;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  height: 42px;
  width: 100%;
  color: #fff;
  position: relative;
  z-index: 6;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledHeaderTitle = styled.span`
  flex: 1;
  font-weight: 400;
`;

export const StyledIconButton = styled.button`
  position: absolute;
  top: 8px;
  border: 0;
  background: none;
  color: #fff;
  cursor: pointer;
  z-index: 6;
  padding: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ position }) =>
    position === 'left'
      ? css`
          left: 6px;
        `
      : css`
          right: 6px;
        `}
`;

export const StyledSwitchesGrid = styled.ul`
  padding: 4px 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  list-style: none;
`;

export const StyledSwitchItem = styled.li`
  width: 86px;
  height: 78px;
  overflow: hidden;
  padding: 4px;
  cursor: pointer;
  text-align: center;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1;
  display: block;
  box-sizing: border-box;
  white-space: nowrap;
  color: #fff;
`;

export const StyledSwitchIcon = styled.div`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto 5px;
  position: relative;
  top: 5px;
`;

export const StyledSwitchLabel = styled.span`
  display: block;
  font-size: 15px;
  color: #fff;
`;

export const StyledSwitchValue = styled.div`
  font-size: 11px;
  color: #ccc;
  line-height: 1;
  display: block;
  margin: 6px 0 0;
  padding: 0;
  text-align: center;
`;

export const StyledSubPage = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transition: opacity 0.15s linear;
`;

export const StyledSubContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 6px 0;
`;

export const StyledOptionItem = styled.li`
  padding: 5px 25px;
  margin: 0;
  font-size: 16px;
  line-height: 23px;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 6px;
  position: relative;
  list-style: none;
  color: #fff;
  ${({ active }) =>
    active &&
    css`
      background: rgba(180, 60, 60, 0.6);
    `}
`;

export const StyledOptionList = styled.ul`
  margin: 0;
  padding: 6px 0;
  list-style: none;
`;

export const StyledMainPage = styled.div`
  transition: opacity 0.15s linear, transform 0.15s ease-out;
  ${({ hidden }) =>
    hidden
      ? css`
          opacity: 0;
          pointer-events: none;
          transform: translateX(-100%);
        `
      : css`
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        `}
`;
