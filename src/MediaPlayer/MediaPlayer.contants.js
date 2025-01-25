import { getCookie, setCookie } from '../utils/cookie';

export const measureNetworkSpeedGeneratedFile = async () => {
  const testUrl = 'https://files.testfile.org/PDF/10MB-TESTFILE.ORG.pdf';
  const fileSizeInBits = 10 * 1024 * 1024 * 8;

  const startTime = performance.now();
  try {
    const speedInMbpsInCookie = getCookie('internet_speed');
    if (speedInMbpsInCookie) {
      return parseFloat(speedInMbpsInCookie);
    }

    const response = await fetch(testUrl, { mode: 'no-cors' });
    await response.blob();
    const endTime = performance.now();

    const durationInSeconds = (endTime - startTime) / 1000; // En segundos
    const speedInMbps = fileSizeInBits / (durationInSeconds * 1024 * 1024); // Mbps
    setCookie('internet_speed', speedInMbps.toString(), 7);

    return speedInMbps;
  } catch (error) {
    console.error('An error occurred while measuring the network speed: ', error);
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

  for (let i = videoQualityOptions.length - 1; i >= 0; i--) {
    const option = videoQualityOptions[i];
    if (sources.includes(option.quality)) {
      return option.quality;
    }
  }

  return undefined;
};
