import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';

import Intro from '../Screens/Intro';
import Home from '../Screens/Home';
import {CustomBottomTab, CustomDrawer} from '../Components';

const AppNavigator = createStackNavigator();
const AuthNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
const ApplicationStack = createStackNavigator();
const DrawerNavigator = createDrawerNavigator();

enableScreens();

const AppStack = () => {
  return (
    <AppNavigator.Navigator initialRouteName="Home" headerMode="none">
      <AppNavigator.Screen name="Home" component={Home} />
    </AppNavigator.Navigator>
  );
};

const BottomTabStack = () => {
  return (
    <BottomTabNavigator.Navigator
      tabBar={(props) => <CustomBottomTab {...props} />}
      initialRouteName="AppStack"
      headerMode={'none'}
      activeColor={'#f0edf6'}
      inactiveColor={'red'}
      barStyle={{backgroundColor: '#694fad'}}>
      <BottomTabNavigator.Screen name="AppStack" component={AppStack} />
    </BottomTabNavigator.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <DrawerNavigator.Navigator
      headerMode="none"
      initialRouteName="BottomTabStack"
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <DrawerNavigator.Screen
        name="BottomTabStack"
        component={BottomTabStack}
      />
    </DrawerNavigator.Navigator>
  );
};

const AuthStack = () => {
  return (
    <AuthNavigator.Navigator initialRouteName="Intro" headerMode="none">
      <AuthNavigator.Screen name="Intro" component={Intro} />
    </AuthNavigator.Navigator>
  );
};

const NavigationStack = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <ApplicationStack.Navigator headerMode="none">
      {isLoggedIn ? (
        <>
          <ApplicationStack.Screen name="App" component={DrawerStack} />
          <ApplicationStack.Screen name="Auth" component={AuthStack} />
        </>
      ) : (
        <>
          <ApplicationStack.Screen name="Auth" component={AuthStack} />
          <ApplicationStack.Screen name="App" component={DrawerStack} />
        </>
      )}
    </ApplicationStack.Navigator>
  );
};

export default NavigationStack;
