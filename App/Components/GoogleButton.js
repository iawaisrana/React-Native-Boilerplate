/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {gmailLoginRequest} from '../Actions/Auth';
import {useDispatch, useSelector} from 'react-redux';

import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '345493290412-thkh2i7abd0kv8ngn55vblag6gj7qa40.apps.googleusercontent.com',
});

function GoogleButton(props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading.isLoadingVisible);
  const {colors, fonts, screen, introScreen} = props.theme;
  const [t, i18n] = useTranslation();

  const i18 = key => {
    return t(key);
  };
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.configure({
        webClientId:
          '345493290412-thkh2i7abd0kv8ngn55vblag6gj7qa40.apps.googleusercontent.com',
      });
      const userInfo = await GoogleSignin.signIn();
      let token = await GoogleSignin.getTokens();
      console.log('userInfo', userInfo);
      console.log('token', token);
      var data = {
        user: {
          name: userInfo.user.name,
          type: 'google',
          idToken: userInfo.idToken,
          email: userInfo.user.email,
          token: token.accessToken,
          picture: userInfo.user.photo,
        },
      };
      console.log('before dispatch', data);
      dispatch(gmailLoginRequest(data));
      console.log('After dispatch', data);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED', error.code);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS', error.code);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE', error.code);
      } else {
        console.log(error.code);
      }
    }
  };

  return (
    <TouchableOpacity
      disabled={loading ? true : false}
      onPress={() => googleLogin()}
      style={{width: '100%'}}>
      <View
        style={[
          introScreen.button,
          {backgroundColor: colors.gColor, ...props.style},
        ]}>
        <Text style={introScreen.buttonText}>
          {' '}
          {i18('IntroScreen.continueWithGmail')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default withTheme(GoogleButton);

const styles = StyleSheet.create({
  googleButton: {
    width: '100%',
    height: 54,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: '#d50000',
    alignSelf: 'center',
    marginTop: 10,
  },
});
