'use client';
import React, { useState } from 'react';
import { ChevronLeft, ShoppingBasket, Grid, ArrowRight } from 'lucide-react';
import styles from './NeoProductCard.module.css';
import SafeImage from '@/components/ui/SafeImage';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for the demo
const FURNITURE_DATA = [
  {
    id: 'f1',
    name: 'Dahila Chair',
    price: 25.10,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop',
    color: '#FFEFC6', // Pale yellow
    badge: 1
  },
  {
    id: 'f2',
    name: 'Ashbon Tool',
    price: 25.10,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop',
    color: '#E2F1FF', // Pale blue
    badge: 1
  },
  {
    id: 'f3',
    name: 'Heart Chair',
    price: 25.10,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop',
    color: '#F0F4F8', // Default
  },
  {
    id: 'f4',
    name: 'Mahagoni Tool',
    price: 25.10,
    image: 'https://images.unsplash.com/photo-1538688598139-6c4674f94b5e?q=80&w=800&auto=format&fit=crop',
    color: '#E9F6E9', // Pale green
    badge: 1
  },
  {
    id: 'f5',
    name: 'Nordic Sofa',
    price: 450.00,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    color: '#FFE4E1', // Misty Rose
  },
  {
    id: 'f6',
    name: 'Oak Table',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=800&auto=format&fit=crop',
    color: '#FDF5E6', // Old Lace
  }
];

const CATEGORIES = ['All', 'Chair', 'Table', 'Sofa', 'Lamp'];

export const NeoProductView = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showCart, setShowCart] = useState(false);

  if (showCart) {
    return <NeoCartView onBack={() => setShowCart(false)} />;
  }

  return (
    <AnimatePresence mode="wait">
      {showCart ? (
        <NeoCartView key="cart" onBack={() => setShowCart(false)} />
      ) : (
        <motion.div 
          key="grid"
          className={styles.neoContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <header className={styles.header}>
            <h1 className={styles.title}>ITEMS</h1>
            <div className={styles.gridIcon}>
              <Grid size={20} />
            </div>
          </header>


      <div className={styles.categories}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`${styles.category} ${activeCategory === cat ? styles.categoryActive : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.productGrid}>
        {FURNITURE_DATA.map((product, index) => (
          <motion.div
            key={product.id}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.imageWrapper} style={{ backgroundColor: product.color || '#FFFFFF' }}>
              <SafeImage
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                className={styles.image}
              />
              {product.badge && <div className={styles.badge}>{product.badge}</div>}
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.price}>$ {product.price.toFixed(2)}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.bottomCart} onClick={() => setShowCart(true)}>
        <span className={styles.cartLabel}>CART</span>
        <div className={styles.cartItems}>
          {FURNITURE_DATA.slice(0, 3).map(p => (
            <div key={p.id} className={styles.miniThumb}>
              <SafeImage src={p.image} alt={p.name} fill style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const NeoCartView = ({ onBack }: { onBack: () => void }) => {
  const cartItems = FURNITURE_DATA.slice(0, 3);
  const colors = ['#A29BFE', '#FDCB6E', '#E84393'];

  return (
    <motion.div 
      className={styles.cartView}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
    >
      <header className={styles.cartHeader}>
        <button className={styles.backBtn} onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <h1 className={styles.cartTitle}>CART</h1>
        <button className={styles.cartIconBtn}>
          <ShoppingBasket size={20} color="#FF5252" />
        </button>
      </header>

      <div className={styles.cartList}>
        {cartItems.map((item, index) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.cartItemImage} style={{ backgroundColor: item.color || '#F0F4F8' }}>
              <SafeImage src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
            </div>
            <div className={styles.cartItemInfo}>
              <div className={styles.cartItemName}>{item.name}</div>
              <div className={styles.cartItemPrice}>$ {item.price.toFixed(2)}</div>
              <div className={styles.cartItemQty}>1 X</div>
            </div>
            <div className={styles.statusDot} style={{ backgroundColor: colors[index % colors.length] }} />
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Deliverd To:</span>
          <span className={styles.summaryValue}>HOME</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Delivery Charge</span>
          <span className={styles.summaryValue}>$ 20</span>
        </div>
        
        <div className={`${styles.summaryRow} ${styles.totalRow}`}>
          <span className={styles.totalLabel}>TOTAL</span>
          <span className={styles.totalValue}>$ 95.60</span>
        </div>
      </div>

      <button className={styles.payBtn}>
        PAY
      </button>
    </motion.div>
  );
};

export default NeoProductView;
