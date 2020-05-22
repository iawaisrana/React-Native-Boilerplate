import {all, takeEvery} from 'redux-saga/effects';
import * as types from '../Actions/types';
import login from './Login';
import register from './Register';

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, login),
    takeEvery(types.REGISTER_REQUEST, register),
  ]);
}
