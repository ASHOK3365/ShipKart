'use client';
// Trigger HMR refresh for premium Appliances ecosystem
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import ProductGrid from '@/components/product/ProductGrid';
import ProductCard from '@/components/product/ProductCard';

const AIAssistant = dynamic(() => import('@/components/ui/AIAssistant'), {
  ssr: false,
  loading: () => null
});

const FlashDeals = dynamic(() => import('@/components/home/FlashDeals'), {
  ssr: true,
  loading: () => <div className="h-64 animate-pulse bg-slate-100 rounded-2xl" />
});

import { products } from '@/data/products';
import ApplianceShowcase from '@/components/product/ApplianceShowcase';
import styles from './page.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import SafeImage from '@/components/ui/SafeImage';
import { ArrowRight, Sparkles, Zap, BrainCircuit, Headphones, Smartphone, ShoppingBag, Watch, Mic, Heart } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Home');
  const [activeSubCategory, setActiveSubCategory] = useState('All');

  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const trendingProducts = products.filter(p => p.isTrending).slice(0, 5);
  const aiPicks = products.filter(p => p.isBestSeller).slice(0, 5);
  const flashDealProducts = products.filter(p => p.isFlashDeal).slice(0, 5);

  const categories = [
    { name: 'Grocery', icon: <ShoppingBag size={24} />, colorClass: styles.catGrocery, items: '1.2k+ Items' },
    { name: 'Mobile', icon: <Smartphone size={24} />, colorClass: styles.catMobile, items: '450+ Items' },
    { name: 'Electronics', icon: <Watch size={24} />, colorClass: styles.catElectronics, items: '800+ Items' },
    { name: 'Appliances', icon: <Zap size={24} />, colorClass: styles.catAppliances, items: '1.5k+ Items' }
  ];

  return (
    <main className={styles.container}>
      <Navbar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      {/* 1. HERO SECTION (Bento Style) */}
      <section className={styles.heroSection}>
        <div className={styles.bentoGrid}>
          {/* Main Hero Card */}
          <motion.div 
            className={styles.heroCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.heroContent}>
              <div className={styles.tagline}>
                <Sparkles size={14} />
                <span>Future of Commerce</span>
              </div>
              <h1 className={styles.heroTitle}>
                START YOUR <br />
                <span className={styles.outlineText}>JOURNEY</span>
              </h1>
              <p className={styles.heroSubtitle}>
                The ultimate online destination for all your needs with the latest styles and trends!
              </p>
              <div className={styles.heroActions}>
                <button className={styles.btnShop}>Shop Now</button>
                <div className={styles.socialGroup}>
                  <button className={styles.socialIcon}><Heart size={16} /></button>
                  <button className={styles.socialIcon}><Sparkles size={16} /></button>
                </div>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <SafeImage 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" 
                alt="Hero Product"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>

          {/* Featured Stats Card */}
          <motion.div 
            className={styles.statsCard}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.statCircle}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Original High Quality Materials</span>
            </div>
          </motion.div>

          {/* Secondary Hero Card */}
          <motion.div 
            className={styles.sideHeroCard}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.sideHeroImage}>
              <SafeImage 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" 
                alt="Product"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.sideHeroFooter}>
              <span>New Collection</span>
              <button className={styles.btnSmall}>View all</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY SELECTOR (Floating Pills) */}
      <section className={styles.categorySection}>
        <div className={styles.categoryPills}>
          {['All', 'Grocery', 'Mobile', 'Electronics', 'Appliances', 'Clothing', 'Beauty', 'Two Wheeler'].map((cat) => (
            <button
              key={cat}
              className={`${styles.catPill} ${activeCategory === cat ? styles.catActive : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubCategory('All');
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MAIN CONTENT AREA (Editorial Grid) */}
      <div className={styles.mainGridWrapper}>
        <div className={styles.editorialHeader}>
          <div className={styles.editorialTitles}>
            <h2 className={styles.editorialMainTitle}>ALWAYS <span className={styles.italicText}>UNIQUE</span></h2>
            <h3 className={styles.editorialSubTitle}>WITH THE <span className={styles.highlightText}>BEST</span> MATERIALS</h3>
          </div>
          <button className={styles.btnEditorial}>View all</button>
        </div>

        <div className={styles.contentLayout}>
          {activeCategory !== 'All' && activeCategory !== 'Home' && (
            <aside className={styles.sidebar}>
              <div className={styles.sidebarHeader}>
                <div className={styles.filterTitle}>FILTERS</div>
                <button className={styles.resetBtn} onClick={() => setActiveSubCategory('All')}>Reset</button>
              </div>

              {/* Subcategory Filters */}
              {activeCategory === 'Clothing' && (
                <div className={styles.filterGroup}>
                  <h3>Subcategories</h3>
                  <div className={styles.filterList}>
                    {['All', 'T-Shirts', 'Hoodies', 'Shirts', 'Jeans', 'Sneakers', 'Activewear'].map(sub => (
                      <button 
                        key={sub}
                        className={`${styles.filterItem} ${activeSubCategory === sub ? styles.activeFilter : ''}`}
                        onClick={() => setActiveSubCategory(sub)}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeCategory === 'Beauty' && (
                <div className={styles.filterGroup}>
                  <h3>Subcategories</h3>
                  <div className={styles.filterList}>
                    {['All', 'Skincare', 'Makeup', 'Perfumes', 'Hair Care'].map(sub => (
                      <button 
                        key={sub}
                        className={`${styles.filterItem} ${activeSubCategory === sub ? styles.activeFilter : ''}`}
                        onClick={() => setActiveSubCategory(sub)}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          )}

          <div className={styles.productsArea}>
            <ProductGrid 
              products={products.filter(p => {
                if (activeCategory === 'Home' || activeCategory === 'All') return p.isBestSeller;
                if (p.category.toLowerCase() !== activeCategory.toLowerCase()) return false;
                if (activeSubCategory === 'All') return true;
                return p.subCategory === activeSubCategory || p.brand === activeSubCategory;
              })} 
              category={activeCategory === 'Home' ? 'BEST SELLERS' : activeSubCategory === 'All' ? activeCategory : activeSubCategory} 
            />
          </div>
        </div>
      </div>

      <AIAssistant />
    </main>
  );
}
