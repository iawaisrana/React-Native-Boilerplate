/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

// uncomment and provide webClientId
// GoogleSignin.configure({
//   webClientId: /* insert webClientId here present in google-services.json*/,
// });

function GoogleButton(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);
  const {colors, fonts, screen} = props.theme;
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();

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
      //dispatch(googleLoginRequest(data));
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
      disabled={isLoading ? true : false}
      onPress={() => googleLogin()}
      style={{width: '100%'}}>
      <View style={styles.button}>
        <Text style={{color: colors.white}}>
          {i18('Component.continueWithGoogle')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default withTheme(GoogleButton);

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 50,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#DD4B39',
  },
});
