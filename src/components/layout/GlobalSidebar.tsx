'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  LayoutGrid, 
  Tag, 
  Sparkles, 
  ShoppingBag, 
  Heart, 
  User, 
  HelpCircle,
  Smartphone,
  Laptop,
  Shirt,
  UtensilsCrossed,
  Bike
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './GlobalSidebar.module.css';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: LayoutGrid, label: 'Categories', href: '/categories' },
  { icon: Tag, label: 'Deals', href: '/deals' },
  { icon: Sparkles, label: 'New Arrivals', href: '/new-arrivals' },
];

const categoryIcons = [
  { icon: UtensilsCrossed, label: 'Grocery', href: '/categories/grocery' },
  { icon: Smartphone, label: 'Mobiles', href: '/categories/mobiles' },
  { icon: Laptop, label: 'Electronics', href: '/categories/electronics' },
  { icon: Shirt, label: 'Fashion', href: '/categories/fashion' },
  { icon: Bike, label: 'Automotive', href: '/categories/automotive' },
];

const GlobalSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Sparkles size={20} />
          </div>
          <span className={styles.logoText}>Nova</span>
        </div>

        <nav className={styles.navSection}>
          <span className={styles.sectionTitle}>MENU</span>
          <div className={styles.navGroup}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.label} href={item.href} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
                  <item.icon size={20} />
                  <span>{item.label}</span>
                  {isActive && <motion.div layoutId="activeTab" className={styles.activeIndicator} />}
                </Link>
              );
            })}
          </div>
        </nav>

        <nav className={styles.navSection}>
          <span className={styles.sectionTitle}>CATEGORIES</span>
          <div className={styles.navGroup}>
            {categoryIcons.map((item) => (
              <Link key={item.label} href={item.href || '#'} className={styles.navItem}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className={styles.spacer} />

        <div className={styles.footerNav}>
          <Link href="/account" className={styles.navItem}>
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link href="/support" className={styles.navItem}>
            <HelpCircle size={20} />
            <span>Support</span>
          </Link>
        </div>

        <div className={styles.promoCard}>
          <div className={styles.promoContent}>
            <h4>Spring Sale</h4>
            <p>Up to 60% Off</p>
            <button className={styles.promoBtn}>Shop Now</button>
          </div>
          <div className={styles.promoVisual} />
        </div>
      </div>
    </aside>
  );
};

export default GlobalSidebar;
