'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Smartphone, Laptop, Shirt, Sparkles, Zap, 
  UtensilsCrossed, Bike, ArrowRight, LayoutGrid 
} from 'lucide-react';
import styles from './categories.module.css';

const categories = [
  { 
    name: 'Grocery', 
    slug: 'grocery', 
    icon: <UtensilsCrossed size={32} />, 
    color: '#10B981', 
    bg: '#ECFDF5',
    description: 'Fresh fruits, vegetables, dairy & pantry essentials',
    count: '80+ products',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop'
  },
  { 
    name: 'Mobiles', 
    slug: 'mobiles', 
    icon: <Smartphone size={32} />, 
    color: '#3B82F6', 
    bg: '#EFF6FF',
    description: 'Latest smartphones from Apple, Samsung, OnePlus & more',
    count: '100+ products',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop'
  },
  { 
    name: 'Electronics', 
    slug: 'electronics', 
    icon: <Laptop size={32} />, 
    color: '#F59E0B', 
    bg: '#FFFBEB',
    description: 'Headphones, speakers, tablets & gaming accessories',
    count: '40+ products',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop'
  },
  { 
    name: 'Fashion', 
    slug: 'fashion', 
    icon: <Shirt size={32} />, 
    color: '#EC4899', 
    bg: '#FDF2F8',
    description: 'Clothing, footwear & accessories for every style',
    count: '150+ products',
    image: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=600&auto=format&fit=crop'
  },
  { 
    name: 'Beauty', 
    slug: 'beauty', 
    icon: <Sparkles size={32} />, 
    color: '#A855F7', 
    bg: '#FAF5FF',
    description: 'Skincare, makeup, fragrances & wellness products',
    count: '120+ products',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop'
  },
  { 
    name: 'Appliances', 
    slug: 'appliances', 
    icon: <Zap size={32} />, 
    color: '#6366F1', 
    bg: '#EEF2FF',
    description: 'Refrigerators, ACs, washing machines & kitchen appliances',
    count: '60+ products',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop'
  },
  { 
    name: 'Two Wheeler', 
    slug: 'two-wheeler', 
    icon: <Bike size={32} />, 
    color: '#EF4444', 
    bg: '#FEF2F2',
    description: 'Bikes, scooters & electric vehicles from top brands',
    count: '80+ products',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format&fit=crop'
  },
];

export default function CategoriesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.headerIcon}>
            <LayoutGrid size={28} />
          </div>
          <h1>All Categories</h1>
          <p>Browse our complete collection across 7 premium categories</p>
        </motion.div>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <Link key={cat.slug} href={`/categories/${cat.slug}`}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={styles.cardImage}>
                <img src={cat.image} alt={cat.name} />
                <div className={styles.cardOverlay} style={{ background: `linear-gradient(135deg, ${cat.color}22, ${cat.color}44)` }} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.iconBadge} style={{ background: cat.bg, color: cat.color }}>
                  {cat.icon}
                </div>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.count}>{cat.count}</span>
                  <span className={styles.explore}>
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
