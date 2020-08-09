import 'react-native-gesture-handler';
import React, {Suspense, useEffect} from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import AppNavigator from './navigation';
import {PushNotification} from './components';
import {Provider as PaperProvider} from 'react-native-paper';
import Provider from './redux/provider';
import {Root} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import {enableScreens} from 'react-native-screens';

enableScreens();

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <Suspense fallback={null}>
      <Root>
        <SafeAreaView style={styles.container}>
          <PaperProvider>
            <Provider>
              <AppNavigator />
              <PushNotification />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
