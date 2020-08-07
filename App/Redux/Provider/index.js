import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '../Store';

class AppStateProvider extends PureComponent {
  render() {
    const {children} = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
}

export default AppStateProvider;
