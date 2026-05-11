'use client';
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Store, Mic, Menu, X, Sparkles } from 'lucide-react';
import SearchModal from '../ui/SearchModal';
import CartDrawer from '../cart/CartDrawer';
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const categories = [
  'Home', 'Grocery', 'Mobile', 'Electronics', 'Appliances', 'Clothing', 'Beauty', 'Two Wheeler'
];

const Navbar = ({ activeCategory, onCategoryChange }: { activeCategory: string, onCategoryChange: (cat: string) => void }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const router = useRouter();
  const { items, isCartOpen, openCart, closeCart } = useCartStore();
  const { user, isAuthenticated } = useAuthStore();
  
  // Calculate total items in cart
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <div className={styles.left}>
          <div className={styles.logo} onClick={() => onCategoryChange('Home')}>
            <div className={styles.logoIcon}>
              <Sparkles size={22} strokeWidth={2.5} />
            </div>
            <div className={styles.logoTextWrapper}>
              <span className={styles.logoText}>ShopKart</span>
              <span className={styles.logoSubtext}>AI Powered</span>
            </div>
          </div>
        </div>

        {/* Center: Category Navigation (Desktop) */}
        <div className={styles.center}>
          <div className={styles.navLinks}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.navLink} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => onCategoryChange(cat)}
              >
                {cat}
                {activeCategory === cat && <div className={styles.activeIndicator} />}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className={styles.right}>
          <button className={styles.actionBtn} onClick={() => setIsSearchOpen(true)}>
            <Search size={20} />
          </button>

          <div className={styles.actionGroup}>
            {isAuthenticated ? (
              <Link href="/account" className={styles.actionBtn}>
                <div className={styles.avatarMini}>
                  <img src={user?.avatar} alt={user?.name} />
                </div>
                <span>Account</span>
              </Link>
            ) : (
              <Link href="/login" className={styles.actionBtn}>
                <User size={20} />
                <span>Login</span>
              </Link>
            )}
            <button className={`${styles.actionBtn} ${styles.hideMobile}`}>
              <Store size={20} />
              <span>Seller</span>
            </button>
            <button className={styles.cartBtn} onClick={openCart}>
              <div className={styles.cartIconWrapper}>
                <ShoppingCart size={22} />
                {cartItemCount > 0 && <span className={styles.cartBadge}>{cartItemCount}</span>}
              </div>
              <span className={styles.cartText}>Cart</span>
            </button>
          </div>

          <button className={styles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.mobileNavLink} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => {
                onCategoryChange(cat);
                setIsMobileMenuOpen(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </nav>
  );
};

export default Navbar;
