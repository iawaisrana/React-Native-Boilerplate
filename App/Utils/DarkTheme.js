import DarkThemeColors from './DarkThemeColors';
import fonts from './Fonts';

export default {
  button: {
    backgroundColor: DarkThemeColors.primary,
  },
  header: {
    backgroundColor: DarkThemeColors.primary,
  },
  colors: {
    ...DarkThemeColors,
  },
  fonts: {...fonts},
};
