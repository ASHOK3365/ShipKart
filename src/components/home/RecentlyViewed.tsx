'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { History, X } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { Product, products } from '@/data/products';
import styles from './RecentlyViewed.module.css';

const RecentlyViewed = () => {
  const [recentItems, setRecentItems] = useState<Product[]>([]);

  useEffect(() => {
    // For demo, we'll pick 3 random items as "recently viewed"
    // In a real app, this would come from localStorage
    setRecentItems(products.slice(0, 3));
  }, []);

  if (recentItems.length === 0) return null;

  return (
    <section className={styles.recentSection}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <History size={20} className={styles.icon} />
          <h2>Continue Browsing</h2>
        </div>
        <button className={styles.clearBtn}>Clear All</button>
      </div>

      <div className={styles.grid}>
        {recentItems.map((product) => (
          <div key={product.id} className={styles.itemWrapper}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;
