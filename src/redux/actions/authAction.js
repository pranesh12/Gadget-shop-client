import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGIN_USER_FAILED,
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
} from "../actionType/actiontype";
import { url } from "../../api/api";

export const registerUser = (registerData) => async (dispath) => {
  try {
    const res = await axios.post(url + `register`, registerData);
    dispath({ type: REGISTER_USER, payload: res.data.result });
    localStorage.setItem("currentUser", JSON.stringify(res.data.result));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    window.location.replace("/");
  } catch (error) {
    dispath({ type: REGISTER_USER_FAILED, payload: error });
  }
};

export const loginUser = (loginData) => async (dispath) => {
  try {
    const res = await axios.post(url + `login`, loginData);
    dispath({ type: LOGIN_USER, payload: res.data.result });
    localStorage.setItem("currentUser", JSON.stringify(res.data.result));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    window.location.replace("/");
  } catch (error) {
    dispath({ type: LOGIN_USER_FAILED, payload: error });
  }
};

export const getAllUsers = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_USERS });
  const currentUser = getState().loginReducer.currentUser;
  const email = currentUser.email;
  try {
    console.log(email);
    const res = await axios.get(url + `allusers?email=${email}`);
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAILED, payload: error });
  }
};

export const logout = () => () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
  window.location.replace("/");
};
