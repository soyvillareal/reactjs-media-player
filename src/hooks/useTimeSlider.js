import React from 'react';

import useAppDispatch from './context/useAppDispatch';
import { getTrackTranslateX, getValue } from '../PlayerSkin/TimeSlider/utils';

const useTimeSlider = ({ timelensRef, currentTime, duration, onChange, onSeeking }) => {
  const dispatch = useAppDispatch();

  const sliderRef = React.useRef(null);
  const handleRef = React.useRef(null);

  const [showTooltip, setShowTooltip] = React.useState(false);
  const [timeSliderSliding, setTimeSliderSliding] = React.useState(false);
  const [timeSliderRect, setTimeSliderRect] = React.useState({
    left: 0,
    width: 0,
  });
  const [timeSliderState, setTimeSliderState] = React.useState({
    value: 0,
    tooltip: 0,
  });

  const onClick = React.useCallback(
    (e) => {
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      const value = getValue(e, rect, duration);
      dispatch({
        type: 'timeSliding',
        payload: false,
      });
      setTimeSliderSliding(false);
      onChange(value);
      onSeeking(false);
      if (timelensRef.current) {
        timelensRef.current.handleTimelens(e);
      }
    },
    [onChange, duration, dispatch, timelensRef],
  );

  const onMouseDown = React.useCallback(
    (e) => {
      e.preventDefault();
      if (sliderRef.current !== null) {
        const rect = sliderRef.current.getBoundingClientRect();

        dispatch({
          type: 'timeSliding',
          payload: true,
        });
        setTimeSliderRect((prev) => ({
          ...prev,
          left: rect.left,
          width: rect.width,
        }));
        if (timelensRef.current) {
          timelensRef.current.handleTimelens(e);
        }
        setTimeSliderSliding(true);
        onSeeking(true);
      }
    },
    [timelensRef],
  );

  const onMouseUp = React.useCallback(
    (e) => {
      e.preventDefault();
      const value = getValue(
        e,
        {
          left: timeSliderRect.left,
          width: timeSliderRect.width,
        },
        duration,
      );

      dispatch({
        type: 'timeSliding',
        payload: false,
      });
      setTimeSliderSliding(false);
      setTimeSliderState((prev) => ({
        ...prev,
        value,
      }));
      onChange(value);
      onSeeking(false);
      if (timelensRef.current) {
        timelensRef.current.setShowTimelens(false);
      }
    },
    [onChange, duration, timeSliderRect, dispatch],
  );

  const onMouseMove = React.useCallback(
    (e) => {
      e.preventDefault();
      const value = getValue(
        e,
        {
          left: timeSliderRect.left,
          width: timeSliderRect.width,
        },
        duration,
      );

      setTimeSliderState((prev) => ({
        ...prev,
        value,
      }));
      if (timelensRef.current) {
        timelensRef.current.handleTimelens(e);
      }
    },
    [duration, timeSliderRect],
  );

  React.useEffect(() => {
    if (timeSliderSliding) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      document.addEventListener('touchmove', onMouseMove);
      document.addEventListener('touchcancel', onMouseUp);
      document.addEventListener('touchend', onMouseUp);
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        document.removeEventListener('touchmove', onMouseMove);
        document.removeEventListener('touchcancel', onMouseUp);
        document.removeEventListener('touchend', onMouseUp);
      };
    }
    return () => {};
  }, [timeSliderSliding, onMouseMove, onMouseUp]);

  const onSliderMouseOver = React.useCallback(
    (e) => {
      e.preventDefault();
      if (sliderRef.current !== null) {
        const rect = sliderRef.current.getBoundingClientRect();
        setTimeSliderRect((prev) => ({
          ...prev,
          left: rect.left,
          width: rect.width,
        }));
        if (timelensRef.current) {
          timelensRef.current.handleTimelens(e);
        }
      }
    },
    [timelensRef],
  );

  const onSliderMouseMove = React.useCallback(
    (e) => {
      e.preventDefault();
      const value = getValue(
        e,
        {
          left: timeSliderRect.left,
          width: timeSliderRect.width,
        },
        duration,
      );

      setTimeSliderState((prev) => ({
        ...prev,
        tooltip: value,
      }));
      if (timelensRef.current) {
        timelensRef.current.handleTimelens(e);
      }
    },
    [duration, timeSliderRect.left, timeSliderRect.width, timelensRef],
  );

  const onResize = React.useCallback((e) => {
    e.preventDefault();
    if (!sliderRef || !sliderRef.current) {
      return;
    }
    const rect = sliderRef.current.getBoundingClientRect();
    setTimeSliderRect((prev) => ({
      ...prev,
      left: rect.left,
      width: rect.width,
    }));
  }, []);

  const onMouseEnter = React.useCallback(
    (e) => {
      if (timelensRef.current) {
        timelensRef.current.handleTimelens(e);
      }
      setShowTooltip(true);
    },
    [timelensRef],
  );
  const onMouseLeave = React.useCallback(() => {
    if (timelensRef.current) {
      timelensRef.current.setShowTimelens(false);
    }
    setShowTooltip(false);
  }, [timelensRef]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }
  }, [onResize]);

  const trackTranslateX = React.useMemo(() => {
    return getTrackTranslateX({
      duration,
      currentTime: timeSliderSliding ? timeSliderState.value : currentTime,
      sliderWidth: timeSliderRect.width,
      handleWidth: handleRef.current?.offsetWidth || 0,
    });
  }, [duration, currentTime, timeSliderState.value, timeSliderSliding, handleRef, timeSliderRect]);

  return {
    sliderRef,
    handleRef,
    showTooltip,
    timeSliderSliding,
    timeSliderState,
    trackTranslateX: {
      track: trackTranslateX.trackTranslateX,
      handle: trackTranslateX.handleTranslateX,
    },
    onClick,
    onMouseDown,
    onSliderMouseOver,
    onSliderMouseMove,
    onMouseEnter,
    onMouseLeave,
  };
};

export default useTimeSlider;
