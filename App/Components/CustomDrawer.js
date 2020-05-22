/* eslint-disable react/prop-types */
import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';

function DrawerComponent(props) {
  const {colors} = props.theme;
  const [t, i18n] = useTranslation();

  const i18 = key => {
    return t(key);
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <FastImage
        source={require('../Assets/Images/icon.png')}
        style={{
          width: '100%',
          height: 150,
        }}
      />
      <ScrollView contentContainerStyle={{paddingTop: 30}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            paddingLeft: 15,
          }}
          onPress={() => console.log('button')}>
          <Text
            style={{
              color: colors.primary,
            }}>
            {i18('Drawer.changeLanguage')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default withTheme(DrawerComponent);
