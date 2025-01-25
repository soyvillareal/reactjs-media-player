import React from 'react';
import { createRoot } from 'react-dom/client';

import ReactJSMediaPlayer from './index';

export default function renderReactJSMediaPlayer(container, props) {
  createRoot(container).render(<ReactJSMediaPlayer {...props} />);
}
