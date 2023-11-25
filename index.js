import { AppRegistry } from 'react-native'
import App from './app/app'
import './app/localization/i18next'
import messaging from '@react-native-firebase/messaging'
import Config from 'react-native-config'

global.__FLAVOR__ = Config.BUILD

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage)
})

AppRegistry.registerComponent('react_native_boilerplate', () => App)
