import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import url from "../URL_Routes";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url.addToCart}/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    removeFromCart: (state, action) => {
      const updateCart = state.cartItems?.filter(
        (item) => item.id !== action.payload
      );

      state.cartItems = updateCart;
    },

    getSubtotal: (state) => {
      let subTotal = 0;
      state.cartItems.map(
        (item) => (subTotal = subTotal + parseInt(item.price))
      );
      state.subTotal = subTotal;
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(addToCart.pending, (state) => {
        state.fetching = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.fetching = false;
        state.cartItems = [...state.cartItems, action.payload];
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload.error;
      });
  },
});

export default cartSlice.reducer;

export const { removeFromCart, getSubtotal } = cartSlice.actions;
