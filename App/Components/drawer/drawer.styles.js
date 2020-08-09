import {Appearance, StyleSheet} from 'react-native';
import {textStyle} from '../../constants';
import {DarkTheme, LightTheme} from '../../theme';

const colorScheme = Appearance.getColorScheme();
const {colors} = colorScheme == 'dark' ? DarkTheme : LightTheme;

export default StyleSheet.create({
  container: {height: '100%'},
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
  scrollViewContainer: {paddingTop: 30},
});
