import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { textStyle } from '../../constants';
import styles from './menu-header.styles';

function MenuHeader(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <MaterialIcons name="menu" size={22} color="white" />
      </TouchableOpacity>
      <Text style={[textStyle.heading, { color: 'white' }]}>{props.title}</Text>
      <View />
    </View>
  );
}

export default withTheme(MenuHeader);
