import { getCookie, setCookie } from '../utils/cookie';

export const measureNetworkSpeedGeneratedFile = async () => {
  // Use a small file (~200KB) for fast measurement with minimal data usage
  const testUrl = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js';
  const fileSizeInBits = 200 * 1024 * 8; // approximate size in bits

  try {
    const speedInMbpsInCookie = getCookie('internet_speed');
    if (speedInMbpsInCookie) {
      return parseFloat(speedInMbpsInCookie);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const startTime = performance.now();
    const response = await fetch(testUrl, {
      signal: controller.signal,
      cache: 'no-store',
    });
    const blob = await response.blob();
    clearTimeout(timeoutId);
    const endTime = performance.now();

    // Use actual downloaded size if available
    const actualSizeInBits = blob.size * 8 || fileSizeInBits;
    const durationInSeconds = (endTime - startTime) / 1000;
    const speedInMbps = actualSizeInBits / (durationInSeconds * 1024 * 1024);
    setCookie('internet_speed', speedInMbps.toString(), 7);

    return speedInMbps;
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('An error occurred while measuring the network speed: ', error);
    }
    return null;
  }
};

export const getRecommendedVideoQuality = (speed, sources) => {
  const videoQualityOptions = [
    { quality: 144, minSpeed: 0.3 },
    { quality: 270, minSpeed: 0.5 },
    { quality: 360, minSpeed: 0.7 },
    { quality: 480, minSpeed: 1.0 },
    { quality: 720, minSpeed: 2.5 },
    { quality: 1080, minSpeed: 5.0 },
    { quality: 2160, minSpeed: 20.0 },
  ];

  let selectedQuality = undefined;

  for (let i = videoQualityOptions.length - 1; i >= 0; i--) {
    const option = videoQualityOptions[i];
    if (speed >= option.minSpeed) {
      selectedQuality = option.quality;
      break;
    }
  }

  if (selectedQuality && sources.includes(selectedQuality)) {
    return selectedQuality;
  }

  // Fallback: find the nearest available quality at or below the recommended
  if (selectedQuality) {
    for (let i = videoQualityOptions.length - 1; i >= 0; i--) {
      const option = videoQualityOptions[i];
      if (option.quality <= selectedQuality && sources.includes(option.quality)) {
        return option.quality;
      }
    }
  }

  // Last resort: return the lowest available quality from sources
  for (let i = 0; i < videoQualityOptions.length; i++) {
    const option = videoQualityOptions[i];
    if (sources.includes(option.quality)) {
      return option.quality;
    }
  }

  // If nothing in videoQualityOptions matches, return first source
  return sources.length > 0 ? sources[0] : undefined;
};
