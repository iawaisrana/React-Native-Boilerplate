import { all, takeLatest } from 'redux-saga/effects'
import { facebookLoginSaga, googleLoginSaga } from './authSaga'
import { startupSaga } from './startupSaga'
import { FACEBOOK_LOGIN_REQUEST, GOOGLE_LOGIN_REQUEST } from '../store/user/action.types'
import { STARTUP } from '../store/startup/actions'

export default function* rootSaga() {
  yield all([
    takeLatest(GOOGLE_LOGIN_REQUEST, googleLoginSaga),
    takeLatest(FACEBOOK_LOGIN_REQUEST, facebookLoginSaga),
    takeLatest(STARTUP, startupSaga),
  ])
}
