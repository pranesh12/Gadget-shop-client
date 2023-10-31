import {
  LOGIN_USER,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_FAILED,
} from "../ActionType/actionType";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        success: true,
        currentUser: action.payload,
      };

    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        isUserFound: false,
      };
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        success: true,
        currentUser: action.payload,
      };

    case REGISTER_USER_FAILED:
      return {
        ...state,
        registerError: action.payload,
      };
    default:
      return state;
  }
};
