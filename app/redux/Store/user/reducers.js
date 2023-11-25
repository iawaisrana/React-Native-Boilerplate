import initialState from './initialState'
import {
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
  FACEBOOK_LOGIN_REQUEST,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_ERROR,
} from './action.types'

import _ from 'lodash'

export const googleLoginRequest = (state) => {
  return {
    ...state,
    user: {
      ...state.user,
      email: '',
      displayName: '',
    },

    googleLogin: {
      ...state.googleLogin,
      isFetching: false,
      error: null,
    },

    loginUser: {
      ...state.loginUser,
      isFetching: false,
      error: null,
    },
  }
}

export const googleLoginSuccess = (state, { user }) => {
  if (_.isEmpty(user)) {
    return state
  }

  return {
    ...state,
    user: {
      ...state.user,
      email: user.email,
      name: user.displayName,
      accessToken: user.accessToken,
      loginType: 1,
    },

    loginUser: {
      ...state.loginUser,
      error: null,
      isFetching: true,
    },
  }
}

export const googleLoginFailure = (state, { error }) => {
  if (_.isEmpty(error)) {
    return state
  }

  return {
    ...state,
    googleLogin: {
      ...state.googleLogin,
      isFetching: false,
      error,
    },
  }
}

export const facebookLoginRequest = (state) => {
  return {
    ...state,
    user: {
      ...state.user,
      email: '',
      displayName: '',
    },

    facebookLogin: {
      ...state.facebookLogin,
      isFetching: false,
      error: null,
    },

    loginUser: {
      ...state.loginUser,
      isFetching: false,
      error: null,
    },
  }
}

export const facebookLoginSuccess = (state, { user }) => {
  if (_.isEmpty(user)) {
    return state
  }

  return {
    ...state,
    user: {
      ...state.user,
      email: user?.email ?? '',
      name: user?.name ?? '',
      accessToken: user.accessToken,
      loginType: 2,
    },

    loginUser: {
      ...state.loginUser,
      error: null,
      isFetching: true,
    },
  }
}

export const facebookLoginFailure = (state, { error }) => {
  if (_.isEmpty(error)) {
    return state
  }

  return {
    ...state,
    facebookLogin: {
      ...state.facebookLogin,
      isFetching: false,
      error,
    },
  }
}

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case GOOGLE_LOGIN_REQUEST: {
      return googleLoginRequest(state)
    }
    case GOOGLE_LOGIN_SUCCESS: {
      return googleLoginSuccess(state, payload)
    }
    case GOOGLE_LOGIN_ERROR: {
      return googleLoginFailure(state, payload)
    }
    case FACEBOOK_LOGIN_REQUEST: {
      return facebookLoginRequest(state)
    }
    case FACEBOOK_LOGIN_SUCCESS: {
      return facebookLoginSuccess(state, payload)
    }
    case FACEBOOK_LOGIN_ERROR: {
      return facebookLoginFailure(state, payload)
    }
    default:
      return state
  }
}
