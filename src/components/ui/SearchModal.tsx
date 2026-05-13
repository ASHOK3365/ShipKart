'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Mic, TrendingUp, History, Clock, ArrowRight } from 'lucide-react';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListening, setIsListening] = useState(false);

  const trendingSearches = [
    "Oversized Hoodies for Men",
    "Nike Air Jordan Sneakers",
    "Zara Premium Winter Jackets",
    "Levi's 501 Slim Fit Jeans",
    "Ethnic Kurta Sets for Women",
    "Streetwear Fashion 2026"
  ];

  const recentSearches = [
    "White Graphic T-Shirt",
    "Adidas Running Shoes",
    "Formal Office Blazer",
    "Yoga Activewear Set"
  ];


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleVoiceSearch = () => {
    setIsListening(true);
    setTimeout(() => setIsListening(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={styles.header}>
              <div className={styles.inputWrapper}>
                <Search className={styles.searchIcon} size={24} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Ask ShopKart AI for anything..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  className={`${styles.voiceBtn} ${isListening ? styles.listening : ''}`}
                  onClick={handleVoiceSearch}
                >
                  <Mic size={20} />
                  {isListening && <div className={styles.waveform}></div>}
                </button>
              </div>
              <button className={styles.closeBtn} onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            <div className={styles.content}>
              <div className={styles.column}>
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <History size={18} />
                    <h3>Recent Searches</h3>
                  </div>
                  <div className={styles.list}>
                    {recentSearches.map((item, idx) => (
                      <button key={idx} className={styles.listItem}>
                        <Clock size={16} />
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <TrendingUp size={18} />
                    <h3>Trending Searches</h3>
                  </div>
                  <div className={styles.list}>
                    {trendingSearches.map((item, idx) => (
                      <button key={idx} className={styles.listItem}>
                        <ArrowRight size={16} />
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.aiTip}>
                <span className={styles.sparkle}>✨</span>
                <p>AI Tip: Try searching for <strong>"Best value electronics for students"</strong> or <strong>"High protein grocery list"</strong></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
