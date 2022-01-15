import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "redux/reducers";
import { persistStore } from "redux-persist";

export const middlewares = [thunk, logger];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

const appStore = { store, persistor };

export default appStore;
