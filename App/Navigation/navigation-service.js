import { CommonActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function goBack(key) {
  _navigator.dispatch(
    CommonActions.back({
      key: key,
    }),
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
};
