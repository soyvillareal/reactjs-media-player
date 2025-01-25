import React from 'react';
import PropTypes from 'prop-types';

import { StyledSliderContainer } from './Volume.styled';
import StyledGeneralButton from '../Commons/Buttons/StyledGeneralButton';
import VolumeSlider from '../Controls/components/VolumeSlider';
import useAppSelector from '../../hooks/context/useAppSelector';
import useVolumeButton from '../../hooks/useVolumeButton';

const Volume = ({ fullscreen, isMuted, volume, forceMuted, changeVolume, onMutedClick }) => {
  const state = useAppSelector();

  const { titleMemorized, renderIcon, handleOnClick, handleChange } = useVolumeButton({
    fullscreen,
    isMuted,
    volume,
    forceMuted,
    changeVolume,
    onMutedClick,
  });

  return (
    <StyledSliderContainer isSliding={state.volumeSliding} isFullscreen={fullscreen}>
      <StyledGeneralButton
        type="button"
        aria-label={titleMemorized}
        title={titleMemorized}
        onClick={handleOnClick}
        isFullscreen={fullscreen}
        isFakeDisabled={forceMuted}
        isTooltipActive
      >
        {renderIcon()}
      </StyledGeneralButton>
      <VolumeSlider fullscreen={fullscreen} value={volume * 100} isDisabled={forceMuted} onChange={handleChange} />
    </StyledSliderContainer>
  );
};

Volume.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  onMutedClick: PropTypes.func.isRequired,
  forceMuted: PropTypes.bool.isRequired,
  changeVolume: PropTypes.func.isRequired,
};

export default React.memo(
  Volume,
  (p, n) =>
    p.fullscreen === n.fullscreen &&
    p.isMuted === n.isMuted &&
    p.volume === n.volume &&
    p.forceMuted === n.forceMuted &&
    p.onMutedClick === n.onMutedClick &&
    p.changeVolume === n.changeVolume,
);
