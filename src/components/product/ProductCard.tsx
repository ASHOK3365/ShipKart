'use client';
import React from 'react';
import { Heart, Star, ShoppingCart, Plus } from 'lucide-react';
import { Product } from '@/data/products';
import styles from './ProductCard.module.css';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isGrocery = product.category === 'Grocery';

  if (isGrocery) {
    const priceParts = product.price.toFixed(2).split('.');
    
    return (
      <motion.div 
        className={styles.groceryCard}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.groceryImageContainer}>
          <SafeImage 
            src={product.image} 
            alt={product.name} 
            fill 
            className={styles.groceryImage}
          />
        </div>

        <div className={styles.groceryInfo}>
          <h3 className={styles.groceryName}>
            {product.name} <span className={styles.grocerySub}>({product.brand || 'Local shop'})</span>
          </h3>
          <span className={styles.groceryWeight}>{product.weight || '500 gm.'}</span>
          
          <div className={styles.groceryPriceSection}>
            <span className={styles.priceMain}>{priceParts[0]}</span>
            <span className={styles.priceSup}>.{priceParts[1]}$</span>
          </div>

          <button 
            className={styles.groceryAddBtn}
            onClick={(e) => {
              e.preventDefault();
              console.log('Added:', product.name);
            }}
          >
            <Plus size={20} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.imageContainer}>
        {product.discount > 0 && (
          <div className={styles.badge}>{product.discount}% OFF</div>
        )}
        <button className={styles.wishlistBtn}>
          <Heart size={16} />
        </button>
        
        <SafeImage 
          src={product.image} 
          alt={product.name} 
          fill 
          className={styles.image}
        />
        
        <div className={styles.quickActions}>
          <button className={styles.btnQuick}>Quick Preview</button>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
          <span className={styles.brand}>{product.brand}</span>
          <div className={styles.rating}>
            <Star size={12} fill="currentColor" />
            <span>{Number(product.rating).toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className={styles.name}>{product.name}</h3>
        
        {product.category === 'Clothing' && (
          <div className={styles.sizeRow}>
            {['S', 'M', 'L'].map(s => <span key={s} className={styles.size}>{s}</span>)}
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.priceSection}>
            <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
            <span className={styles.original}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
          </div>
          
          <button 
            className={styles.addBtn}
            onClick={(e) => {
              e.preventDefault();
              console.log('Added:', product.name);
            }}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
