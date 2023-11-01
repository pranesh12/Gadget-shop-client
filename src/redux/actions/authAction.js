import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGIN_USER_FAILED,
} from "../ActionType/actionType";
import { url } from "../../api/api";

export const registerUser = (registerData) => async (dispath) => {
  try {
    const res = await axios.post(url + `register`, registerData);
    dispath({ type: REGISTER_USER, payload: res.data.result });
    console.log(res.data.result);
    localStorage.setItem("currentUser", JSON.stringify(res.data.result));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    // window.location.replace("/");
  } catch (error) {
    dispath({ type: REGISTER_USER_FAILED, payload: error });
  }
};

export const loginUser = (loginData) => async (dispath) => {
  try {
    const res = await axios.post(url + `login`, loginData);
    dispath({ type: LOGIN_USER, payload: res.data.result });
    console.log(res.data.result);
    localStorage.setItem("currentUser", JSON.stringify(res.data.result));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    // window.location.replace("/");
  } catch (error) {
    dispath({ type: LOGIN_USER_FAILED, payload: error });
  }
};

// export const logout = () => () => {
//   localStorage.removeItem("currentUser");
//   localStorage.removeItem("token");
//   window.location.replace("/");
// };
