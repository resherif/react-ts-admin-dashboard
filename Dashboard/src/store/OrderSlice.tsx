import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Order, OrderStatus } from "../Components/orders/ordersData";
import { OrdersData } from "../Components/orders/ordersData";
interface OrderState {
    items: Order[];
}
const initialState: OrderState = {
    items: OrdersData
}
const OrderSlice = createSlice({
    name: "Orders",
    initialState,
    reducers: {
        ChangeState(state, action: PayloadAction<{id:number,newStatus:OrderStatus}>) {
            const order = state.items.find((o: Order) => (o.id === action.payload.id))
            if (order) {
                order.status = action.payload.newStatus;
            }
        }
    }
})
export const { ChangeState } = OrderSlice.actions;
export default OrderSlice.reducer;