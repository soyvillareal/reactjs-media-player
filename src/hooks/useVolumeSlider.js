import React from 'react';

import useAppSelector from './context/useAppSelector';
import useAppDispatch from './context/useAppDispatch';
import { sliderWith } from '../PlayerSkin/DesktopPlayerSkin/DesktopPlayerSkin.constants';
import { getVolume } from '../PlayerSkin/DesktopPlayerSkin/components/Controls/components/VolumeSlider/utils';

const useVolumeSlider = ({ fullscreen, value, onChange }) => {
  const state = useAppSelector();
  const dispatch = useAppDispatch();

  const sliderRef = React.useRef(null);
  const thumbRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [thumbLeft, setThumbLeft] = React.useState(0);

  React.useEffect(() => {
    if (sliderRef?.current && thumbRef?.current) {
      const thumbRect = thumbRef.current.getBoundingClientRect();

      const realPosition = (value / 100) * sliderWith(fullscreen) - thumbRect.width / 2;

      let thumbPosition = realPosition;
      if (realPosition < 0) {
        thumbPosition = 0;
      } else if (realPosition > sliderWith(fullscreen) - thumbRect.width) {
        thumbPosition = sliderWith(fullscreen) - thumbRect.width;
      }

      setThumbLeft(thumbPosition);
    }
  }, [value, fullscreen]);

  const handleChange = React.useCallback(
    (event) => {
      if (onChange) {
        const percentage = getVolume({
          clientX: event.clientX,
          sliderRef,
          isFullcreen: fullscreen,
        });
        onChange(percentage);
      }
    },
    [onChange, fullscreen],
  );

  const onMouseDown = React.useCallback(
    (e) => {
      e.preventDefault();
      if (sliderRef?.current) {
        setIsDragging(true);
        dispatch({ type: 'volumeSliding', payload: true });
      }
    },
    [dispatch],
  );

  const onMouseUp = React.useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: 'volumeSliding',
        payload: false,
      });
      const percentage = getVolume({
        clientX: e.clientX,
        sliderRef,
        isFullcreen: fullscreen,
      });

      onChange(percentage);
      setIsDragging(false);
    },
    [onChange, fullscreen, dispatch],
  );

  const rafRef = React.useRef(null);

  const onMouseMove = React.useCallback(
    (e) => {
      e.preventDefault();
      if (!isDragging) {
        return;
      }

      // Throttle via requestAnimationFrame to reduce re-renders during drag
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      rafRef.current = requestAnimationFrame(() => {
        const percentage = getVolume({
          clientX,
          sliderRef,
          isFullcreen: fullscreen,
        });
        onChange(percentage);
        rafRef.current = null;
      });
    },
    [isDragging, fullscreen, onChange],
  );

  React.useEffect(() => {
    if (state.volumeSliding) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      document.addEventListener('touchmove', onMouseMove);
      document.addEventListener('touchcancel', onMouseUp);
      document.addEventListener('touchend', onMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('touchcancel', onMouseUp);
      document.removeEventListener('touchend', onMouseUp);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [state.volumeSliding, onMouseMove, onMouseUp]);

  return {
    thumbLeft,
    sliderRef,
    thumbRef,
    onMouseDown,
    onMouseMove,
    handleChange,
  };
};

export default useVolumeSlider;
