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

export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
        loading: true,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case PLACE_ORDER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const getAllOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ORDER:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        adminOrders: action.payload,
      };

    case GET_ALL_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_ORDER:
      return {
        ...state,
        userOrderLoaded: true,
      };

    case GET_USER_ORDER_SUCCESS: {
      return {
        ...state,
        userOrderLoaded: false,
        userOrders: action.payload,
      };
    }

    case GET_USER_ORDER_FAILED:
      return {
        ...state,
        error: action.payload,
        userOrderLoaded: false,
      };

    default:
      return state;
  }
};
