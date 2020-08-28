import React from './node_modules/react';
import { Provider } from './node_modules/react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

const AppStateProvider = (props) => {
  const { children } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default AppStateProvider;
