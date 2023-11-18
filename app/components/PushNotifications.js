import AsyncStorage from '@react-native-async-storage/async-storage'
import messaging from '@react-native-firebase/messaging'
import React, { useEffect, useRef } from 'react'
import { withTheme } from 'react-native-paper'
import NotificationPopup from 'react-native-push-notification-popup'
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'

const PushNotification = () => {
  const popup = useRef(null)

  useEffect(() => {
    requestPermission().then((isGranted) => {
      if (isGranted) {
        /** Notification caused app to open from background state: * */
        messaging().onNotificationOpenedApp(async (remoteMessage) => {
          console.log('A new FCM message arrived!', JSON.stringify(remoteMessage))
        })

        /** If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows: * */
        messaging()
          .getInitialNotification()
          .then((remoteMessage) => {
            console.log('A new FCM message arrived!', JSON.stringify(remoteMessage))
          })

        // when app is in foreground state
        messaging().onMessage(async (remoteMessage) => {
          console.log('A new FCM message arrived!', JSON.stringify(remoteMessage))
        })
      }
    })
  }, [])

  const getFcmToken = async () => {
    let fcm_token = await AsyncStorage.getItem('@fcm_token')
    if (!fcm_token) {
      fcm_token = await messaging().getToken()
      await AsyncStorage.setItem('@fcm_token', fcm_token)
    }
  }

  const requestPermission = async () => {
    const checkPermission = await checkNotificationPermission()
    if (checkPermission !== RESULTS.GRANTED) {
      const result = await requestNotificationPermission()
      if (result !== RESULTS.GRANTED) {
        await getFcmToken()
      } else {
        return false
      }
    } else {
      await getFcmToken()
    }
    return true
  }

  const requestNotificationPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
    return result
  }

  const checkNotificationPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
    return result
  }

  return <NotificationPopup ref={popup} />
}

export default withTheme(PushNotification)
