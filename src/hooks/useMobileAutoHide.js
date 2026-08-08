import { useCallback, useEffect, useRef, useState } from 'react';

const HIDE_DELAY = 3000;

/**
 * Hook for mobile controls visibility with tap-to-toggle behavior.
 * Controls auto-hide after HIDE_DELAY when playing.
 * Tapping toggles visibility.
 * Controls stay visible when paused, ended, loading or waiting.
 */
export default function useMobileAutoHide({ hasResource, loading, prevented, paused, ended, waiting, seeking }) {
  const [controlsVisible, setControlsVisible] = useState(true);
  const timerRef = useRef(null);

  const shouldStayVisible = !hasResource || loading || prevented || paused || ended || waiting;

  const startHideTimer = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, HIDE_DELAY);
  }, []);

  const stopHideTimer = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  const toggleControls = useCallback(() => {
    setControlsVisible((prev) => {
      const next = !prev;
      if (next && !shouldStayVisible) {
        startHideTimer();
      }
      return next;
    });
  }, [shouldStayVisible, startHideTimer]);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (!shouldStayVisible) {
      startHideTimer();
    }
  }, [shouldStayVisible, startHideTimer]);

  const hideControls = useCallback(() => {
    if (!shouldStayVisible) {
      setControlsVisible(false);
      stopHideTimer();
    }
  }, [shouldStayVisible, stopHideTimer]);

  // Keep controls visible when paused/ended/loading
  useEffect(() => {
    if (shouldStayVisible) {
      setControlsVisible(true);
      stopHideTimer();
    } else if (controlsVisible) {
      startHideTimer();
    }
  }, [shouldStayVisible, controlsVisible, startHideTimer, stopHideTimer]);

  // Auto-hide on seeking end when playing
  useEffect(() => {
    if (!seeking && !paused && !ended && controlsVisible) {
      startHideTimer();
    }
  }, [seeking, paused, ended, controlsVisible, startHideTimer]);

  // Cleanup
  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return { controlsVisible, toggleControls, showControls, hideControls };
}
