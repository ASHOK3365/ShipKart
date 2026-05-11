'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Phone, Lock, ArrowRight, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import styles from '../login/auth.module.css';

export default function SignupPage() {
  const router = useRouter();
  const { signup, isLoading } = useAuthStore();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    
    await signup(formData.name, formData.email, formData.phone);
    router.push('/account');
  };

  const getPasswordStrength = () => {
    const len = formData.password.length;
    if (len === 0) return 0;
    if (len < 6) return 33;
    if (len < 10) return 66;
    return 100;
  };

  const getStrengthColor = () => {
    const strength = getPasswordStrength();
    if (strength <= 33) return '#EF4444';
    if (strength <= 66) return '#F59E0B';
    return '#10B981';
  };

  return (
    <motion.div 
      className={styles.glassCard}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Sparkles size={24} />
          </div>
        </div>
        <h1>Create Account</h1>
        <p>Join the next generation of commerce</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.onboardingStep}
            >
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <div className={styles.inputWrapper}>
                  <User className={styles.inputIcon} size={18} />
                  <input 
                    type="text" 
                    placeholder="Ashok Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} size={18} />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <div className={styles.inputWrapper}>
                  <Phone className={styles.inputIcon} size={18} />
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Continue <ArrowRight size={20} />
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.onboardingStep}
            >
              <div className={styles.inputGroup}>
                <label>Create Password</label>
                <div className={styles.inputWrapper}>
                  <Lock className={styles.inputIcon} size={18} />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    autoFocus
                  />
                </div>
                <div className={styles.passwordStrength}>
                  <div 
                    className={styles.strengthBar} 
                    style={{ 
                      width: `${getPasswordStrength()}%`,
                      backgroundColor: getStrengthColor()
                    }} 
                  />
                </div>
                <span style={{ fontSize: '0.75rem', color: var(--text-muted), fontWeight: 600 }}>
                  {getPasswordStrength() <= 33 && 'Weak'}
                  {getPasswordStrength() > 33 && getPasswordStrength() <= 66 && 'Medium'}
                  {getPasswordStrength() > 66 && 'Strong'}
                </span>
              </div>

              <div className={styles.aiWelcome}>
                <div className={styles.aiIcon}>
                  <Sparkles size={16} />
                </div>
                <p>AI generated: &quot;Welcome {formData.name.split(' ')[0]}! We&apos;re preparing your personalized dashboard with custom product picks.&quot;</p>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>Create Account <CheckCircle2 size={20} /></>
                )}
              </button>
              
              <button 
                type="button" 
                className={styles.textBtn} 
                onClick={() => setStep(1)}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                Back to Details
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <div className={styles.footer}>
        Already have an account? 
        <Link href="/login" className={styles.footerLink}>Sign in</Link>
      </div>
    </motion.div>
  );
}
