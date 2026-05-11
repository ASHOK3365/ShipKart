'use client';
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard, ActivityItem } from '@/components/dashboard/DashboardComponents';
import { useDashboardStore } from '@/store/dashboardStore';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  LayoutDashboard, ShoppingBag, Users, Store, 
  BarChart3, Settings, Package, Globe, TrendingUp
} from 'lucide-react';
import styles from '@/components/dashboard/Dashboard.module.css';

const ADMIN_NAV = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Products', href: '/admin/products', icon: Package },
  { label: 'Orders', href: '/admin/orders', icon: ShoppingBag },
  { label: 'Sellers', href: '/admin/sellers', icon: Store },
  { label: 'Customers', href: '/admin/customers', icon: Users },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminDashboard() {
  const { stats, salesData, activities, topCategories } = useDashboardStore();

  return (
    <DashboardLayout 
      navItems={ADMIN_NAV} 
      userRole="Super Admin" 
      userName="Alexander Vance"
    >
      <div className={styles.adminPage}>
        <div className={styles.pageHeader}>
          <div>
            <h1>Dashboard Overview</h1>
            <p>Welcome back, here's what's happening with your ecosystem today.</p>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.exportBtn}>
              <Globe size={18} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={styles.grid4}>
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} icon={idx === 0 ? TrendingUp : idx === 1 ? ShoppingBag : idx === 2 ? Users : Store} />
          ))}
        </div>

        {/* Charts & Activity */}
        <div className={styles.grid21}>
          {/* Main Sales Chart */}
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <h3>Revenue Growth</h3>
              <div className={styles.chartActions}>
                <button className={`${styles.chartBtn} ${styles.active}`}>Monthly</button>
                <button className={styles.chartBtn}>Weekly</button>
              </div>
            </div>
            <div style={{ width: '100%', height: 350 }}>
              <ResponsiveContainer>
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5B6CFF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#5B6CFF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '16px', 
                      border: 'none', 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                      fontFamily: 'Plus Jakarta Sans'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#5B6CFF" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Activity Feed */}
          <div className={styles.activityCard}>
            <h3>Live Activity</h3>
            <div className={styles.activityList}>
              {activities.map((activity) => (
                <ActivityItem key={activity.id} {...activity} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.grid21} style={{ marginTop: '2rem' }}>
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <h3>Category Performance</h3>
            </div>
            <div style={{ width: '100%', height: 300, display: 'flex', alignItems: 'center' }}>
              <ResponsiveContainer width="50%" height="100%">
                <PieChart>
                  <Pie
                    data={topCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {topCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className={styles.pieLegend}>
                {topCategories.map((cat, idx) => (
                  <div key={idx} className={styles.legendItem}>
                    <div className={styles.legendColor} style={{ backgroundColor: cat.color }} />
                    <span className={styles.legendLabel}>{cat.name}</span>
                    <span className={styles.legendValue}>{cat.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className={`${styles.chartCard} ${styles.aiInsightsCard}`}>
            <div className={styles.chartHeader}>
              <h3>AI Business Insights</h3>
            </div>
            <div className={styles.aiInsightList}>
              <div className={styles.aiInsightItem}>
                <div className={styles.aiInsightIcon}>⚡</div>
                <p>"Mobile category sales increased 18% this week. Consider boosting ad spend for flagship models."</p>
              </div>
              <div className={styles.aiInsightItem}>
                <div className={styles.aiInsightIcon}>🔮</div>
                <p>"AI predicts high demand for smart appliances in the next 15 days based on regional trends."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
