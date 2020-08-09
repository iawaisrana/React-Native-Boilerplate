import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../config';
import Intro from '../screens/intro';

const AuthStack = createStackNavigator();

export default function authStack() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={screens.intro} component={Intro} />
    </AuthStack.Navigator>
  );
}
