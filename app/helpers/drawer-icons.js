import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { theme } from '../theme';
const { colors } = theme;

const drawerIcons = {
  language: <FontAwesome name="language" color={colors.primary} size={25} />,
};

export { drawerIcons };
