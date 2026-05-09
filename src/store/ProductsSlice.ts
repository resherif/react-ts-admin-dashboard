import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../Components/types/types';
import { products as initialProducts } from '../../src/data';

interface ProductsState {
  items: Product[];
  search: string;
  filter: string;
  currentPage: number;
  pageSize: number;
  sortBy: keyof Product | '';
  sortDir: 'asc' | 'desc';
}

const initialState: ProductsState = {
  items: initialProducts,
  search: '',
  filter: 'all',
  currentPage: 1,
  pageSize: 8,
  sortBy: '',
  sortDir: 'asc',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.currentPage = 1;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
      state.currentPage = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSort(state, action: PayloadAction<keyof Product>) {
      if (state.sortBy === action.payload) {
        state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortBy = action.payload;
        state.sortDir = 'asc';
      }
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.items.unshift(action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const idx = state.items.findIndex(p => p.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
  },
});

export const { setSearch, setFilter, setPage, setSort, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;