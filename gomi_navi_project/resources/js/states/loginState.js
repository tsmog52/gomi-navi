import { atom } from "recoil";
import Cookies from "js-cookie";

// Cookieの値に基づく初期値を設定
export const loginState = atom({
  key: "loginState",
  default: Cookies.get('user_id'),
});
