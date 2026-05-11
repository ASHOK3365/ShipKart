'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Plus, Home, Briefcase, 
  MoreVertical, Trash2, Edit2, CheckCircle2,
  Navigation, Sparkles, X
} from 'lucide-react';
import styles from '../account.module.css';

const initialAddresses = [
  { id: '1', type: 'Home', name: 'Ashok Kumar', phone: '+91 98765 43210', line1: '123 Antigravity Heights', line2: 'Cyber Hub, Sector 24', city: 'Gurugram', state: 'Haryana', pincode: '122002', isDefault: true },
  { id: '2', type: 'Office', name: 'Ashok Kumar', phone: '+91 98765 43210', line1: 'Innovation Tower, 5th Floor', line2: 'Business Park', city: 'Bangalore', state: 'Karnataka', pincode: '560001', isDefault: false },
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showAddForm, setShowAddForm] = useState(false);

  const deleteAddress = (id: string) => {
    setAddresses(addresses.filter(a => a.id !== id));
  };

  const setDefault = (id: string) => {
    setAddresses(addresses.map(a => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <div className={styles.addressesPage}>
      <div className={styles.pageHeader}>
        <div>
          <h2>Saved Addresses</h2>
          <p>Manage your delivery locations for faster checkout</p>
        </div>
        <button className={styles.submitBtn} style={{ width: 'auto', padding: '0.75rem 1.5rem' }} onClick={() => setShowAddForm(true)}>
          <Plus size={18} /> Add New Address
        </button>
      </div>

      <div className={styles.addressGrid}>
        {addresses.map((addr) => (
          <motion.div 
            key={addr.id}
            className={`${styles.addrCard} ${addr.isDefault ? styles.addrDefault : ''}`}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {addr.isDefault && (
              <div className={styles.defaultBadge}>
                <CheckCircle2 size={12} /> Default Address
              </div>
            )}
            <div className={styles.addrHeader}>
              <div className={styles.addrIcon}>
                {addr.type === 'Home' ? <Home size={20} /> : <Briefcase size={20} />}
              </div>
              <div className={styles.addrTitle}>
                <h4>{addr.type}</h4>
                <span>{addr.name}</span>
              </div>
              <div className={styles.addrActions}>
                <button className={styles.addrBtn}><Edit2 size={16} /></button>
                <button className={styles.addrBtn} onClick={() => deleteAddress(addr.id)}><Trash2 size={16} /></button>
              </div>
            </div>
            <div className={styles.addrBody}>
              <p>{addr.line1}, {addr.line2}</p>
              <p>{addr.city}, {addr.state} — {addr.pincode}</p>
              <p className={styles.addrPhone}>{addr.phone}</p>
            </div>
            <div className={styles.addrFooter}>
              {!addr.isDefault && (
                <button className={styles.textBtn} onClick={() => setDefault(addr.id)}>Set as default</button>
              )}
              <div className={styles.mapPreview}>
                <Navigation size={14} /> View on map
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showAddForm && (
          <div className={styles.modalOverlay}>
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
            >
              <div className={styles.modalHeader}>
                <h3>Add New Address</h3>
                <button onClick={() => setShowAddForm(false)}><X size={24} /></button>
              </div>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}><label>Full Name</label><input type="text" placeholder="Ashok Kumar" /></div>
                <div className={styles.inputGroup}><label>Phone Number</label><input type="text" placeholder="+91 98765 43210" /></div>
                <div className={styles.inputGroup} style={{ gridColumn: 'span 2' }}><label>Address Line 1</label><input type="text" placeholder="Building, Street, Area" /></div>
                <div className={styles.inputGroup} style={{ gridColumn: 'span 2' }}><label>Address Line 2 (Optional)</label><input type="text" placeholder="Landmark, Suite" /></div>
                <div className={styles.inputGroup}><label>City</label><input type="text" placeholder="Gurugram" /></div>
                <div className={styles.inputGroup}><label>State</label><input type="text" placeholder="Haryana" /></div>
                <div className={styles.inputGroup}><label>Pincode</label><input type="text" placeholder="122002" /></div>
                <div className={styles.inputGroup}><label>Address Type</label>
                  <select>
                    <option>Home</option>
                    <option>Office</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button className={styles.submitBtn} onClick={() => setShowAddForm(false)}>Save Address</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className={styles.aiInsightBox}>
        <Sparkles size={20} />
        <p>AI Tip: We noticed you usually order to your **Home** address on weekends. Want us to make it your default for weekend checkouts?</p>
      </div>
    </div>
  );
}
