import React from 'react';
import PropTypes from 'prop-types';

import StyledGeneralButton from '../../../Commons/Buttons/StyledGeneralButton';
import FullscreenIcon from '../../../Commons/Icons/FullscreenIcon';
import UnfullscreenIcon from '../../../Commons/Icons/UnfullscreenIcon';
import { buildIconProps } from '../../../PlayerSkin.constants';
import useAppSelector from '../../../../hooks/context/useAppSelector';

const FullscreenButton = ({ fullscreen, requestFullscreen, exitFullscreen }) => {
  const { i18n } = useAppSelector();
  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  return fullscreen ? (
    <StyledGeneralButton
      type="button"
      aria-label={i18n.exitFullScreenMode}
      title={i18n.exitFullScreenMode}
      onClick={exitFullscreen}
      isFullscreen
      isTooltipActive
    >
      <UnfullscreenIcon {...iconProps} />
    </StyledGeneralButton>
  ) : (
    <StyledGeneralButton
      type="button"
      aria-label={i18n.fullScreen}
      title={i18n.fullScreen}
      onClick={requestFullscreen}
      isTooltipActive
    >
      <FullscreenIcon {...iconProps} />
    </StyledGeneralButton>
  );
};

FullscreenButton.propTypes = {
  // fullscreen
  fullscreen: PropTypes.bool.isRequired,
  requestFullscreen: PropTypes.func.isRequired,
  exitFullscreen: PropTypes.func.isRequired,
};

export default React.memo(
  FullscreenButton,
  (p, n) =>
    p.fullscreen === n.fullscreen &&
    p.requestFullscreen === n.requestFullscreen &&
    p.exitFullscreen === n.exitFullscreen,
);
