import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import Home from '../screens/home';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name={screens.home} component={Home} />
    </MainStack.Navigator>
  );
}
