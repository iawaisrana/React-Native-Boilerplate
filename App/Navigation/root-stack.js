import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './auth-stack';
import AppStack from './drawer-stack';

const ApplicationStack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <ApplicationStack.Screen name="Auth" component={AuthStack} />
      <ApplicationStack.Screen name="App" component={AppStack} />
    </NavigationContainer>
  );
};

export default NavigationStack;
