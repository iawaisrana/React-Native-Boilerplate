import {fork, all} from 'redux-saga/effects';
import AuthSaga from './auth.saga';

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
