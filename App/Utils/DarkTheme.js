import {Dimensions} from 'react-native';
import DarkThemeColors from './DarkThemeColors';
import fonts from './Fonts';

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
