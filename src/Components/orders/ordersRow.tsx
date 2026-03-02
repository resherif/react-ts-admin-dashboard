import type { OrderStatus ,Order} from "./ordersData";
type Props = {
    order: Order,
    onStateChange: (orderId: number, newStatus: OrderStatus) => void;

};
export default function OrderRow({ order, onStateChange }: Props) {
    return (
        <tr className="border-t">
        <td className="px-6 py-4">{order.id}</td>
        <td className="px-6 py-4">{order.customer}</td>
        <td className="px-6 py-4">{order.date}</td>
        <td className="px-6 py-4">{order.total}</td>
        <td className="px-6 py-4">
            <span className={`px-3 py-1 rounded-full text-xs ${order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : order.status === "Completed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{order.status}</span>
            </td>
            <td className="px-6 py-4">
        <select value={order.status} onChange={(e)=>onStateChange(order.id, e.target.value as OrderStatus)} className="border rounded px-2 py-1">
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
        </select>
    </td>
    </tr>
    
   )
}
