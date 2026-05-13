'use client';
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Bell, Mic, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.navWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.searchBar}>
          <div className={styles.searchIcon}>
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search for products, brands and more..." 
            className={styles.searchInput}
          />
          <div className={styles.searchActions}>
            <button className={styles.iconBtn}><Mic size={18} /></button>
            <button className={styles.iconBtn}><Camera size={18} /></button>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <Heart size={20} />
          </button>
          
          <Link href="/cart" className={styles.actionBtn}>
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={styles.badge}
              >
                {cartCount}
              </motion.span>
            )}
          </Link>

          <button className={styles.actionBtn}>
            <Bell size={20} />
          </button>

          <div className={styles.profileBtn}>
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
              alt="Profile" 
              className={styles.avatar}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
