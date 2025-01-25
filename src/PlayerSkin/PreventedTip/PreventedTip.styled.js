import styled, { css } from 'styled-components';

import MutedIcon from '../Commons/Icons/MutedIcon';
import PlayIcon from '../Commons/Icons/PlayIcon';

export const StyledPeventedTip = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 15px;
  left: 15px;
  padding: 8px;
  width: auto;
  height: auto;
  font-size: 14px;
  line-height: 1.5em;
  border-radius: 2px;
  color: #fff;
  background: rgba(15, 15, 15, 0.8);
  cursor: pointer;
  z-index: 6;
`;

const commonStyles = css`
  font-size: 20px;
  margin-right: 8px;
`;

export const StyledPlayCircle = styled(PlayIcon)`
  ${commonStyles}
`;

export const StyledMutedIcon = styled(MutedIcon)`
  ${commonStyles}
`;

export const StyledPeventedTipClicked = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;
