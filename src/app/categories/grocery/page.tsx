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
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './grocery.module.css';

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
  'All', 'Fruits & Vegetables', 'Dairy & Eggs', 'Snacks & Branded Foods', 'Beverages', 'Staples'
];

const groceryProducts = [
  { id: 1, name: 'Kashmiri Apples', weight: '1 kg', price: 149, originalPrice: 182, discount: '-18%', image: 'https://images.unsplash.com/photo-1560806887-1e4cd07c405d?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Amul Taaza Milk', weight: '1 L', price: 59, originalPrice: 67, discount: '-12%', image: 'https://images.unsplash.com/photo-1550583724-125581f77833?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Aashirvaad Atta', weight: '5 kg', price: 249, originalPrice: 312, discount: '-20%', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: "Lay's Chile Limón", weight: '52 g', price: 25, originalPrice: 29, discount: '-15%', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Farm Eggs (White)', weight: '12 pcs', price: 64, originalPrice: 71, discount: '-10%', image: 'https://images.unsplash.com/photo-1582722653846-d297500777bc?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Tata Tea Premium', weight: '1 kg', price: 485, originalPrice: 585, discount: '-17%', image: 'https://images.unsplash.com/photo-1544787210-2211d24731b4?auto=format&fit=crop&w=400&q=80' },
];

const cartItems = [
  { id: 1, name: 'Kashmiri Apples', weight: '1 kg', price: 149, quantity: 1, image: 'https://images.unsplash.com/photo-1560806887-1e4cd07c405d?auto=format&fit=crop&w=100&q=80', color: '#4CAF50' },
  { id: 2, name: 'Amul Taaza Milk', weight: '1 L', price: 59, quantity: 1, image: 'https://images.unsplash.com/photo-1550583724-125581f77833?auto=format&fit=crop&w=100&q=80', color: '#2196F3' },
  { id: 3, name: 'Aashirvaad Atta', weight: '5 kg', price: 249, quantity: 1, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=100&q=80', color: '#FFC107' },
  { id: 4, name: "Lay's Chile Limón", weight: '52 g', price: 25, quantity: 1, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=100&q=80', color: '#E91E63' },
];

const GroceryPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className={styles.groceryLayout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <div className={styles.logo}>
          <div className={styles.logoBox}>
             <ShoppingBag size={24} color="#4CAF50" fill="#4CAF50" fillOpacity={0.2} />
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

        <div className={styles.freshSavingsCard}>
          <h3>Fresh Savings</h3>
          <p>Up to 50% Off</p>
          <button className={styles.shopNowBtn}>Shop Now <ArrowRight size={14} /></button>
          <div className={styles.promoImg}>
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80" alt="Grocery Bag" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}>🥦</div>
            <div>
              <h1>Grocery</h1>
              <p>Fresh essentials delivered to your home.</p>
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
          {groceryProducts.map((product) => (
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
                <span>{product.weight}</span>
                <div className={styles.priceRow}>
                  <div>
                    <span className={styles.price}>₹{product.price}</span>
                    <span className={styles.oldPrice}>₹{product.originalPrice}</span>
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
                <span>{item.weight}</span>
                <div className={styles.itemPrice}>₹{item.price}</div>
              </div>
              <div className={styles.itemActions}>
                <div className={styles.dot} style={{ background: item.color }} />
                <div className={styles.qtyBox}>
                  <button><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button><Plus size={14} /></button>
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
            <strong>₹531</strong>
          </div>
          <button className={styles.payBtn}>PROCEED TO PAY</button>
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

export default GroceryPage;
