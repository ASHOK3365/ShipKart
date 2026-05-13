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
import { ArrowRight, Sparkles, Zap, BrainCircuit, Headphones, Smartphone, ShoppingBag, Watch, Mic, Heart, Search, User, Instagram, Share2 } from 'lucide-react';

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
    <main className={styles.pageWrapper}>
      <Navbar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <div className={styles.mainFloatingContainer}>
        {/* Header inside the container */}
        <header className={styles.containerHeader}>
          <div className={styles.innerLogo}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none"><path d="M4 12l4-4 4 4 4-4 4 4" /></svg>
          </div>
          <div className={styles.innerNavPills}>
            {['Home', 'Women', 'Men', 'Sale', 'Others'].map(tab => (
              <button 
                key={tab} 
                className={`${styles.innerTab} ${tab === 'Home' ? styles.tabActive : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className={styles.innerActions}>
            <button className={styles.iconCircle}><Search size={16} /></button>
            <button className={styles.iconCircle}><ShoppingBag size={16} /></button>
            <button className={styles.iconCircle}><User size={16} /></button>
          </div>
        </header>

        {/* 1. REFINED HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroMainCard}>
              <h1 className={styles.editorialTitle}>
                START YOUR <br />
                <span className={styles.pillTitle}>JOURNEY</span>
              </h1>
              <p className={styles.editorialSubtitle}>
                the ultimate online destination for all your footwear needs with the latest styles and trends!
              </p>
              <div className={styles.socialMinimal}>
                <div className={styles.socialItem}><Instagram size={14} /> <span>Instagram</span></div>
                <div className={styles.socialItem}><Share2 size={14} /> <span>Social</span></div>
              </div>
            </div>

            {/* Middle Stat */}
            <div className={styles.heroStatCard}>
              <div className={styles.purpleCircle}>
                <span className={styles.statLarge}>100%</span>
                <span className={styles.statSmall}>Original high quality materials</span>
              </div>
            </div>

            {/* Right Visual */}
            <div className={styles.heroVisualCard}>
               <SafeImage 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop" 
                alt="Product visual" 
                fill 
                style={{ objectFit: 'cover' }}
              />
              <button className={styles.shopNowBtn}>Shop now</button>
            </div>
          </div>
        </section>

        {/* 2. UNIQUE MATERIALS BANNER */}
        <section className={styles.uniqueBanner}>
          <div className={styles.uniqueContent}>
            <h2>ALWAYS <span className={styles.hollowText}>UNIQUE</span></h2>
            <h3>WITH THE <span className={styles.hollowText}>BEST</span> MATERIALS</h3>
          </div>
          <button className={styles.viewAllBtn}>View all</button>
        </section>

        {/* 3. NEW COLLECTION & BEST SELLERS BENTO */}
        <div className={styles.collectionGrid}>
          {/* New Collection Vertical */}
          <div className={styles.verticalCollection}>
            <div className={styles.verticalHeader}>
              <h3>NEW COLLECTION</h3>
            </div>
            <div className={styles.verticalImage}>
              <SafeImage 
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop" 
                alt="New" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Best Sellers Grid */}
          <div className={styles.bestSellersContent}>
            <div className={styles.bestSellersHeader}>
              <h3>BEST SELLERS</h3>
              <div className={styles.headerDot}></div>
            </div>
            <div className={styles.productFlex}>
              {products.filter(p => p.isBestSeller).slice(0, 3).map(product => (
                <div key={product.id} className={styles.miniProductCard}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. FOOTER BENTO (Categories) */}
        <section className={styles.footerBento}>
          <div className={styles.categoryFooterHeader}>
            <span>SHOP BY CATEGORY</span>
          </div>
          <div className={styles.catGridMini}>
            {['Running shoes', 'Slippers', 'Platform sneakers', 'Sandals'].map(cat => (
              <div key={cat} className={styles.catBoxMini}>
                <span className={styles.catNameMini}>{cat}</span>
                <div className={styles.catImgMini}>
                  <SafeImage 
                    src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop`} 
                    alt={cat} 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AIAssistant />
    </main>
  );
}
