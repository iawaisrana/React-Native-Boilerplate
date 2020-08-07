import {take, put, call, fork, all} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {LOGIN_REQUEST, REGISTER_REQUEST} from '../Types';
import {authActionsCreator} from '../actions';
import {login, signUp} from '../api';

function* loginSaga({payload}) {
  try {
    const response = yield call(login, payload);
    if (response.success) {
      AsyncStorage.setItem('@token', response.success.token);
      const user = {
        ...response.user,
        token: response.success.token,
      };
      yield put(authActionsCreator.userLoginSuccess({user}));
    }
  } catch (err) {
    yield put(
      authActionsCreator.userLoginFailed({
        error: err ? err : 'User Login Failed!',
      }),
    );
  }
}

function* signupSaga({payload}) {
  try {
    const response = yield call(signUp, payload);
    if (response.success) {
      AsyncStorage.setItem('@token', response.success.token);
      const user = {
        ...response.success.user,
        token: response.success.token,
      };
      yield put(authActionsCreator.userSignupSuccess({user}));
    }
  } catch (error) {
    yield put(
      authActionsCreator.userSignupRequest({
        error: error ? error : 'User Signup Failed',
      }),
    );
  }
}

function* watchLogin() {
  while (true) {
    const action = yield take(LOGIN_REQUEST);
    yield* loginSaga(action);
  }
}

function* watchSignup() {
  while (true) {
    const action = yield take(REGISTER_REQUEST);
    yield* signupSaga(action);
  }
}

export default function* () {
  yield all([fork(watchLogin), fork(watchSignup)]);
}
