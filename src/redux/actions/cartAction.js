import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actiontype";

export const addTocart = (product, count) => (dispatch, getState) => {
  const item = {
    _id: product._id,
    count: count,
    name: product.title,
    img: product.thumbnail,
    price: Number(product.price),
    total: Number(Number(product.price) * count),
  };

  if (count < 1) {
    dispatch({ type: REMOVE_FROM_CART, payload: item._id });
  } else {
    dispatch({ type: ADD_TO_CART, payload: item });
    const cartItems = getState().CartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
};

export const removeFromCart = (_id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: _id });
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const filterItems = cartItems.filter((item) => item._id != _id);
  localStorage.setItem("cartItems", JSON.stringify(filterItems));
};
