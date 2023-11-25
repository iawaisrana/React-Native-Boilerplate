import initialState from './initialState'
import { STARTUP } from './actions'

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case STARTUP: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}
