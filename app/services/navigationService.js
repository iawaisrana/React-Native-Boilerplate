import { CommonActions } from '@react-navigation/native'

let navigator

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef
}

function navigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    })
  )
}

function goBack(key) {
  navigator.dispatch(
    CommonActions.back({
      key,
    })
  )
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
}
