import BaseReactJSMediaPlayer, {
  IBaseReactJSMediaPlayerCommons,
  IBaseReactJSMediaPlayerWithSources,
  IBaseReactJSMediaPlayerWithSourcesNever,
  IBaseReactJSMediaPlayerWithUrl,
  IBaseReactJSMediaPlayerWithUrlNever,
} from '../base';

import { IPlayerCoreConfig } from '../core';

export interface IReactJSMediaPlayerLibWithUrl extends IBaseReactJSMediaPlayerWithUrl {
  config?: IPlayerCoreConfig;
}

export interface IReactJSMediaPlayerLibWithSources extends IBaseReactJSMediaPlayerWithSources {
  config?: IPlayerCoreConfig;
}

export type TReactJSMediaPlayerProps =
  | (IReactJSMediaPlayerLibWithUrl & IBaseReactJSMediaPlayerCommons & IBaseReactJSMediaPlayerWithUrlNever)
  | (IReactJSMediaPlayerLibWithSources & IBaseReactJSMediaPlayerCommons & IBaseReactJSMediaPlayerWithSourcesNever);

export default class ReactJSMediaPlayer extends BaseReactJSMediaPlayer<TReactJSMediaPlayerProps> {
  seekTo(amount: number, type?: 'seconds' | 'fraction'): void;
  getCurrentTime(): number;
  getSecondsLoaded(): number;
  getDuration(): number;
  getInternalPlayer(key?: string): Record<string, any>;
}
