import { put } from 'redux-saga/effects'
import { AuthActions } from 'redux/store/user/actions'
import NavigationService from 'services/navigationService'
import { ScreenRoutes } from '../../constants'

// Saga for Google login
export function* googleLoginSaga() {
  try {
    const user = {
      accessToken: '12345Token',
    }

    yield put(AuthActions.googleLoginSuccess({ user }))

    NavigationService.navigate(ScreenRoutes.home)

    // const response = yield call(GoogleService.signInAsync)

    // console.log(response)

    // if (!_.isEmpty(response) && response?.type === 'success') {
    //   const data = response.user
    //   const { idToken } = data.auth
    // }
    // // Use this to call the API
    // const response = yield call(UserService.loginUser, payload);

    // if (response.success) {
    //     // Save token to AsyncStorage
    //     yield AsyncStorage.setItem('@token', response.success.token);

    //     // Prepare user object with token
    //     const user = {
    //         ...response.user,
    //         token: response.success.token,
    //     };

    //     // Dispatch login success action
    //     yield put(AuthActions.loginSuccess({ user }));
    // }
  } catch (err) {
    console.log(err)
    // Dispatch login error action
    yield put(
      AuthActions.googleLoginError({
        error: err || 'User Login Failed!',
      })
    )
  }
}

// Saga for Facebook login
export function* facebookLoginSaga() {
  try {
    const user = {
      accessToken: '12345Token',
    }

    yield put(AuthActions.facebookLoginSuccess({ user }))

    NavigationService.navigate(ScreenRoutes.home)

    // const response = yield call(FacebookService.signInAsync)

    // console.log(response)

    // if (!_.isEmpty(response) && response?.type === 'success') {
    //   const data = response.user
    //   const { idToken } = data.auth
    // }
    // // Use this to call the API
    // const response = yield call(UserService.loginUser, payload);

    // if (response.success) {
    //     // Save token to AsyncStorage
    //     yield AsyncStorage.setItem('@token', response.success.token);

    //     // Prepare user object with token
    //     const user = {
    //         ...response.user,
    //         token: response.success.token,
    //     };

    //     // Dispatch login success action
    //     yield put(AuthActions.loginSuccess({ user }));
    // }
  } catch (err) {
    // Dispatch login error action
    yield put(
      AuthActions.facebookLoginError({
        error: err || 'User Login Failed!',
      })
    )
  }
}
