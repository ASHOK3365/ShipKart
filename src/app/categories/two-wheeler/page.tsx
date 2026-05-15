'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, Tag, Sparkles, User, ShoppingBag, 
  ChevronLeft, Trash2, Heart, Plus, Minus,
  ChevronDown, ArrowRight, Grid, List, Bike, Gauge,
  UtensilsCrossed, Smartphone, Laptop, Shirt, LayoutGrid
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import { allTwoWheelerProducts } from '@/data/twoWheelerData';
import styles from './two-wheeler.module.css';

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
  { icon: LayoutGrid, label: 'Appliances', href: '/categories/appliances' },
  { icon: Bike, label: 'Two Wheeler', href: '/categories/two-wheeler', active: true },
];

const categoryPills = [
  'All', 'Electric', 'Cruiser', 'Sports', 'Commuter', 'Scooter'
];

export default function TwoWheelerPage() {
  const [activeTab, setActiveTab] = useState('All');
  const { items, updateQuantity, getSubtotal } = useCartStore();

  const filteredProducts = activeTab === 'All' 
    ? allTwoWheelerProducts.slice(0, 12)
    : allTwoWheelerProducts.filter(p => p.type === activeTab).slice(0, 12);

  return (
    <div className={styles.layout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoBox}>
             <Bike size={24} color="#EF4444" fill="#EF4444" fillOpacity={0.2} />
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

        <div className={styles.promoCard}>
          <h3>Electric Revolution</h3>
          <p>Get up to ₹25,000 Subsidy</p>
          <button className={styles.shopNowBtn}>Explore EV <ArrowRight size={14} /></button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}><Bike size={32} color="#EF4444" /></div>
            <div>
              <h1>Two Wheelers</h1>
              <p>Find your perfect ride. Book online, ride anywhere.</p>
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
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className={styles.productCard}
              whileHover={{ y: -5 }}
            >
              {product.discount > 0 && <div className={styles.discountBadge}>-{product.discount}%</div>}
              <button className={styles.wishlistBtn}><Heart size={18} /></button>
              
              <Link href={`/product/${product.id}`} className={styles.imageLink}>
                <div className={styles.productImg}>
                  <img src={product.image} alt={product.name} />
                </div>
              </Link>

              <div className={styles.productInfo}>
                <div className={styles.brandBadge}>{product.brand}</div>
                <Link href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <h3>{product.name}</h3>
                </Link>
                
                <div className={styles.specsRow}>
                  <div className={styles.spec}>
                    <Gauge size={14} />
                    <span>{product.topSpeed}</span>
                  </div>
                  <div className={styles.spec}>
                    <span>{product.mileage}</span>
                  </div>
                </div>

                <div className={styles.priceRow}>
                  <div>
                    <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice > product.price && (
                      <span className={styles.oldPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                  <Link href={`/product/${product.id}`}>
                    <button className={styles.addBtn}>Book Now</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.showMore}>
          <span>View All Models</span>
          <ChevronDown size={18} />
        </div>
      </main>

      {/* RIGHT SIDEBAR (CART/BOOKINGS) */}
      <aside className={styles.rightSidebar}>
        <div className={styles.cartHeader}>
          <Link href="/" className={styles.backBtn}><ChevronLeft size={20} /></Link>
          <h2>YOUR BOOKINGS</h2>
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
          {items.length === 0 && (
            <div className={styles.emptyCart}>No bookings yet</div>
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.cartSummary}>
            <div className={styles.totalRow}>
              <span>TOTAL</span>
              <strong>₹{(getSubtotal()).toLocaleString('en-IN')}</strong>
            </div>
            <Link href="/checkout">
              <button className={styles.payBtn}>PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
