'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, ArrowRight, Sparkles, Bookmark, Truck, Shield } from 'lucide-react';
import Link from 'next/link';
import SafeImage from '../ui/SafeImage';
import { useCartStore } from '@/store/cartStore';
import { products } from '@/data/products';
import styles from './CartDrawer.module.css';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, saveForLater, getSubtotal } = useCartStore();
  
  // Get AI suggestions based on cart items
  const suggestions = React.useMemo(() => {
    if (items.length === 0) return [];
    const cartCategories = [...new Set(items.map(i => i.category))];
    return products
      .filter(p => cartCategories.includes(p.category) && !items.find(i => i.id === p.id))
      .slice(0, 3);
  }, [items]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.headerIcon}>
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h2>Your Cart</h2>
                  <span className={styles.itemCount}>
                    {items.reduce((t, i) => t + i.quantity, 0)} items
                  </span>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={onClose}>
                <X size={20} />
              </button>
            </div>

            {/* Delivery Banner */}
            {items.length > 0 && (
              <motion.div 
                className={styles.deliveryBanner}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Truck size={16} />
                <span>Free delivery on orders above ₹499</span>
              </motion.div>
            )}

            {/* Content */}
            <div className={styles.content}>
              {items.length === 0 ? (
                <div className={styles.emptyState}>
                  <motion.div 
                    className={styles.emptyIcon}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <ShoppingBag size={48} strokeWidth={1} />
                  </motion.div>
                  <h3>Your cart is empty</h3>
                  <p>Discover our premium selection and find something you love.</p>
                  <button className={styles.shopBtn} onClick={onClose}>
                    Start Shopping <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <>
                  {items.map((item, index) => (
                    <motion.div 
                      layout 
                      key={item.id} 
                      className={styles.cartItem}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className={styles.itemImage}>
                        <SafeImage src={item.image} alt={item.name} fill style={{objectFit: 'contain'}} />
                      </div>
                      <div className={styles.itemDetails}>
                        <span className={styles.itemBrand}>{item.brand}</span>
                        <h4 className={styles.itemTitle}>{item.name}</h4>
                        <div className={styles.itemPriceRow}>
                          <span className={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</span>
                          <span className={styles.itemOriginalPrice}>₹{item.originalPrice.toLocaleString('en-IN')}</span>
                          <span className={styles.itemDiscount}>{item.discount}% off</span>
                        </div>
                        <div className={styles.itemActions}>
                          <div className={styles.qtyControl}>
                            <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                              <Minus size={14} />
                            </button>
                            <span className={styles.qtyValue}>{item.quantity}</span>
                            <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className={styles.itemBtns}>
                            <button className={styles.saveBtn} onClick={() => saveForLater(item.id)}>
                              <Bookmark size={14} />
                            </button>
                            <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* AI Suggestion */}
                  {suggestions.length > 0 && (
                    <div className={styles.aiSection}>
                      <div className={styles.aiHeader}>
                        <Sparkles size={14} />
                        <span>Complete Your Setup</span>
                      </div>
                      <div className={styles.aiSuggestions}>
                        {suggestions.map(p => (
                          <motion.div 
                            key={p.id} 
                            className={styles.aiCard}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => useCartStore.getState().addItem(p)}
                          >
                            <div className={styles.aiCardImage}>
                              <SafeImage src={p.image} alt={p.name} fill style={{objectFit:'contain'}} />
                            </div>
                            <div className={styles.aiCardInfo}>
                              <span className={styles.aiCardName}>{p.name}</span>
                              <span className={styles.aiCardPrice}>₹{p.price.toLocaleString('en-IN')}</span>
                            </div>
                            <Plus size={16} className={styles.aiCardAdd} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className={styles.footer}>
                <div className={styles.trustBadge}>
                  <Shield size={14} />
                  <span>Secure checkout powered by Antigravity</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>₹{getSubtotal().toLocaleString('en-IN')}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span className={styles.freeTag}>Free</span>
                </div>
                <div className={styles.summaryTotal}>
                  <span>Total</span>
                  <span>₹{getSubtotal().toLocaleString('en-IN')}</span>
                </div>
                <Link href="/cart" className={styles.checkoutBtn} onClick={onClose}>
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={20} />
                </Link>
                <button className={styles.continueBtn} onClick={onClose}>
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
