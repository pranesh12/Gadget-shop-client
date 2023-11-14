import {
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_PRODUCTS_FAILED,
  FETCH_ALL_PRODUCTS_SUCCESS,
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

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case CREATE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deleted: action.payload,
        loading: false,
      };

    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        udated: action.payload,
        loading: false,
      };

    case UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};
