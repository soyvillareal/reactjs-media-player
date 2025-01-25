import React from 'react';

const useVolume = ({ prevented, muted, videoRef, src, updateState }) => {
  const onVolumeChange = React.useCallback(
    (e) => {
      if (!videoRef.current) {
        return;
      }
      let muted = e.target.muted;
      if (0 === e.target.volume) {
        muted = true;
      }
      updateState({
        volume: e.target.volume,
        muted,
      });
    },
    [videoRef],
  );

  const onMutedClick = React.useCallback(() => {
    if (!videoRef.current) {
      return;
    }
    const videoElement = videoRef.current;
    if (videoElement) {
      let volume = 0;
      if ((prevented || muted || videoElement.volume === 0) && videoElement.muted === true) {
        volume = 1;
      }
      updateState({
        volume,
        muted: !videoElement.muted,
      });
    }
  }, [videoRef, prevented, muted]);

  const changeVolume = React.useCallback(
    (v) => {
      if (!videoRef.current) {
        return;
      }
      const videoElement = videoRef.current;
      let muted = 0 === v;
      if (videoElement) {
        videoElement.volume = v;
      }
      if (0 !== v && videoElement.muted === true) {
        muted = false;
      }
      updateState({
        volume: v,
        muted,
      });
    },
    [videoRef],
  );

  const updateVolumeWithCallback = React.useCallback(
    (callback) => {
      if (!videoRef.current) {
        return;
      }
      const videoElement = videoRef.current;
      const lastVolume = videoElement.volume;
      const newVolume = callback(lastVolume);
      changeVolume(newVolume);
    },
    [videoRef, changeVolume],
  );

  React.useEffect(() => {
    return () => {
      videoRef.current = null;
    };
  }, [videoRef]);

  React.useEffect(() => {
    if (!videoRef.current) {
      return () => {};
    }
    const el = videoRef.current;
    if (!el) {
      return () => {};
    }
    el.addEventListener('volumechange', onVolumeChange);
    return () => {
      el.removeEventListener('volumechange', onVolumeChange);
    };
  }, [onVolumeChange]);

  React.useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const el = videoRef.current;
    if (el) {
      el.muted = false;
      el.volume = 1;
    }
  }, [src, videoRef]);

  return {
    onMutedClick,
    changeVolume,
    updateVolumeWithCallback,
  };
};

export default useVolume;
