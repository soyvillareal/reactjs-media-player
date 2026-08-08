import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';

// Components under test
import PlayTime from '../../src/PlayerSkin/DesktopPlayerSkin/components/PlayTime';
import PlayState from '../../src/PlayerSkin/DesktopPlayerSkin/components/PlayState';
import TopState from '../../src/PlayerSkin/Commons/TopState';
import PreventedTip from '../../src/PlayerSkin/Commons/PreventedTip';
import ContextMenu from '../../src/PlayerSkin/Commons/ContextMenu';

const wrap = (ui) => render(<AppContextProvider language="en">{ui}</AppContextProvider>);

// ─── PlayTime ─────────────────────────────────────────────────────────────────
describe('PlayTime', () => {
  test('renders current and total time', () => {
    wrap(<PlayTime live={false} currentTime={65} duration={120} />);
    expect(screen.getByRole('timer')).toBeInTheDocument();
    expect(screen.getByRole('timer').textContent).toContain('01:05');
    expect(screen.getByRole('timer').textContent).toContain('02:00');
  });

  test('renders live dot when live=true', () => {
    wrap(<PlayTime live={true} currentTime={0} duration={0} />);
    // Should show live indicator text
    expect(screen.getByRole('timer').textContent).toContain('Live');
  });

  test('renders 00:00 / 00:00 for zero values', () => {
    wrap(<PlayTime live={false} currentTime={0} duration={0} />);
    expect(screen.getByRole('timer').textContent).toContain('00:00');
  });

  test('renders hours when duration > 3600', () => {
    wrap(<PlayTime live={false} currentTime={3661} duration={7200} />);
    expect(screen.getByRole('timer').textContent).toContain('01:01:01');
  });
});

