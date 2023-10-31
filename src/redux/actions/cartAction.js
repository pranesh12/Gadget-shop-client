import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actiontype";

export const addToCart = (product, count) => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};
