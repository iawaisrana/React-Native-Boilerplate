import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import AppNavigator from 'navigation'
import StartupConnect from 'redux/store/startup/connect'
import PushNotification from 'components/PushNotifications'
import NavigationService from 'services/navigationService'

enableScreens()

const RootScreen = ({ startup }) => {
  useEffect(() => {
    startup()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      >
        <AppNavigator />
        <PushNotification />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default StartupConnect()(RootScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
