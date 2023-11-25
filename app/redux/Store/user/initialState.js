const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    accessToken: '',
    loginType: 4,
    displayName: '',
    userId: '',
    username: '',
    fullname: '',
  },

  loginUser: {
    error: null,
    isFetching: false,
  },

  registerUser: {
    error: null,
    isFetching: false,
    successMessage: null,
  },

  googleLogin: {
    error: null,
    isFetching: false,
  },

  googleLogout: {
    error: null,
    isFetching: false,
    successMessage: null,
  },

  facebookLogin: {
    error: null,
    isFetching: false,
  },

  facebookLogout: {
    error: null,
    isFetching: false,
    successMessage: null,
  },
}

export default initialState
