'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Code, Globe, Sparkles, Loader2 } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import styles from './auth.module.css';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, setError } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    
    await login(formData.email);
    router.push('/account');
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
        <h1>Welcome Back</h1>
        <p>Sign in to your premium commerce ecosystem</p>
      </div>

      {error && (
        <motion.div 
          className={styles.errorAlert}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          {error}
        </motion.div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
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
          <label>Password</label>
          <div className={styles.inputWrapper}>
            <Lock className={styles.inputIcon} size={18} />
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button 
              type="button" 
              className={styles.eyeBtn}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className={styles.formMeta}>
          <label className={styles.rememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <Link href="/login/forgot" className={styles.forgotLink}>Forgot password?</Link>
        </div>

        <button className={styles.submitBtn} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>Sign In <ArrowRight size={20} /></>
          )}
        </button>
      </form>

      <div className={styles.divider}>or continue with</div>

      <div className={styles.socialGrid}>
        <button className={styles.socialBtn}>
          <Globe size={18} /> Google
        </button>
        <button className={styles.socialBtn}>
          <Code size={18} /> GitHub
        </button>
      </div>

      <div className={styles.footer}>
        Don&apos;t have an account? 
        <Link href="/signup" className={styles.footerLink}>Sign up</Link>
      </div>
    </motion.div>
  );
}
