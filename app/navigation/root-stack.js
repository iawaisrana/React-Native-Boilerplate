import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import AuthStack from './auth-stack';
import DrawerStack from './drawer-stack';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={screens.authStack} component={AuthStack} />
      <RootStack.Screen name={screens.drawerStack} component={DrawerStack} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
