export const darkColors = {
  primary: '#1a1a1a', // Dark gray
  secondary: '#333333', // Darker gray
  background: '#121212', // Very dark gray
  text: '#ffffff', // White
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

export const darkTypography = {
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

export const darkStyles = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: darkColors.background,
  },
  text: {
    fontFamily: darkTypography.fontFamily,
    fontSize: darkTypography.fontSize.regular,
    color: darkColors.text,
  },
  button: {
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    backgroundColor: darkColors.primary,
  },
  buttonText: {
    fontSize: darkTypography.fontSize.regular,
    fontWeight: darkTypography.fontWeight.bold,
    color: '#fff',
  },
}
