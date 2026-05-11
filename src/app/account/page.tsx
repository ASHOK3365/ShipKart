'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Heart, CreditCard, Sparkles, 
  ArrowRight, Clock, Package, Zap, BrainCircuit,
  TrendingUp, Star, Gift
} from 'lucide-react';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { products } from '@/data/products';
import styles from './account.module.css';

export default function DashboardPage() {
  const { user } = useAuthStore();
  
  if (!user) return null;

  const stats = [
    { label: 'Total Orders', value: '12', icon: ShoppingBag, color: '#5B6CFF' },
    { label: 'Wishlist Items', value: '08', icon: Heart, color: '#FF5B8C' },
    { label: 'Saved Cards', value: '02', icon: CreditCard, color: '#10B981' },
    { label: 'AI Points', value: '250', icon: Zap, color: '#F59E0B' },
  ];

  const recentOrders = [
    { id: 'ORD-8291', name: 'iPhone 15 Pro Max', date: 'Oct 12, 2023', status: 'Delivered', image: products[0].image },
    { id: 'ORD-8245', name: 'MacBook Air M2', date: 'Oct 05, 2023', status: 'Processing', image: products[2].image },
  ];

  const aiRecs = products.slice(5, 8);

  return (
    <div className={styles.dashboardHome}>
      <header className={styles.greeting}>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Welcome back, {user.name.split(' ')[0]} 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Your smart shopping summary is ready for today.
        </motion.p>
      </header>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={styles.statIcon} style={{ background: `${stat.color}10`, color: stat.color }}>
              <stat.icon size={24} />
            </div>
            <div className={styles.statInfo}>
              <h4>{stat.label}</h4>
              <p>{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.dashboardGrid}>
        {/* Recent Orders */}
        <div className={styles.leftColumn}>
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.cardHeader}>
              <h3><Clock size={20} /> Recent Orders</h3>
              <Link href="/account/orders" className={styles.viewAll}>View All</Link>
            </div>
            <div className={styles.orderList}>
              {recentOrders.map((order) => (
                <div key={order.id} className={styles.orderItem}>
                  <div className={styles.orderImg}>
                    <img src={order.image} alt={order.name} />
                  </div>
                  <div className={styles.orderInfo}>
                    <h4>{order.name}</h4>
                    <span>{order.id} • {order.date}</span>
                  </div>
                  <div className={`${styles.orderStatus} ${order.status === 'Delivered' ? styles.statusDelivered : styles.statusProcessing}`}>
                    {order.status}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.cardHeader}>
              <h3><TrendingUp size={20} /> Shopping Insights</h3>
            </div>
            <div className={styles.insightContent}>
              <div className={styles.insightItem}>
                <div className={styles.insightIcon}><BrainCircuit size={20} /></div>
                <p>You&apos;ve saved **₹4,500** this month using AI-suggested coupons.</p>
              </div>
              <div className={styles.insightItem}>
                <div className={styles.insightIcon}><Package size={20} /></div>
                <p>Your most purchased category is **Electronics**.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Recommendations */}
        <div className={styles.rightColumn}>
          <motion.div 
            className={styles.card}
            style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: 'white', border: 'none' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.cardHeader}>
              <h3 style={{ color: 'white' }}><Sparkles size={20} /> AI For You</h3>
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '1.5rem' }}>
              Based on your browsing history, AI thinks you&apos;ll love these:
            </p>
            <div className={styles.aiRecs}>
              {aiRecs.map((p) => (
                <div key={p.id} className={styles.recItem}>
                  <img src={p.image} alt={p.name} />
                  <div className={styles.recInfo}>
                    <h5>{p.name}</h5>
                    <span>₹{p.price.toLocaleString('en-IN')}</span>
                  </div>
                  <Link href={`/product/${p.id}`} className={styles.recLink}><ArrowRight size={16} /></Link>
                </div>
              ))}
            </div>
            <button className={styles.aiBtn}>
              Show More Picks
            </button>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className={styles.cardHeader}>
              <h3><Gift size={20} /> Special Offers</h3>
            </div>
            <div className={styles.offerItem}>
              <div className={styles.offerTag}>BIRTHDAY25</div>
              <p>Get 25% off on your next purchase. Valid for 3 days.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
