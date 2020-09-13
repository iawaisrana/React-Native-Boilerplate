import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Drawer } from '../components';
import { screens } from '../config';
import BottomTabStack from './bottom-tab-stack';

const DrawerStack = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <DrawerStack.Navigator headerMode="none" drawerContent={(props) => <Drawer {...props} />}>
      <DrawerStack.Screen name={screens.bottomTabStack} component={BottomTabStack} />
    </DrawerStack.Navigator>
  );
}
