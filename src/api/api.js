import axios from "axios";
// const token = JSON.parse(localStorage.getItem("token"));
export const url = "https://shop-nest-hs89.onrender.com/";

export const authAxios = axios.create({
  baseURL: url,
  //   Headers: {
  //     authorization: token,
  //   },
});