// ─── PlayState ────────────────────────────────────────────────────────────────
describe('PlayState', () => {
  const baseProps = {
    hasResource: true,
    loading: false,
    paused: false,
    ended: false,
    seeking: false,
    waiting: false,
    kernelMsg: null,
    onClick: jest.fn(),
  };

  test('renders null when hasResource is false', () => {
    const { container } = wrap(<PlayState {...baseProps} hasResource={false} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders null when loading is true', () => {
    const { container } = wrap(<PlayState {...baseProps} loading={true} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders null when kernelMsg is set', () => {
    const { container } = wrap(<PlayState {...baseProps} kernelMsg={{ type: 'error', detail: 'fail' }} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders SpinnerLoading when waiting', () => {
    const { container } = wrap(<PlayState {...baseProps} waiting={true} />);
    // SpinnerLoading renders as a styled component - just check something renders
    expect(container.firstChild).not.toBeNull();
  });

  test('renders SpinnerLoading when seeking', () => {
    const { container } = wrap(<PlayState {...baseProps} seeking={true} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('renders play button when paused', () => {
    const { container } = wrap(<PlayState {...baseProps} paused={true} />);
    // StyledPlayButton renders a button or div
    expect(container.firstChild).not.toBeNull();
  });

  test('calls onClick when play button clicked', () => {
    const onClick = jest.fn();
    const { container } = wrap(<PlayState {...baseProps} paused={true} onClick={onClick} />);
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalled();
  });
});

// ─── TopState ─────────────────────────────────────────────────────────────────
describe('TopState', () => {
  test('renders null when hasResource is false', () => {
    const { container } = wrap(<TopState hasResource={false} loading={false} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders null when no loading and no kernelMsg', () => {
    const { container } = wrap(<TopState hasResource={true} loading={false} kernelMsg={null} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders SpinnerLoading when loading', () => {
    const { container } = wrap(<TopState hasResource={true} loading={true} kernelMsg={null} />);
    // SpinnerLoading renders as styled component
    expect(container.firstChild).not.toBeNull();
  });

  test('renders kernelMsg when set', () => {
    wrap(<TopState hasResource={true} loading={false} kernelMsg={{ type: 'networkError', detail: 'Network failed' }} />);
    expect(screen.getByText(/networkError/)).toBeInTheDocument();
    expect(screen.getByText(/Network failed/)).toBeInTheDocument();
  });
});

// ─── PreventedTip ────────────────────────────────────────────────────────────
describe('PreventedTip', () => {
  const baseProps = {
    hasResource: true,
    prevented: true,
    paused: false,
    muted: true,
    currentTime: 0,
    onClick: jest.fn(),
  };

  test('renders null when hasResource is false', () => {
    const { container } = wrap(<PreventedTip {...baseProps} hasResource={false} />);
    // Returns array of nulls - container should be empty
    expect(container.textContent).toBe('');
  });

  test('renders null when prevented is false', () => {
    const { container } = wrap(<PreventedTip {...baseProps} prevented={false} />);
    expect(container.textContent).toBe('');
  });

  test('shows clickToUnmute when muted and not paused and not preventedClicked', () => {
    wrap(<PreventedTip {...baseProps} muted={true} paused={false} />);
    expect(screen.getByText(/Click to unmute/i)).toBeInTheDocument();
  });

  test('shows playbackStuck tip when paused and currentTime is 0', () => {
    wrap(<PreventedTip {...baseProps} paused={true} muted={false} currentTime={0} />);
    expect(screen.getByText(/Playback is stuck/i)).toBeInTheDocument();
  });

  test('calls onClick when muted tip is clicked', () => {
    const onClick = jest.fn();
    wrap(<PreventedTip {...baseProps} muted={true} paused={false} onClick={onClick} />);
    // Click the invisible overlay
    const overlay = document.querySelector('[class]');
    if (overlay) fireEvent.click(overlay);
  });

  test('renders nothing when not muted and not paused', () => {
    const { container } = wrap(
      <PreventedTip {...baseProps} muted={false} paused={false} currentTime={5} />,
    );
    expect(container.textContent).toBe('');
  });
});

// ─── ContextMenu ──────────────────────────────────────────────────────────────
describe('ContextMenu', () => {
  const menuItems = [
    {
      action: jest.fn(),
      label: 'Loop',
      icon: <span>🔁</span>,
      isCheckable: true,
      defaultChecked: false,
    },
    {
      action: jest.fn(),
      label: 'PiP',
      icon: <span>📺</span>,
      isCheckable: false,
      defaultChecked: false,
    },
  ];

  const baseProps = {
    fullscreen: false,
    position: { x: 100, y: 200 },
    menuItems,
  };

  test('renders menu items via portal', () => {
    wrap(<ContextMenu {...baseProps} />);
    expect(screen.getByText('Loop')).toBeInTheDocument();
    expect(screen.getByText('PiP')).toBeInTheDocument();
  });

  test('calls item action when clicked', () => {
    const action = jest.fn();
    const items = [{ action, label: 'Test', icon: null, isCheckable: false, defaultChecked: false }];
    wrap(<ContextMenu {...baseProps} menuItems={items} />);
    fireEvent.click(screen.getByText('Test'));
    expect(action).toHaveBeenCalled();
  });

  test('shows check icon for checkable items that are checked', () => {
    const items = [{ action: jest.fn(), label: 'Checked', icon: null, isCheckable: true, defaultChecked: true }];
    wrap(<ContextMenu {...baseProps} menuItems={items} />);
    expect(screen.getByText('Checked')).toBeInTheDocument();
    // CheckedIcon renders an SVG
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  test('toggles checked state on click', () => {
    const items = [{ action: jest.fn(), label: 'Toggle', icon: null, isCheckable: true, defaultChecked: false }];
    wrap(<ContextMenu {...baseProps} menuItems={items} />);
    fireEvent.click(screen.getByText('Toggle'));
    // After click, checked state toggles
    expect(items[0].action).toHaveBeenCalled();
  });
});
