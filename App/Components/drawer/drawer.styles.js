import { StyleSheet } from 'react-native';
import { textStyle } from '../../constants';
import { theme } from '../../theme';

const { colors } = theme;

export default StyleSheet.create({
  container: { height: '100%', backgroundColor: 'white' },
  image: {
    width: '100%',
    height: 200,
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingLeft: 15,
    alignItems: 'center',
  },
  itemText: {
    color: colors.primary,
    paddingLeft: 10,
    ...textStyle.heading,
  },
  scrollViewContainer: { paddingTop: 30 },
});
