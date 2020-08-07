import {fork, all} from 'redux-saga/effects';
import * as types from '../Actions/types';
import AuthSaga from './Auth.Saga';

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
