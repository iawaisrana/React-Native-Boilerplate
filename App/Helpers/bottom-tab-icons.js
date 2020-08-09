import React from 'redux-actions';
import {Appearance} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {DarkTheme, LightTheme} from '../theme';

const colorScheme = Appearance.getColorScheme();
const {colors} = colorScheme == 'dark' ? DarkTheme : LightTheme;

const tabIcons = {
  search: <FontAwesome name="search" color={colors.white} size={25} />,
  home: <FontAwesome name="home" color={colors.white} size={25} />,
  profile: <MaterialIcons name="person" color={colors.white} size={25} />,
};

export {tabIcons};
