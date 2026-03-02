import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import  OrdersReducer  from './OrderSlice';
export const store = configureStore({
    reducer: {
        products: productsReducer,
        orders:OrdersReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;