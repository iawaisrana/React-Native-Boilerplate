/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {FacebookButton, GoogleButton, MenuHeader} from '../../Components';

const HomeView = (props) => {
  const {colors} = props.theme;
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const i18 = (key) => {
    return t(key);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <MenuHeader title={i18('Home.title')} {...props} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FacebookButton />
        <GoogleButton />
      </View>
    </View>
  );
};
export default withTheme(HomeView);
