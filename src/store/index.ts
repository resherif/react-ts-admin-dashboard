import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ProductsSlice';
import ordersReducer from './OrderSlice';
import customersReducer from './CustomerSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
    customers: customersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;