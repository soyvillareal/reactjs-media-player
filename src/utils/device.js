let isDesktop = false;

/**
 * Detect if the user is on a desktop device
 * @returns {boolean}
 * @description This function detects if the user is on a desktop device
 */

function callback() {
  const userAgent = window.navigator.userAgent.toLowerCase();

  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isMobileDevice = /iphone|ipod|android.*mobile|windows phone|blackberry/.test(userAgent);
  const isTabletDevice = /ipad|android(?!.*mobile)|silk|kindle|tablet/.test(userAgent);
  const isLikelyDesktop = !hasTouchScreen && /mac|windows|linux|cros/.test(userAgent);

  if (isMobileDevice || isTabletDevice) {
    isDesktop = false;
  } else {
    isDesktop = isLikelyDesktop;
  }
}

callback();

export { isDesktop };
