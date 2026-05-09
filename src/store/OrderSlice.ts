import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Order } from '../../src/Components/types/types';
import { orders as initialOrders } from '../data';

interface OrdersState {
  items: Order[];
  search: string;
  statusFilter: string;
  currentPage: number;
  pageSize: number;
}

const initialState: OrdersState = {
  items: initialOrders,
  search: '',
  statusFilter: 'all',
  currentPage: 1,
  pageSize: 8,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.currentPage = 1;
    },
    setStatusFilter(state, action: PayloadAction<string>) {
      state.statusFilter = action.payload;
      state.currentPage = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    updateOrderStatus(state, action: PayloadAction<{ id: string; status: Order['status'] }>) {
      const order = state.items.find(o => o.id === action.payload.id);
      if (order) order.status = action.payload.status;
    },
  },
});

export const { setSearch, setStatusFilter, setPage, updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;