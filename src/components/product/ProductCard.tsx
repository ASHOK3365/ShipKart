'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Zap, ShieldCheck, Clock, BrainCircuit } from 'lucide-react';
import { Product } from '@/data/products';
import styles from './ProductCard.module.css';
import SafeImage from '@/components/ui/SafeImage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      {/* Top Section */}
      <div className={styles.imageContainer}>
        <div className={styles.badgeRow}>
          <div className={styles.discountBadge}>{product.discount}% OFF</div>
          {product.labels?.map((label, idx) => (
            <div key={idx} className={`${styles.labelBadge} ${styles[label.toLowerCase().replace(' ', '')]}`}>
              {label}
            </div>
          ))}
        </div>
        
        <button className={styles.favoriteBtn}>
          <Heart size={18} />
        </button>
        
        <SafeImage 
          src={product.image} 
          alt={product.name} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.productImage}
          priority={product.category === 'Grocery'}
        />
        
        {/* Hover Actions */}
        <div className={styles.hoverActions} onClick={(e) => e.preventDefault()}>
          <button className={styles.previewBtn}>Quick preview</button>
          <button 
            className={styles.addBtn}
            onClick={(e) => {
              e.preventDefault();
              // In a real app, this would use the cart store
              console.log('Added to cart:', product.name);
            }}

          >
            Add
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className={styles.info}>
        <div className={styles.headerRow}>
          <div className={styles.breadcrumb}>
            {product.brand} / {product.category}
          </div>
          {product.category === 'Appliances' && product.specifications?.['Smart Features'] && (
            <div className={styles.smartTag}>
              <BrainCircuit size={12} />
              <span>Smart Connect</span>
            </div>
          )}
          {product.energyRating && (
            <div className={styles.energyRating}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  size={10} 
                  fill={i < product.energyRating! ? "#EAB308" : "none"} 
                  stroke={i < product.energyRating! ? "#EAB308" : "#94A3B8"}
                />
              ))}
              <span>Star Rating</span>
            </div>
          )}
        </div>

        <h3 className={styles.name}>{product.name}</h3>
        {product.weight && (
          <div className={styles.weightTag}>{product.weight}</div>
        )}
        {(product.ram || product.storage) && (
          <div className={styles.specsTag}>
            {product.ram} / {product.storage} {product.processor && `• ${product.processor}`}
          </div>
        )}
        <p className={styles.description}>{product.description}</p>


        
        <div className={styles.metaRow}>
          <div className={styles.rating}>
            <Star size={14} fill="currentColor" />
            <span>{Number(product.rating).toFixed(1)} <span className={styles.reviewCount}>({isMounted ? product.reviews.toLocaleString() : product.reviews})</span></span>
          </div>
          {product.warranty && (
            <div className={styles.warranty}>
              <ShieldCheck size={14} />
              <span>{product.warranty.split(',')[0]}</span>
            </div>
          )}
        </div>

        {product.category === 'Clothing' && (
          <div className={styles.sizePreview}>
            {['S', 'M', 'L', 'XL'].map(size => (
              <span key={size} className={styles.sizeBadge}>{size}</span>
            ))}
          </div>
        )}

        {product.colors && product.colors.length > 0 && (
          <div className={styles.variants}>
            {product.colors.map((color, index) => (
              <div 
                key={index} 
                className={styles.colorDot} 
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {product.specifications && (
          <div className={styles.specsPreview}>
            {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
              <span key={key}>{value}</span>
            ))}
          </div>
        )}

        <div className={styles.priceSection}>
          <div className={styles.priceRow}>
            <span className={styles.currentPrice}>₹{isMounted ? product.price.toLocaleString('en-IN') : product.price}</span>
            <span className={styles.originalPrice}>₹{isMounted ? product.originalPrice.toLocaleString('en-IN') : product.originalPrice}</span>
          </div>
          {product.emiOptions && (
            <div className={styles.emiTag}>
              <Zap size={12} />
              <span>{product.emiOptions}</span>
            </div>
          )}
        </div>

        {product.deliveryDate && (
          <div className={styles.deliveryRow}>
            <Clock size={14} />
            <span className={styles.deliveryText}>{product.deliveryDate}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
