// export action creators
import * as Auth from './Auth';
import * as Navigation from './Navigation';
import * as Loading from './Loading';
import * as Snackbar from './Snackbar';
import * as App from './App';
export const ActionCreators = Object.assign(
  {},
  App,
  Auth,
  Navigation,
  Loading,
  Snackbar,
);
