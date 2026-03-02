
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { ChangeState } from "../../store/OrderSlice";
import type {  OrderStatus } from "./ordersData";
import OrdersTable from "./ordersTable";

export default function OrdersPage() {
  const orders = useSelector((state: RootState) => state.orders.items);
  // const [orders, setOrders] = useState<Order[]>(OrdersData);
  const dispatch = useDispatch();
  const handleStatusChange = (
    id: number,
    newStatus: OrderStatus
  ) => {
   dispatch(ChangeState({id,newStatus}))
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold pt-6">Orders</h1>
      <div className="bg-blue-50 p-4 rounded-md">
        Total Orders: {orders.length}
      </div>
      <OrdersTable
        orders={orders}
        onStateChange={handleStatusChange}
      />
    </div>
  );
}
