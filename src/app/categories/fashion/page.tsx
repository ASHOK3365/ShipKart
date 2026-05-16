'use client';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  Trash2, 
  ChevronLeft, 
  Plus, 
  Minus, 
  ShoppingBag,
  Grid, 
  List, 
  ShieldCheck, 
  RotateCcw, 
  Truck,
  Shirt
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import styles from './fashion.module.css';
import SafeImage from '@/components/ui/SafeImage';
import { allFashionProducts } from '@/data/clothingData';

const categoryPills = [
  'All', 'Men', 'Women', 'Kids', 'Topwear', 'Bottomwear', 'Winterwear', 'Accessories'
];

const FashionPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { items, addItem, removeItem, updateQuantity, getSubtotal } = useCartStore();

  const filteredProducts = useMemo(() => {
    if (activeTab === 'All') return allFashionProducts;
    if (activeTab === 'Men' || activeTab === 'Women' || activeTab === 'Kids') {
      return allFashionProducts.filter(p => p.gender === activeTab || p.gender === 'Unisex');
    }
    return allFashionProducts.filter(p => p.itemType === activeTab);
  }, [activeTab]);

  return (
    <div className={styles.fashionLayout}>
      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}>
              <Shirt size={32} color="#D4B08C" />
            </div>
            <div>
              <h1>Premium Fashion</h1>
              <p>Explore luxury editorial styles and collections.</p>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.viewBtn}><Grid size={18} /></button>
            <button className={styles.viewBtn}><List size={18} /></button>
          </div>
        </header>

        <div className={styles.categoryBar}>
          {categoryPills.map((cat) => (
            <motion.button 
              key={cat} 
              className={`${styles.catPill} ${activeTab === cat ? styles.catActive : ''}`}
              onClick={() => setActiveTab(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className={styles.productGrid}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                className={styles.productCard}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {product.discount > 0 && (
                  <div className={styles.discountBadge}>-{product.discount}%</div>
                )}
                <button className={styles.wishlistBtn}><Heart size={18} /></button>
                <div className={styles.productImg}>
                  <SafeImage 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <span>{product.brand} - {product.description}</span>
                  <div className={styles.priceRow}>
                    <div>
                      <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                      {product.originalPrice > product.price && (
                        <span className={styles.oldPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                      )}
                    </div>
                    <button className={styles.addBtn} onClick={() => addItem(product as any)}><Plus size={18} /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className={styles.emptyState}>
            <p>No products found in this category.</p>
          </div>
        )}
      </main>

      {/* RIGHT SIDEBAR (CART) */}
      <aside className={styles.rightSidebar}>
        <div className={styles.cartHeader}>
          <Link href="/" className={styles.backBtn}><ChevronLeft size={20} /></Link>
          <h2>CART</h2>
          <button className={styles.trashBtn} onClick={() => useCartStore.getState().clearCart()}><Trash2 size={20} /></button>
        </div>

        <div className={styles.cartList}>
          <AnimatePresence>
            {items.map((item) => (
              <motion.div 
                key={item.id} 
                className={styles.cartItem}
                layout
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className={styles.itemImg}>
                  <SafeImage 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    sizes="60px"
                  />
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
              </motion.div>
            ))}
          </AnimatePresence>
          {items.length === 0 && (
            <div className={styles.emptyCart}>
              <ShoppingBag size={48} opacity={0.2} color="#D4B08C" />
              <p>Your cart is empty</p>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.cartSummary}>
            <div className={styles.summaryRow}>
              <span>Delivered To:</span>
              <strong>Home</strong>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery Charges:</span>
              <strong>Free</strong>
            </div>
            <div className={styles.totalRow}>
              <span>TOTAL</span>
              <strong>₹{getSubtotal().toLocaleString('en-IN')}</strong>
            </div>
            <Link href="/checkout">
              <button className={styles.payBtn}>PROCEED TO PAY</button>
            </Link>
          </div>
        )}

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
