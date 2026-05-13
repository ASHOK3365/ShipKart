'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Bot, 
  Smartphone, 
  Laptop, 
  Shirt, 
  Star, 
  Heart,
  TrendingUp,
  Clock
} from 'lucide-react';
import styles from './page.module.css';

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

const categories = [
  { name: 'Grocery', icon: '🥦', color: '#E8F5E9', href: '/categories/grocery', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Mobiles', icon: <Smartphone size={24} />, color: '#E3F2FD', href: '/categories/mobiles', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop' },
  { name: 'Electronics', icon: <Laptop size={24} />, color: '#FFF3E0', href: '/categories/electronics', img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=400&auto=format&fit=crop' },
  { name: 'Appliances', icon: <Zap size={24} />, color: '#F3E5F5', href: '/categories/appliances', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Fashion', icon: <Shirt size={24} />, color: '#FCE4EC', href: '/categories/fashion', img: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=400&auto=format&fit=crop' },
  { name: 'Beauty', icon: <Sparkles size={24} />, color: '#F3E5F5', href: '/categories/beauty', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop' },
];

const trendingProducts = [
  { id: 't1', name: 'Apple AirPods Pro 2', price: 18990, originalPrice: 24900, rating: 4.8, reviews: '12.4K', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=300&auto=format&fit=crop', category: 'Electronics', brand: 'Apple' },
  { id: 't2', name: 'Nike Air Max 270', price: 12995, originalPrice: 14995, rating: 4.7, reviews: '8.2K', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=300&auto=format&fit=crop', category: 'Fashion', brand: 'Nike' },
  { id: 't3', name: 'Sony WH-1000XM5', price: 24990, originalPrice: 31900, rating: 4.9, reviews: '15.1K', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=300&auto=format&fit=crop', category: 'Electronics', brand: 'Sony' },
  { id: 't4', name: 'Dyson Airwrap Multi-Styler', price: 45900, originalPrice: 49900, rating: 4.8, reviews: '5.6K', image: 'https://images.unsplash.com/photo-1522338140262-f46f5912018a?q=80&w=300&auto=format&fit=crop', category: 'Beauty', brand: 'Dyson' },
  { id: 't5', name: 'iPad Air M2', price: 54900, originalPrice: 59900, rating: 4.7, reviews: '3.4K', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300&auto=format&fit=crop', category: 'Electronics', brand: 'Apple' },
];

const Home = () => {
  const { addItem } = useCartStore();

  return (
    <div className={styles.container}>
      {/* SECTION 1: HERO BENTO GRID */}
      <section className={styles.heroSection}>
        <div className={styles.bentoGrid}>
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${styles.bentoCard} ${styles.heroMain}`}
          >
            <div className={styles.heroContent}>
              <span className={styles.badge}>New Collection</span>
              <h1 className={styles.heroTitle}>
                Elevate Your <br /> 
                <span className={styles.gradientText}>Everyday</span>
              </h1>
              <p className={styles.heroSub}>
                Premium products curated for your lifestyle. Experience the future of commerce.
              </p>
              <Link href="/categories/fashion">
                <button className="pill-button">
                  Shop Now <ArrowRight size={18} />
                </button>
              </Link>
            </div>
            <div className={styles.heroVisual}>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={styles.floatingProduct}
              >
                <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop" alt="Sneaker" />
              </motion.div>
              <div className={styles.orb1} />
              <div className={styles.orb2} />
            </div>
          </motion.div>

          {/* AI Assistant Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`${styles.bentoCard} ${styles.aiCard}`}
          >
            <div className={styles.aiHeader}>
              <div className={styles.aiOrb}>
                <Bot size={24} color="white" />
              </div>
              <h3>AI Assistant</h3>
            </div>
            <div className={styles.aiBody}>
              <p className={styles.aiGreeting}>Hi, I'm Nova ✨</p>
              <p className={styles.aiText}>How can I help you today?</p>
              <button className={styles.aiBtn}>Let's Chat &rarr;</button>
            </div>
          </motion.div>

          {/* Mega Deal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className={`${styles.bentoCard} ${styles.dealCard}`}
          >
            <div className={styles.dealContent}>
              <span className={styles.dealBadge}>Mega Deal</span>
              <h4>Limited time offer</h4>
              <p className={styles.dealDiscount}>Up to 60% Off</p>
              <Link href="/categories/fashion">
                <button className={styles.dealBtn}>Shop Now</button>
              </Link>
            </div>
            <div className={styles.dealImg}>
              <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=200&auto=format&fit=crop" alt="Bag" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CATEGORY BENTO */}
      <section className={styles.categorySection}>
        <div className={styles.sectionHeader}>
          <h2>Shop By Category</h2>
          <button className={styles.viewAll}>View All <ArrowRight size={16} /></button>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((cat, idx) => (
            <Link key={cat.name} href={cat.href}>
              <motion.div 
                whileHover={{ y: -10 }}
                className={styles.catCard}
                style={{ background: cat.color }}
              >
                <div className={styles.catInfo}>
                  <div className={styles.catIcon}>{cat.icon}</div>
                  <h3>{cat.name}</h3>
                </div>
                <div className={styles.catVisual}>
                  <img src={cat.img} alt={cat.name} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: TRENDING PRODUCTS */}
      <section className={styles.trendingSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleWithIcon}>
            <TrendingUp size={24} className={styles.titleIcon} />
            <h2>Trending Now</h2>
          </div>
          <div className={styles.countdown}>
            <Clock size={16} />
            <span>Ends in 12:45:32</span>
          </div>
        </div>
        <div className={styles.productGrid}>
          {trendingProducts.map((product) => (
            <div key={product.id} className="bento-card">
              <div className={styles.productImg}>
                <img src={product.image} alt={product.name} />
                <button className={styles.wishlistBtn}><Heart size={18} /></button>
              </div>
              <div className={styles.productInfo}>
                <div className={styles.rating}>
                  <Star size={12} fill="gold" stroke="gold" />
                  <span>{product.rating} ({product.reviews})</span>
                </div>
                <h3>{product.name}</h3>
                <p className={styles.price}>₹{product.price.toLocaleString('en-IN')} <span className={styles.oldPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span></p>
                <div className={styles.productActions}>
                  <button className={styles.buyBtn} onClick={() => addItem(product as any)}>Add to Cart</button>
                  <button className={styles.quickView}><Zap size={14} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
