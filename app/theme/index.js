import { Appearance } from 'react-native';

import LightTheme from './light-theme';
import DarkTheme from './dark-theme';

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

export { theme };
