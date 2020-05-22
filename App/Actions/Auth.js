/*
 * Reducer actions related with login
 */
import * as types from './types';

// login actions
export function loginRequest(data) {
  return {
    type: types.LOGIN_REQUEST,
    data,
  };
}

export function loginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

// register actions
export function registerRequest(data) {
  return {
    type: types.REGISTER_REQUEST,
    data,
  };
}

export function registerResponse(response) {
  return {
    type: types.REGISTER_RESPONSE,
    response,
  };
}

// facebook login actions
export function facebookLoginRequest(data) {
  return {
    type: types.FACEBOOK_LOGIN_REQUEST,
    data,
  };
}

export function facebookLoginResponse(response) {
  return {
    type: types.FACEBOOK_LOGIN_RESPONSE,
    response,
  };
}

// google login actions
export function googleLoginRequest(data) {
  return {
    type: types.GOOGLE_LOGIN_REQUEST,
    data,
  };
}

export function googleLoginResponse(response) {
  return {
    type: types.GOOGLE_LOGIN_RESPONSE,
    response,
  };
}

// logout action
export function logOut() {
  return {
    type: types.LOGOUT,
  };
}
