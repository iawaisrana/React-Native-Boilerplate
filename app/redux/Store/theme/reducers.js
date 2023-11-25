import initialState from './initialState'
import { TOGGLE_THEME } from './actions'

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      }
    default:
      return state
  }
}
