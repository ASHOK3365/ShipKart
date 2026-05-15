'use client';
import React from 'react';
import styles from './FloatingBackground.module.css';

export default function FloatingBackground() {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.noiseOverlay}></div>
    </div>
  );
}
