import { combineReducers } from "@reduxjs/toolkit";

import productsData from "./Slices/productsSlice";
import authData from "./Slices/authSlice";
import accountData from "./Slices/accountSlice";
import cartData from "./Slices/cartSlice";

const reducer = combineReducers({
  auth: authData,
  account: accountData,
  cart: cartData,
  products: productsData,
});

export default reducer;
