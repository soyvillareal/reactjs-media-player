import { lazy, supportsWebKitPresentationMode } from '../utils/player';
import { canPlay } from '../patterns';

export default {
  key: 'core',
  name: 'PlayerCore',
  canPlay: canPlay,
  canEnablePIP: (url) => {
    return canPlay(url) && (document.pictureInPictureEnabled || supportsWebKitPresentationMode());
  },
  lazyPlayer: lazy(() => import('./PlayerCore')),
};
