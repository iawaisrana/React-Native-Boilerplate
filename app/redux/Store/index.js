import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import userReducer from './user/reducers'
import startupReducer from './startup/reducers'
import themeReducer from './theme/reducers'

const rootReducer = combineReducers({
  startup: startupReducer,
  auth: userReducer,
  theme: themeReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const middleware = []

// Connect the sagas to the redux store
const sagaMiddleware = createSagaMiddleware()
middleware.push(sagaMiddleware)

// Redux persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware,
})

const persistor = persistStore(store)

// Kick off the root saga
sagaMiddleware.run(rootSaga)

export { store, persistor }
