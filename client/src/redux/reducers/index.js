import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducers from "redux/reducers/userReducers";
import productReducer from "redux/reducers/productReducers";
import cartReducer from "redux/reducers/cartReducer";
import categoriesReducer from "redux/reducers/categoriesReducers";
import orderReducer from "./orderReducers";

export const rootReducer = combineReducers({
  user: userReducers,
  productsData: productReducer,
  categoriesData: categoriesReducer,
  cartData: cartReducer,
  ordersData: orderReducer,
});

const configStorage = {
  key: "root",
  storage,
  // pieces of state persisted
  whitelist: ["cartData"],
};

export default persistReducer(configStorage, rootReducer);
