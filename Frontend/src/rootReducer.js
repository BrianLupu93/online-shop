import { combineReducers } from "@reduxjs/toolkit";
import authData from "./Slices/authSlice";
import productsData from "./Slices/productsSlice";
import accountData from "./Slices/newAccountSlice";

const reducer = combineReducers({
  auth: authData,
  products: productsData,
  account: accountData,
});

export default reducer;
