let isDesktop = false;
let isMobile = false;

/**
 * Detect if the user is on a desktop or mobile device
 * @description Detects device type based on user agent and touch capabilities.
 * isMobile includes phones and tablets.
 */

function callback() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();

  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isMobileDevice = /iphone|ipod|android.*mobile|windows phone|blackberry/.test(userAgent);
  const isTabletDevice = /ipad|android(?!.*mobile)|silk|kindle|tablet/.test(userAgent);
  const isLikelyDesktop = !hasTouchScreen && /mac|windows|linux|cros/.test(userAgent);

  if (isMobileDevice || isTabletDevice) {
    isDesktop = false;
    isMobile = true;
  } else {
    isDesktop = isLikelyDesktop;
    isMobile = !isLikelyDesktop;
  }
}

callback();

export { isDesktop, isMobile };
