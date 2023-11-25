export const lightColors = {
  primary: '#3498db', // Blue
  secondary: '#2ecc71', // Green
  background: '#ffffff', // White
  text: '#333333', // Dark gray
}

export const fontType = {
  blackItalic: 'SFProDisplay-BlackItalic',
  black: 'SFProDisplay-Black',
  heavyItalic: 'SFProDisplay-HeavyItalic',
  heavy: 'SFProDisplay-Heavy',
  boldItalic: 'SFProDisplay-BoldItalic',
  bold: 'SFProDisplay-Bold',
  semiBoldItalic: 'SFProDisplay-SemiboldItalic',
  semiBold: 'SFProDisplay-Semibold',
  mediumItalic: 'SFProDisplay-MediumItalic',
  medium: 'SFProDisplay-Medium',
  regularItalic: 'SFProDisplay-RegularItalic',
  regular: 'SFProDisplay-Regular',
  thinItalic: 'FProDisplay-ThinItalic',
  thin: 'SFProDisplay-Thin',
  lightItalic: 'Roboto-LightItalic',
  light: 'Roboto-Light',
}

export const lightTypography = {
  fontType,
  fontSize: {
    small: 14,
    regular: 16,
    large: 18,
  },
  fontWeight: {
    regular: '400',
    bold: '700',
  },
}

export const lightStyles = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: lightColors.background,
  },
  text: {
    fontFamily: lightTypography.fontType.regular,
    fontSize: lightTypography.fontSize.regular,
    color: lightColors.text,
  },
  button: {
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    backgroundColor: lightColors.primary,
  },
  buttonText: {
    fontSize: lightTypography.fontSize.regular,
    fontWeight: lightTypography.fontWeight.bold,
    color: '#fff',
  },
}
