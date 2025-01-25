import React from 'react';

import useAppSelector from './context/useAppSelector';
import useAppDispatch from './context/useAppDispatch';
import { sliderWith } from '../PlayerSkin/PlayerSkin.constants';
import { getVolume } from '../PlayerSkin/Controls/components/VolumeSlider/utils';

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

  const onMouseDown = React.useCallback((e) => {
    e.preventDefault();
    if (sliderRef?.current) {
      setIsDragging(true);
      dispatch({ type: 'volumeSliding', payload: true });
    }
  }, []);

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
    [onChange, fullscreen],
  );

  const onMouseMove = React.useCallback(
    (e) => {
      e.preventDefault();
      if (!isDragging) {
        return;
      }

      const percentage = getVolume({
        clientX: e.clientX,
        sliderRef,
        isFullcreen: fullscreen,
      });

      onChange(percentage);
    },
    [isDragging, fullscreen],
  );

  React.useEffect(() => {
    if (state.volumeSliding) {
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
