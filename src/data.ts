import type { Product, Order, Customer } from '../src/Components/types/types';

export const products: Product[] = [
  { id: 'P001', name: 'Pro Wireless Headphones', category: 'Electronics', price: 299, stock: 142, status: 'active', image: '🎧', sales: 1240 },
  { id: 'P002', name: 'Ergonomic Desk Chair', category: 'Furniture', price: 549, stock: 38, status: 'active', image: '🪑', sales: 892 },
  { id: 'P003', name: 'Mechanical Keyboard', category: 'Electronics', price: 149, stock: 0, status: 'archived', image: '⌨️', sales: 2100 },
  { id: 'P004', name: 'Minimalist Desk Lamp', category: 'Home', price: 89, stock: 210, status: 'active', image: '💡', sales: 654 },
  { id: 'P005', name: '4K Webcam', category: 'Electronics', price: 199, stock: 67, status: 'active', image: '📷', sales: 1870 },
  { id: 'P006', name: 'Standing Desk', category: 'Furniture', price: 799, stock: 14, status: 'draft', image: '🖥️', sales: 340 },
  { id: 'P007', name: 'Noise Cancelling Earbuds', category: 'Electronics', price: 179, stock: 95, status: 'active', image: '🎵', sales: 3200 },
  { id: 'P008', name: 'Monitor Arm', category: 'Accessories', price: 129, stock: 55, status: 'active', image: '🔩', sales: 780 },
  { id: 'P009', name: 'USB-C Hub', category: 'Accessories', price: 69, stock: 312, status: 'active', image: '🔌', sales: 4100 },
  { id: 'P010', name: 'Smart Watch', category: 'Electronics', price: 399, stock: 0, status: 'draft', image: '⌚', sales: 560 },
  { id: 'P011', name: 'Cable Management Kit', category: 'Accessories', price: 39, stock: 450, status: 'active', image: '🗂️', sales: 1900 },
  { id: 'P012', name: 'Mesh Office Chair', category: 'Furniture', price: 349, stock: 22, status: 'active', image: '🪑', sales: 490 },
];

export const orders: Order[] = [
  { id: 'ORD-7841', customer: 'Sarah Mitchell', email: 'sarah@example.com', product: 'Pro Wireless Headphones', amount: 299, status: 'completed', date: '2024-12-18', items: 1 },
  { id: 'ORD-7840', customer: 'James Rodriguez', email: 'james@example.com', product: 'Ergonomic Desk Chair', amount: 1098, status: 'processing', date: '2024-12-18', items: 2 },
  { id: 'ORD-7839', customer: 'Aiko Tanaka', email: 'aiko@example.com', product: 'USB-C Hub', amount: 69, status: 'pending', date: '2024-12-17', items: 1 },
  { id: 'ORD-7838', customer: 'Lucas Ferreira', email: 'lucas@example.com', product: '4K Webcam', amount: 199, status: 'completed', date: '2024-12-17', items: 1 },
  { id: 'ORD-7837', customer: 'Emma Thompson', email: 'emma@example.com', product: 'Standing Desk', amount: 799, status: 'cancelled', date: '2024-12-16', items: 1 },
  { id: 'ORD-7836', customer: 'Omar Hassan', email: 'omar@example.com', product: 'Mechanical Keyboard', amount: 298, status: 'completed', date: '2024-12-16', items: 2 },
  { id: 'ORD-7835', customer: 'Priya Sharma', email: 'priya@example.com', product: 'Monitor Arm', amount: 129, status: 'processing', date: '2024-12-15', items: 1 },
  { id: 'ORD-7834', customer: 'Noah Williams', email: 'noah@example.com', product: 'Smart Watch', amount: 399, status: 'pending', date: '2024-12-15', items: 1 },
  { id: 'ORD-7833', customer: 'Lena Müller', email: 'lena@example.com', product: 'Noise Cancelling Earbuds', amount: 358, status: 'completed', date: '2024-12-14', items: 2 },
  { id: 'ORD-7832', customer: 'Carlos Vega', email: 'carlos@example.com', product: 'USB-C Hub', amount: 207, status: 'completed', date: '2024-12-14', items: 3 },
  { id: 'ORD-7831', customer: 'Fatima Al-Rashid', email: 'fatima@example.com', product: 'Minimalist Desk Lamp', amount: 89, status: 'completed', date: '2024-12-13', items: 1 },
  { id: 'ORD-7830', customer: 'David Park', email: 'david@example.com', product: 'Ergonomic Desk Chair', amount: 549, status: 'processing', date: '2024-12-13', items: 1 },
];

export const customers: Customer[] = [
  { id: 'C001', name: 'Sarah Mitchell', email: 'sarah@example.com', avatar: 'SM', location: 'New York, US', orders: 12, spent: 3480, status: 'active', joined: '2023-03-14' },
  { id: 'C002', name: 'James Rodriguez', email: 'james@example.com', avatar: 'JR', location: 'Madrid, ES', orders: 7, spent: 2100, status: 'active', joined: '2023-06-22' },
  { id: 'C003', name: 'Aiko Tanaka', email: 'aiko@example.com', avatar: 'AT', location: 'Tokyo, JP', orders: 24, spent: 8900, status: 'active', joined: '2022-11-08' },
  { id: 'C004', name: 'Lucas Ferreira', email: 'lucas@example.com', avatar: 'LF', location: 'São Paulo, BR', orders: 3, spent: 650, status: 'inactive', joined: '2024-01-30' },
  { id: 'C005', name: 'Emma Thompson', email: 'emma@example.com', avatar: 'ET', location: 'London, UK', orders: 18, spent: 6200, status: 'active', joined: '2023-01-15' },
  { id: 'C006', name: 'Omar Hassan', email: 'omar@example.com', avatar: 'OH', location: 'Cairo, EG', orders: 9, spent: 1890, status: 'active', joined: '2023-08-04' },
  { id: 'C007', name: 'Priya Sharma', email: 'priya@example.com', avatar: 'PS', location: 'Mumbai, IN', orders: 15, spent: 4320, status: 'active', joined: '2023-02-28' },
  { id: 'C008', name: 'Noah Williams', email: 'noah@example.com', avatar: 'NW', location: 'Sydney, AU', orders: 2, spent: 430, status: 'inactive', joined: '2024-06-10' },
];

export const revenueData = [
  { month: 'Jul', revenue: 42000, orders: 310, profit: 18000 },
  { month: 'Aug', revenue: 51000, orders: 380, profit: 22000 },
  { month: 'Sep', revenue: 47000, orders: 350, profit: 19500 },
  { month: 'Oct', revenue: 63000, orders: 460, profit: 28000 },
  { month: 'Nov', revenue: 78000, orders: 570, profit: 35000 },
  { month: 'Dec', revenue: 92000, orders: 680, profit: 42000 },
];

export const categoryData = [
  { name: 'Electronics', value: 45, color: '#fbbf24' },
  { name: 'Furniture', value: 28, color: '#6366f1' },
  { name: 'Accessories', value: 18, color: '#10b981' },
  { name: 'Home', value: 9, color: '#f43f5e' },
];

export const trafficData = [
  { day: 'Mon', visits: 2400, conversions: 140 },
  { day: 'Tue', visits: 1398, conversions: 90 },
  { day: 'Wed', visits: 3200, conversions: 210 },
  { day: 'Thu', visits: 2800, conversions: 180 },
  { day: 'Fri', visits: 4100, conversions: 290 },
  { day: 'Sat', visits: 3600, conversions: 240 },
  { day: 'Sun', visits: 2900, conversions: 190 },
];