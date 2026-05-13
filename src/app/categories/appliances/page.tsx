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
  Minus,
  Trash2,
  ChevronLeft,
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

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: LayoutGrid, label: 'Categories', active: true },
  { icon: Tag, label: 'Deals' },
  { icon: Sparkles, label: 'New Arrivals' },
  { icon: ShoppingBag, label: 'Brands' },
  { icon: Heart, label: 'Wishlist' },
  { icon: ShoppingBag, label: 'Orders' },
  { icon: User, label: 'Profile' },
  { icon: HelpCircle, label: 'Support' },
];

const categoryPills = [
  'All', 'Refrigerators', 'Washing Machines', 'Air Conditioners', 'Microwaves', 'Small Appliances'
];

const applianceProducts = [
  { id: 1, name: 'Samsung 658L Side by Side Refrigerator', brand: 'Samsung', price: 74990, originalPrice: 91990, discount: '-18%', rating: 4.6, reviews: '1.2K', image: 'https://images.unsplash.com/photo-1571175484658-51214a586174?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'LG 8kg Front Load Washing Machine', brand: 'LG', price: 29990, originalPrice: 37990, discount: '-20%', rating: 4.7, reviews: '980', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Daikin 1.5 Ton 3 Star Inverter AC', brand: 'Daikin', price: 36990, originalPrice: 43500, discount: '-15%', rating: 4.5, reviews: '1.1K', image: 'https://images.unsplash.com/photo-1585336139118-2847e06822fc?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Samsung 28L Convection Microwave Oven', brand: 'Samsung', price: 13990, originalPrice: 15990, discount: '-12%', rating: 4.6, reviews: '856', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Kent Grand+ UV Water Purifier', brand: 'Kent', price: 15490, originalPrice: 17200, discount: '-10%', rating: 4.6, reviews: '732', image: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Philips 4.2L Air Fryer Essential', brand: 'Philips', price: 6790, originalPrice: 8690, discount: '-22%', rating: 4.7, reviews: '1.3K', image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80' },
];

const cartItems = [
  { id: 1, name: 'Samsung 658L Refrigerator', price: 74990, quantity: 1, image: 'https://images.unsplash.com/photo-1571175484658-51214a586174?auto=format&fit=crop&w=100&q=80', color: '#3B82F6' },
  { id: 2, name: 'LG 8kg Front Load Washing Machine', price: 29990, quantity: 1, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=100&q=80', color: '#FBBF24' },
  { id: 3, name: 'Daikin 1.5 Ton 3 Star Inverter AC', price: 36990, quantity: 1, image: 'https://images.unsplash.com/photo-1585336139118-2847e06822fc?auto=format&fit=crop&w=100&q=80', color: '#10B981' },
  { id: 4, name: 'Philips 4.2L Air Fryer Essential', price: 6790, quantity: 1, image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=100&q=80', color: '#EF4444' },
];

const AppliancesPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className={styles.appliancesLayout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <div className={styles.logo}>
          <div className={styles.logoBox}>
             <ShoppingBag size={24} color="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
          </div>
          <h2>NovaMart</h2>
        </div>

        <nav className={styles.sideNav}>
          {navItems.map((item) => (
            <div key={item.label} className={`${styles.navItem} ${item.active ? styles.active : ''}`}>
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

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
                  <button className={styles.addBtn}><Plus size={18} /></button>
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
          <button className={styles.backBtn}><ChevronLeft size={20} /></button>
          <h2>CART</h2>
          <button className={styles.trashBtn}><Trash2 size={20} /></button>
        </div>

        <div className={styles.cartList}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImg}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.itemInfo}>
                <h4>{item.name}</h4>
                <div className={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</div>
                <div className={styles.itemQty}>1 x</div>
              </div>
              <div className={styles.itemActions}>
                <div className={styles.dot} style={{ background: item.color }} />
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
            <strong>₹1,48,769</strong>
          </div>
          <button className={styles.payBtn}>PROCEED TO PAY</button>
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
