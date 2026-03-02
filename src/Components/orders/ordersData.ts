export type OrderStatus = "Cancelled" | "Pending" | "Completed";
export type Order = {
    id: number,
    customer: string,
    date: string,
    total: number,
    status: OrderStatus
}
export const OrdersData: Order[] = [
     {
    id: 101,
    customer: "Ahmed Ali",
    date: "2025-01-10",
    total: 320,
    status: "Pending",
  },
  {
    id: 1002,
    customer: "Sara Mohamed",
    date: "2025-01-11",
    total: 150,
    status: "Completed",
  },
  {
    id: 1003,
    customer: "Omar Hassan",
    date: "2025-01-12",
    total: 500,
    status: "Cancelled",
  },
]