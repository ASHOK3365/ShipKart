import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
  category?: string;
  hideHeader?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, category, hideHeader }) => {
  return (
    <div className={styles.wrapper}>
      {!hideHeader && (
        <div className={styles.header}>
          <div className={styles.titleInfo}>
            <h2 className={styles.title}>{category || 'All Products'}</h2>
            <p className={styles.count}>{products.length} curated products</p>
          </div>
          <div className={styles.filters}>
            <select className={styles.sort}>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>
      )}
      
      <div className={styles.grid}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.gridItem}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className={styles.empty}>
            <h3>No products found</h3>
            <p>Try adjusting your filters or category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
