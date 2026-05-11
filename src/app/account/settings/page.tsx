'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Shield, Bell, Moon, 
  Globe, Smartphone, CreditCard, Eye,
  Lock, Key, Mail, Phone, Camera
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import styles from '../account.module.css';

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('profile');

  if (!user) return null;

  return (
    <div className={styles.settingsPage}>
      <div className={styles.pageHeader}>
        <div>
          <h2>Account Settings</h2>
          <p>Manage your profile, security, and preferences</p>
        </div>
      </div>

      <div className={styles.settingsLayout}>
        {/* Tabs */}
        <div className={styles.settingsTabs}>
          <button className={`${styles.tabBtn} ${activeTab === 'profile' ? styles.tabActive : ''}`} onClick={() => setActiveTab('profile')}>
            <User size={18} /> Profile
          </button>
          <button className={`${styles.tabBtn} ${activeTab === 'security' ? styles.tabActive : ''}`} onClick={() => setActiveTab('security')}>
            <Shield size={18} /> Security
          </button>
          <button className={`${styles.tabBtn} ${activeTab === 'preferences' ? styles.tabActive : ''}`} onClick={() => setActiveTab('preferences')}>
            <Moon size={18} /> Preferences
          </button>
        </div>

        {/* Content */}
        <div className={styles.settingsContent}>
          {activeTab === 'profile' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.card}>
              <h3>Public Profile</h3>
              <div className={styles.profileEdit}>
                <div className={styles.avatarEdit}>
                  <img src={user.avatar} alt={user.name} />
                  <button className={styles.cameraBtn}><Camera size={16} /></button>
                </div>
                <div className={styles.editForm}>
                  <div className={styles.inputGroup}><label>Full Name</label><input type="text" defaultValue={user.name} /></div>
                  <div className={styles.inputGroup}><label>Email Address</label><input type="email" defaultValue={user.email} /></div>
                  <div className={styles.inputGroup}><label>Phone Number</label><input type="tel" defaultValue={user.phone || '+91 98765 43210'} /></div>
                  <div className={styles.inputGroup}><label>Bio</label><textarea placeholder="Tell us about yourself..." /></div>
                  <button className={styles.submitBtn} style={{ width: 'auto', padding: '0.75rem 2rem' }}>Save Changes</button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.card}>
              <h3>Security Settings</h3>
              <div className={styles.securityList}>
                <div className={styles.securityItem}>
                  <div className={styles.secIcon}><Key size={20} /></div>
                  <div className={styles.secInfo}>
                    <h4>Change Password</h4>
                    <span>Update your password regularly to stay secure</span>
                  </div>
                  <button className={styles.actionBtn}>Update</button>
                </div>
                <div className={styles.securityItem}>
                  <div className={styles.secIcon}><Smartphone size={20} /></div>
                  <div className={styles.secInfo}>
                    <h4>Two-Factor Authentication</h4>
                    <span>Add an extra layer of security to your account</span>
                  </div>
                  <button className={styles.actionBtn}>Enable</button>
                </div>
                <div className={styles.securityItem}>
                  <div className={styles.secIcon}><Eye size={20} /></div>
                  <div className={styles.secInfo}>
                    <h4>Login Activity</h4>
                    <span>Monitor where and when you&apos;ve signed in</span>
                  </div>
                  <button className={styles.actionBtn}>View History</button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'preferences' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.card}>
              <h3>App Preferences</h3>
              <div className={styles.prefSection}>
                <h4>Appearance</h4>
                <div className={styles.themeGrid}>
                  <div className={`${styles.themeOption} ${styles.themeActive}`}>
                    <div className={styles.themePreview} style={{ background: '#f8fafc' }} />
                    <span>Light</span>
                  </div>
                  <div className={styles.themeOption}>
                    <div className={styles.themePreview} style={{ background: '#0f172a' }} />
                    <span>Dark</span>
                  </div>
                  <div className={styles.themeOption}>
                    <div className={styles.themePreview} style={{ background: 'linear-gradient(135deg, #f8fafc 50%, #0f172a 50%)' }} />
                    <span>System</span>
                  </div>
                </div>
              </div>

              <div className={styles.prefSection}>
                <h4>Notifications</h4>
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <h5>Email Notifications</h5>
                    <span>Receive order updates and offers via email</span>
                  </div>
                  <div className={styles.toggle}><div className={styles.toggleHandle} /></div>
                </div>
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <h5>AI Insights</h5>
                    <span>Allow AI to suggest products based on browsing</span>
                  </div>
                  <div className={styles.toggle}><div className={styles.toggleHandle} /></div>
                </div>
              </div>

              <div className={styles.prefSection}>
                <h4>Language & Region</h4>
                <div className={styles.inputGroup}>
                  <select>
                    <option>English (US)</option>
                    <option>Hindi (India)</option>
                    <option>French (France)</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
