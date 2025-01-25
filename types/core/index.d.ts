import BaseReactJSMediaPlayer, {
  IBaseReactJSMediaPlayerCommons,
  IBaseReactJSMediaPlayerWithSources,
  IBaseReactJSMediaPlayerWithSourcesNever,
  IBaseReactJSMediaPlayerWithUrl,
  IBaseReactJSMediaPlayerWithUrlNever,
} from '../base';
import { HlsConfig } from '../hls.js/index.js';

export interface TrackProps {
  kind: string;
  src: string;
  srcLang: string;
  label: string;
  default?: boolean;
}

export interface IPlayerCoreConfig {
  attributes?: Record<string, any>;
  tracks?: TrackProps[];
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
