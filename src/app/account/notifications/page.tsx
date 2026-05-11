'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, Package, Tag, Heart, 
  Info, Check, Trash2, Sparkles,
  ArrowRight, Filter, Settings, ChevronRight
} from 'lucide-react';
import styles from '../account.module.css';

const initialNotifications = [
  { id: '1', type: 'order', title: 'Order Out for Delivery', message: 'Your order ORD-8291 is out for delivery with our partner. Get ready!', time: '2 hours ago', read: false, icon: Package, color: '#5B6CFF' },
  { id: '2', type: 'ai', title: 'AI Recommendation', message: 'We found 3 new products matching your interest in Gaming Gear. Take a look!', time: '5 hours ago', read: false, icon: Sparkles, color: '#F59E0B' },
  { id: '3', type: 'offer', title: 'Flash Sale Alert', message: 'The items in your wishlist are now 20% OFF for the next 4 hours.', time: '1 day ago', read: true, icon: Tag, color: '#FF5B8C' },
  { id: '4', type: 'system', title: 'Account Security', message: 'Your password was successfully updated 2 days ago.', time: '2 days ago', read: true, icon: Info, color: '#10B981' },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotif = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className={styles.notificationsPage}>
      <div className={styles.pageHeader}>
        <div>
          <h2>Notification Center</h2>
          <p>Stay updated with orders, offers, and AI insights</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.textBtn}>Mark all as read</button>
          <button className={styles.iconBtn}><Settings size={18} /></button>
        </div>
      </div>

      <div className={styles.notifFilters}>
        {['All', 'Orders', 'Offers', 'AI Insights'].map((f) => (
          <button key={f} className={`${styles.filterBtn} ${f === 'All' ? styles.filterActive : ''}`}>
            {f}
          </button>
        ))}
      </div>

      <div className={styles.notifList}>
        <AnimatePresence mode="popLayout">
          {notifications.map((notif) => (
            <motion.div 
              key={notif.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className={`${styles.notifCard} ${notif.read ? styles.notifRead : ''}`}
            >
              <div className={styles.notifIconWrap} style={{ background: `${notif.color}15`, color: notif.color }}>
                <notif.icon size={22} />
              </div>
              <div className={styles.notifContent}>
                <div className={styles.notifTop}>
                  <h4>{notif.title}</h4>
                  <span>{notif.time}</span>
                </div>
                <p>{notif.message}</p>
                <div className={styles.notifActions}>
                  {!notif.read && (
                    <button className={styles.readBtn} onClick={() => markRead(notif.id)}>
                      <Check size={14} /> Mark Read
                    </button>
                  )}
                  <button className={styles.deleteNotifBtn} onClick={() => deleteNotif(notif.id)}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <div className={styles.notifArrow}>
                <ChevronRight size={20} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className={styles.aiNotificationCard}>
        <div className={styles.aiNotifHeader}>
          <Sparkles size={20} />
          <h4>Smart Summary</h4>
        </div>
        <p>AI has summarized your last 24 hours: You have 1 delivery today and 2 price drops on your wishlist items.</p>
        <button className={styles.aiNotifBtn}>View Details <ArrowRight size={16} /></button>
      </div>
    </div>
  );
}
