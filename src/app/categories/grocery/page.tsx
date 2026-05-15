'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  Home, 
  LayoutGrid, 
  Tag, 
  Sparkles, 
  ShoppingBag, 
  Heart, 
  User, 
  Trash2, 
  ChevronLeft, 
  Plus, 
  Minus, 
  HelpCircle, 
  Laptop, 
  Smartphone, 
  Shirt, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Grid, 
  List, 
  UtensilsCrossed
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import styles from './grocery.module.css';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Tag, label: 'Deals', href: '/deals' },
  { icon: Sparkles, label: 'New Arrivals', href: '/new-arrivals' },
];

const categoryItems = [
  { icon: UtensilsCrossed, label: 'Grocery', href: '/categories/grocery', active: true },
  { icon: Smartphone, label: 'Mobiles', href: '/categories/mobiles' },
  { icon: Laptop, label: 'Electronics', href: '/categories/electronics' },
  { icon: Shirt, label: 'Fashion', href: '/categories/fashion' },
  { icon: Sparkles, label: 'Beauty', href: '/categories/beauty' },
  { icon: LayoutGrid, label: 'Appliances', href: '/categories/appliances' },
];

const categoryPills = [
  'All', 'Fruits & Vegetables', 'Dairy & Eggs', 'Snacks & Branded Foods', 'Beverages', 'Staples'
];

const groceryProducts = [
  { id: 'g1', name: 'Fresh Organic Bananas', price: 60, originalPrice: 80, discount: '-25%', rating: 4.8, reviews: '1.2K', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=400&q=80', description: 'Fresh organic bananas from the farm.', category: 'Fruits', brand: 'FarmFresh', weight: '1 kg' },
  { id: 'g2', name: 'Premium Avocado', price: 120, originalPrice: 150, discount: '-20%', rating: 4.7, reviews: '980', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80', description: 'Creamy premium Hass avocados.', category: 'Fruits', brand: 'GreenHarvest', weight: '500 g' },
  { id: 'g3', name: 'Fresh Milk 1L', price: 65, originalPrice: 75, discount: '-12%', rating: 4.6, reviews: '2.5K', image: 'https://images.unsplash.com/photo-1563636619-e910ef2a844b?auto=format&fit=crop&w=400&q=80', description: 'Fresh farm whole milk.', category: 'Dairy', brand: 'Amul', weight: '1 L' },
  { id: 'g4', name: 'Organic Almonds', price: 450, originalPrice: 550, discount: '-18%', rating: 4.9, reviews: '1.1K', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=400&q=80', description: 'Premium California organic almonds.', category: 'Snacks', brand: 'Nutty', weight: '250 g' },
  { id: 'g5', name: 'Greek Yogurt', price: 85, originalPrice: 95, discount: '-10%', rating: 4.7, reviews: '1.8K', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80', description: 'Thick and creamy greek yogurt.', category: 'Dairy', brand: 'Epigamia', weight: '400 g' },
  { id: 'g6', name: 'Whole Wheat Bread', price: 45, originalPrice: 55, discount: '-15%', rating: 4.5, reviews: '3.2K', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', description: 'Freshly baked whole wheat bread.', category: 'Bakery', brand: 'Modern', weight: '400 g' },
];

const GroceryPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { items, addItem, removeItem, updateQuantity, getSubtotal } = useCartStore();

  return (
    <div className={styles.groceryLayout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoBox}>
             <ShoppingBag size={24} color="#10B981" fill="#10B981" fillOpacity={0.2} />
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

export default GroceryPage;
