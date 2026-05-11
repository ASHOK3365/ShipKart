'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import styles from './Dashboard.module.css';

interface StatCardProps {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon?: any;
}

export function StatCard({ label, value, change, trend, icon: Icon }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.statCard}
    >
      <div className={styles.statHeader}>
        <div className={styles.statInfo}>
          <p className={styles.statLabel}>{label}</p>
          <h3 className={styles.statValue}>{value}</h3>
        </div>
        {Icon && (
          <div className={styles.statIcon}>
            <Icon size={24} />
          </div>
        )}
      </div>
      <div className={styles.statFooter}>
        <div className={`${styles.statTrend} ${styles[trend]}`}>
          {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{Math.abs(change)}%</span>
        </div>
        <span className={styles.statPeriod}>vs last month</span>
      </div>
    </motion.div>
  );
}

export function ActivityItem({ message, time, type }: { message: string; time: string; type: string }) {
  const getIcon = () => {
    switch(type) {
      case 'sale': return '💰';
      case 'user': return '👤';
      case 'seller': return '🏪';
      default: return '⚙️';
    }
  };

  return (
    <div className={styles.activityItem}>
      <div className={styles.activityIcon}>{getIcon()}</div>
      <div className={styles.activityContent}>
        <p>{message}</p>
        <span>{time}</span>
      </div>
    </div>
  );
}
