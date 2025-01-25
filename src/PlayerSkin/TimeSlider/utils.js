export const getEventXCoordinate = (event) => {
  if ('changedTouches' in event && event.changedTouches && 1 <= event.changedTouches.length) {
    return event.changedTouches[0].pageX;
  } else if ('clientX' in event) {
    return event.clientX;
  }
  return 0;
};

export const getValue = (event, rect, duration) => {
  const w = getEventXCoordinate(event) - rect.left;
  if (0 >= w) {
    return 0;
  }
  if (w >= rect.width) {
    return duration;
  }
  return Math.round((duration * w) / rect.width);
};

export const getClampedPosition = ({ duration, currentTime, sliderWidth, elementWidth, offset = 0 }) => {
  if (duration <= 0 || sliderWidth <= 0 || elementWidth <= 0) {
    return 0;
  }
  const relativePosition = (currentTime / duration) * sliderWidth;

  const halfTooltipWidth = elementWidth / 2;
  const minPosition = halfTooltipWidth + offset;
  const maxPosition = sliderWidth - halfTooltipWidth - offset;

  const clampedPosition = Math.min(maxPosition, Math.max(minPosition, relativePosition));

  return clampedPosition;
};

export const getTrackTranslateX = ({ duration, currentTime, sliderWidth, handleWidth }) => {
  if (duration === 0) {
    return {
      trackTranslateX: '-100',
      handleTranslateX: '-100',
    };
  }

  const clampedPosition = getClampedPosition({
    duration,
    currentTime,
    sliderWidth,
    elementWidth: handleWidth,
    offset: 0,
  });

  const trackTranslateX = ((100 * currentTime) / duration - 100).toFixed(1);
  const handleTranslateX = ((clampedPosition / sliderWidth) * 100 - 100).toFixed(1);

  return {
    trackTranslateX,
    handleTranslateX,
  };
};

export const getMouseTranslateX = ({ duration, currentTime, sliderWidth, tooltipWidth }) => {
  const clampedPosition = getClampedPosition({
    duration,
    currentTime,
    sliderWidth,
    elementWidth: tooltipWidth,
    offset: 5,
  });

  const translateX = ((clampedPosition / sliderWidth) * 100).toFixed(1);

  return translateX;
};

const timeCodeToSeconds = (timeCode) => {
  if (typeof timeCode !== 'string') {
    throw new TypeError('Time must be a string');
  }
  if (timeCode.indexOf(';') > 0) {
    timeCode = timeCode.replace(';', ':');
    if (!/\d{2}(\:\d{2}){0,3}/i.test(timeCode)) {
      throw new TypeError('Time code must have the format `00:00:00`');
    }
  }

  const timeParts = timeCode.split(':');

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let frames = 0;
  let frameRate = 25;
  let roundedFrameRate = Math.round(frameRate);
  let secondsPerHour = 3600 * roundedFrameRate;
  let secondsPerMinute = 60 * roundedFrameRate;

  switch (timeParts.length) {
    default:
    case 1:
      seconds = parseInt(timeParts[0], 10);
      break;
    case 2:
      minutes = parseInt(timeParts[0], 10);
      seconds = parseInt(timeParts[1], 10);
      break;
    case 3:
      hours = parseInt(timeParts[0], 10);
      minutes = parseInt(timeParts[1], 10);
      seconds = parseInt(timeParts[2], 10);
      break;
    case 4:
      hours = parseInt(timeParts[0], 10);
      minutes = parseInt(timeParts[1], 10);
      seconds = parseInt(timeParts[2], 10);
      frames = parseInt(timeParts[3], 10);
  }

  const totalSeconds = (secondsPerHour * hours + secondsPerMinute * minutes + frameRate * seconds + frames) / frameRate;

  return parseFloat(totalSeconds.toFixed(3));
};

export const getOffset = (e) => {
  var t = e.getBoundingClientRect(),
    s = window.pageXOffset || document.documentElement.scrollLeft,
    o = window.pageYOffset || document.documentElement.scrollTop;
  return { top: t.top + o, left: t.left + s };
};

export const parseVTT = (vttString) => {
  let from = 0;
  let to = 0;
  let vttArray = [];
  for (var i of vttString.split('\n')) {
    if (/-->/.test(i)) {
      const [timeFrom, timeTo] = (i.match(/(.*) --> (.*)/) || []).slice(1);
      from = timeCodeToSeconds(timeFrom);
      to = timeCodeToSeconds(timeTo);
    } else if (/png/.test(i)) {
      const [file, x, y, w, h] = (i.match(/(.*)\?xywh=(.*),(.*),(.*),(.*)/) || []).slice(1);
      vttArray.push({
        from,
        to,
        file,
        x,
        y,
        w,
        h,
      });
    }
  }
  return vttArray;
};
