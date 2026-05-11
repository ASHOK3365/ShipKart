'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, ShoppingBag, Trash2, Sparkles, 
  ArrowRight, Star, Tag, Clock
} from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import styles from '../account.module.css';

export default function WishlistPage() {
  const { addItem } = useCartStore();
  
  // For demo, we'll use some products as wishlist items
  const wishlistItems = products.slice(10, 14);

  return (
    <div className={styles.wishlistPage}>
      <div className={styles.pageHeader}>
        <div>
          <h2>My Wishlist</h2>
          <p>Items you&apos;ve saved for future shopping</p>
        </div>
        <button className={styles.primaryBtn} style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>
          Move All to Cart
        </button>
      </div>

      {wishlistItems.length === 0 ? (
        <div className={styles.emptyState}>
          <Heart size={48} />
          <h3>Your wishlist is empty</h3>
          <p>Save items you like to see them here.</p>
        </div>
      ) : (
        <div className={styles.wishlistGrid}>
          <AnimatePresence>
            {wishlistItems.map((product, i) => (
              <motion.div 
                key={product.id}
                className={styles.wishlistCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.wishlistBadge}>
                  <Sparkles size={12} /> AI Suggested
                </div>
                <div className={styles.wishlistImg}>
                  <img src={product.image} alt={product.name} />
                  <button className={styles.removeWishBtn}>
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className={styles.wishlistContent}>
                  <div className={styles.wishlistInfo}>
                    <span className={styles.itemBrand}>{product.brand}</span>
                    <h4>{product.name}</h4>
                    <div className={styles.itemRating}>
                      <Star size={12} fill="#EAB308" stroke="#EAB308" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <div className={styles.wishlistPricing}>
                    <div className={styles.priceGroup}>
                      <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                      <span className={styles.original}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <span className={styles.discount}>{product.discount}% OFF</span>
                  </div>
                  <button className={styles.addToCartBtn} onClick={() => addItem(product)}>
                    <ShoppingBag size={18} /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* AI Recommendation Section */}
      <div className={styles.aiRecommendation}>
        <div className={styles.aiRecHeader}>
          <Sparkles size={24} />
          <h3>AI Found Similar Items You Might Like</h3>
        </div>
        <div className={styles.miniGrid}>
          {products.slice(15, 19).map((p) => (
            <div key={p.id} className={styles.miniCard}>
              <img src={p.image} alt={p.name} />
              <div>
                <h5>{p.name}</h5>
                <span>₹{p.price.toLocaleString('en-IN')}</span>
              </div>
              <button className={styles.iconBtn}><ArrowRight size={16} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
