import {call, put} from 'redux-saga/effects';
import loginUser from '../Api/Methods/Login';
import * as authActions from '../Actions/Auth';
import * as loadingAction from '../Actions/Loading';
import * as navigationActions from '../Actions/Navigation';
import AsyncStorage from '@react-native-community/async-storage';
import * as snackbarActions from '../Actions/Snackbar';

export default function* loginAsync(action) {
  yield put(loadingAction.enableLoading());
  let response = yield call(loginUser, action.data);

  yield put(loadingAction.disableLoading());

  if (response && response.status == true) {
    AsyncStorage.setItem('@token', response.result.token);
    yield put(loadingAction.disableLoading());
    yield put(
      authActions.loginRegister({
        email: action.data.Email,
        token: response.result.token,
      }),
    );
    yield call(navigationActions.navigateToHome);
    let data = {
      label: response.message,
    };
    yield put(snackbarActions.enableSnackbar(data));
  } else if (response && response.status == false) {
    yield put(loadingAction.disableLoading());
    let data = {
      label: response.message,
    };
    yield put(snackbarActions.enableSnackbar(data));
  } else {
    yield put(loadingAction.disableLoading());
    let data = {
      label: 'something went wrong',
    };
    yield put(snackbarActions.enableSnackbar(data));
  }
}
