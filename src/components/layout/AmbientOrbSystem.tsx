'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './AmbientOrbSystem.module.css';

export default function AmbientOrbSystem() {
  return (
    <div className={styles.orbContainer}>
      <motion.div 
        className={`${styles.orb} ${styles.orb1}`}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className={`${styles.orb} ${styles.orb2}`}
        animate={{
          x: [0, -30, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
