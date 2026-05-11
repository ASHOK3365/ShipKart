'use client';
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Package, Plus, Search, Filter, 
  MoreVertical, Edit2, Trash2, Eye,
  ArrowUpDown, ChevronRight, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Products.module.css';

const ADMIN_NAV = [
  { label: 'Overview', href: '/admin', icon: Package },
  { label: 'Products', href: '/admin/products', icon: Package },
  { label: 'Orders', href: '/admin/orders', icon: Package },
  { label: 'Sellers', href: '/admin/sellers', icon: Package },
  { label: 'Customers', href: '/admin/customers', icon: Package },
  { label: 'Analytics', href: '/admin/analytics', icon: Package },
  { label: 'Settings', href: '/admin/settings', icon: Package },
];

const MOCK_PRODUCTS = [
  { id: '1', name: 'iPhone 15 Pro', category: 'Electronics', price: 999, stock: 42, status: 'In Stock', image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=100' },
  { id: '2', name: 'MacBook Air M2', category: 'Electronics', price: 1199, stock: 15, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e5237?q=80&w=100' },
  { id: '3', name: 'Sony WH-1000XM5', category: 'Electronics', price: 349, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1675242220464-6d9b19f074be?q=80&w=100' },
  { id: '4', name: 'Nike Air Max 270', category: 'Clothing', price: 150, stock: 85, status: 'In Stock', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=100' },
];

export default function AdminProducts() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DashboardLayout 
      navItems={ADMIN_NAV} 
      userRole="Super Admin" 
      userName="Alexander Vance"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1>Product Management</h1>
            <p>Total {MOCK_PRODUCTS.length} products found in the ecosystem.</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.secondaryBtn}>
              <Download size={18} />
              <span>Export CSV</span>
            </button>
            <button className={styles.primaryBtn}>
              <Plus size={18} />
              <span>Add New Product</span>
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search by name, category or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.filterGroup}>
            <button className={styles.filterBtn}>
              <Filter size={18} />
              <span>Category</span>
            </button>
            <button className={styles.filterBtn}>
              <ArrowUpDown size={18} />
              <span>Sort By</span>
            </button>
          </div>
        </div>

        {/* Table View */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" className={styles.checkbox} />
                </th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PRODUCTS.map((product) => (
                <motion.tr 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={product.id}
                >
                  <td>
                    <input type="checkbox" className={styles.checkbox} />
                  </td>
                  <td>
                    <div className={styles.productCell}>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <p className={styles.productName}>{product.name}</p>
                        <span className={styles.productId}>ID: #{product.id}002</span>
                      </div>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td className={styles.priceCell}>${product.price}</td>
                  <td>{product.stock} units</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[product.status.replace(/\s+/g, '').toLowerCase()]}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button title="View"><Eye size={16} /></button>
                      <button title="Edit"><Edit2 size={16} /></button>
                      <button title="Delete" className={styles.deleteBtn}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <p>Showing 1-4 of 124 products</p>
          <div className={styles.pageBtns}>
            <button disabled>Previous</button>
            <button className={styles.activePage}>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
