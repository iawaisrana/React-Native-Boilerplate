import * as types from '../Actions/types';

const initialState = {
  isSnackbarVisible: false,
  message: '',
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ENABLE_SNACKBAR: {
      return {
        ...state,
        isSnackbarVisible: true,
        message: action.data.label,
      };
    }
    case types.DISABLE_SNACKBAR: {
      return {
        ...state,
        isSnackbarVisible: false,
        message: '',
      };
    }

    default: {
      return state;
    }
  }
};

export default snackbarReducer;
