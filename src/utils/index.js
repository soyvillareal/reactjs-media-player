/**
 * Omit keys from an object.
 * @param {Object} object - Object to check.
 * @param  {...any} arrays - Arrays to omit.
 * @returns {Object} - Object with the keys omitted.
 * @example const otherProps = omit(props, ['url', 'playing', 'controls']);
 * @description This function is used to omit keys from an object.
 */

export function omit(object, ...arrays) {
  const arrayToConcat = [];
  const omitKeys = arrayToConcat.concat(...arrays);
  const output = {};
  const keys = Object.keys(object);
  for (const key of keys) {
    if (omitKeys.indexOf(key) === -1) {
      output[key] = object[key];
    }
  }
  return output; // Omit keys based on strings
}

/**
 * Check if the URL is a MediaStream.
 * @param {string} url - URL to check.
 * @returns {boolean} - True if the URL is a MediaStream.
 * @example const isStream = isMediaStream(url);
 * @description This function is used to check if the URL is a MediaStream.
 */

export function isMediaStream(url) {
  return (
    typeof window !== 'undefined' && typeof window.MediaStream !== 'undefined' && url instanceof window.MediaStream
  );
}

/**
 * Check if the URL is a blob.
 * @param {string} url - URL to check.
 * @returns {boolean} - True if the URL is a blob
 * @example const isBlob = isBlobUrl(url);
 * @description This function is used to check if the URL is a blob.
 */

export function isBlobUrl(url) {
  return /^blob:/.test(url);
}

/**
 * Merge an array of refs into a single ref.
 * @param {Array<React.Ref | React.MutableRefObject>} refs - Array of refs.
 * @returns {function} - Merged ref function.
 * @example const mergedRef = mergeRefs([ref1, ref2]);
 * @description This function is used to merge an array of refs into a single ref.
 */

export function mergeRefs(refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    });
  };
}

/**
 * Transform seconds to time string.
 * @param {number} seconds - Time in seconds.
 * @returns {string} - Formatted time string.
 * @example const timeString = formatTime(90);
 * @description This function is used to transform seconds to time string.
 */

export const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hrs > 0) {
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  } else {
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
};

/**
 * Index an array by a key.
 * @param {*} array - Array to index.
 * @param {string} key - Key to index by.
 * @returns {Object} - Object with the key as the index.
 * @example const indexedArray = indexBy(array, 'id');
 * @description This function is used to index an array by a key.
 */

export const indexBy = (array, key) => {
  return array.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
};
