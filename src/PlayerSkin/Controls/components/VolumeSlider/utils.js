import { sliderWith } from '../../../PlayerSkin.constants';

export const getVolume = ({ clientX, sliderRef, isFullcreen }) => {
  if (!sliderRef.current) {
    return 0;
  }

  const rect = sliderRef.current.getBoundingClientRect();
  const offsetX = clientX - rect.left;
  let percentage = (offsetX / sliderWith(isFullcreen)) * 100;

  if (percentage < 0) {
    percentage = 0;
  } else if (percentage > 100) {
    percentage = 100;
  }

  return percentage;
};
