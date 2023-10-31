import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actiontype";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const alreadyExsist = state.cartItems.find(
        (item) => item.id == action.payload.id
      );

      return {
        ...state,
      };

    case REMOVE_FROM_CART:
      const filterItems = state.cartItems.filter(
        (item) => item.id != action.payload
      );

      return {
        ...state,
        cartItems: filterItems,
      };

    default:
      return {
        ...state,
      };
  }
};
