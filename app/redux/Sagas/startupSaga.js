import NavigationService from 'services/navigationService'
import { select } from 'redux-saga/effects'
import SplashScreen from 'react-native-splash-screen'
import { ScreenRoutes } from '../../constants'
import _ from 'lodash'

export const getUser = (state) => state.auth.user

export function* startupSaga() {
  const user = yield select(getUser)
  console.log(user)
  const isUserLoggedIn = !_.isEmpty(user.accessToken)

  if (isUserLoggedIn) {
    NavigationService.navigateAndReplace(ScreenRoutes.home)
  } else {
    NavigationService.navigate(ScreenRoutes.auth)
  }

  SplashScreen.hide() // hide splash screen
}
