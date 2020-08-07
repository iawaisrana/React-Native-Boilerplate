import {Dimensions} from 'react-native';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('screen').height;

const DESIGN_DIMENSIONS = {width: 375, height: 811};

export const getPercentageHeight = (heightParam) => {
  return height * (heightParam / DESIGN_DIMENSIONS.height);
};

export const getPercentageWidth = (widthParam) => {
  return width * (widthParam / DESIGN_DIMENSIONS.width);
};
