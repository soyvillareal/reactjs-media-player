import React from 'react';
import PropTypes from 'prop-types';

import StyledGeneralButton from '../../../Commons/Buttons/StyledGeneralButton';
import PauseIcon from '../../../Commons/Icons/PauseIcon';
import PlayIcon from '../../../Commons/Icons/PlayIcon';
import { buildIconProps } from '../../../PlayerSkin.constants';
import useAppSelector from '../../../../hooks/context/useAppSelector';

const PlayButton = ({ fullscreen, paused, ended, onPlayClick, onPauseClick }) => {
  const { i18n } = useAppSelector();
  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  return paused || ended ? (
    <StyledGeneralButton
      type="button"
      aria-label={i18n.play}
      title={i18n.play}
      onClick={onPlayClick}
      isFullscreen={fullscreen}
      isTooltipActive
    >
      <PlayIcon {...iconProps} />
    </StyledGeneralButton>
  ) : (
    <StyledGeneralButton
      type="button"
      aria-label={i18n.pause}
      title={i18n.pause}
      onClick={onPauseClick}
      isFullscreen={fullscreen}
      isTooltipActive
    >
      <PauseIcon {...iconProps} />
    </StyledGeneralButton>
  );
};

PlayButton.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  ended: PropTypes.bool.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
};

export default React.memo(
  PlayButton,
  (p, n) =>
    p.fullscreen === n.fullscreen &&
    p.paused === n.paused &&
    p.ended === n.ended &&
    p.onPlayClick === n.onPlayClick &&
    p.onPauseClick === n.onPauseClick,
);
