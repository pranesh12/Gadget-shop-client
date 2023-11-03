import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actiontype";

export const CartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const alreadyExsist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (alreadyExsist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case REMOVE_FROM_CART:
      const filterCartItmes = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        cartItems: filterCartItmes,
      };

    default:
      return state;
  }
};
