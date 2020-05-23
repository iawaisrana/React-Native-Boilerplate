/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';
import React, {Suspense, useEffect} from 'react';
import {Appearance, Platform, SafeAreaView} from 'react-native';
import {DarkTheme, LightTheme} from './Utils';
import AppNavigator from './Navigation';
import PushNotifications from './PushNotifications';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import {persistor, store} from './Store/Store';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';

const App = () => {
  const colorScheme = Appearance.getColorScheme();

  console.log(colorScheme);

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
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <AppNavigator />
                <PushNotifications />
              </PersistGate>
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
