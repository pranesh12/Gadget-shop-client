import {
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_PRODUCTS_FAILED,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILED,
} from "../actionType/actiontype";

export const fetchProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case FETCH_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};

export const fetchSingleProductReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case FETCH_SINGLE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};
