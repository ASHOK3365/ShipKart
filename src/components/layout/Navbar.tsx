'use client';
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Sparkles, MapPin, Heart } from 'lucide-react';
import SearchModal from '../ui/SearchModal';
import CartDrawer from '../cart/CartDrawer';
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';
import styles from './Navbar.module.css';
import Link from 'next/link';

const categories = [
  'Home', 'Grocery', 'Mobile', 'Electronics', 'Appliances', 'Clothing', 'Beauty', 'Two Wheeler'
];

const Navbar = ({ activeCategory, onCategoryChange }: { activeCategory: string, onCategoryChange: (cat: string) => void }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { items, isCartOpen, openCart, closeCart } = useCartStore();
  const { user, isAuthenticated } = useAuthStore();
  
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.navWrapper}>
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
          <div className={styles.container}>
            {/* Logo Section */}
            <div className={styles.logo} onClick={() => onCategoryChange('Home')}>
              <div className={styles.logoIcon}>
                <Sparkles size={16} />
              </div>
              <span className={styles.logoText}>Antigravity</span>
            </div>

            {/* Floating Category Pills */}
            <div className={styles.navLinks}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.navLink} ${activeCategory === cat ? styles.active : ''}`}
                  onClick={() => onCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className={styles.actions}>
              <button className={styles.actionBtn} onClick={() => setIsSearchOpen(true)}>
                <Search size={18} />
              </button>
              
              <button className={styles.actionBtn} onClick={openCart}>
                <ShoppingCart size={18} />
                {cartItemCount > 0 && <span className={styles.badge}>{cartItemCount}</span>}
              </button>

              <div className={styles.userSection}>
                {isAuthenticated ? (
                  <Link href="/account" className={styles.avatar}>
                    <img src={user?.avatar} alt={user?.name} />
                  </Link>
                ) : (
                  <Link href="/login" className={styles.loginPill}>
                    <User size={14} />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};

export default Navbar;
