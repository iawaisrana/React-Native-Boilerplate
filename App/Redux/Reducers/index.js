import { combineReducers } from './node_modules/redux';
import AuthData from './auth.reducer';

const RootReducer = combineReducers({
  AuthData,
});

export default RootReducer;
