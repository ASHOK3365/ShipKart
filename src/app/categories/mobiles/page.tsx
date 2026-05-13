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
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './mobiles.module.css';

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
  'All', 'Smartphones', 'iPhone', 'Samsung', 'OnePlus', 'Google', 'Accessories'
];

const mobileProducts = [
  { id: 1, name: 'Apple iPhone 15', specs: '128GB, Blue', price: 79900, originalPrice: 89900, discount: '-11%', image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Samsung Galaxy S24', specs: '256GB, Marble Gray', price: 74999, originalPrice: 84999, discount: '-12%', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'OnePlus 12R', specs: '256GB, Iron Gray', price: 39999, originalPrice: 45999, discount: '-13%', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Google Pixel 8', specs: '128GB, Hazel', price: 52999, originalPrice: 59999, discount: '-12%', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Apple iPhone 14', specs: '128GB, Midnight', price: 59900, originalPrice: 69900, discount: '-14%', image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Samsung Galaxy S23 FE', specs: '128GB, Purple', price: 39999, originalPrice: 44999, discount: '-11%', image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=400&q=80' },
];

const cartItems = [
  { id: 1, name: 'iPhone 15', specs: '128GB, Blue', price: 79900, quantity: 1, image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=100&q=80', color: '#8B5CF6' },
  { id: 2, name: 'Galaxy S24', specs: '256GB, Marble Gray', price: 74999, quantity: 1, image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=100&q=80', color: '#3B82F6' },
  { id: 3, name: 'OnePlus 12R', specs: '256GB, Iron Gray', price: 39999, quantity: 1, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80', color: '#10B981' },
];

const MobilesPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className={styles.mobilesLayout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <div className={styles.logo}>
          <div className={styles.logoBox}>
             <ShoppingBag size={24} color="#8B5CF6" fill="#8B5CF6" fillOpacity={0.2} />
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

        <div className={styles.megaSaleCard}>
          <h3>Mega Sale</h3>
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
            <div className={styles.headerIcon}><Smartphone size={32} color="#8B5CF6" /></div>
            <div>
              <h1>Mobiles</h1>
              <p>Smartphones that keep you ahead.</p>
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
          {mobileProducts.map((product) => (
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
                <span>{product.specs}</span>
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
          <span>Show More</span>
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
                <span>{item.specs}</span>
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
            <strong>₹49</strong>
          </div>
          <div className={styles.totalRow}>
            <span>TOTAL</span>
            <strong>₹1,94,947</strong>
          </div>
          <button className={styles.payBtn}>PROCEED TO PAY</button>
        </div>

        <div className={styles.trustBadges}>
          {/* Reuse the badges from grocery or stick to image style */}
        </div>
      </aside>
    </div>
  );
};

export default MobilesPage;
