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
import { ArrowRight, Sparkles, Zap, BrainCircuit, Headphones, Smartphone, ShoppingBag, Watch, Mic, Heart, Search, User, Camera, Share2 } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Home');
  const [activeSubCategory, setActiveSubCategory] = useState('Home');

  React.useEffect(() => {
    if (activeCategory === 'Home') setActiveSubCategory('Home');
    else setActiveSubCategory('All');
  }, [activeCategory]);

  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const trendingProducts = products.filter(p => p.isTrending).slice(0, 5);
  const aiPicks = products.filter(p => p.isBestSeller).slice(0, 5);
  const flashDealProducts = products.filter(p => p.isFlashDeal).slice(0, 5);

  // Category-specific content configuration
  const categoryConfigs: Record<string, any> = {
    Home: {
      title: ["START YOUR", "JOURNEY"],
      subtitle: "the ultimate online destination for all your footwear needs with the latest styles and trends!",
      heroImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
      pills: ['Home', 'Women', 'Men', 'Sale', 'Others'],
      banner: ["ALWAYS", "UNIQUE", "WITH THE", "BEST"],
      newArrival: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
      footerCats: ['Running shoes', 'Slippers', 'Platform sneakers', 'Sandals'],
      footerImg: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop'
    },
    Grocery: {
      isGrocerySpecific: true,
      heroTitle: "Freshly delivered to your door",
      heroSub: "Get organic produce and sustainably sourced groceries delivered at up to 45% off.",
      promoCards: [
        { title: "Save $29", sub: "Enjoy discount on all types of grocery items", color: "#fdf2f2", icon: "🎁" },
        { title: "Discount 30%", sub: "Enjoy discount on all types of grocery items", color: "#fff7ed", icon: "🏷️" },
        { title: "Up to 50%", sub: "Enjoy discount on all types of grocery items", color: "#f0f9ff", icon: "🚀" },
        { title: "Free SHIP", sub: "Enjoy discount on all types of grocery items", color: "#faf5ff", icon: "🚚" }
      ],
      miniCats: [
        { name: "Vegetable", sub: "Local market", img: "🥦" },
        { name: "Snacks & Breads", sub: "In store delivery", img: "🥖" },
        { name: "Fruits", sub: "Chemical free", img: "🍊" },
        { name: "Chicken legs", sub: "Frozen Meat", img: "🍗" },
        { name: "Milk & Dairy", sub: "Process food", img: "🥛" }
      ],
      pills: ['All', 'Vegetables', 'Snacks', 'Fruits', 'Meat', 'Dairy']
    },
    Mobile: {
      title: ["FUTURE AT", "HAND"],
      subtitle: "Experience the next generation of smartphones with cutting-edge technology.",
      heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
      pills: ['All', 'iPhone', 'Samsung', 'OnePlus', 'Accessories'],
      banner: ["SMARTER", "DEVICES", "WITH THE", "TECH"],
      newArrival: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
      footerCats: ['Premium Phones', 'Tablets', 'Wearables', 'Laptops'],
      footerImg: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop'
    }
  };

  const currentConfig = categoryConfigs[activeCategory] || categoryConfigs.Home;

  return (
    <main className={styles.pageWrapper}>
      <Navbar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <div className={styles.mainFloatingContainer}>
        {activeCategory === 'Grocery' ? (
          <div className={styles.groceryContent}>
            {/* Grocery Hero */}
            <section className={styles.groceryHero}>
              <div className={styles.heroLeft}>
                <h1>{currentConfig.heroTitle}</h1>
                <p>{currentConfig.heroSub}</p>
                <button className={styles.heroBtn}>Shop now</button>
              </div>
              <div className={styles.heroRight}>
                <div className={styles.groceryBag}>🛍️</div>
              </div>
            </section>

            {/* Promo Grid */}
            <section className={styles.promoGrid}>
              {currentConfig.promoCards.map((promo: any, idx: number) => (
                <div key={idx} className={styles.promoCard} style={{ backgroundColor: promo.color }}>
                  <div className={styles.promoIcon}>{promo.icon}</div>
                  <h4>{promo.title}</h4>
                  <p>{promo.sub}</p>
                </div>
              ))}
            </section>

            {/* Mini Categories */}
            <section className={styles.miniCatSection}>
              {currentConfig.miniCats.map((cat: any, idx: number) => (
                <div key={idx} className={styles.miniCatCard}>
                  <div className={styles.miniCatInfo}>
                    <h5>{cat.name}</h5>
                    <span>{cat.sub}</span>
                  </div>
                  <div className={styles.miniCatImg}>{cat.img}</div>
                </div>
              ))}
              <div className={styles.seeAllMini}>
                <ArrowRight size={20} />
                <span>See all</span>
              </div>
            </section>

            {/* Dynamic Product Grid */}
            <section className={styles.groceryProducts}>
              <div className={styles.sectionHeader}>
                <h2>You might need</h2>
                <button className={styles.seeMore}>See more &rarr;</button>
              </div>
              <div className={styles.productsGrid}>
                {products.filter(p => p.category === 'Grocery').slice(0, 10).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Stay Home Banner */}
            <section className={styles.stayHomeBanner}>
              <div className={styles.bannerContent}>
                <h2>Stay Home and Get All <br /> Your Essentials From <br /> Our Market!</h2>
                <p>Download the app from app store or google play</p>
                <div className={styles.appBtns}>
                  <button className={styles.appBtn}>Google Play</button>
                  <button className={styles.appBtn}>App Store</button>
                </div>
              </div>
              <div className={styles.bannerVisual}>
                 <div className={styles.deliveryPerson}>🚚</div>
              </div>
            </section>
          </div>
        ) : (
          <>
            {/* 1. REFINED HERO SECTION */}
            <section className={styles.heroSection}>
              <div className={styles.heroGrid}>
                {/* Left Content */}
                <div className={styles.heroMainCard}>
                  <h1 className={styles.editorialTitle}>
                    {currentConfig.title[0]} <br />
                    <span className={styles.pillTitle}>{currentConfig.title[1]}</span>
                  </h1>
                  <p className={styles.editorialSubtitle}>
                    {currentConfig.subtitle}
                  </p>
                  <div className={styles.socialMinimal}>
                    <div className={styles.socialItem}><Camera size={14} /> <span>Gallery</span></div>
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
                    src={currentConfig.heroImage} 
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
                <h2>{currentConfig.banner[0]} <span className={styles.hollowText}>{currentConfig.banner[1]}</span></h2>
                <h3>{currentConfig.banner[2]} <span className={styles.hollowText}>{currentConfig.banner[3]}</span> MATERIALS</h3>
              </div>
              <button className={styles.viewAllBtn}>View all</button>
            </section>

            {/* 3. NEW COLLECTION & BEST SELLERS BENTO */}
            <div className={styles.collectionGrid}>
              {/* New Collection Vertical */}
              <div className={styles.verticalCollection}>
                <div className={styles.verticalHeader}>
                  <h3>NEW ARRIVALS</h3>
                </div>
                <div className={styles.verticalImage}>
                  <SafeImage 
                    src={currentConfig.newArrival} 
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
                  {products.filter(p => {
                    const matchesCategory = activeCategory === 'Home' ? p.isBestSeller : p.category.toLowerCase() === activeCategory.toLowerCase();
                    const matchesSub = activeSubCategory === 'All' || activeSubCategory === 'Home' ? true : (p.subCategory === activeSubCategory || p.brand === activeSubCategory);
                    return matchesCategory && matchesSub;
                  }).slice(0, 4).map(product => (
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
                {currentConfig.footerCats.map((cat: string) => (
                  <div key={cat} className={styles.catBoxMini}>
                    <span className={styles.catNameMini}>{cat}</span>
                    <div className={styles.catImgMini}>
                      <SafeImage 
                        src={currentConfig.footerImg} 
                        alt={cat} 
                        fill 
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      <AIAssistant />
    </main>
  );
}
