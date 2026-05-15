'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, User, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './GlobalSidebar.module.css';
import { NAV_ITEMS, CATEGORY_ITEMS } from '@/config/navigation';

const GlobalSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <ShoppingBag size={20} />
          </div>
          <span className={styles.logoText}>Shipkart</span>
        </div>

        <nav className={styles.navSection}>
          <span className={styles.sectionTitle}>MENU</span>
          <div className={styles.navGroup}>
            {NAV_ITEMS.map((item) => {
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
            {CATEGORY_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link key={item.label} href={item.href} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
                  <item.icon size={20} />
                  <span>{item.label}</span>
                  {isActive && <motion.div layoutId="activeCategory" className={styles.activeIndicator} />}
                </Link>
              );
            })}
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
