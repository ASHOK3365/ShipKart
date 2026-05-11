'use client';
import React from 'react';
import { 
  Home, 
  ShoppingBag, 
  Smartphone, 
  Cpu, 
  Refrigerator, 
  Shirt, 
  Sparkles, 
  Bike 
} from 'lucide-react';
import styles from './CategoryNav.module.css';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'Home', icon: Home },
  { id: 'Grocery', icon: ShoppingBag },
  { id: 'Mobile', icon: Smartphone },
  { id: 'Electronics', icon: Cpu },
  { id: 'Appliances', icon: Refrigerator },
  { id: 'Clothing', icon: Shirt },
  { id: 'Beauty', icon: Sparkles },
  { id: 'Two Wheeler', icon: Bike },
];

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className={styles.categoryNav}>
      <div className={styles.container}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              className={`${styles.navItem} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              <Icon size={18} />
              <span>{cat.id}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNav;
