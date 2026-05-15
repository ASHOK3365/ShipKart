'use client';
import React, { useState } from 'react';
import { 
  Home, 
  LayoutGrid, 
  Tag, 
  Sparkles, 
  ShoppingBag, 
  Heart, 
  User, 
  HelpCircle, 
  Plus, 
  Trash2, 
  ChevronLeft, 
  Minus, 
  Smartphone, 
  UtensilsCrossed, 
  Shirt, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Grid, 
  List, 
  Headphones, 
  Star, 
  Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './electronics.module.css';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Tag, label: 'Deals', href: '/deals' },
  { icon: Sparkles, label: 'New Arrivals', href: '/new-arrivals' },
];

const categoryItems = [
  { icon: UtensilsCrossed, label: 'Grocery', href: '/categories/grocery' },
  { icon: Smartphone, label: 'Mobiles', href: '/categories/mobiles' },
  { icon: Laptop, label: 'Electronics', href: '/categories/electronics', active: true },
  { icon: Shirt, label: 'Fashion', href: '/categories/fashion' },
  { icon: Sparkles, label: 'Beauty', href: '/categories/beauty' },
  { icon: LayoutGrid, label: 'Appliances', href: '/categories/appliances' },
];

const categoryPills = [
  'All', 'Headphones', 'Smartwatches', 'Cameras', 'Speakers', 'Laptops', 'Accessories'
];

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

