import {StyleSheet} from 'react-native';

const size = {
  h1: 34,
  h2: 30,
  h3: 26,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
};

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
  bold: {
    fontSize: size.regular,
    fontWeight: 'bold',
  },
});
