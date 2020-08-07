/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';
import React, {Suspense, useEffect} from 'react';
import {Appearance, Platform, SafeAreaView} from 'react-native';
import {DarkTheme, LightTheme} from './Utils';
import AppNavigator from './Navigation';
import PushNotifications from './PushNotifications';
import {Provider as PaperProvider} from 'react-native-paper';
import Provider from './Redux/Provider';
import {Root} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';

const App = () => {
  const colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    console.disableYellowBox = true;
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <Suspense fallback={null}>
      <Root>
        <SafeAreaView style={{flex: 1}}>
          <PaperProvider theme={colorScheme == 'dark' ? DarkTheme : LightTheme}>
            <Provider>
              <AppNavigator />
              <PushNotifications />
            </Provider>
          </PaperProvider>
        </SafeAreaView>
      </Root>
    </Suspense>
  );
};

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default codePush(codePushOptions)(App);
