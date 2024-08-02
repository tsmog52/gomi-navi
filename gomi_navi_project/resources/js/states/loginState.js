import { atom } from "recoil";
import Cookies from "js-cookie";

export const loginState = atom({
  key: "loginState",
  default: !!Cookies.get('user_id'),
});

