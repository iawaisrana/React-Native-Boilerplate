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
    yield put(
      authActions.loginRegister({
        token: response.result.token,
      }),
    );
    yield call(navigationActions.navigateToHome);
    let data = {
      label: response.message,
    };
    yield put(snackbarActions.enableSnackbar(data));
  }
}
