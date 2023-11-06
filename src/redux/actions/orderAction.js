import {
  PLACE_ORDER,
  PLACE_ORDER_FAILED,
  GET_ALL_ORDER,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILED,
  GET_USER_ORDER,
  GET_USER_ORDER_FAILED,
  GET_USER_ORDER_SUCCESS,
  PLACE_ORDER_SUCCESS,
} from "../actionType/actiontype";
import axios from "axios";
import { url } from "../../api/api";

export const placeOrder =
  (totalAmount, token) => async (dispatch, getState) => {
    dispatch({ type: PLACE_ORDER });
    const currentUser = getState().loginReducer.currentUser;
    const cartItems = getState().CartReducer.cartItems;

    try {
      const res = axios.post(url + `placeorder`, {
        totalAmount,
        token,
        currentUser,
        cartItems,
      });
      dispatch({ type: PLACE_ORDER_SUCCESS, payload: res.data });
      localStorage.removeItem("cartItems");
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: PLACE_ORDER_FAILED, payload: error });
      localStorage.removeItem("cartItems");
    }
  };

export const getAllOrder = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_ORDER });
  const currentUser = getState().loginReducer.currentUser;
  const email = currentUser.email;
  try {
    const res = await axios.get(url + `orderlist?email=${email}`);
    dispatch({ type: GET_ALL_ORDER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_ORDER_FAILED, payload: error });
  }
};

export const getUserOrder = () => async (dispatch, getState) => {
  dispatch({ type: GET_USER_ORDER });
  const currentUser = getState().loginReducer.currentUser;
  const email = currentUser.email;
  try {
    const res = await axios.get(url + `userOrder?email=${email}`);
    dispatch({ type: GET_USER_ORDER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_ORDER_FAILED, payload: error });
  }
};
