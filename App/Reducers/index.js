/*
 * combines all th existing reducers
 */

import {combineReducers} from 'redux';
import Loading from './Loading';
import Auth from './Auth';
import App from './App';
import Snackbar from './Snackbar';

const rootReducer = combineReducers({
  loading: Loading,
  auth: Auth,
  app: App,
  snackbar: Snackbar,
});

export default rootReducer;
