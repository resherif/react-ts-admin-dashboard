export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'draft' | 'archived';
  image: string;
  sales: number;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: 'completed' | 'pending' | 'cancelled' | 'processing';
  date: string;
  items: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  avatar: string;
  location: string;
  orders: number;
  spent: number;
  status: 'active' | 'inactive';
  joined: string;
}

export interface StatsCard {
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
  color: string;
}