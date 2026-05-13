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
import { ArrowRight, Sparkles, Zap, BrainCircuit, Headphones, Smartphone, ShoppingBag, Watch, Mic } from 'lucide-react';

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

  const brands = ['APPLE', 'SAMSUNG', 'SONY', 'BOSE', 'NIKE', 'DYSON'];

  return (
    <main className={styles.main}>
      <div className={styles.ambientBackground}></div>
      <div className={styles.neuralOverlay}></div>
      <Navbar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <div className={styles.content}>
        {activeCategory === 'Home' ? (
          <div className={styles.homeContainer}>
            {/* 1. CINEMATIC BENTO HERO SECTION */}
            <section className={styles.hero}>
              <motion.div 
                className={styles.heroMain}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.heroBadge}>
                  <Sparkles size={14} className={styles.sparkleIcon} /> 
                  <span>AI-POWERED ECOSYSTEM</span>
                </div>
                <h1 className={styles.heroTitle}>
                  The Future of <br />
                  <span className={styles.gradientText}>Intelligent Commerce.</span>
                </h1>
                <p className={styles.heroDescription}>
                  Experience the next generation of shopping. Predictive, immersive, and elegantly designed for the modern era.
                </p>
                <div className={styles.heroActions}>
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--primary-glow)' }} 
                    whileTap={{ scale: 0.95 }} 
                    className={styles.primaryBtn}
                  >
                    Start Exploring <ArrowRight size={20} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }} 
                    whileTap={{ scale: 0.95 }} 
                    className={styles.secondaryBtn}
                  >
                    <BrainCircuit size={20} /> Antigravity AI
                  </motion.button>
                </div>
                
                <div className={styles.heroMainVisual}>
                   <div className={styles.orbGlow}></div>
                </div>
              </motion.div>

              <motion.div 
                className={styles.heroSide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.heroSideHeader}>
                  <Zap size={16} color="var(--cyan-accent)" />
                  <span>PREDICTIVE SYNC</span>
                </div>
                <div className={styles.heroSideVisual}>
                  <motion.div 
                    className={styles.floatingProduct}
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  >
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800" alt="Featured" className={styles.heroImage} />
                  </motion.div>
                </div>
                <div className={styles.heroSideFooter}>
                  <h4>Neural Interface G1</h4>
                  <p>98% Match for your style</p>
                </div>
              </motion.div>

              {/* BENTO CATEGORIES - MORE DYNAMIC */}
              <div className={styles.categoriesBento}>
                {categories.map((cat, i) => (
                  <motion.div 
                    key={cat.name}
                    className={`${styles.bentoCard} ${cat.colorClass}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                    onClick={() => setActiveCategory(cat.name)}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className={styles.bentoGlass}></div>
                    <div className={styles.bentoContent}>
                      <div className={styles.bentoHeader}>
                        <div className={styles.bentoIconWrapper}>{cat.icon}</div>
                        <span className={styles.bentoCount}>{cat.items}</span>
                      </div>
                      <h3>{cat.name}</h3>
                      <div className={styles.bentoFooter}>
                        <span>Explore Collection</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 2. AI COMMERCE BANNER - HOLOGRAPHIC */}
            <motion.section 
              className={styles.aiBanner}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.aiBannerGlass}></div>
              <div className={styles.aiBannerContent}>
                <div className={styles.aiStatus}>
                  <div className={styles.pulseDot}></div>
                  <span>ANTIGRAVITY BRAIN ACTIVE</span>
                </div>
                <h2>The Neural <br />Shopping OS</h2>
                <p>Voice search, hyper-personalized feeds, and real-time smart pricing. It's not just a store; it's an intelligent assistant that learns your taste.</p>
                <div className={styles.aiBannerActions}>
                  <button className={styles.aiPrimaryBtn}>
                    <Mic size={20} /> Try Voice Search
                  </button>
                  <button className={styles.aiSecondaryBtn}>
                    Deep Learning Insights
                  </button>
                </div>
              </div>
              <div className={styles.aiBannerVisual}>
                 <div className={styles.holoSphere}></div>
                 <div className={styles.aiFeatureCards}>
                    <div className={styles.miniCard}>
                      <BrainCircuit size={20} />
                      <span>Smart Pricing</span>
                    </div>
                    <div className={styles.miniCard}>
                      <Zap size={20} />
                      <span>Instant Sync</span>
                    </div>
                 </div>
              </div>
            </motion.section>

            {/* 3. FEATURED BENTO GRID - HIGH FIDELITY */}
            <section className={styles.productSection}>
              <div className={styles.sectionHeader}>
                <div>
                  <span className={styles.sectionLabel}>CURATED SELECTION</span>
                  <h2>Featured <br/>Flagships</h2>
                  <p>Hand-picked innovation from across our ecosystem.</p>
                </div>
                <div className={styles.viewMore}>
                   View All Collections <ArrowRight size={16} />
                </div>
              </div>
              
              <div className={styles.featuredProductsBento}>
                <motion.div 
                  className={styles.featuredCardLarge}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.featuredTag}>NEW ARRIVAL</span>
                    <h3 className={styles.featuredTitle}>Vision Pro <br/>Max G3</h3>
                    <p className={styles.featuredPrice}>₹3,49,999</p>
                  </div>
                  <div className={styles.largeProductVisual}>
                     <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800" alt="Vision Pro" />
                     <div className={styles.glowAura}></div>
                  </div>
                  <div className={styles.cardFooter}>
                    <button className={styles.buyBtn}>Pre-order Now</button>
                  </div>
                </motion.div>

                <motion.div 
                  className={styles.featuredCardSmall}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.smallCardContent}>
                    <span className={styles.featuredTag}>AUDIO</span>
                    <h4>Bose Ultra <br/>QuietComfort</h4>
                    <p className={styles.featuredPrice}>₹32,999</p>
                  </div>
                  <div className={styles.smallProductVisual}>
                     <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" alt="Bose" />
                  </div>
                </motion.div>

                <motion.div 
                  className={styles.featuredCardSmall}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.smallCardContent}>
                    <span className={styles.featuredTag}>SMART HOME</span>
                    <h4>Dyson Purifier <br/>Cool Gen 1</h4>
                    <p className={styles.featuredPrice}>₹45,900</p>
                  </div>
                  <div className={styles.smallProductVisual}>
                     <img src="https://images.unsplash.com/photo-1585333120167-081824d31451?q=80&w=400" alt="Dyson" />
                  </div>
                </motion.div>

                <motion.div 
                  className={styles.featuredCardMedium}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.mediumCardContent}>
                    <span className={styles.featuredTag}>MOBILE</span>
                    <h3>Samsung S24 Ultra</h3>
                    <p className={styles.featuredPrice}>₹1,29,999</p>
                    <button className={styles.inlineBtn}>Experience <ArrowRight size={14} /></button>
                  </div>
                  <div className={styles.mediumProductVisual}>
                    <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600" alt="S24 Ultra" />
                  </div>
                </motion.div>
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
          <div className={activeCategory === 'Appliances' ? styles.fullWidthContainer : styles.categoryContainer}>
            {activeCategory !== 'Appliances' && (
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

              {activeCategory === 'Appliances' && (
                <div className={styles.filterGroup}>
                  <h3>Categories</h3>
                  <div className={styles.filterList}>
                    {['All', 'Refrigerators', 'Washing Machines', 'Air Conditioners', 'Microwave Ovens', 'Air Fryers', 'Water Purifiers', 'Vacuum Cleaners', 'Coffee Machines', 'Smart Home Devices', 'Dishwashers', 'Air Purifiers'].map(sub => (
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

            </div>
            )}
            <div className={activeCategory === 'Appliances' ? styles.fullWidthContent : styles.mainContent}>
              {activeCategory === 'Appliances' ? (
                <ApplianceShowcase 
                  products={products.filter(p => {
                    if (p.category !== 'Appliances') return false;
                    if (activeSubCategory === 'All') return true;
                    return p.subCategory === activeSubCategory;
                  })}
                  activeSubCategory={activeSubCategory}
                  onSubCategoryChange={setActiveSubCategory}
                />
              ) : (
                <ProductGrid 
                  products={products.filter(p => {
                    if (p.category.toLowerCase() !== activeCategory.toLowerCase()) return false;
                    if (activeSubCategory === 'All') return true;
                    if (activeCategory === 'Grocery' && p.subCategory !== activeSubCategory) return false;
                    if (activeCategory === 'Mobile' && p.brand !== activeSubCategory) return false;
                    return true;
                  })} 
                  category={activeSubCategory === 'All' ? activeCategory : activeSubCategory} 
                />
              )}
            </div>
          </div>
        )}
      </div>

      <AIAssistant />
    </main>
  );
}
