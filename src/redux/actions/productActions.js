import {
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILED,
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILED,
} from "../actionType/actiontype";
import axios from "axios";
import { url } from "../../api/api";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_PRODUCTS });
  try {
    const res = await axios.get(url + `products`);
    dispatch({ type: FETCH_ALL_PRODUCTS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_ALL_PRODUCTS_FAILED, payload: err });
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: FETCH_SINGLE_PRODUCT });
  try {
    const res = await axios.get(url + `products/${id}`);
    dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_SINGLE_PRODUCT_FAILED, payload: err });
  }
};
