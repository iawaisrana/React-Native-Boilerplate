import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from 'Config';
import WalkThrough from 'Containers/Walkthrough';
import React from 'react';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={Screens.walkthrough} component={WalkThrough} />
    </AuthStack.Navigator>
  );
}
