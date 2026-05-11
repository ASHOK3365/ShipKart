'use client';
import React from 'react';
import styles from './AIGuide.module.css';

const AIGuide = () => {
  return (
    <button className={styles.aiGuide}>
      <span className={styles.dot}></span>
      AI Guide
    </button>
  );
};

export default AIGuide;
