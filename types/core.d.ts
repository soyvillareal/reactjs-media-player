import BaseReactJSMediaPlayer, {
  IBaseReactJSMediaPlayerCommons,
  IBaseReactJSMediaPlayerWithSources,
  IBaseReactJSMediaPlayerWithSourcesNever,
  IBaseReactJSMediaPlayerWithUrl,
  IBaseReactJSMediaPlayerWithUrlNever,
} from './base';
import { HlsConfig } from './hlsjs.js';

export interface ITrackProps {
  kind: string;
  src: string;
  srcLang: string;
  label: string;
  default?: boolean;
}

export interface IPlayerCoreConfig {
  attributes: HTMLVideoElement['attributes'];
  tracks?: ITrackProps[];
  forceVideo?: boolean;
  forceHLS?: boolean;
  forceSafariHLS?: boolean;
  forceDisableHls?: boolean;
  forceDASH?: boolean;
  forceFLV?: boolean;
  hlsOptions?: Partial<HlsConfig>;
  hlsVersion?: string;
  dashVersion?: string;
  flvVersion?: string;
  forceLoad: boolean;
  loopOnEnded: boolean;
}

export interface IPlayerCoreWithUrl extends IBaseReactJSMediaPlayerWithUrl {
  config?: IPlayerCoreConfig;
}

export interface IPlayerCoreWithSources extends IBaseReactJSMediaPlayerWithSources {
  config?: IPlayerCoreConfig;
}

export type TPlayerCoreProps =
  | (IPlayerCoreWithUrl & IBaseReactJSMediaPlayerCommons & IBaseReactJSMediaPlayerWithUrlNever)
  | (IPlayerCoreWithSources & IBaseReactJSMediaPlayerCommons & IBaseReactJSMediaPlayerWithSourcesNever);

export default class PlayerCore extends BaseReactJSMediaPlayer<TPlayerCoreProps> {
  seekTo(_amount: number, _type?: 'seconds' | 'fraction'): void;
  getCurrentTime(): number;
  getSecondsLoaded(): number;
  getDuration(): number;
  getInternalPlayer(key?: string): Record<string, any>;
}
