import {Dimensions, Platform} from 'react-native';

export const os = Platform.OS;

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('screen').height;

const DESIGN_DIMENSIONS = {width: 375, height: 811};

export const getPercentageHeight = (heightParam) => {
  return height * (heightParam / DESIGN_DIMENSIONS.height);
};

export const getPercentageWidth = (widthParam) => {
  return width * (widthParam / DESIGN_DIMENSIONS.width);
};

export const textStyle = {
  small: {
    fontSize: 12,
    fontWeight: '200',
  },
  medium: {
    fontSize: 14,
    fontWeight: '300',
  },
  normal: {
    fontSize: 16,
    fontWeight: '400',
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
  },
};
