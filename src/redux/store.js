import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  fetchProductsReducer,
  fetchSingleProductReducer,
} from "./reducers/productReducer";
import { loginReducer, registerReducer } from "./reducers/authReducer";
import { CartReducer } from "./reducers/cartReducers";

const finalReducer = combineReducers({
  fetchProductsReducer,
  fetchSingleProductReducer,
  loginReducer,
  registerReducer,
  CartReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// const cartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

const initialState = {
  loginReducer: {
    currentUser,
  },
  CartReducer: {
    cartItems,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
