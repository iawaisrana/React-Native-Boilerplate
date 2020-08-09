import React from 'redux-actions';
import {Appearance} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {DarkTheme, LightTheme} from '../theme';

const colorScheme = Appearance.getColorScheme();
const {colors} = colorScheme == 'dark' ? DarkTheme : LightTheme;

const drawerIcons = {
  language: <FontAwesome name="language" color={colors.primary} size={25} />,
};

export {drawerIcons};
