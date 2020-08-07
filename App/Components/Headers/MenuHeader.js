import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {withTheme} from 'react-native-paper';

function MenuHeader(props) {
  const {navigation} = props;
  const {colors, fonts} = props.theme;
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.7,
        borderColor: 'black',
        width: '100%',
        padding: 5,
        backgroundColor: colors.primary,
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <TouchableOpacity
        style={{paddingLeft: 10}}
        onPress={() => navigation.toggleDrawer()}>
        <MaterialIcons name="menu" size={22} color="white" />
      </TouchableOpacity>

      <Text style={{color: 'white', ...fonts.h3}}>{props.title}</Text>
      <View />
    </View>
  );
}

export default withTheme(MenuHeader);
