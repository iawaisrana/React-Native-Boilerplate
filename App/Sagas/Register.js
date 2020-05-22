import { put, call } from "redux-saga/effects";
import registerUser from "../Api/Methods/Register";
import * as authActions from '../Actions/Auth';
import * as loadingAction from '../Actions/Loading';
import * as navigationActions from '../Actions/Navigation';
import AsyncStorage from '@react-native-community/async-storage';
import * as snackbarActions from '../Actions/Snackbar';

export default function* registerAsync(action) {
  yield put(enableLoading());
  let response = yield call(registerUser, action.data);
  yield put(disableLoading());
  
  console.log("response register saga", response);

if (response && response.status == true) {
    AsyncStorage.setItem('@token', response.result.token);
    yield put(
      authActions.registerResponse(),
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
