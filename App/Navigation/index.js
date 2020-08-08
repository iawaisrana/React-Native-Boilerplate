import React from 'react';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {Toast} from 'native-base';
import {useDispatch, useSelector} from '../Redux/Connects/node_modules/react-redux';
import {disableSnackbar} from '../Actions/Snackbar';

const AppNavigator = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.snackbar.message);

  if (message != '') {
    Toast.show({
      text: message,
      duration: 4000,
      position: 'bottom',
      onClose: () => {
        dispatch(disableSnackbar());
      },
    });
  }

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
