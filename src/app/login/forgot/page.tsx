'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Mail, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import styles from '../auth.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <motion.div 
      className={styles.glassCard}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      <Link href="/login" className={styles.backLink} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem', textDecoration: 'none', fontWeight: 600 }}>
        <ArrowLeft size={16} /> Back to Sign In
      </Link>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="request"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className={styles.header}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <ShieldCheck size={24} />
                </div>
              </div>
              <h1>Reset Password</h1>
              <p>Enter your email and we&apos;ll send you a cinematic recovery link</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} size={18} />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button className={styles.submitBtn} disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Send Reset Link <ArrowRight size={20} /></>}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.successView}
            style={{ textAlign: 'center' }}
          >
            <div className={styles.successIcon} style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <Sparkles size={40} />
            </div>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-white)' }}>Check Your Email</h1>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              We&apos;ve sent a futuristic password reset link to <strong>{email}</strong>. Please check your inbox and spam folder.
            </p>
            <button className={styles.socialBtn} style={{ width: '100%' }} onClick={() => setIsSubmitted(false)}>
              Try another email
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
