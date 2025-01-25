import React from 'react';
import PropTypes from 'prop-types';

import { StyledTip, StyledTooltip } from './TimeTooltip.styled';
import { getMouseTranslateX } from '../../utils';
import { formatTime } from '../../../../utils';

const TimeTooltip = ({ sliderRef, duration, tooltip, showTooltip, showTooltipOnly = false, fullscreen }) => {
  const tooltipRef = React.useRef(null);
  const [translateX, setTranslateX] = React.useState('0');

  React.useEffect(() => {
    const translate = getMouseTranslateX({
      duration,
      currentTime: tooltip,
      sliderWidth: sliderRef.current?.offsetWidth || 0,
      tooltipWidth: tooltipRef.current?.offsetWidth || 0,
    });

    setTranslateX(translate);
  }, [duration, tooltip, tooltipRef, sliderRef]);

  return (
    <StyledTooltip
      style={{ display: showTooltip ? 'block' : '', transform: `translateX(${translateX}%)` }}
      isFullscreen={fullscreen}
    >
      <StyledTip ref={tooltipRef} isFullscreen={fullscreen} showTooltipOnly={showTooltipOnly}>
        {formatTime(tooltip)}
      </StyledTip>
    </StyledTooltip>
  );
};

TimeTooltip.propTypes = {
  sliderRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement) })]),
  duration: PropTypes.number.isRequired,
  tooltip: PropTypes.number.isRequired,
  showTooltip: PropTypes.bool.isRequired,
  showTooltipOnly: PropTypes.bool,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(
  TimeTooltip,
  (p, n) =>
    p.sliderRef === n.sliderRef &&
    p.duration === n.duration &&
    p.tooltip === n.tooltip &&
    p.showTooltip === n.showTooltip &&
    p.showTooltipOnly === n.showTooltipOnly &&
    p.fullscreen === n.fullscreen,
);
