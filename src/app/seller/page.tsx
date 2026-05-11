'use client';
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard, ActivityItem } from '@/components/dashboard/DashboardComponents';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { 
  ShoppingBag, Package, Store, 
  BarChart3, Settings, MessageSquare, 
  Plus, AlertCircle, TrendingUp
} from 'lucide-react';
import styles from '@/components/dashboard/Dashboard.module.css';

const SELLER_NAV = [
  { label: 'Overview', href: '/seller', icon: Store },
  { label: 'Products', href: '/seller/products', icon: Package },
  { label: 'Orders', href: '/seller/orders', icon: ShoppingBag },
  { label: 'Analytics', href: '/seller/analytics', icon: BarChart3 },
  { label: 'Reviews', href: '/seller/reviews', icon: MessageSquare },
  { label: 'Settings', href: '/seller/settings', icon: Settings },
];

const SELLER_STATS = [
  { label: 'Today\'s Sales', value: '$2,840.50', change: 15.2, trend: 'up' },
  { label: 'Active Products', value: '42', change: 2, trend: 'up' },
  { label: 'Pending Orders', value: '12', change: -5, trend: 'down' },
  { label: 'Customer Rating', value: '4.8', change: 0.1, trend: 'up' },
];

const PERFORMANCE_DATA = [
  { name: 'Mon', sales: 400 },
  { name: 'Tue', sales: 700 },
  { name: 'Wed', sales: 500 },
  { name: 'Thu', sales: 900 },
  { name: 'Fri', sales: 1200 },
  { name: 'Sat', sales: 1500 },
  { name: 'Sun', sales: 1100 },
];

export default function SellerDashboard() {
  return (
    <DashboardLayout 
      navItems={SELLER_NAV} 
      userRole="Verified Seller" 
      userName="TechHub Electronics"
    >
      <div className={styles.adminPage}>
        <div className={styles.pageHeader}>
          <div>
            <h1>Seller Portal</h1>
            <p>Your business performance is looking great this week.</p>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.aiAssistBtn}>
              <Plus size={18} />
              <span>Add New Product</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.grid4}>
          {SELLER_STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} icon={idx === 0 ? TrendingUp : idx === 1 ? Package : idx === 2 ? ShoppingBag : MessageSquare} />
          ))}
        </div>

        {/* Main Section */}
        <div className={styles.grid21}>
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <h3>Sales Performance</h3>
            </div>
            <div style={{ width: '100%', height: 350 }}>
              <ResponsiveContainer>
                <BarChart data={PERFORMANCE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(91, 108, 255, 0.05)' }}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} 
                  />
                  <Bar dataKey="sales" fill="#5B6CFF" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={styles.activityCard}>
            <div className={styles.cardHeaderWithAction}>
              <h3>Inventory Alerts</h3>
              <span className={styles.alertCount}>3 Alerts</span>
            </div>
            <div className={styles.alertList}>
              <div className={styles.alertItem}>
                <div className={styles.alertIcon}><AlertCircle size={18} /></div>
                <div className={styles.alertContent}>
                  <p>iPhone 15 Pro Max is low on stock (2 left)</p>
                  <button>Restock Now</button>
                </div>
              </div>
              <div className={styles.alertItem}>
                <div className={styles.alertIcon}><AlertCircle size={18} /></div>
                <div className={styles.alertContent}>
                  <p>MacBook Air M2 stock out of sync</p>
                  <button>Resolve</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Suggestions */}
        <div className={styles.chartCard} style={{ marginTop: '2rem' }}>
          <div className={styles.chartHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className={styles.aiBadgeIcon}>✨</div>
              <h3>AI Product Suggestions</h3>
            </div>
          </div>
          <div className={styles.suggestionGrid}>
            <div className={styles.suggestionItem}>
              <h4>Bundle Opportunity</h4>
              <p>Customers often buy "Silicone Case" with "iPhone 15". Create a bundle to increase AOV by 15%.</p>
              <button>Create Bundle</button>
            </div>
            <div className={styles.suggestionItem}>
              <h4>Price Optimization</h4>
              <p>Competitors have lowered prices for "USB-C Hubs". We suggest a $2.00 discount to remain competitive.</p>
              <button>Apply Pricing</button>
            </div>
            <div className={styles.suggestionItem}>
              <h4>Trend Alert</h4>
              <p>"Minimalist Desk Mats" are trending in your category. Consider adding these to your catalog.</p>
              <button>View Trends</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
