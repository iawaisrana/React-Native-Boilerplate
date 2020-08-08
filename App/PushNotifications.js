import React, {useEffect, useRef} from 'react';
import firebase from 'react-native-firebase';
import NotificationPopup from 'react-native-push-notification-popup';
import AsyncStorage from '@react-native-community/async-storage';
import {withTheme} from 'react-native-paper';
import {useDispatch, useSelector} from './Redux/Connects/node_modules/react-redux';

var notificationListener = null;
var notificationOpenedListener = null;
var messageListener = null;

const PushNotification = (props) => {
  const dispatch = useDispatch();
  const {colors, screen} = props.theme;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const popup = useRef(null);

  useEffect(() => {
    checkPermission();
    createNotificationListeners();
    const channel = new firebase.notifications.Android.Channel(
      'Boilerplate',
      'Test Channel',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('My apps test channel');

    // Create the channel
    firebase.notifications().android.createChannel(channel);
    return () => {
      notificationListener();
      notificationOpenedListener();
    };
  }, []);

  const getToken = async () => {
    var fcm_token = await firebase.messaging().getToken();
    await AsyncStorage.setItem('@fcm_token', fcm_token);
  };

  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    let fcm_token = await AsyncStorage.getItem('@fcm_token');

    if (enabled && !fcm_token) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      getToken();
    } catch (error) {
      // User has rejected permissions
    }
  };

  const createNotificationListeners = async () => {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    notificationListener = firebase
      .notifications()
      .onNotification((notification) => {
        const {title, body} = notification;
        const showNotification = new firebase.notifications.Notification()
          .setNotificationId(notification._notificationId)
          .setTitle(notification.title)
          .setBody(notification.body)
          .setData(notification.data);
        showNotification.android.setChannelId('iWish');
        firebase.notifications().displayNotification(showNotification);
      });
    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen) => {
        const {title, body, data} = notificationOpen.notification;
        console.log(notificationOpen.notification);
      });
    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const {title, body, data} = notificationOpen.notification;
      console.log(notificationOpen.notification);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(message);
    });
  };

  return <NotificationPopup ref={popup} />;
};

export default withTheme(PushNotification);
