'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Star, ArrowRight, Clock } from 'lucide-react';
import SafeImage from '@/components/ui/SafeImage';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import styles from './arrivals.module.css';

export default function NewArrivalsPage() {
  const { addItem } = useCartStore();

  // New arrivals: trending + best sellers as proxy
  const newArrivals = products
    .filter(p => p.isTrending || p.labels?.includes('NEW LAUNCH') || p.labels?.includes('New Arrival'))
    .slice(0, 12);

  // Featured new product (first one)
  const featured = newArrivals[0];
  const restArrivals = newArrivals.slice(1);

  // If not enough tagged products, fill with recent ones
  const allNew = restArrivals.length > 0 ? restArrivals : products.slice(0, 11);

  return (
    <div className={styles.container}>
      {/* Header */}
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={styles.headerBadge}>
          <Sparkles size={18} /> Just Dropped
        </div>
        <h1>New Arrivals</h1>
        <p>Discover the latest additions to our curated collection</p>
      </motion.div>

      {/* Featured Product */}
      {featured && (
        <Link href={`/product/${featured.id}`}>
          <motion.div 
            className={styles.featuredCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className={styles.featuredImage}>
              <SafeImage src={featured.image} alt={featured.name} fill style={{ objectFit: 'contain', padding: '2rem' }} />
            </div>
            <div className={styles.featuredInfo}>
              <span className={styles.newBadge}>NEW</span>
              <span className={styles.featuredBrand}>{featured.brand}</span>
              <h2>{featured.name}</h2>
              <p className={styles.featuredDesc}>{featured.description}</p>
              <div className={styles.featuredPricing}>
                <span className={styles.featuredPrice}>₹{featured.price.toLocaleString('en-IN')}</span>
                {featured.originalPrice > featured.price && (
                  <span className={styles.featuredOriginal}>₹{featured.originalPrice.toLocaleString('en-IN')}</span>
                )}
              </div>
              <div className={styles.featuredRating}>
                <Star size={16} fill="#F59E0B" stroke="#F59E0B" />
                <span>{Number(featured.rating).toFixed(1)} ({featured.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className={styles.featuredCTA}>
                Shop Now <ArrowRight size={18} />
              </div>
            </div>
          </motion.div>
        </Link>
      )}

      {/* Arrivals Grid */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Latest Products</h2>
          <div className={styles.timeBadge}>
            <Clock size={14} /> Added this week
          </div>
        </div>
        <div className={styles.grid}>
          {allNew.map((product, idx) => (
            <motion.div
              key={product.id}
              className={styles.productCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Link href={`/product/${product.id}`} className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <SafeImage src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '0.5rem' }} />
                  <span className={styles.newTag}>NEW</span>
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardBrand}>{product.brand}</span>
                  <h4>{product.name}</h4>
                  <div className={styles.cardPricing}>
                    <span className={styles.cardPrice}>₹{product.price.toLocaleString('en-IN')}</span>
                    {product.discount > 0 && (
                      <span className={styles.cardDiscount}>{product.discount}% off</span>
                    )}
                  </div>
                  <div className={styles.cardRating}>
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
    </div>
  );
}
