import * as types from '../Actions/types';

const initialState = {
  loading: false,
};
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_ENABLE_LOADER: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.LOADING_DISABLE_LOADER: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

// Exports
export default loadingReducer;