const electronicProducts = [
  { id: 'e1', name: 'Apple AirPods Pro 2', brand: 'Apple', price: 24900, originalPrice: 31900, discount: '-20%', rating: 4.8, reviews: '12.4K', image: 'https://images.unsplash.com/photo-1588423770574-91993ca072b7?auto=format&fit=crop&w=400&q=80', description: 'Apple AirPods Pro 2 with Active Noise Cancellation.', category: 'Headphones' },
  { id: 'e2', name: 'Sony WH-1000XM5', brand: 'Sony', price: 24990, originalPrice: 29490, discount: '-15%', rating: 4.7, reviews: '8.9K', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=400&q=80', description: 'Sony WH-1000XM5 wireless noise cancelling headphones.', category: 'Headphones' },
  { id: 'e3', name: 'JBL Charge 5', brand: 'JBL', price: 13499, originalPrice: 14999, discount: '-10%', rating: 4.6, reviews: '3.2K', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80', description: 'JBL Charge 5 portable waterproof speaker.', category: 'Speakers' },
  { id: 'e4', name: 'Canon EOS R50', brand: 'Canon', price: 68990, originalPrice: 91990, discount: '-25%', rating: 4.8, reviews: '1.1K', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80', description: 'Canon EOS R50 mirrorless camera.', category: 'Cameras' },
  { id: 'e5', name: 'MacBook Air M2', brand: 'Apple', price: 99990, originalPrice: 121900, discount: '-18%', rating: 4.9, reviews: '2.3K', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80', description: 'Apple MacBook Air M2 with Liquid Retina display.', category: 'Laptops' },
  { id: 'e6', name: 'Apple Watch Series 9', brand: 'Apple', price: 41900, originalPrice: 47900, discount: '-12%', rating: 4.7, reviews: '5.6K', image: 'https://images.unsplash.com/photo-1546868871-70ca80441762?auto=format&fit=crop&w=400&q=80', description: 'Apple Watch Series 9 with powerful S9 chip.', category: 'Smartwatches' },
];

const ElectronicsPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { items, addItem, removeItem, updateQuantity, getSubtotal } = useCartStore();

  return (
    <div className={styles.electronicsLayout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoBox}>
             <ShoppingBag size={24} color="#6366F1" fill="#6366F1" fillOpacity={0.2} />
          </div>
          <h2>Shipkart</h2>
        </Link>

        <div className={styles.sideNav}>
          <div className={styles.navSection}>
            <span className={styles.sectionTitle}>MENU</span>
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className={styles.navItem}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className={styles.navSection}>
            <span className={styles.sectionTitle}>CATEGORIES</span>
            {categoryItems.map((item) => (
              <Link key={item.label} href={item.href} className={`${styles.navItem} ${item.active ? styles.active : ''}`}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          
          <div className={styles.navSection}>
            <span className={styles.sectionTitle}>ACCOUNT</span>
            <Link href="/account" className={styles.navItem}>
              <User size={20} />
              <span>Profile</span>
            </Link>
          </div>
        </div>

        <div className={styles.electronicsSaleCard}>
          <h3>Electronics Sale</h3>
          <p>Up to 60% Off</p>
          <button className={styles.shopNowBtn}>Shop Now <ArrowRight size={14} /></button>
          <div className={styles.promoImg}>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80" alt="Headphones" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}><Headphones size={32} color="#6366F1" /></div>
            <div>
              <h1>Electronics</h1>
              <p>Discover the latest tech for your lifestyle.</p>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.viewBtn}><Grid size={18} /></button>
            <button className={styles.viewBtn}><List size={18} /></button>
          </div>
        </header>

        <div className={styles.categoryBar}>
          {categoryPills.map((cat) => (
            <button 
              key={cat} 
              className={`${styles.catPill} ${activeTab === cat ? styles.catActive : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.productGrid}>
          {electronicProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className={styles.productCard}
              whileHover={{ y: -5 }}
            >
              <div className={styles.discountBadge}>{product.discount}</div>
              <button className={styles.wishlistBtn}><Heart size={18} /></button>
              <div className={styles.productImg}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>{product.brand}</span>
                <h3>{product.name}</h3>
                <div className={styles.ratingRow}>
                  <Star size={14} fill="#FBBF24" color="#FBBF24" />
                  <span>{product.rating} ({product.reviews})</span>
                </div>
                <div className={styles.priceRow}>
                  <div>
                    <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                    <span className={styles.oldPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <button className={styles.addBtn} onClick={() => addItem(product as any)}><Plus size={18} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.showMore}>
          <span>Show More Products</span>
          <ChevronDown size={18} />
        </div>
      </main>

      {/* RIGHT SIDEBAR (CART) */}
      <aside className={styles.rightSidebar}>
        <div className={styles.cartHeader}>
          <Link href="/" className={styles.backBtn}><ChevronLeft size={20} /></Link>
          <h2>CART</h2>
          <button className={styles.trashBtn} onClick={() => useCartStore.getState().clearCart()}><Trash2 size={20} /></button>
        </div>

        <div className={styles.cartList}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImg}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.itemInfo}>
                <h4>{item.name}</h4>
                <div className={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</div>
              </div>
              <div className={styles.itemActions}>
                <div className={styles.qtyBox}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <div className={styles.summaryRow}>
            <span>Delivered To:</span>
            <strong>Home</strong>
          </div>
          <div className={styles.summaryRow}>
            <span>Delivery Charges:</span>
            <strong>₹49</strong>
          </div>
          <div className={styles.totalRow}>
            <span>TOTAL</span>
            <strong>₹{(getSubtotal() + 49).toLocaleString('en-IN')}</strong>
          </div>
          <Link href="/checkout">
            <button className={styles.payBtn}>PROCEED TO PAY</button>
          </Link>
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.badgeItem}>
            <div className={styles.badgeIcon}><ShieldCheck size={14} /></div>
            <span>100% Original</span>
          </div>
          <div className={styles.badgeItem}>
            <div className={styles.badgeIcon}><RotateCcw size={14} /></div>
            <span>Easy Returns</span>
          </div>
          <div className={styles.badgeItem}>
            <div className={styles.badgeIcon}><Truck size={14} /></div>
            <span>Free Delivery</span>
          </div>
          <div className={styles.badgeItem}>
            <div className={styles.badgeIcon}><ShieldCheck size={14} /></div>
            <span>Secure Payment</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ElectronicsPage;
