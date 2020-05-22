import * as types from '../Actions/types';

const initialState = {
  isLoading: false,
};
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_ENABLE_LOADER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.LOADING_DISABLE_LOADER: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

// Exports
export default loadingReducer;
