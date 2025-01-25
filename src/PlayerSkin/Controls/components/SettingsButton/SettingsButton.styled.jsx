import React from 'react';
import styled from 'styled-components';

import StyledGeneralButton from '../../../Commons/Buttons/StyledGeneralButton';

export const StyledDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownOverlay = React.forwardRef(({ singleOption, hiding, isFullscreen, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

DropdownOverlay.displayName = 'DropdownOverlay';

export const StyledDropdownOverlay = styled(DropdownOverlay)`
  width: 250px;
  position: absolute;
  overflow: hidden;
  z-index: 8;
  background: rgba(15, 15, 15, 0.9);
  ${({ isFullscreen }) => {
    return isFullscreen
      ? `
      right: -52px;
      bottom: 75px;
    `
      : `
      right: -35px;
      bottom: 55px;
    `;
  }}
  ${({ hiding }) => {
    return hiding
      ? `
      display: block;
    `
      : `
      display: none;
    `;
  }}
  ${({ singleOption }) => {
    return !singleOption
      ? `
      height: 100px;
    `
      : `
      height: 60px;
    `;
  }}
`;

export const StyledDropdownList = styled.ul`
  min-width: 250px;
  padding: 10px 0;
`;

export const StyledDropdownItem = styled.li`
  & ${StyledGeneralButton} {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    cursor: pointer;
    opacity: 1;
  }
  & ${StyledGeneralButton}:focus, & ${StyledGeneralButton}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`;

export const StyledDropdownTitle = styled.div`
  margin-right: auto;
`;

export const StyledDropdownValue = styled.div`
  font-size: 87%;
`;

export const StyledDropdownContentValue = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

const DropdownButton = React.forwardRef(
  ({ isFullHD = false, isExpanded = false, isFullscreen = false, ...props }, ref) => (
    <StyledGeneralButton ref={ref} isFullscreen={isFullscreen} {...props} />
  ),
);

DropdownButton.displayName = 'DropdownButton';

export const StyledDropdownButton = styled(DropdownButton)`
  ${({ isExpanded }) =>
    isExpanded &&
    `
    & svg {
      transform: rotate(45deg);
      transition: all 0.2s ease-in-out;
    }
  `}
  ${({ isFullHD }) =>
    isFullHD &&
    `
      &:after {
        content: "HD";
        position: absolute;
        top: 9px;
        right: 4px;
        background-color: #cb0e0b;
        border-radius: 1px;
        font-weight: 700;
      }
    `}
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    &:after {
      width: 20px;
      height: 16px;
      font-size: 11px;
      line-height: 15px;
    }
  `
      : `
    &:after {
      width: 13px;
      height: 9px;
      font-size: 7px;
      line-height: 10px;
    }
  `}
`;
