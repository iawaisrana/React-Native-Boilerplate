/* Login Reducer
 * handles login states in the app
 */
import * as types from '../Actions/types';

const initialState = {
  isLoggedIn: false,
  token: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_RESPONSE: {
      return {
        ...state,
        token: action.token,
        isLoggedIn: true,
      };
    }
    case types.REGISTER_RESPONSE: {
      return {
        ...state,
        token: action.response.token,
        isLoggedIn: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default loginReducer;
