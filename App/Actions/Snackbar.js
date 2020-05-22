import * as types from "./types";

export function enableSnackbar(data) {
  return {
    type: types.ENABLE_SNACKBAR,
    data
  };
}

export function disableSnackbar(data) {
  return {
    type: types.DISABLE_SNACKBAR
  };
}
