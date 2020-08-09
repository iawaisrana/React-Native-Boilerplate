import React from 'react';
import NavigationStack from './root-stack';
import NavigationService from './navigation-service';
import {NavigationContainer} from '@react-navigation/native';

const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
