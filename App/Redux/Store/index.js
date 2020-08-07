import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// Imports: Redux Root Reducer
import rootReducer from '../Reducers/index';
// Imports: Redux Root Saga
import rootSaga from '../Sagas/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading'],
};

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
//persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store, persistor};
