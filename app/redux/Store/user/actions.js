import { createAction } from '@reduxjs/toolkit'
import {
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
  FACEBOOK_LOGIN_REQUEST,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_ERROR,
} from './action.types'

export const AuthActions = {
  googleLoginRequest: createAction(GOOGLE_LOGIN_REQUEST),
  googleLoginSuccess: createAction(GOOGLE_LOGIN_SUCCESS),
  googleLoginError: createAction(GOOGLE_LOGIN_ERROR),

  facebookLoginRequest: createAction(FACEBOOK_LOGIN_REQUEST),
  facebookLoginSuccess: createAction(FACEBOOK_LOGIN_SUCCESS),
  facebookLoginError: createAction(FACEBOOK_LOGIN_ERROR),
}
