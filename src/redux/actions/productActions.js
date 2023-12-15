import {
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILED,
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILED,
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
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

export const createProduct = (product) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT });
  try {
    const res = await axios.post(url + `products/createproduct`, product);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: res.data });
    window.location("http://localhost:5173/admin/addproducts");
  } catch (err) {
    dispatch({ type: CREATE_PRODUCT_FAILED, payload: err });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT });
  try {
    const res = await axios.delete(url + `products/${id}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res.data });
    window.location.replace("http://localhost:5173/admin/products");
  } catch (err) {
    dispatch({ type: DELETE_PRODUCT_FAILED, payload: err });
  }
};

export const updateProduct = (id, udpatedData) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT });
  try {
    const res = await axios.put(url + `products/${id}`, udpatedData);
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data });
    window.location = "/admin/products";
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILED, payload: error });
  }
};
