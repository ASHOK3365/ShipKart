'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, ShoppingBag, Heart, MapPin, 
  CreditCard, Bell, Settings, LogOut, Sparkles,
  ChevronRight, User
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import styles from './account.module.css';

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/account' },
  { id: 'orders', label: 'My Orders', icon: ShoppingBag, href: '/account/orders' },
  { id: 'wishlist', label: 'Wishlist', icon: Heart, href: '/account/wishlist' },
  { id: 'addresses', label: 'Addresses', icon: MapPin, href: '/account/addresses' },
  { id: 'payment', label: 'Payments', icon: CreditCard, href: '/account/payment' },
  { id: 'notifications', label: 'Notifications', icon: Bell, href: '/account/notifications' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/account/settings' },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!user) return null;

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.ambientBg} />
      
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.userProfile}>
            <div className={styles.avatarWrapper}>
              <img src={user.avatar} alt={user.name} />
              <div className={styles.onlineBadge} />
            </div>
            <div className={styles.userInfo}>
              <h3>{user.name}</h3>
              <span>{user.email}</span>
            </div>
          </div>
        </div>

        <nav className={styles.nav}>
          {sidebarItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              className={`${styles.navItem} ${pathname === item.href ? styles.navActive : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {pathname === item.href && (
                <motion.div 
                  layoutId="activeNav" 
                  className={styles.activeIndicator} 
                />
              )}
            </Link>
          ))}
          
          <button className={`${styles.navItem} ${styles.logoutBtn}`} onClick={() => logout()}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.aiCard}>
            <Sparkles size={16} />
            <p>Your shopping insights are up to date.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>
            <span>Account</span>
            <ChevronRight size={14} />
            <span className={styles.activePage}>
              {sidebarItems.find(i => i.href === pathname)?.label || 'Dashboard'}
            </span>
          </div>
          <div className={styles.topActions}>
            <button className={styles.iconBtn}><Bell size={20} /></button>
            <Link href="/account/settings" className={styles.iconBtn}><User size={20} /></Link>
          </div>
        </div>
        <div className={styles.scrollArea}>
          {children}
        </div>
      </main>
    </div>
  );
}
