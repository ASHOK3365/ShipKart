'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Clock, Star, Heart, ArrowRight, Flame, TrendingUp } from 'lucide-react';
import SafeImage from '@/components/ui/SafeImage';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import styles from './deals.module.css';

export default function DealsPage() {
  const { addItem } = useCartStore();

  // Flash deals: highest discount products
  const flashDeals = [...products]
    .filter(p => p.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 8);

  // Best value picks
  const bestValue = [...products]
    .filter(p => p.rating >= 4.5 && p.discount >= 15)
    .slice(0, 6);

  // Budget picks under ₹999
  const budgetPicks = products
    .filter(p => p.price < 999 && p.discount > 0)
    .slice(0, 6);

  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <motion.div 
        className={styles.heroBanner}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <Flame size={16} /> Limited Time
          </div>
          <h1>Mega Deals</h1>
          <p>Up to 60% off on premium products across all categories</p>
          <div className={styles.heroTimer}>
            <Clock size={18} />
            <span>Ends in 23h 45m 12s</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            🔥
          </motion.div>
        </div>
      </motion.div>

      {/* Flash Deals Grid */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <Zap size={22} className={styles.titleIcon} />
            <h2>Flash Deals</h2>
          </div>
          <span className={styles.sectionSub}>Hurry, limited stock!</span>
        </div>
        <div className={styles.dealsGrid}>
          {flashDeals.map((product, idx) => (
            <motion.div
              key={product.id}
              className={styles.dealCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Link href={`/product/${product.id}`} className={styles.dealLink}>
                <div className={styles.dealImage}>
                  <SafeImage src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '0.5rem' }} />
                  <span className={styles.discountBadge}>{product.discount}% OFF</span>
                </div>
                <div className={styles.dealInfo}>
                  <span className={styles.dealBrand}>{product.brand}</span>
                  <h4>{product.name}</h4>
                  <div className={styles.dealPricing}>
                    <span className={styles.dealPrice}>₹{product.price.toLocaleString('en-IN')}</span>
                    <span className={styles.dealOriginal}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className={styles.dealRating}>
                    <Star size={12} fill="#F59E0B" stroke="#F59E0B" />
                    <span>{Number(product.rating).toFixed(1)}</span>
                  </div>
                </div>
              </Link>
              <button className={styles.addBtn} onClick={() => addItem(product)}>
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Value Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <TrendingUp size={22} className={styles.titleIcon} />
            <h2>Best Value Picks</h2>
          </div>
          <span className={styles.sectionSub}>Top rated + great discounts</span>
        </div>
        <div className={styles.valueGrid}>
          {bestValue.map((product, idx) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <motion.div
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.valueImage}>
                  <SafeImage src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '0.5rem' }} />
                </div>
                <div className={styles.valueInfo}>
                  <h4>{product.name}</h4>
                  <div className={styles.dealPricing}>
                    <span className={styles.dealPrice}>₹{product.price.toLocaleString('en-IN')}</span>
                    <span className={styles.saveBadge}>Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Budget Picks */}
      {budgetPicks.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <Heart size={22} className={styles.titleIcon} />
              <h2>Under ₹999</h2>
            </div>
            <span className={styles.sectionSub}>Great deals on a budget</span>
          </div>
          <div className={styles.dealsGrid}>
            {budgetPicks.map((product, idx) => (
              <motion.div
                key={product.id}
                className={styles.dealCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <Link href={`/product/${product.id}`} className={styles.dealLink}>
                  <div className={styles.dealImage}>
                    <SafeImage src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '0.5rem' }} />
                    <span className={styles.discountBadge}>{product.discount}% OFF</span>
                  </div>
                  <div className={styles.dealInfo}>
                    <span className={styles.dealBrand}>{product.brand}</span>
                    <h4>{product.name}</h4>
                    <div className={styles.dealPricing}>
                      <span className={styles.dealPrice}>₹{product.price.toLocaleString('en-IN')}</span>
                      <span className={styles.dealOriginal}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </Link>
                <button className={styles.addBtn} onClick={() => addItem(product)}>
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
