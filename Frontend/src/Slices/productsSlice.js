import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import url from "../URL_Routes";
import { SUNGLASSES } from "../productsSamples";
import { GLASSES } from "../productsSamples";
import { LENS } from "../productsSamples";

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(url.addNewProduct, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(url.getProducts);
    return response.data;
  }
);
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url.getProduct}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { sample: { SUNGLASSES, GLASSES, LENS } },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewProduct.pending, (state) => {
        state.fetching = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.fetching = false;
        state.message = action.payload.message;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload.message;
      })
      .addCase(getProducts.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.fetching = false;
        state.allProducts = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
      })
      .addCase(getProduct.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.fetching = false;
        state.editProduct = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
