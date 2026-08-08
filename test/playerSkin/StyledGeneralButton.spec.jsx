import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';

// We need to mock useAppSelector to provide state with playerRef
jest.mock('../../src/hooks/context/useAppSelector', () => {
  return jest.fn(() => ({
    playerRef: { current: null },
    i18n: {},
    hiding: false,
    contextMenuVisible: false,
    controlsHovering: false,
    timeSliding: false,
    volumeSliding: false,
    menuVisible: false,
    subMenuVisible: false,
  }));
});

import StyledGeneralButton from '../../src/PlayerSkin/Commons/Buttons/StyledGeneralButton';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

describe('StyledGeneralButton', () => {
  test('renders a button element', () => {
    render(
      <StyledGeneralButton title="Test Button" data-testid="btn">
        Click
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
    expect(screen.getByTestId('btn').tagName.toLowerCase()).toBe('button');
  });

  test('renders children content', () => {
    render(
      <StyledGeneralButton title="Test" data-testid="btn">
        Hello World
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('renders title in tooltip', () => {
    render(
      <StyledGeneralButton title="My Tooltip" data-testid="btn">
        Content
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn').getAttribute('title')).toBe('My Tooltip');
  });

  test('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(
      <StyledGeneralButton title="Test" data-testid="btn" onClick={onClick}>
        Click
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.click(screen.getByTestId('btn'));
    expect(onClick).toHaveBeenCalled();
  });

  test('calls onMouseEnter on hover', () => {
    const onMouseEnter = jest.fn();
    render(
      <StyledGeneralButton title="Test" data-testid="btn" onMouseEnter={onMouseEnter}>
        Hover
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.mouseEnter(screen.getByTestId('btn'));
    expect(onMouseEnter).toHaveBeenCalled();
  });

  test('calls onMouseLeave on leave', () => {
    const onMouseLeave = jest.fn();
    render(
      <StyledGeneralButton title="Test" data-testid="btn" onMouseLeave={onMouseLeave}>
        Leave
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.mouseLeave(screen.getByTestId('btn'));
    expect(onMouseLeave).toHaveBeenCalled();
  });

  test('calls onMouseDown', () => {
    const onMouseDown = jest.fn();
    render(
      <StyledGeneralButton title="Test" data-testid="btn" onMouseDown={onMouseDown}>
        Down
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.mouseDown(screen.getByTestId('btn'));
    expect(onMouseDown).toHaveBeenCalled();
  });

  test('renders with isText prop', () => {
    render(
      <StyledGeneralButton title="Test" data-testid="btn" isText={true}>
        Text Mode
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('renders with isFullscreen prop', () => {
    render(
      <StyledGeneralButton title="Test" data-testid="btn" isFullscreen={true}>
        Fullscreen
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('renders with isTooltipActive prop', () => {
    render(
      <StyledGeneralButton title="Test" data-testid="btn" isTooltipActive={true}>
        Tooltip Active
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.mouseEnter(screen.getByTestId('btn'));
    // Should not throw
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('renders with isFakeDisabled prop', () => {
    const onClick = jest.fn();
    render(
      <StyledGeneralButton title="Test" data-testid="btn" isFakeDisabled={true} onClick={onClick}>
        Disabled
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.click(screen.getByTestId('btn'));
    expect(onClick).toHaveBeenCalled();
  });
});
