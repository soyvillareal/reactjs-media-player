import React from 'react';

const useFullscreen = ({ updateState, videoRef, playerRef }) => {
  const requestFullscreen = React.useCallback(() => {
    const playerElement = playerRef?.current;
    const videoElement = videoRef?.current;
    if (!playerElement) {
      console.error('useVideoFullscreen: the player element is not ready');
      return;
    }
    if (playerElement.requestFullscreen) {
      playerElement.requestFullscreen();
    } else if (playerElement.msRequestFullscreen) {
      // Compatibilidad con IE11
      playerElement.msRequestFullscreen();
    } else if (playerElement.webkitRequestFullscreen) {
      // Compatibilidad con navegadores WebKit
      playerElement.webkitRequestFullscreen();
    } else {
      if (videoElement && videoElement.webkitEnterFullScreen) {
        // Compatibilidad con iOS Safari
        videoElement.webkitEnterFullScreen();
      } else {
        // 异常分支，不应该进入
        // debug('useVideoFullscreen: 全屏异常，浏览器不支持 requestFullscreen');
      }
    }
  }, [videoRef, playerRef]);

  const exitFullscreen = React.useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else {
      // 异常分支，不应该进入
      // debug('useVideoFullscreen: 退出全屏异常，浏览器不支持 exitFullscreen');
    }
  }, []);

  const requestToggleFullscreen = React.useCallback(() => {
    const playerElement = playerRef?.current;
    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

    if (fullscreenElement === playerElement) {
      exitFullscreen();
    } else {
      requestFullscreen();
    }
  }, [playerRef, exitFullscreen, requestFullscreen]);

  const onChange = React.useCallback(() => {
    const playerElement = playerRef?.current;
    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    updateState({ fullscreen: !!playerElement && fullscreenElement === playerElement });
  }, [updateState, playerRef]);

  React.useEffect(() => {
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    document.onmsfullscreenchange = onChange;
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
      document.onmsfullscreenchange = null;
    };
  }, [onChange]);

  return {
    requestFullscreen,
    exitFullscreen,
    requestToggleFullscreen,
  };
};

export default useFullscreen;
