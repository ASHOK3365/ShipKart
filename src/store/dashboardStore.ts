import { create } from 'zustand';

export interface StatCard {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
}

export interface ChartData {
  name: string;
  value: number;
}

export interface Activity {
  id: string;
  type: 'sale' | 'user' | 'seller' | 'system';
  message: string;
  time: string;
  user?: string;
}

interface DashboardState {
  stats: StatCard[];
  salesData: ChartData[];
  activities: Activity[];
  topCategories: { name: string; value: number; color: string }[];
  
  // Actions
  fetchStats: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  stats: [
    { label: 'Total Revenue', value: '$124,592.00', change: 12.5, trend: 'up' },
    { label: 'Total Orders', value: '1,482', change: 8.2, trend: 'up' },
    { label: 'Total Users', value: '42,931', change: 4.1, trend: 'up' },
    { label: 'Active Sellers', value: '852', change: -2.4, trend: 'down' },
  ],
  salesData: [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
    { name: 'Jul', value: 7000 },
  ],
  activities: [
    { id: '1', type: 'sale', message: 'New order #ORD-7291 from New York', time: '2 mins ago', user: 'John Doe' },
    { id: '2', type: 'user', message: 'New user registration: Sarah Jenkins', time: '15 mins ago' },
    { id: '3', type: 'seller', message: 'Seller application approved: TechGear Ltd', time: '1 hour ago' },
    { id: '4', type: 'system', message: 'Server optimization completed successfully', time: '3 hours ago' },
  ],
  topCategories: [
    { name: 'Electronics', value: 45, color: '#5B6CFF' },
    { name: 'Clothing', value: 25, color: '#EC4899' },
    { name: 'Beauty', value: 15, color: '#10B981' },
    { name: 'Others', value: 15, color: '#F59E0B' },
  ],
  
  fetchStats: async () => {
    // Simulate API fetch
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}));
