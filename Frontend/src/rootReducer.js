import { combineReducers } from "@reduxjs/toolkit";

import productsData from "./Slices/productsSlice";
import authData from "./Slices/authSlice";

const reducer = combineReducers({
  auth: authData,
  products: productsData,
});

export default reducer;
