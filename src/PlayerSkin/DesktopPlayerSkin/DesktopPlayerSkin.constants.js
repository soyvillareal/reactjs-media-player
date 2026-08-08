export const eventsKeyCodes = {
  32: 'SPACE_KEY',
  27: 'ESCAPE_KEY',
  37: 'ARROW_LEFT_KEY',
  39: 'ARROW_RIGHT_KEY',
  38: 'ARROW_UP_KEY',
  40: 'ARROW_DOWN_KEY',
  77: 'MUTE_KEY',
  16: 'SHIFT_KEY', // Not used yet
  67: 'SUBTITLES_KEY', // Not used yet
  70: 'F_KEY',
  84: 'T_KEY', // Not used yet
  78: 'N_KEY', // Not used yet
};

export const keyMappings = {
  ' ': 'SPACE_KEY',
  Escape: 'ESCAPE_KEY',
  ArrowLeft: 'ARROW_LEFT_KEY',
  ArrowRight: 'ARROW_RIGHT_KEY',
  ArrowUp: 'ARROW_UP_KEY',
  ArrowDown: 'ARROW_DOWN_KEY',
  m: 'MUTE_KEY',
  Shift: 'SHIFT_KEY', // Not used yet
  c: 'SUBTITLES_KEY', // Not used yet
  f: 'F_KEY',
  t: 'T_KEY', // Not used yet
  n: 'N_KEY', // Not used yet
};

export const sliderWith = (isFullscreen) => {
  if (isFullscreen) {
    return 83;
  }

  return 55;
};

export const buildIconProps = (isFullscreen) => {
  if (isFullscreen) {
    return {
      width: 54,
      height: 54,
    };
  }

  return {
    width: 36,
    height: 36,
  };
};
