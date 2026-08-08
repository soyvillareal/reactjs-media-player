export const buildSettingsLabel = ({ label, value, i18n }) => {
  if (label === 'quality') {
    return `${value}p`;
  } else if (label === 'speed' && value === '1') {
    return i18n.normal;
  }

  return value;
};
