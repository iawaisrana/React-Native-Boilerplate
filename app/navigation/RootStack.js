import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenRoutes } from '../constants'
import HomeScreen from 'containers/home'
import AuthScreen from 'containers/auth'

const RootStack = createStackNavigator()
const App = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={ScreenRoutes.auth} component={AuthScreen} />
      <RootStack.Screen name={ScreenRoutes.home} component={HomeScreen} />
    </RootStack.Navigator>
  )
}

export default App
