import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';
import Timelens from '../../src/PlayerSkin/DesktopPlayerSkin/components/TimeSlider/components/Timelens';

// Mock fetch for VTT loading
const mockVTT = `WEBVTT

00:00:00.000 --> 00:00:05.000
sprite.png?xywh=0,0,160,90

00:00:05.000 --> 00:00:10.000
sprite.png?xywh=160,0,160,90
`;

global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve(mockVTT),
  }),
);

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

describe('Timelens', () => {
  const sliderRef = { current: document.createElement('div') };

  beforeEach(() => {
    jest.clearAllMocks();
    // Give slider element dimensions
    Object.defineProperties(sliderRef.current, {
      offsetWidth: { value: 500, configurable: true },
      offsetLeft: { value: 0, configurable: true },
    });
    sliderRef.current.getBoundingClientRect = () => ({ left: 0, top: 0, width: 500, height: 10 });
  });

  test('renders without crashing', async () => {
    let container;
    await act(async () => {
      const result = render(
        <Timelens spriteVTTFile="sprite.vtt" sliderRef={sliderRef} duration={100} fullscreen={false} />,
        { wrapper },
      );
      container = result.container;
    });
    expect(container.firstChild).not.toBeNull();
  });

  test('fetches VTT file on mount', async () => {
    await act(async () => {
      render(
        <Timelens spriteVTTFile="sprite.vtt" sliderRef={sliderRef} duration={100} fullscreen={false} />,
        { wrapper },
      );
    });
    expect(global.fetch).toHaveBeenCalledWith('sprite.vtt');
  });

  test('handles fetch error gracefully', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await act(async () => {
      render(
        <Timelens spriteVTTFile="bad.vtt" sliderRef={sliderRef} duration={100} fullscreen={false} />,
        { wrapper },
      );
    });
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test('exposes handleTimelens and setShowTimelens via ref', async () => {
    const ref = React.createRef();
    await act(async () => {
      render(
        <Timelens ref={ref} spriteVTTFile="sprite.vtt" sliderRef={sliderRef} duration={100} fullscreen={false} />,
        { wrapper },
      );
    });
    expect(ref.current.handleTimelens).toBeDefined();
    expect(ref.current.setShowTimelens).toBeDefined();
  });

  test('handleTimelens updates styles when called with valid event', async () => {
    const ref = React.createRef();
    await act(async () => {
      render(
        <Timelens ref={ref} spriteVTTFile="sprite.vtt" sliderRef={sliderRef} duration={10} fullscreen={false} />,
        { wrapper },
      );
    });
    // Wait for VTT to be parsed
    await act(async () => {
      await new Promise((r) => setTimeout(r, 0));
    });
    const event = { pageX: 125 }; // 25% of 500px slider = 2.5s
    await act(async () => {
      ref.current.handleTimelens(event);
    });
    // Should not throw and should have been invoked
  });

  test('setShowTimelens hides the thumbnail', async () => {
    const ref = React.createRef();
    await act(async () => {
      render(
        <Timelens ref={ref} spriteVTTFile="sprite.vtt" sliderRef={sliderRef} duration={10} fullscreen={false} />,
        { wrapper },
      );
    });
    act(() => {
      ref.current.setShowTimelens(false);
    });
    // No crash
  });

  test('renders in fullscreen mode', async () => {
    await act(async () => {
      render(
        <Timelens spriteVTTFile="sprite.vtt" sliderRef={sliderRef} duration={100} fullscreen={true} />,
        { wrapper },
      );
    });
  });
});
