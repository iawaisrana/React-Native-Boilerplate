/* eslint-disable react/prop-types */
import React from 'react';
import {I18nManager, SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function DrawerComponent(props) {
  const {colors, fonts} = props.theme;
  const [t, i18n] = useTranslation();

  const i18 = key => {
    return t(key);
  };

  // this should be called for language that need RTL for example for Arabic
  const changeLanguageWithRTL = async () => {
    let currentLanguage = await AsyncStorage.getItem('language');

    if (currentLanguage == 'en') {
      await AsyncStorage.setItem('language', 'fr');
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    } else {
      await AsyncStorage.setItem('language', 'en');
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  };

  const changeLanguageWithoutRTL = async () => {
    let currentLanguage = await AsyncStorage.getItem('language');

    if (currentLanguage == 'en') {
      await AsyncStorage.setItem('language', 'fr');
      RNRestart.Restart();
    } else {
      await AsyncStorage.setItem('language', 'en');
      RNRestart.Restart();
    }
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
            flexDirection: 'row',
            width: '100%',
            height: 50,
            paddingLeft: 15,
            alignItems: 'center',
          }}
          onPress={() => changeLanguageWithRTL()}>
          <FontAwesome name="language" color={colors.primary} size={25} />
          <Text
            style={{
              color: colors.primary,
              paddingLeft: 10,
              ...fonts.bold,
            }}>
            {i18('Drawer.changeLanguage')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default withTheme(DrawerComponent);
