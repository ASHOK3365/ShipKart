'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ShoppingBag, Plus, Minus, X, Bookmark, ArrowRight, ArrowLeft,
  Sparkles, BrainCircuit, Tag, Truck, Shield, Heart, Gift,
  CreditCard, Percent, ChevronRight, Package, Clock, Star, Zap
} from 'lucide-react';
import SafeImage from '@/components/ui/SafeImage';
import { useCartStore } from '@/store/cartStore';
import { products } from '@/data/products';
import styles from './cart.module.css';

export default function CartPage() {
  const {
    items, savedForLater, removeItem, updateQuantity,
    saveForLater, moveToCart, removeSavedItem, getSubtotal,
    appliedCoupon, applyCoupon, removeCoupon,
  } = useCartStore();

  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState(false);

  const subtotal = getSubtotal();
  const savings = items.reduce((total, item) => total + (item.originalPrice - item.price) * item.quantity, 0);
  const couponDiscount = appliedCoupon ? Math.min(appliedCoupon.discount / 100 * subtotal, subtotal) : 0;
  const total = subtotal - couponDiscount;

  // AI Recommendations
  const cartCategories = [...new Set(items.map(i => i.category))];
  const recommendations = products
    .filter(p => cartCategories.includes(p.category) && !items.find(i => i.id === p.id))
    .slice(0, 6);

  const frequentlyBought = products
    .filter(p => !items.find(i => i.id === p.id) && p.isBestSeller)
    .slice(0, 4);

  const handleApplyCoupon = () => {
    setCouponError('');
    setCouponSuccess(false);
    if (!couponCode.trim()) return;
    const success = applyCoupon(couponCode);
    if (success) {
      setCouponSuccess(true);
      setCouponCode('');
    } else {
      setCouponError('Invalid coupon code');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.ambientBg} />
      
      {/* Back Navigation */}
      <div className={styles.contentWrapper}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={18} />
          <span>Continue Shopping</span>
        </Link>

        <div className={styles.header}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Shopping Cart
          </motion.h1>
          <div className={styles.stepIndicator}>
            <div className={`${styles.stepDot} ${styles.active}`} />
            <div className={styles.stepLine} />
            <div className={styles.stepDot} />
            <div className={styles.stepLine} />
            <div className={styles.stepDot} />
            <div className={styles.stepLine} />
            <div className={styles.stepDot} />
          </div>
        </div>

        {items.length === 0 && savedForLater.length === 0 ? (
          <motion.div 
            className={styles.emptyState}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div 
              className={styles.emptyIcon}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <ShoppingBag size={56} strokeWidth={1} />
            </motion.div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven&apos;t added anything to your cart yet. Explore our curated collections to find something you love.</p>
            <Link href="/" className={styles.primaryBtn} style={{ width: 'auto', padding: '1.2rem 3rem' }}>
              Explore Products <ArrowRight size={20} />
            </Link>
          </motion.div>
        ) : (
          <div className={styles.layout}>
            {/* Main Section */}
            <div className={styles.mainSection}>
              {/* Cart Items */}
              {items.length > 0 && (
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.cardHeader}>
                    <h3><Package size={20} /> Cart Items ({items.length})</h3>
                  </div>
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        className={styles.cartItem}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0 }}
                      >
                        <div className={styles.itemImage}>
                          <SafeImage src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
                        </div>
                        <div className={styles.itemInfo}>
                          <span className={styles.itemBrand}>{item.brand}</span>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          <div className={styles.itemPricing}>
                            <span className={styles.itemPrice}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                            <span className={styles.itemOriginal}>₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}</span>
                            <span className={styles.itemSaving}>{item.discount}% off</span>
                          </div>
                          {item.deliveryDate && (
                            <div className={styles.deliveryTag}>
                              <Truck size={14} />
                              <span>{item.deliveryDate}</span>
                            </div>
                          )}
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
                              <button className={styles.textBtn} onClick={() => saveForLater(item.id)}>
                                <Bookmark size={14} /> Save for later
                              </button>
                              <button className={`${styles.textBtn} ${styles.danger}`} onClick={() => removeItem(item.id)}>
                                <X size={14} /> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Saved For Later */}
              {savedForLater.length > 0 && (
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <h3><Bookmark size={20} /> Saved for Later ({savedForLater.length})</h3>
                  </div>
                  <div className={styles.savedGrid}>
                    {savedForLater.map((item) => (
                      <motion.div 
                        key={item.id} 
                        className={styles.savedCard}
                        layout
                        whileHover={{ y: -4 }}
                      >
                        <div className={styles.savedImage}>
                          <SafeImage src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
                        </div>
                        <div className={styles.savedInfo}>
                          <span className={styles.savedBrand}>{item.brand}</span>
                          <h5 className={styles.savedName}>{item.name}</h5>
                          <span className={styles.savedPrice}>₹{item.price.toLocaleString('en-IN')}</span>
                        </div>
                        <div className={styles.savedActions}>
                          <button className={styles.moveToCartBtn} onClick={() => moveToCart(item.id)}>
                            <ShoppingBag size={14} /> Move to Cart
                          </button>
                          <button className={styles.removeSavedBtn} onClick={() => removeSavedItem(item.id)}>
                            <X size={14} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* AI Recommendations */}
              {recommendations.length > 0 && (
                <motion.div 
                  className={styles.aiBlock}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className={styles.aiBlockHeader}>
                    <div className={styles.aiIconWrap}>
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h3>Complete Your Setup</h3>
                      <span>AI-picked accessories for your cart</span>
                    </div>
                  </div>
                  <div className={styles.recommendationGrid}>
                    {recommendations.slice(0, 3).map((p) => (
                      <motion.div 
                        key={p.id} 
                        className={styles.recCard}
                        whileHover={{ y: -6 }}
                      >
                        <div className={styles.recImage}>
                          <SafeImage src={p.image} alt={p.name} fill style={{ objectFit: 'contain' }} />
                        </div>
                        <div className={styles.recInfo}>
                          <h5>{p.name}</h5>
                          <div className={styles.recPricing}>
                            <span>₹{p.price.toLocaleString('en-IN')}</span>
                            <span className={styles.recDiscount}>{p.discount}% off</span>
                          </div>
                          <div className={styles.recRating}>
                            <Star size={12} fill="#EAB308" stroke="#EAB308" />
                            <span>{Number(p.rating).toFixed(1)}</span>
                          </div>
                        </div>
                        <button 
                          className={styles.recAddBtn}
                          onClick={() => useCartStore.getState().addItem(p)}
                        >
                          <Plus size={16} /> Add
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Frequently Bought Together */}
              {frequentlyBought.length > 0 && items.length > 0 && (
                <motion.div 
                  className={styles.aiBlock}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className={styles.aiBlockHeader}>
                    <div className={styles.aiIconWrap} style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))' }}>
                      <BrainCircuit size={20} style={{ color: '#A855F7' }} />
                    </div>
                    <div>
                      <h3>Customers Also Bought</h3>
                      <span>Based on similar purchases</span>
                    </div>
                  </div>
                  <div className={styles.recommendationGrid}>
                    {frequentlyBought.slice(0, 3).map((p) => (
                      <motion.div 
                        key={p.id} 
                        className={styles.recCard}
                        whileHover={{ y: -6 }}
                      >
                        <div className={styles.recImage}>
                          <SafeImage src={p.image} alt={p.name} fill style={{ objectFit: 'contain' }} />
                        </div>
                        <div className={styles.recInfo}>
                          <h5>{p.name}</h5>
                          <div className={styles.recPricing}>
                            <span>₹{p.price.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                        <button 
                          className={styles.recAddBtn}
                          onClick={() => useCartStore.getState().addItem(p)}
                        >
                          <Plus size={16} /> Add
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Summary Panel */}
            {items.length > 0 && (
              <div className={styles.summaryPanel}>
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <h3><Tag size={20} /> Order Summary</h3>
                  </div>

                  {/* Coupon */}
                  <div className={styles.couponSection}>
                    <div className={styles.couponInput}>
                      <Percent size={16} className={styles.couponIcon} />
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => { setCouponCode(e.target.value); setCouponError(''); setCouponSuccess(false); }}
                        onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
                      />
                      <button onClick={handleApplyCoupon}>Apply</button>
                    </div>
                    {couponError && <span className={styles.couponError}>{couponError}</span>}
                    {couponSuccess && <span className={styles.couponOk}>Coupon applied successfully!</span>}
                    {appliedCoupon && (
                      <div className={styles.couponApplied}>
                        <Tag size={14} />
                        <span>{appliedCoupon.code} — {appliedCoupon.discount}% off</span>
                        <button onClick={removeCoupon}><X size={14} /></button>
                      </div>
                    )}
                    <div className={styles.couponHint}>
                      <Sparkles size={12} />
                      Try: WELCOME10, ANTIGRAVITY, PREMIUM50
                    </div>
                  </div>

                  <div className={styles.summaryDivider} />

                  <div className={styles.summaryRow}>
                    <span>Subtotal ({items.reduce((t, i) => t + i.quantity, 0)} items)</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Savings</span>
                    <span className={styles.savingsValue}>-₹{savings.toLocaleString('en-IN')}</span>
                  </div>
                  {appliedCoupon && (
                    <div className={styles.summaryRow}>
                      <span>Coupon ({appliedCoupon.code})</span>
                      <span className={styles.savingsValue}>-₹{Math.round(couponDiscount).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className={styles.summaryRow}>
                    <span>Delivery</span>
                    <span className={styles.freeShipping}>Free</span>
                  </div>
                  <div className={styles.summaryTotal}>
                    <span>Total</span>
                    <span>₹{Math.round(total).toLocaleString('en-IN')}</span>
                  </div>

                  <Link href="/checkout" className={styles.primaryBtn}>
                    Proceed to Checkout <ArrowRight size={20} />
                  </Link>
                  
                  <div className={styles.trustBadges}>
                    <div className={styles.trustItem}>
                      <Shield size={16} />
                      <span>Secure Payment</span>
                    </div>
                    <div className={styles.trustItem}>
                      <Truck size={16} />
                      <span>Free Shipping</span>
                    </div>
                    <div className={styles.trustItem}>
                      <Gift size={16} />
                      <span>Easy Returns</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
