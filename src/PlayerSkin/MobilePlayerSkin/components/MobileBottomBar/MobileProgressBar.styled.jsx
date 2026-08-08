import styled from 'styled-components';

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
