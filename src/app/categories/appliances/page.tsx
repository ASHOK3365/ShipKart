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
  Plus, 
  Minus,
  Home,
  Tag,
  Sparkles,
  HelpCircle,
  ShoppingBag,
  Smartphone,
  UtensilsCrossed,
  Laptop,
  Shirt,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Truck,
  Grid,
  List,
  Star,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './appliances.module.css';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Tag, label: 'Deals', href: '/deals' },
  { icon: Sparkles, label: 'New Arrivals', href: '/new-arrivals' },
];

const categoryItems = [
  { icon: UtensilsCrossed, label: 'Grocery', href: '/categories/grocery' },
  { icon: Smartphone, label: 'Mobiles', href: '/categories/mobiles' },
  { icon: Laptop, label: 'Electronics', href: '/categories/electronics' },
  { icon: Shirt, label: 'Fashion', href: '/categories/fashion' },
  { icon: Sparkles, label: 'Beauty', href: '/categories/beauty' },
  { icon: LayoutGrid, label: 'Appliances', href: '/categories/appliances', active: true },
];

const categoryPills = [
  'All', 'Refrigerators', 'Washing Machines', 'Air Conditioners', 'Microwaves', 'Small Appliances'
];

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

const applianceProducts = [
  { id: 'a1', name: 'Samsung 658L Side by Side Refrigerator', brand: 'Samsung', price: 74990, originalPrice: 91990, discount: '-18%', rating: 4.6, reviews: '1.2K', image: 'https://images.unsplash.com/photo-1571175484658-51214a586174?auto=format&fit=crop&w=400&q=80', description: 'Samsung 658L Side by Side Refrigerator with AI Inverter.', category: 'Refrigerators' },
  { id: 'a2', name: 'LG 8kg Front Load Washing Machine', brand: 'LG', price: 29990, originalPrice: 37990, discount: '-20%', rating: 4.7, reviews: '980', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80', description: 'LG 8kg Front Load Washing Machine with Steam.', category: 'Washing Machines' },
  { id: 'a3', name: 'Daikin 1.5 Ton 3 Star Inverter AC', brand: 'Daikin', price: 36990, originalPrice: 43500, discount: '-15%', rating: 4.5, reviews: '1.1K', image: 'https://images.unsplash.com/photo-1585336139118-2847e06822fc?auto=format&fit=crop&w=400&q=80', description: 'Daikin 1.5 Ton Inverter AC with PM2.5 filter.', category: 'Air Conditioners' },
  { id: 'a4', name: 'Samsung 28L Convection Microwave Oven', brand: 'Samsung', price: 13990, originalPrice: 15990, discount: '-12%', rating: 4.6, reviews: '856', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=400&q=80', description: 'Samsung 28L Microwave Oven with Slim Fry.', category: 'Microwaves' },
  { id: 'a5', name: 'Kent Grand+ UV Water Purifier', brand: 'Kent', price: 15490, originalPrice: 17200, discount: '-10%', rating: 4.6, reviews: '732', image: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=400&q=80', description: 'Kent Grand+ RO+UV+UF water purifier.', category: 'Small Appliances' },
  { id: 'a6', name: 'Philips 4.2L Air Fryer Essential', brand: 'Philips', price: 6790, originalPrice: 8690, discount: '-22%', rating: 4.7, reviews: '1.3K', image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80', description: 'Philips 4.2L Air Fryer with Rapid Air Technology.', category: 'Small Appliances' },
];

const AppliancesPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { items, addItem, removeItem, updateQuantity, getSubtotal } = useCartStore();

  return (
    <div className={styles.appliancesLayout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoBox}>
             <ShoppingBag size={24} color="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
          </div>
          <h2>NovaMart</h2>
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

        <div className={styles.appliancesSaleCard}>
          <h3>Appliances For Better Living</h3>
          <p>Up to 60% Off</p>
          <button className={styles.shopNowBtn}>Shop Now <ArrowRight size={14} /></button>
          <div className={styles.promoImg}>
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80" alt="Washing Machine" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}><Zap size={32} color="#3B82F6" /></div>
            <div>
              <h1>Appliances</h1>
              <p>Upgrade your home with smart & efficient appliances.</p>
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
          {applianceProducts.map((product) => (
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
            <strong>₹99</strong>
          </div>
          <div className={styles.totalRow}>
            <span>TOTAL</span>
            <strong>₹{(getSubtotal() + 99).toLocaleString('en-IN')}</strong>
          </div>
          <Link href="/checkout">
            <button className={styles.payBtn}>PROCEED TO PAY</button>
          </Link>
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.badgeItem}>
            <div className={styles.badgeIcon}><ShieldCheck size={14} /></div>
            <span>100% Original Products</span>
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

export default AppliancesPage;
