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
  Trash2, 
  ChevronLeft, 
  Plus, 
  Minus, 
  HelpCircle, 
  Smartphone, 
  UtensilsCrossed, 
  Laptop, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Grid, 
  List, 
  Star, 
  Shirt
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './fashion.module.css';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Tag, label: 'Deals', href: '/deals' },
  { icon: Sparkles, label: 'New Arrivals', href: '/new-arrivals' },
];

const categoryItems = [
  { icon: UtensilsCrossed, label: 'Grocery', href: '/categories/grocery' },
  { icon: Smartphone, label: 'Mobiles', href: '/categories/mobiles' },
  { icon: Laptop, label: 'Electronics', href: '/categories/electronics' },
  { icon: Shirt, label: 'Fashion', href: '/categories/fashion', active: true },
  { icon: Sparkles, label: 'Beauty', href: '/categories/beauty' },
  { icon: LayoutGrid, label: 'Appliances', href: '/categories/appliances' },
];

const categoryPills = [
  'All', 'Men', 'Women', 'Kids', 'Topwear', 'Bottomwear', 'Winterwear', 'Accessories'
];

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

const clothingProducts = [
  { id: 'f1', name: 'Hooded Sweatshirt', category: 'Men', price: 999, originalPrice: 1249, discount: '-20%', rating: 4.6, reviews: '1.2K', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80', description: 'Comfortable cotton hooded sweatshirt.', brand: 'NovaStyle' },
  { id: 'f2', name: 'Denim Jacket', category: 'Men', price: 1699, originalPrice: 1999, discount: '-15%', rating: 4.7, reviews: '980', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=400&q=80', description: 'Classic rugged denim jacket.', brand: 'NovaStyle' },
  { id: 'f3', name: 'Floral Dress', category: 'Women', price: 1499, originalPrice: 1999, discount: '-25%', rating: 4.5, reviews: '1.1K', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&q=80', description: 'Elegant summer floral dress.', brand: 'NovaStyle' },
  { id: 'f4', name: 'Polo T-Shirt', category: 'Men', price: 599, originalPrice: 669, discount: '-10%', rating: 4.4, reviews: '856', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=400&q=80', description: 'Classic fit polo t-shirt.', brand: 'NovaStyle' },
  { id: 'f5', name: 'Cargo Pants', category: 'Men', price: 1199, originalPrice: 1499, discount: '-20%', rating: 4.6, reviews: '1.3K', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80', description: 'Stylish and functional cargo pants.', brand: 'NovaStyle' },
  { id: 'f6', name: 'Oversized Hoodie', category: 'Women', price: 1099, originalPrice: 1299, discount: '-15%', rating: 4.7, reviews: '1.0K', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80', description: 'Trendy oversized hoodie for women.', brand: 'NovaStyle' },
];

const FashionPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { items, addItem, removeItem, updateQuantity, getSubtotal } = useCartStore();

  return (
    <div className={styles.fashionLayout}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.leftSidebar}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoBox}>
             <ShoppingBag size={24} color="#D946EF" fill="#D946EF" fillOpacity={0.2} />
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

        <div className={styles.styleUpCard}>
          <h3>Style Up!</h3>
          <p>Up to 60% Off</p>
          <button className={styles.shopNowBtn}>Shop Now <ArrowRight size={14} /></button>
          <div className={styles.promoImg}>
            <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=200&q=80" alt="Clothing Rack" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}><Shirt size={32} color="#D946EF" /></div>
            <div>
              <h1>Clothing</h1>
              <p>Trendy styles for every you.</p>
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
          {clothingProducts.map((product) => (
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
                <span className={styles.categoryName}>{product.category}</span>
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

export default FashionPage;
