import {
  LOGIN_USER,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
} from "../actionType/actiontype";

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

export const getAllUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        alluser: action.payload,
      };

    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
