import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["loading"]
};

// Imports: Redux Root Reducer
import rootReducer from "../Reducers/index";
// Imports: Redux Root Saga
import rootSaga from "../Sagas/index";
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
export { store, persistor };
