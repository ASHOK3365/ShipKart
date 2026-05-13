'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Wind, Droplets, Coffee, Smartphone, ShoppingCart, ArrowRight, Star } from 'lucide-react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import SafeImage from '@/components/ui/SafeImage';
import styles from './ApplianceShowcase.module.css';

interface ApplianceShowcaseProps {
  products: Product[];
  activeSubCategory: string;
  onSubCategoryChange: (sub: string) => void;
}

const subCatIcons: Record<string, React.ReactNode> = {
  'All': <Zap size={20} />,
  'Refrigerators': <Wind size={20} />,
  'Washing Machines': <Droplets size={20} />,
  'Air Conditioners': <Wind size={20} />,
  'Microwave Ovens': <Zap size={20} />,
  'Air Fryers': <Zap size={20} />,
  'Water Purifiers': <Droplets size={20} />,
  'Vacuum Cleaners': <Zap size={20} />,
  'Coffee Machines': <Coffee size={20} />,
  'Smart Home Devices': <Smartphone size={20} />,
  'Dishwashers': <Droplets size={20} />,
  'Air Purifiers': <Wind size={20} />
};

const ApplianceShowcase: React.FC<ApplianceShowcaseProps> = ({ 
  products, 
  activeSubCategory, 
  onSubCategoryChange 
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const heroProduct = products.find(p => p.isFlashDeal) || products[0];
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <div className={styles.container}>
      {/* 1. PREMIUM HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Cpu size={16} /> NEXT-GEN APPLIANCES
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The Future of <span className={styles.gradientText}>Smart Living</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experience unparalleled comfort with our curated selection of high-fidelity home solutions. AI-powered, energy-efficient, and beautifully designed.
          </motion.p>
          <motion.div 
            className={styles.heroActions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className={styles.btnPrimary}>Explore Flagships</button>
            <button className={styles.btnSecondary}>Smart Home Tour</button>
          </motion.div>
        </div>
        <div className={styles.heroVisual}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={heroProduct.id}
              className={styles.heroImageWrapper}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.glowEffect}></div>
              <SafeImage 
                src={heroProduct.image} 
                alt={heroProduct.name} 
                fill 
                className={styles.heroImage}
                style={{ objectFit: 'contain' }}
              />
              <div className={styles.productTag}>
                <h4>{heroProduct.brand} {heroProduct.name}</h4>
                <p>₹{heroProduct.price.toLocaleString('en-IN')}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 2. CATEGORY SELECTOR (HORIZONTAL) */}
      <div className={styles.categoryBar}>
        {Object.keys(subCatIcons).map((sub) => (
          <button 
            key={sub}
            className={`${styles.catButton} ${activeSubCategory === sub ? styles.activeCat : ''}`}
            onClick={() => onSubCategoryChange(sub)}
          >
            <span className={styles.catIcon}>{subCatIcons[sub]}</span>
            <span className={styles.catName}>{sub}</span>
          </button>
        ))}
      </div>

      {/* 3. TRENDING / FEATURED GRID */}
      {activeSubCategory === 'All' && (
        <section className={styles.trendingSection}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Popular Right Now</h2>
              <p>Top trending appliances chosen by the Antigravity community.</p>
            </div>
            <button className={styles.viewAll}>View All <ArrowRight size={16} /></button>
          </div>
          <div className={styles.trendingGrid}>
            {trendingProducts.map((p) => (
              <div key={p.id} className={styles.trendingItem}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. MAIN PRODUCT GRID */}
      <section className={styles.mainGridSection}>
        <div className={styles.gridHeader}>
          <h2>{activeSubCategory === 'All' ? 'Complete Collection' : activeSubCategory}</h2>
          <div className={styles.gridStats}>{products.length} Products Found</div>
        </div>
        <div className={styles.productGrid}>
          {products.map((p) => (
            <motion.div 
              key={p.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. BRAND PARTNERS */}
      <section className={styles.brandsSection}>
        <p>TRUSTED BY GLOBAL LEADERS</p>
        <div className={styles.brandLogos}>
          {['SAMSUNG', 'LG', 'WHIRLPOOL', 'BOSCH', 'DYSON', 'PANASONIC'].map(b => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApplianceShowcase;
