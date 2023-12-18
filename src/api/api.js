import axios from "axios";
// const token = JSON.parse(localStorage.getItem("token"));
// export const url = "https://shop-nest-hs89.onrender.com/";
export const url = "https://shop-nest1.vercel.app/";

export const authAxios = axios.create({
  baseURL: url,
  //   Headers: {
  //     authorization: token,
  //   },
});
