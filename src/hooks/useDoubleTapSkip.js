import { useCallback, useRef, useState } from 'react';

const DOUBLE_TAP_DELAY = 300;
const SKIP_SECONDS = 10;
const SKIP_DISPLAY_DURATION = 800;

/**
 * Hook for double-tap skip forward/backward behavior on mobile.
 * Double-tapping the left half rewinds, right half fast-forwards.
 * @param {object} params
 * @param {number} params.currentTime - Current video time
 * @param {number} params.duration - Total video duration
 * @param {function} params.changeCurrentTime - Seek function
 * @param {function} params.showControls - Show controls callback
 * @returns {object} { skipState, handleTapLeft, handleTapRight }
 */
export default function useDoubleTapSkip({ currentTime, duration, changeCurrentTime, showControls }) {
  const [skipState, setSkipState] = useState({ direction: null, visible: false, seconds: 0 });
  const tapTimerLeft = useRef(null);
  const tapTimerRight = useRef(null);
  const tapCountLeft = useRef(0);
  const tapCountRight = useRef(0);
  const hideTimer = useRef(null);

  const doSkip = useCallback(
    (direction) => {
      if (isNaN(duration) || duration <= 0) return;
      const delta = direction === 'forward' ? SKIP_SECONDS : -SKIP_SECONDS;
      const newTime = Math.max(0, Math.min(duration, currentTime + delta));
      changeCurrentTime(newTime);

      setSkipState((prev) => ({
        direction,
        visible: true,
        seconds: prev.direction === direction && prev.visible ? prev.seconds + SKIP_SECONDS : SKIP_SECONDS,
      }));

      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        setSkipState({ direction: null, visible: false, seconds: 0 });
      }, SKIP_DISPLAY_DURATION);
    },
    [currentTime, duration, changeCurrentTime],
  );

  const handleTapLeft = useCallback(() => {
    tapCountLeft.current += 1;
    if (tapCountLeft.current === 1) {
      tapTimerLeft.current = setTimeout(() => {
        tapCountLeft.current = 0;
        if (showControls) showControls();
      }, DOUBLE_TAP_DELAY);
    } else if (tapCountLeft.current >= 2) {
      clearTimeout(tapTimerLeft.current);
      tapCountLeft.current = 0;
      doSkip('backward');
    }
  }, [doSkip, showControls]);

  const handleTapRight = useCallback(() => {
    tapCountRight.current += 1;
    if (tapCountRight.current === 1) {
      tapTimerRight.current = setTimeout(() => {
        tapCountRight.current = 0;
        if (showControls) showControls();
      }, DOUBLE_TAP_DELAY);
    } else if (tapCountRight.current >= 2) {
      clearTimeout(tapTimerRight.current);
      tapCountRight.current = 0;
      doSkip('forward');
    }
  }, [doSkip, showControls]);

  return { skipState, handleTapLeft, handleTapRight };
}
