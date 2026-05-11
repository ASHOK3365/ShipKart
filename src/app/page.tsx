'use client';
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
import styles from './page.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, BrainCircuit, Headphones, Smartphone, ShoppingBag, Watch } from 'lucide-react';

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
    { name: 'Appliances', icon: <Zap size={24} />, colorClass: styles.catAppliances, items: '320+ Items' }
  ];

  const brands = ['APPLE', 'SAMSUNG', 'SONY', 'BOSE', 'NIKE', 'DYSON'];

  return (
    <main className={styles.main}>
      <div className={styles.ambientBackground}></div>
      <Navbar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <div className={styles.content}>
        {activeCategory === 'Home' ? (
          <div className={styles.homeContainer}>
            {/* 1. CINEMATIC HERO SECTION */}
            <section className={styles.hero}>
              <motion.div 
                className={styles.heroContent}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: yHero }}
              >
                <div className={styles.heroSubtitle}>
                  <Sparkles size={16} /> THE FUTURE OF COMMERCE
                </div>
                <h1>
                  Shop Smarter <br />
                  With <span className={styles.gradientText}>Antigravity AI.</span>
                </h1>
                <p>
                  Experience a frictionless, predictive shopping ecosystem that anticipates your needs before you even realize them. Welcome to the billion-dollar standard.
                </p>
                <div className={styles.heroActions}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    className={styles.primaryBtn}
                  >
                    Explore Products <ArrowRight size={20} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    className={styles.secondaryBtn}
                  >
                    <BrainCircuit size={20} /> AI Recommendations
                  </motion.button>
                </div>
              </motion.div>

              <div className={styles.heroVisual}>
                <motion.div 
                  className={`${styles.floatingProduct} ${styles.fp1}`}
                  initial={{ opacity: 0, scale: 0.8, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=600" alt="Premium Laptop" style={{ width: '100%', borderRadius: '8px' }} />
                </motion.div>
                
                <motion.div 
                  className={`${styles.floatingProduct} ${styles.fp2}`}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  animate={{ y: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                >
                  <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=400" alt="Gaming Console" style={{ width: '100%', borderRadius: '8px' }} />
                </motion.div>
                
                <motion.div 
                  className={`${styles.floatingProduct} ${styles.fp3}`}
                  initial={{ opacity: 0, scale: 0.8, y: -100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                >
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" alt="Premium Headphones" style={{ width: '100%', borderRadius: '8px' }} />
                </motion.div>
              </div>
            </section>

            {/* 2. AI COMMERCE BANNER */}
            <motion.section 
              className={styles.aiBanner}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.aiBannerContent}>
                <h2>Powered by <br />Antigravity Brain</h2>
                <p>Voice search, hyper-personalized feeds, and real-time smart pricing. It's not just a store; it's an intelligent assistant.</p>
                <button className={styles.secondaryBtn} style={{ background: 'white', color: '#0F172A', border: 'none' }}>
                  Try Voice Search
                </button>
              </div>
              <div className={styles.aiBannerVisual}>
                <div className={styles.aiFeatureCard}>
                  <BrainCircuit size={32} />
                  <h3>Smart Pricing</h3>
                </div>
                <div className={styles.aiFeatureCard}>
                  <Zap size={32} />
                  <h3>Instant Checkout</h3>
                </div>
              </div>
            </motion.section>

            {/* 3. FLOATING CATEGORIES */}
            <section className={styles.categoriesSection}>
              <div className={styles.sectionHeader}>
                <div>
                  <h2>Immersive <br/>Ecosystems</h2>
                  <p>Step into dedicated worlds for everything you need.</p>
                </div>
              </div>
              <div className={styles.categoryGrid}>
                {categories.map((cat, i) => (
                  <motion.div 
                    key={cat.name}
                    className={`${styles.categoryCard} ${cat.colorClass}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={styles.catIcon}>{cat.icon}</div>
                    <h3>{cat.name}</h3>
                    <span>{cat.items} <ArrowRight size={14} /></span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 4. TRENDING PRODUCTS */}
            <section className={styles.productSection}>
              <div className={styles.sectionHeader}>
                <h2>Trending <br/>Globally</h2>
                <div className={styles.aiRecommendation}><Zap size={16} /> Real-time Data</div>
              </div>
              <div className={styles.carousel}>
                {trendingProducts.map(product => (
                  <div key={product.id} className={styles.carouselItem}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </section>

            {/* 5. SMART RECOMMENDATIONS */}
            <section className={styles.productSection} style={{ background: 'var(--glass-bg)', padding: '6rem 8rem' }}>
              <div className={styles.sectionHeader}>
                <h2>Curated <br/>For You</h2>
                <div className={styles.aiRecommendation}><BrainCircuit size={16} /> AI Matches</div>
              </div>
              <div className={styles.carousel}>
                {aiPicks.map(product => (
                  <div key={product.id} className={styles.carouselItem}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </section>

            {/* 6. FLASH DEALS */}
            <FlashDeals products={flashDealProducts} />

            {/* 7. PREMIUM BRANDS */}
            <section className={styles.brandsSection}>
              <h2>Trusted by Industry Giants</h2>
              <div className={styles.brandGrid}>
                {brands.map((brand, i) => (
                  <motion.div 
                    key={brand} 
                    className={styles.brandItem}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {brand}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 8. TESTIMONIALS */}
            <section className={styles.testimonials}>
              <div className={styles.sectionHeader}>
                <h2>Loved By <br/>Visionaries</h2>
              </div>
              <div className={styles.testGrid}>
                {[1,2,3].map((i) => (
                  <motion.div 
                    key={i} 
                    className={styles.testCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className={styles.testQuote}>"Antigravity completely transformed how I shop online. The AI recommendations are scary accurate, and the interface feels incredibly premium."</p>
                    <div className={styles.testAuthor}>
                      <div className={styles.testAvatar}></div>
                      <div className={styles.testAuthorInfo}>
                        <h4>Sarah Jenkins</h4>
                        <span>Tech Executive</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        ) : (
          <div className={styles.categoryContainer}>
            <div className={styles.sidebar}>
              {activeCategory === 'Grocery' && (
                <div className={styles.filterGroup}>
                  <h3>Subcategories</h3>
                  <div className={styles.filterList}>
                    {['All', 'Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Snacks', 'Beverages', 'Frozen Foods', 'Healthy Foods', 'Organic Products', 'Instant Foods'].map(sub => (
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

              {activeCategory === 'Mobile' && (
                <div className={styles.filterGroup}>
                  <h3>Brands</h3>
                  <div className={styles.filterList}>
                    {['All', 'Apple', 'Samsung', 'OnePlus', 'Google', 'Nothing', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'Motorola', 'iQOO'].map(brand => (
                      <button 
                        key={brand}
                        className={`${styles.filterItem} ${activeSubCategory === brand ? styles.activeFilter : ''}`}
                        onClick={() => setActiveSubCategory(brand)}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
            <div className={styles.mainContent}>
              <ProductGrid 
                products={products.filter(p => {
                  if (p.category.toLowerCase() !== activeCategory.toLowerCase()) return false;
                  if (activeCategory === 'Grocery' && activeSubCategory !== 'All' && p.subCategory !== activeSubCategory) return false;
                  if (activeCategory === 'Mobile' && activeSubCategory !== 'All' && p.brand !== activeSubCategory) return false;
                  return true;
                })} 
                category={activeSubCategory === 'All' ? activeCategory : activeSubCategory} 
              />

            </div>
          </div>
        )}
      </div>

      <AIAssistant />
    </main>
  );
}
