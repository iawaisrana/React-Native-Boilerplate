import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTab} from '../components';
import {screens} from '../config';
import AppStack from './auth-stack';

const BottomTabStack = createBottomTabNavigator();

export default function authStack() {
  return (
    <BottomTabStack.Navigator
      headerMode="none"
      tabBar={(props) => <BottomTab {...props} />}
      initialRouteName={screens.appStack}
      activeColor={'#f0edf6'}
      inactiveColor={'red'}
      barStyle={styles.barStyle}>
      <BottomTabStack.Screen name={screens.appStack} component={AppStack} />
    </BottomTabStack.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyle: {backgroundColor: '#694fad'},
});
