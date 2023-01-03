import { combineReducers } from "@reduxjs/toolkit";

import productsData from "./Slices/productsSlice";
import authData from "./Slices/authSlice";
import accountData from "./Slices/accountSlice";

const reducer = combineReducers({
  auth: authData,
  account: accountData,
  products: productsData,
});

export default reducer;
