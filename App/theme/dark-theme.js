import {Dimensions} from 'react-native';
import DarkThemeColors from './dark-theme-colors';
import fonts from './fonts';

const {width, height} = Dimensions.get('screen');

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
  screen: {
    width,
    height,
  },
};
