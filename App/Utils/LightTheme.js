import {Dimensions} from 'react-native';
import LightThemeColors from './LightThemeColors';
import fonts from './Fonts';

const {width, height} = Dimensions.get('screen');

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
  screen: {
    width,
    height,
  },
};
