import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../Components/types/products";
import { productData } from "../Components/Products/productsData";

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: productData,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },

    editProduct(state, action: PayloadAction<Product>) {
      state.items = state.items.map((p: Product) =>
        p.id === action.payload.id ? action.payload : p
      );
    },

    deleteProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (p:Product) => p.id !== action.payload
      );
    },
  },
});

export const {
  addProduct,
  editProduct,
  deleteProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
