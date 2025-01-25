import { HlsConfig } from '../hls.js';

export interface IPlayerTrack {
  kind: string;
  src: string;
  srcLang: string;
  default: boolean;
}

export interface IPlayerConfig {
  attributes: HTMLVideoElement['attributes'];
  tracks: IPlayerTrack[];
  forceVideo: boolean;
  forceHLS: boolean;
  forceSafariHLS: boolean;
  forceDisableHls: boolean;
  forceDASH: boolean;
  forceFLV: boolean;
  hlsOptions: Partial<HlsConfig>;
  hlsVersion: string;
  dashVersion: string;
  flvVersion: string;
  forceLoad: boolean;
  loopOnEnded: boolean;
}
