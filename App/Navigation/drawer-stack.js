import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer} from '../components';
import {screens} from '../config';
import BottomTabStack from './bottom-tab-stack';

const DrawerStack = createDrawerNavigator();

export default function authStack() {
  return (
    <DrawerStack.Navigator
      headerMode="none"
      initialRouteName={screens.drawerStack}
      drawerContent={(props) => <Drawer {...props} />}>
      <DrawerStack.Screen
        name={screens.drawerStack}
        component={BottomTabStack}
      />
    </DrawerStack.Navigator>
  );
}
