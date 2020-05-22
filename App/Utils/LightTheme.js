import LightThemeColors from './LightThemeColors';
import fonts from './Fonts';

export default {
  button: {
    backgroundColor: LightThemeColors.primary,
  },
  header: {
    backgroundColor: LightThemeColors.primary,
  },
  colors: {
    ...LightThemeColors,
  },
  fonts: {
    ...fonts,
  },
};
