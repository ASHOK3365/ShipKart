'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, ShoppingBag, Users, Store, 
  BarChart3, Settings, Bell, Search, Menu, X, 
  LogOut, Sparkles, Moon, Sun, ChevronLeft, ChevronRight
} from 'lucide-react';
import styles from './DashboardLayout.module.css';

interface NavItem {
  label: string;
  href: string;
  icon: any;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  userRole: string;
  userName: string;
}

export default function DashboardLayout({ children, navItems, userRole, userName }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`${styles.dashboardContainer} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.ambientBg} />
      
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Sparkles size={24} />
            </div>
            {!isSidebarCollapsed && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className={styles.logoText}
              >
                <span>Antigravity</span>
                <span className={styles.roleBadge}>{userRole}</span>
              </motion.div>
            )}
          </Link>
          <button 
            className={styles.collapseBtn}
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`${styles.navItem} ${pathname === item.href ? styles.navActive : ''}`}
            >
              <item.icon size={22} />
              {!isSidebarCollapsed && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {item.label}
                </motion.span>
              )}
              {pathname === item.href && (
                <motion.div layoutId="activeNav" className={styles.activePill} />
              )}
            </Link>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.userBox}>
            <div className={styles.avatar}>
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt={userName} />
            </div>
            {!isSidebarCollapsed && (
              <div className={styles.userInfos}>
                <p>{userName}</p>
                <span>{userRole}</span>
              </div>
            )}
          </div>
          <button className={styles.logoutBtn}>
            <LogOut size={20} />
            {!isSidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.searchBar}>
            <Search size={18} />
            <input type="text" placeholder="Search analytics, orders, products..." />
          </div>
          
          <div className={styles.topActions}>
            <button className={styles.aiAssistBtn}>
              <Sparkles size={16} />
              <span>AI Insights</span>
            </button>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={styles.themeToggle}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className={styles.notifBtn}>
              <Bell size={20} />
              <span className={styles.notifBadge} />
            </div>
          </div>
        </header>

        <div className={styles.scrollContent}>
          {children}
        </div>
      </main>
    </div>
  );
}
