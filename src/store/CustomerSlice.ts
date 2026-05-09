import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Customer } from '../../src/Components/types/types';
import { customers as initialCustomers } from '../../src/data';

interface CustomersState {
  items: Customer[];
  search: string;
  currentPage: number;
  pageSize: number;
}

const initialState: CustomersState = {
  items: initialCustomers,
  search: '',
  currentPage: 1,
  pageSize: 8,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.currentPage = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearch, setPage } = customersSlice.actions;
export default customersSlice.reducer;