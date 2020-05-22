/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {MenuHeader, FacebookButton, GoogleButton} from '../../Components';

const HomeView = props => {
  const {colors} = props.theme;
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const i18 = key => {
    return t(key);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <MenuHeader title={i18('Home.title')} {...props} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FacebookButton />
        <GoogleButton />
      </View>
    </View>
  );
};
export default withTheme(HomeView);
