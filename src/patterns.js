import { isMediaStream, isBlobUrl } from './utils';

export const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
export const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
export const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
export const FLV_EXTENSIONS = /\.(flv)($|\?)/i;

const canPlayFile = (url, sources) => {
  if (sources && sources.length > 0) {
    return true;
  }

  if (isMediaStream(url) || isBlobUrl(url)) {
    return true;
  }

  return (
    VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url)
  );
};

export const canPlay = canPlayFile;
