'use client';
import React from 'react';
import styles from '../login/auth.module.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.authContainer}>
      <div className={styles.ambientBg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
