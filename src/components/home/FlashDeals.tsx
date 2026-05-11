'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, ChevronRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { Product } from '@/data/products';
import styles from './FlashDeals.module.css';

interface FlashDealsProps {
  products: Product[];
}

const FlashDeals: React.FC<FlashDealsProps> = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState('04:59:59');

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate countdown
      setTimeLeft(prev => {
        const [h, m, s] = prev.split(':').map(Number);
        let totalSeconds = h * 3600 + m * 60 + s - 1;
        if (totalSeconds < 0) totalSeconds = 18000;
        const newH = Math.floor(totalSeconds / 3600);
        const newM = Math.floor((totalSeconds % 3600) / 60);
        const newS = totalSeconds % 60;
        return `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}:${String(newS).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.flashDeals}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.zapIcon}>
            <Zap size={20} fill="currentColor" />
          </div>
          <h2>Flash Deals</h2>
          <div className={styles.timer}>
            <Clock size={16} />
            <span>Ending in {timeLeft}</span>
          </div>
        </div>
        <button className={styles.viewAll}>
          View All <ChevronRight size={16} />
        </button>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.dealCard}>
            <ProductCard product={product} />
            <div className={styles.progressWrapper}>
              <div className={styles.progressText}>
                <span>{product.dealProgress}% Claimed</span>
                <span>Limited Time</span>
              </div>
              <div className={styles.progressBar}>
                <motion.div 
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${product.dealProgress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashDeals;
