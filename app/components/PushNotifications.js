import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import React, {useEffect, useRef} from 'react';
import {withTheme} from 'react-native-paper';
import NotificationPopup from 'react-native-push-notification-popup';

const PushNotification = () => {
  const popup = useRef(null);

  useEffect(() => {
    checkPermission();

    /*
     * Notification caused app to open from background state:
     * */
    messaging().onNotificationOpenedApp(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log(
          'A new FCM message arrived!',
          JSON.stringify(remoteMessage),
        );
      });

    // when app is in foreground state
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  }, []);

  const getToken = async () => {
    const fcm_token = await messaging().getToken();
    await AsyncStorage.setItem('@fcm_token', fcm_token);
  };

  const checkPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    const fcm_token = await AsyncStorage.getItem('@fcm_token');

    if (enabled && !fcm_token) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      getToken();
    } catch ({message}) {
      console.log(message);
    }
  };

  return <NotificationPopup ref={popup} />;
};

export default withTheme(PushNotification);
