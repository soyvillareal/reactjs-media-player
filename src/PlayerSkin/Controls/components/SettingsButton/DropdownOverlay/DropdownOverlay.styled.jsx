import React from 'react';
import styled from 'styled-components';

import DropdownOverlay from '.';
import StyledGeneralButton from '../../../../Commons/Buttons/StyledGeneralButton';
import { StyledMediaPlayerWrapper } from '../../../../../MediaPlayer/components/MediaPlayerWrapper/MediaPlayerWrapper.styled';
import { StyledPlayerSkin } from '../../../../PlayerSkin.styled';

export const StyledDropdownOverlayScrolled = styled(DropdownOverlay)`
  width: 250px;
  height: 283.5px;
  max-height: 283.5px;
  position: absolute;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
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
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #4c4c4c;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #909090;
    border-radius: 10px;
  }
`;

export const StyledDropdownHeader = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  & ${StyledGeneralButton} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
  }
`;

export const DropdownContent = React.forwardRef(({ show, ...rest }, ref) => <div ref={ref} {...rest} />);

DropdownContent.displayName = 'DropdownContent';

export const StyledDropdownContent = styled(DropdownContent)`
  opacity: 0;
  -webkit-transform: translate(100px, 0);
  -ms-transform: translate(100px, 0);
  transform: translate(100px, 0);
  transition:
    opacity 0.15s linear,
    -webkit-transform 0.15s ease-out;
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out,
    -webkit-transform 0.15s ease-out;
  ${({ show }) => {
    return show
      ? `
      opacity: 1;
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    `
      : '';
  }}
`;

export const StyledDropdownList = styled.ul`
  padding: 10px 0;
`;

export const DropdownItem = React.forwardRef(({ selected, isFullscreen, ...rest }, ref) => <li ref={ref} {...rest} />);

DropdownItem.displayName = 'DropdownItem';

export const StyledDropdownItem = styled(DropdownItem)`
  ${StyledMediaPlayerWrapper} ${StyledPlayerSkin} & {
    padding: 0 15px;

    & ${StyledGeneralButton} {
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      width: 100%;
      line-height: 40px;
      padding: 0 15px;
      margin: 0;
      ${({ isFullscreen }) =>
        isFullscreen
          ? `
        height: 49px;
      `
          : `
        height: 40px;
      `}
      ${({ selected }) => (selected ? 'background-color: rgb(204, 54, 43, 0.4) !important;' : '')}
    }
    & ${StyledGeneralButton}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`;

export const StyledDropdownItemValueSub = styled.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;
