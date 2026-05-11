'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Plus, Shield, Smartphone, 
  Building2, Wallet, Trash2, CheckCircle2,
  Sparkles, ShieldCheck, Lock
} from 'lucide-react';
import styles from '../account.module.css';

const initialCards = [
  { id: '1', type: 'Visa', number: '•••• •••• •••• 4242', expiry: '12/26', holder: 'ASHOK KUMAR', isDefault: true, color: 'linear-gradient(135deg, #1e293b, #334155)' },
  { id: '2', type: 'Mastercard', number: '•••• •••• •••• 8888', expiry: '08/25', holder: 'ASHOK KUMAR', isDefault: false, color: 'linear-gradient(135deg, #4c1d95, #6d28d9)' },
];

export default function PaymentPage() {
  const [cards, setCards] = useState(initialCards);

  const deleteCard = (id: string) => {
    setCards(cards.filter(c => c.id !== id));
  };

  return (
    <div className={styles.paymentPage}>
      <div className={styles.pageHeader}>
        <div>
          <h2>Payment Methods</h2>
          <p>Securely manage your saved cards and payment accounts</p>
        </div>
        <button className={styles.submitBtn} style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>
          <Plus size={18} /> Add New Method
        </button>
      </div>

      <div className={styles.paymentGrid}>
        {/* Saved Cards */}
        <div className={styles.cardsSection}>
          <h3>Saved Cards</h3>
          <div className={styles.cardsList}>
            {cards.map((card) => (
              <motion.div 
                key={card.id}
                className={styles.virtualCard}
                style={{ background: card.color }}
                whileHover={{ y: -10, rotateX: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {card.isDefault && (
                  <div className={styles.cardBadge}>
                    <CheckCircle2 size={12} /> Default
                  </div>
                )}
                <div className={styles.cardTop}>
                  <CreditCard size={32} strokeWidth={1.5} />
                  <span className={styles.cardType}>{card.type}</span>
                </div>
                <div className={styles.cardNumber}>{card.number}</div>
                <div className={styles.cardBottom}>
                  <div className={styles.cardHolder}>
                    <span>Card Holder</span>
                    <strong>{card.holder}</strong>
                  </div>
                  <div className={styles.cardExpiry}>
                    <span>Expires</span>
                    <strong>{card.expiry}</strong>
                  </div>
                </div>
                <button className={styles.deleteCardBtn} onClick={() => deleteCard(card.id)}>
                  <Trash2 size={16} />
                </button>
              </motion.div>
            ))}
            
            <motion.button 
              className={styles.addCardPlaceholder}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.addIconWrap}>
                <Plus size={24} />
              </div>
              <span>Add New Card</span>
            </motion.button>
          </div>
        </div>

        {/* Other Methods */}
        <div className={styles.otherMethods}>
          <h3>Other Methods</h3>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon} style={{ background: 'rgba(91, 108, 255, 0.1)', color: 'var(--primary)' }}>
              <Smartphone size={24} />
            </div>
            <div className={styles.methodInfo}>
              <h4>UPI Accounts</h4>
              <span>Connected: Google Pay, PhonePe</span>
            </div>
            <button className={styles.textBtn}>Manage</button>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.methodIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
              <Building2 size={24} />
            </div>
            <div className={styles.methodInfo}>
              <h4>Net Banking</h4>
              <span>Saved Banks: HDFC, ICICI</span>
            </div>
            <button className={styles.textBtn}>Manage</button>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.methodIcon} style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>
              <Wallet size={24} />
            </div>
            <div className={styles.methodInfo}>
              <h4>Digital Wallets</h4>
              <span>Connected: Amazon Pay</span>
            </div>
            <button className={styles.textBtn}>Manage</button>
          </div>
        </div>
      </div>

      <div className={styles.securityFooter}>
        <div className={styles.securityItem}>
          <ShieldCheck size={20} />
          <span>PCI DSS Compliant</span>
        </div>
        <div className={styles.securityItem}>
          <Lock size={20} />
          <span>256-bit SSL Encryption</span>
        </div>
        <div className={styles.aiSecurity}>
          <Sparkles size={20} />
          <p>AI Protection: **Active**. We&apos;re monitoring for unusual activity to keep your account safe.</p>
        </div>
      </div>
    </div>
  );
}
