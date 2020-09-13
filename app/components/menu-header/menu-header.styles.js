import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: 'black',
    width: '100%',
    padding: 5,
    backgroundColor: colors.primary,
  },
});

export default styles;
