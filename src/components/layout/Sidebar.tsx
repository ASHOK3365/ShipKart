'use client';
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3>FILTERS</h3>
        <button className={styles.resetBtn}>Reset</button>
      </div>

      <div className={styles.filterGroup}>
        <label>Category</label>
        <select className={styles.select}>
          <option>All categories</option>
          <option>Grocery</option>
          <option>Mobile</option>
          <option>Electronics</option>
          <option>Appliances</option>
          <option>Two Wheeler</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Price Range</label>
        <select className={styles.select}>
          <option>All prices</option>
          <option>Under ₹500</option>
          <option>₹500 - ₹5,000</option>
          <option>₹5,000 - ₹20,000</option>
          <option>₹20,000 - ₹50,000</option>
          <option>Above ₹50,000</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Customer Rating</label>
        <select className={styles.select}>
          <option>All ratings</option>
          <option>4★ & above</option>
          <option>3★ & above</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Energy Rating</label>
        <div className={styles.checkboxGroup}>
          {[5, 4, 3].map(star => (
            <label key={star} className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>{star} Star</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label>Availability</label>
        <select className={styles.select}>
          <option>Exclude out of stock</option>
          <option>Show all</option>
        </select>
      </div>

      <div className={styles.aiSearch}>
        <h4>AI Search Suggestions</h4>
        <p>Try: "Best 5 star refrigerator", "Organic fruits for breakfast", "Dyson cordless vacuum", "Premium gaming setup".</p>
      </div>
    </aside>
  );
};

export default Sidebar;
