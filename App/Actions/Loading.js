import * as types from './types';

export function enableLoading() {
  return {
    type: types.LOADING_ENABLE_LOADER
  };
}
export function disableLoading() {
  return {
    type: types.LOADING_DISABLE_LOADER
  };
}
