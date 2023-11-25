import 'react-native-gesture-handler'
import React, { Suspense, useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import codePush from 'react-native-code-push'
import { Provider as PaperProvider } from 'react-native-paper'
import { enableScreens } from 'react-native-screens'
import StateProvider from './redux/provider'
import RootScreen from './containers/root'

enableScreens()

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true
  }, [])

  return (
    <Suspense fallback={null}>
      <SafeAreaView style={styles.container}>
        <StateProvider>
          <PaperProvider>
            <RootScreen />
          </PaperProvider>
        </StateProvider>
      </SafeAreaView>
    </Suspense>
  )
}

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
}

export default codePush(codePushOptions)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
