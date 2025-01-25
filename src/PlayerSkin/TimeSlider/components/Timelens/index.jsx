import React from 'react';
import PropTypes from 'prop-types';

import { StyledTimelensRail, StyledTimelensThumbnail } from './Timelens.styled';
import { getOffset, parseVTT } from '../../utils';
import useAppSelector from '../../../../hooks/context/useAppSelector';

const Timelens = React.forwardRef(({ spriteVTTFile, sliderRef, duration = 0, fullscreen }, ref) => {
  const state = useAppSelector();

  const [vttArray, setVttArray] = React.useState([]);
  const thumbRef = React.useRef(null);

  const [showTimelens, setShowTimelens] = React.useState(false);

  const [timelensStyles, setTimelensStyles] = React.useState({
    backgroundImage: '',
    backgroundPosition: '-480px -360px',
    width: '160px',
    height: '90px',
    marginLeft: '0px',
  });

  React.useEffect(() => {
    (async () => {
      try {
        const vttString = await fetch(spriteVTTFile).then((e) => e.text());
        const vttArray = parseVTT(vttString);

        setVttArray(vttArray);
      } catch (error) {
        console.error('Error parsing VTT file: ', error);
      }
    })();
  }, [spriteVTTFile]);

  const handleTimelens = React.useCallback(
    async (e) => {
      const thumbElement = thumbRef?.current;
      const sliderElement = sliderRef?.current;

      if (
        thumbElement &&
        sliderElement &&
        vttArray.length > 0 &&
        state.menuVisible === false &&
        state.subMenuVisible === false
      ) {
        const offSetSlider = getOffset(sliderElement);
        let pageX = e?.pageX;
        if (e?.originalEvent && e?.originalEvent?.changedTouches) {
          pageX = e.originalEvent.changedTouches[0].pageX;
        } else if (e?.changedTouches) {
          pageX = e.changedTouches[0].pageX;
        }
        const x = pageX - offSetSlider.left;

        const normalizedPosition = (x - sliderElement.offsetLeft) / sliderElement.offsetWidth;
        const currentTime = normalizedPosition * duration;
        const relativeWidth = normalizedPosition * sliderElement.offsetWidth;

        for (var vttItem of vttArray) {
          if (currentTime >= vttItem.from && currentTime <= vttItem.to) {
            const marginLeft = Math.min(
              Math.max(0, relativeWidth - thumbElement.offsetWidth / 2),
              sliderElement.offsetWidth - thumbElement.offsetWidth,
            );

            setTimelensStyles({
              backgroundImage: `url(${vttItem.file})`,
              backgroundPosition: -vttItem.x + 'px ' + -vttItem.y + 'px',
              width: vttItem.w + 'px',
              height: vttItem.h + 'px',
              marginLeft: marginLeft + 'px',
            });
            break;
          }
        }
        setShowTimelens(true);
      }
    },
    [thumbRef, sliderRef, duration, vttArray, state.menuVisible, state.subMenuVisible],
  );

  const handleMouseLeave = React.useCallback(() => {
    setShowTimelens(false);
  }, []);

  React.useImperativeHandle(ref, () => ({
    handleTimelens,
    setShowTimelens: setShowTimelens,
  }));

  return (
    <>
      <StyledTimelensRail onMouseMove={handleTimelens} onMouseEnter={handleTimelens} onMouseLeave={handleMouseLeave} />
      <StyledTimelensThumbnail
        ref={thumbRef}
        showing={showTimelens || state.timeSliding}
        isFullscreen={fullscreen}
        style={timelensStyles}
      />
    </>
  );
});

Timelens.displayName = 'Timelens';

Timelens.propTypes = {
  sliderRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement) })]),
  spriteVTTFile: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(
  Timelens,
  (p, n) =>
    p.fullscreen === n.fullscreen &&
    p.sliderRef === n.sliderRef &&
    p.spriteVTTFile === n.spriteVTTFile &&
    p.duration === n.duration,
);
