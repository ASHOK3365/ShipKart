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
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './beauty.module.css';

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
  'All', 'Skincare', 'Makeup', 'Haircare', 'Fragrances', 'Bath & Body', 'Tools & Brushes'
];

const beautyProducts = [
  { id: 1, name: 'Advanced Night Repair', brand: 'Estée Lauder', price: 6720, originalPrice: 8400, discount: '-20%', rating: 4.8, reviews: '1.2K', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Moisture Surge 100H', brand: 'Clinique', price: 2975, originalPrice: 3500, discount: '-15%', rating: 4.7, reviews: '982', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Lakmé 9 to 5 CC Cream', brand: 'Lakmé', price: 386, originalPrice: 429, discount: '-10%', rating: 4.6, reviews: '1.5K', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Miss Dior Blooming Bouquet', brand: 'Dior', price: 8999, originalPrice: 11999, discount: '-25%', rating: 4.9, reviews: '876', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Studio Fix Fluid Foundation', brand: 'MAC', price: 2550, originalPrice: 3000, discount: '-15%', rating: 4.7, reviews: '2.1K', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Matte Revolution Lipstick', brand: 'Charlotte Tilbury', price: 3060, originalPrice: 3400, discount: '-10%', rating: 4.8, reviews: '1.1K', image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&w=400&q=80' },
];

const cartItems = [
  { id: 1, name: 'Advanced Night Repair', brand: 'Estée Lauder', price: 6720, quantity: 1, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=100&q=80', color: '#6366F1' },
  { id: 2, name: 'Moisture Surge 100H', brand: 'Clinique', price: 2975, quantity: 1, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=100&q=80', color: '#FBBF24' },
  { id: 3, name: 'Matte Revolution Lipstick', brand: 'Charlotte Tilbury', price: 3060, quantity: 1, image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&w=100&q=80', color: '#EF4444' },
];

const BeautyPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className={styles.beautyLayout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <div className={styles.logo}>
          <div className={styles.logoBox}>
             <ShoppingBag size={24} color="#A78BFA" fill="#A78BFA" fillOpacity={0.2} />
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

        <div className={styles.beautySaleCard}>
          <h3>Beauty Sale</h3>
          <p>Up to 60% Off</p>
          <button className={styles.shopNowBtn}>Shop Now <ArrowRight size={14} /></button>
          <div className={styles.promoImg}>
            <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=200&q=80" alt="Beauty Products" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}>🧴</div>
            <div>
              <h1>Beauty</h1>
              <p>Glow with the best. Premium beauty & personal care.</p>
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
          {beautyProducts.map((product) => (
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
                <p>{item.brand}</p>
                <div className={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</div>
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
            <strong>₹12,804</strong>
          </div>
          
          <div className={styles.savingsAlert}>
            <Info size={16} />
            <span>You will save ₹2,965 on this order</span>
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

export default BeautyPage;
