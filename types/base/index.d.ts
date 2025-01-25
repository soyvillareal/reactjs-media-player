import { Component, ReactElement, CSSProperties } from 'react';

import ReactJSMediaPlayer from '../lib';
import dashjs from '../dash.js/index.js';
import hlsjs from '../hls.js/index.js';
import flvJs from '../flv.js/index.js';

export type TActionErrorEventPlayer = (
  error: hlsjs.Events.ERROR | Event,
  data?: hlsjs.ErrorData | null,
  hls?: hlsjs.Hls | flvJs.Player | dashjs.MediaPlayerClass,
  Hls?: typeof hlsjs.Hls | typeof flvJs | typeof dashjs,
) => void;

export interface ISourceProps {
  src: string;
  resolution: number;
}

export interface IOnProgressProps {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

export type TLanguage = 'es' | 'en';

export interface IBaseReactJSMediaPlayerCommons {
  prevented?: boolean;
  waiting?: boolean;
  playing?: boolean;
  loop?: boolean;
  controls?: boolean;
  volume?: number;
  muted?: boolean;
  playbackRate?: number;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  progressInterval?: number;
  playsinline?: boolean;
  pip?: boolean;
  stopOnUnmount?: boolean;
  fallback?: ReactElement;
  language: TLanguage;
  live?: boolean;
  poster?: string;
  spriteVTTFile?: string;
  onReady?: (player: ReactJSMediaPlayer) => void;
  onStart?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onBuffer?: () => void;
  onBufferEnd?: () => void;
  onEnded?: () => void;
  onEnablePIP?: () => void;
  onDisablePIP?: () => void;
  onError?: TActionErrorEventPlayer;
  onDuration?: (duration: number) => void;
  onSeek?: (seconds: number) => void;
  onProgress?: (state: IOnProgressProps) => void;
  onPlayBackRateChange?: (rate: number) => void;
  onPlayBackQualityChange?: (quality: number | null) => void;
}

export interface IBaseReactJSMediaPlayerWithUrlNever {
  sources?: never;
}

export interface IBaseReactJSMediaPlayerWithSourcesNever {
  url?: never;
}

export interface IBaseReactJSMediaPlayerWithUrl {
  url: string;
}

export interface IBaseReactJSMediaPlayerWithSources {
  sources: ISourceProps[];
  fullHDQualityBreak?: number;
}

type TBaseReactJSMediaPlayerProps =
  | (IBaseReactJSMediaPlayerWithUrl & IBaseReactJSMediaPlayerCommons & IBaseReactJSMediaPlayerWithUrlNever)
  | (IBaseReactJSMediaPlayerWithSources & IBaseReactJSMediaPlayerCommons & IBaseReactJSMediaPlayerWithSourcesNever);

export default abstract class BaseReactJSMediaPlayer<P extends TBaseReactJSMediaPlayerProps> extends Component<P, any> {
  static canPlay(url: string): boolean;
  static canEnablePIP(url: string): boolean;

  seekTo(amount: number, type?: 'seconds' | 'fraction'): void;
  getCurrentTime(): number;
  getSecondsLoaded(): number;
  getDuration(): number;
  getInternalPlayer(key?: string): Record<string, any>;
}
