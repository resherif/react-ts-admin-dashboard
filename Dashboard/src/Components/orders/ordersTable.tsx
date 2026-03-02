import type { Order, OrderStatus } from "./ordersData";
import OrderRow from "./ordersRow";
type Props = {
    orders: Order[],
    onStateChange: (orderId: number, newStatus: OrderStatus) => void;
    
}
export default function OrdersTable({orders,onStateChange}:Props) {
    return (
        <div className="bg-white rounded-lg border overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left">Order Id</th>
                        <th className="px-6 py-3 text-left">Customer</th>
                        <th className="px-6 py-3 text-left">Date</th>
                        <th className="px-6 py-3 text-left">Total</th>
                        <th className="px-6 py-3 text-left">Status</th>
                        <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((o) => (
                            <OrderRow key={o.id} order={o} onStateChange={onStateChange}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}