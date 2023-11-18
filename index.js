import {AppRegistry} from 'react-native';
import App from './app/app';
import './app/i18next';
import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent('boilerplate', () => App);
