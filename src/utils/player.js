import { lazy as ReactLazy } from 'react';
import loadScript from 'load-script';

/**
 *  Enable stubbing on a function.
 * @param {function} fn - Function to check.
 * @returns {function} - Stubbed function.
 * @example const stub = enableStubOn(fn);
 * @description Workaround for being able to stub out functions in ESM exports.
 * @see https://github.com/evanw/esbuild/issues/412#issuecomment-723047255
 */
export function enableStubOn(fn) {
  if (globalThis.__TEST__) {
    const wrap = (...args) => wrap.stub(...args);
    wrap.stub = fn;
    return wrap;
  }
  return fn;
}

/**
 * Lazy load a component.
 * @param {Function} componentImportFn - Function that imports the component.
 * @returns {React.Component} - Lazy loaded component.
 * @example const MyComponent = lazy(() => import('./MyComponent'));
 * @description Dynamic import is supported in CJS modules but needs interop require default logic.
 */
export const lazy = (componentImportFn) => {
  return ReactLazy(async () => {
    const obj = await componentImportFn();
    return typeof obj.default === 'function' ? obj : obj.default;
  });
};

/**
 * Load an external SDK.
 * @param {string} key - Key to check.
 * @returns {Object} - Global object.
 * @example const Hls = getGlobal('Hls');
 * @description This function is used to get the global object of an external SDK.
 */

export function getGlobal(key) {
  if (window[key]) {
    return window[key];
  }
  if (window.exports && window.exports[key]) {
    return window.exports[key];
  }
  if (window.module && window.module.exports && window.module.exports[key]) {
    return window.module.exports[key];
  }
  return null;
}

// Util function to load an external SDK
// or return the SDK if it is already loaded

/**
 * Get an external SDK.
 * @param {string} url - URL of the SDK.
 * @param {string} sdkGlobal - Global object of the SDK.
 * @param {!boolean} sdkReady - Function to call when the SDK is ready.
 * @param {function} isLoaded - Function to check if the SDK is already loaded.
 * @param {function} fetchScript - Function to fetch the script.
 * @returns {Promise} - Promise that resolves when the SDK is loaded.
 * @example const Hls = getSDK(HLS_SDK_URL, HLS_GLOBAL);
 * @description This function is used to get an external SDK.
 */
const requests = {};
export const getSDK = enableStubOn(function getSDK(
  url,
  sdkGlobal,
  sdkReady = null,
  isLoaded = () => true,
  fetchScript = loadScript,
) {
  const existingGlobal = getGlobal(sdkGlobal);
  if (existingGlobal && isLoaded && isLoaded(existingGlobal)) {
    return Promise.resolve(existingGlobal);
  }
  return new Promise((resolve, reject) => {
    // If we are already loading the SDK, add the resolve and reject
    // functions to the existing array of requests
    if (requests[url]) {
      requests[url].push({ resolve, reject });
      return;
    }
    requests[url] = [{ resolve, reject }];
    const onLoaded = (sdk) => {
      // When loaded, resolve all pending request promises
      requests[url].forEach((request) => request.resolve(sdk));
    };
    if (sdkReady) {
      const previousOnReady = window[sdkReady];
      window[sdkReady] = function () {
        if (previousOnReady) {
          previousOnReady();
        }
        onLoaded(getGlobal(sdkGlobal));
      };
    }
    fetchScript(url, (err) => {
      if (err) {
        // Loading the SDK failed – reject all requests and
        // reset the array of requests for this SDK
        requests[url].forEach((request) => request.reject(err));
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
});

/**
 * Check if video element has audio.
 * @param {HTMLVideoElement} videoElement - Video element to check.
 * @returns {boolean} - True if the video element has audio.
 * @example const hasAudio = hasAudio(videoElement);
 * @description This function is used to check if the video element has audio.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/mozHasAudio
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/webkitAudioDecodedByteCount
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks
 */

export function hasAudio(videoElement) {
  return (
    videoElement?.mozHasAudio || // Firefox
    videoElement?.webkitAudioDecodedByteCount > 0 || // Safari/Chrome
    (videoElement?.audioTracks !== undefined && videoElement.audioTracks.length > 0) // Audio tracks API
  );
}

/**
 * Check if the video element supports WebKit presentation mode.
 * @param {HTMLVideoElement} video - Video element to check.
 * @returns {boolean} - True if the video element supports WebKit presentation mode.
 * @example const supportsPiP = supportsWebKitPresentationMode(videoElement);
 * @description This function is used to check if the video element supports WebKit presentation mode.
 * @see https://webkit.org/blog/6784/new-video-policies-for-ios
 */

export function supportsWebKitPresentationMode(video) {
  // Check if Safari supports PiP, and is not on mobile (other than iPad)
  // iPhone safari appears to "support" PiP through the check, however PiP does not function
  const videoElement = video || document.createElement('video');
  const notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
  return (
    videoElement.webkitSupportsPresentationMode &&
    typeof videoElement.webkitSetPresentationMode === 'function' &&
    notMobile
  );
}
