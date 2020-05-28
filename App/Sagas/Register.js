import {call, put} from 'redux-saga/effects';
import registerUser from '../Api/Methods/Register';
import * as authActions from '../Actions/Auth';
import * as loadingAction from '../Actions/Loading';
import * as navigationActions from '../Actions/Navigation';
import AsyncStorage from '@react-native-community/async-storage';
import * as snackbarActions from '../Actions/Snackbar';

export default function* registerAsync(action) {
  yield put(loadingAction.enableLoading());
  let response = yield call(registerUser, action.data);
  yield put(loadingAction.disableLoading());

  console.log('response register saga', response);

  if (response && response.message) {
    yield put(loadingAction.disableLoading());
    let data = {
      label: response.message,
    };
    yield put(snackbarActions.enableSnackbar(data));
  }
}
