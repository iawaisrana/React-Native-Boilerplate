import { Dimensions, Platform } from 'react-native'

export const os = Platform.OS

export const { width } = Dimensions.get('window')
export const { height } = Dimensions.get('screen')

const DESIGN_DIMENSIONS = { width: 375, height: 812 }

export const getPercentageHeight = (heightParam) => {
  return Platform.select({
    ios: height * (heightParam / DESIGN_DIMENSIONS.height),
    android: heightParam,
  })
}

export const getPercentageWidth = (widthParam) => {
  return Platform.select({
    ios: width * (widthParam / DESIGN_DIMENSIONS.width),
    android: widthParam,
  })
}
