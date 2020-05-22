/* eslint-disable react/prop-types */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import {useDispatch, useSelector} from 'react-redux';
import {fbLoginRequest} from '../Actions/Auth';
import {withTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

function FbButton(props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading.isLoadingVisible);
  const {screen, colors, introScreen} = props.theme;
  const [t, i18n] = useTranslation();

  const i18 = key => {
    return t(key);
  };

  const getUserProfile = token => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        parameters: {
          fields: {
            string: 'name,first_name,email,picture.type(large)', // what you want to get
          },
          locale: {
            string: 'en_US',
          },
          access_token: {
            string: token.toString(), // put your accessToken here
          },
        },
      },
      (error, result) => {
        if (error) {
          console.log('Error fetching data: ', error);
        } else {
          console.log('facebook result', result);
          var data = {
            user: {
              name: result.name,
              provider: 'fb',
              email: result.email,
              token: token,
              image: result.picture.data.url,
            },
          };
          console.log('facebook action', data);
          dispatch(fbLoginRequest(data));
          console.log('After action', data);
        }
      },
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  const fbLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function(result) {
        console.log('in function', result);
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log('AccessToken');
          AccessToken.getCurrentAccessToken().then(result => {
            getUserProfile(result.accessToken);
          });
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
        alert('Login fail with error: ' + error);
      },
    );
  };

  return (
    <View>
      <TouchableOpacity
        disabled={loading ? true : false}
        onPress={() => {
          fbLogin();
        }}
        style={{width: '100%'}}>
        >
        <View
          style={[
            introScreen.button,
            {backgroundColor: colors.fbColor, width: '100%', ...props.style},
          ]}>
          <Text style={introScreen.buttonText}>
            {i18('IntroScreen.continueWithFacebook')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default withTheme(FbButton);
