import React from 'react';

import useAppDispatch from './context/useAppDispatch';
import useAppSelector from './context/useAppSelector';

const timeToHide = 3 * 1000;

const useAutoHide = ({ hasResource, loading, prevented, paused, ended, waiting, seeking, kernelMsg }) => {
  const { controlsHovering, timeSliding, menuVisible, subMenuVisible } = useAppSelector();
  const dispatch = useAppDispatch();

  const timerControls = React.useRef(undefined);

  const showControls = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      window.clearTimeout(timerControls.current);
    }
    dispatch({ type: 'hiding', payload: false });

    if (
      hasResource === false ||
      loading ||
      prevented ||
      paused ||
      ended ||
      waiting ||
      seeking ||
      timeSliding ||
      menuVisible ||
      subMenuVisible ||
      controlsHovering ||
      kernelMsg
    ) {
      return;
    }

    timerControls.current = window.setTimeout(() => {
      dispatch({ type: 'hiding', payload: true });
    }, timeToHide);
  }, [
    hasResource,
    loading,
    prevented,
    paused,
    ended,
    waiting,
    seeking,
    timeSliding,
    menuVisible,
    subMenuVisible,
    controlsHovering,
    kernelMsg,
    dispatch,
  ]);

  const hideControls = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      window.clearTimeout(timerControls.current);
    }

    if (
      hasResource === false ||
      loading ||
      prevented ||
      paused ||
      ended ||
      waiting ||
      seeking ||
      timeSliding ||
      menuVisible ||
      subMenuVisible ||
      controlsHovering ||
      kernelMsg
    ) {
      dispatch({ type: 'hiding', payload: false });
      return;
    }
    dispatch({ type: 'hiding', payload: true });
  }, [
    hasResource,
    loading,
    prevented,
    paused,
    ended,
    waiting,
    seeking,
    timeSliding,
    menuVisible,
    subMenuVisible,
    controlsHovering,
    kernelMsg,
    dispatch,
  ]);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && (paused || ended)) {
      window.clearTimeout(timerControls.current);
      dispatch({ type: 'hiding', payload: false });
    } else if (!paused) {
      showControls();
    }
  }, [paused, ended, showControls, dispatch]);

  // Cleanup timer on unmount to prevent firing after component is gone
  React.useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        window.clearTimeout(timerControls.current);
      }
    };
  }, []);

  return {
    showControls,
    hideControls,
  };
};

export default useAutoHide;
