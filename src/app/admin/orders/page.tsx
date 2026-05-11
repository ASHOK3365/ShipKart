'use client';
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  ShoppingBag, Search, Filter, 
  MoreVertical, Eye, Truck, CheckCircle,
  ArrowUpDown, Download, Clock, Package
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '../products/Products.module.css'; // Reuse table styles

const ADMIN_NAV = [
  { label: 'Overview', href: '/admin', icon: Package },
  { label: 'Products', href: '/admin/products', icon: Package },
  { label: 'Orders', href: '/admin/orders', icon: Package },
  { label: 'Sellers', href: '/admin/sellers', icon: Package },
  { label: 'Customers', href: '/admin/customers', icon: Package },
  { label: 'Analytics', href: '/admin/analytics', icon: Package },
  { label: 'Settings', href: '/admin/settings', icon: Package },
];

const MOCK_ORDERS = [
  { id: 'ORD-8291', customer: 'John Doe', date: '2026-05-10', total: 1240.00, status: 'Processing', method: 'Credit Card' },
  { id: 'ORD-8292', customer: 'Sarah Jenkins', date: '2026-05-10', total: 349.50, status: 'Shipped', method: 'PayPal' },
  { id: 'ORD-8293', customer: 'Michael Chen', date: '2026-05-09', total: 89.00, status: 'Delivered', method: 'Apple Pay' },
  { id: 'ORD-8294', customer: 'Emma Wilson', date: '2026-05-09', total: 2100.00, status: 'Pending', method: 'Wire Transfer' },
];

export default function AdminOrders() {
  return (
    <DashboardLayout 
      navItems={ADMIN_NAV} 
      userRole="Super Admin" 
      userName="Alexander Vance"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1>Order Management</h1>
            <p>Track and manage all ecosystem transactions in real-time.</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.secondaryBtn}>
              <Download size={18} />
              <span>Export Orders</span>
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <Search size={18} />
            <input type="text" placeholder="Search by Order ID, Customer..." />
          </div>
          <div className={styles.filterGroup}>
            <button className={styles.filterBtn}>
              <Clock size={18} />
              <span>Last 30 Days</span>
            </button>
            <button className={styles.filterBtn}>
              <Filter size={18} />
              <span>Status</span>
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Method</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ORDERS.map((order) => (
                <motion.tr layout key={order.id}>
                  <td>
                    <span className={styles.productId}>#{order.id}</span>
                  </td>
                  <td>
                    <div className={styles.productCell}>
                      <div className={styles.avatarPlaceholder}>{order.customer.charAt(0)}</div>
                      <p className={styles.productName}>{order.customer}</p>
                    </div>
                  </td>
                  <td>{order.date}</td>
                  <td className={styles.priceCell}>${order.total.toFixed(2)}</td>
                  <td>{order.method}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button title="View Details"><Eye size={16} /></button>
                      <button title="Track"><Truck size={16} /></button>
                      <button title="Complete" className={styles.successBtn}><CheckCircle size={16} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
