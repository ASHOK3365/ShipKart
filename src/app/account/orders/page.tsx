'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Search, Filter, ChevronDown, 
  Package, Truck, CheckCircle2, Clock, 
  ArrowRight, Download, RefreshCw, XCircle
} from 'lucide-react';
import { products } from '@/data/products';
import styles from '../account.module.css';

const orders = [
  {
    id: 'ORD-8291',
    date: 'Oct 12, 2023',
    total: 124999,
    status: 'Delivered',
    items: [
      { name: 'iPhone 15 Pro Max', price: 124999, image: products[0].image, qty: 1 }
    ],
    tracking: {
      current: 'Delivered',
      timeline: [
        { status: 'Confirmed', date: 'Oct 12, 10:30 AM', completed: true },
        { status: 'Shipped', date: 'Oct 13, 02:15 PM', completed: true },
        { status: 'Delivered', date: 'Oct 15, 11:45 AM', completed: true },
      ]
    }
  },
  {
    id: 'ORD-8245',
    date: 'Oct 05, 2023',
    total: 89900,
    status: 'Processing',
    items: [
      { name: 'MacBook Air M2', price: 89900, image: products[2].image, qty: 1 }
    ],
    tracking: {
      current: 'Processing',
      timeline: [
        { status: 'Confirmed', date: 'Oct 05, 09:15 AM', completed: true },
        { status: 'Processing', date: 'Oct 05, 11:30 AM', completed: false },
      ]
    }
  }
];

export default function OrdersPage() {
  const [filter, setFilter] = useState('All');
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter(o => o.status === filter);

  return (
    <div className={styles.ordersPage}>
      <div className={styles.pageHeader}>
        <div>
          <h2>Order History</h2>
          <p>Track, manage and reorder your past purchases</p>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <Search size={18} />
            <input type="text" placeholder="Search orders..." />
          </div>
          <div className={styles.filterDropdown}>
            <Filter size={18} />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option>All</option>
              <option>Delivered</option>
              <option>Processing</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.ordersList}>
        {filteredOrders.map((order) => (
          <motion.div 
            key={order.id}
            className={styles.orderCard}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={styles.orderHeader} onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}>
              <div className={styles.orderMain}>
                <div className={styles.orderIconWrap}>
                  <Package size={24} />
                </div>
                <div>
                  <h4>{order.id}</h4>
                  <span>Placed on {order.date}</span>
                </div>
              </div>
              <div className={styles.orderMeta}>
                <div className={styles.orderAmount}>
                  <span>Total Amount</span>
                  <strong>₹{order.total.toLocaleString('en-IN')}</strong>
                </div>
                <div className={`${styles.statusBadge} ${styles['status' + order.status]}`}>
                  {order.status}
                </div>
                <motion.div 
                  animate={{ rotate: expandedOrder === order.id ? 180 : 0 }}
                  className={styles.expandIcon}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>
            </div>

            <AnimatePresence>
              {expandedOrder === order.id && (
                <motion.div 
                  className={styles.orderDetail}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className={styles.orderInner}>
                    <div className={styles.orderItems}>
                      {order.items.map((item, i) => (
                        <div key={i} className={styles.orderProduct}>
                          <img src={item.image} alt={item.name} />
                          <div className={styles.productInfo}>
                            <h5>{item.name}</h5>
                            <span>Qty: {item.qty} • ₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                          <button className={styles.reorderBtn}>Reorder</button>
                        </div>
                      ))}
                    </div>

                    <div className={styles.orderTracking}>
                      <h5>Tracking Progress</h5>
                      <div className={styles.trackingLine}>
                        {order.tracking.timeline.map((step, i) => (
                          <div key={i} className={`${styles.trackingStep} ${step.completed ? styles.stepDone : styles.stepCurrent}`}>
                            <div className={styles.stepMarker}>
                              {step.completed ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                            </div>
                            <div className={styles.stepInfo}>
                              <h6>{step.status}</h6>
                              <span>{step.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.orderActions}>
                      <button className={styles.actionBtn}><Download size={16} /> Invoice</button>
                      <button className={styles.actionBtn}><RefreshCw size={16} /> Return Items</button>
                      <button className={`${styles.actionBtn} ${styles.danger}`}><XCircle size={16} /> Cancel Order</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
