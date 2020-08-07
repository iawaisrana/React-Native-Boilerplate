/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AccessToken, GraphRequest, GraphRequestManager, LoginManager} from 'react-native-fbsdk';
import {useDispatch, useSelector} from 'react-redux';
import {withTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

function FacebookButton(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);
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
          // dispatch(facebookLoginRequest(data));
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
    <TouchableOpacity
      disabled={isLoading ? true : false}
      onPress={() => {
        fbLogin();
      }}
      style={{width: '100%'}}>
      <View style={styles.button}>
        <Text style={{color: colors.white}}>
          {i18('Component.continueWithFacebook')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default withTheme(FacebookButton);

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
    backgroundColor: '#3B5999',
  },
});
