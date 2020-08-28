import { combineReducers } from 'redux';
import AuthData from './auth.reducer';

const RootReducer = combineReducers({
  AuthData,
});

export default RootReducer;
