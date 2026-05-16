'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { categoryThemes, defaultTheme } from '@/config/categoryThemes';
import { useThemeStore } from '@/store/themeStore';

export default function CategoryThemeProvider() {
  const pathname = usePathname();
  const setCategoryTheme = useThemeStore((state) => state.setCategoryTheme);

  useEffect(() => {
    // Extract category slug from pathname (e.g. /categories/mobiles -> mobiles)
    const segments = pathname.split('/');
    let currentCategory = 'default';

    if (segments[1] === 'categories' && segments[2]) {
      currentCategory = segments[2];
    } else if (segments[1] === 'product' && segments[2]) {
      // We could ideally fetch product category here, but for now fallback or parse if available in path
      currentCategory = 'default'; // Let's keep product page default unless specified
    }

    const themeConfig = categoryThemes[currentCategory] || defaultTheme;
    setCategoryTheme(currentCategory === 'default' ? null : currentCategory);

    // Apply CSS variables globally for seamless immersive UI transitions
    const root = document.documentElement;
    root.style.setProperty('--primary-accent', themeConfig.primaryColor);
    root.style.setProperty('--secondary-accent', themeConfig.secondaryColor);
    root.style.setProperty('--soft-purple', themeConfig.accentColor); // Keeping variable name backward compatible
    root.style.setProperty('--glow-color', themeConfig.glowColor);
    root.style.setProperty('--bg-primary', themeConfig.bgPrimary);
    root.style.setProperty('--bg-secondary', themeConfig.bgSecondary);
    root.style.setProperty('--card-surface', themeConfig.cardSurface);
    root.style.setProperty('--text-primary', themeConfig.textPrimary);
    root.style.setProperty('--text-secondary', themeConfig.textSecondary);

  }, [pathname, setCategoryTheme]);

  return null; // This is a logic-only provider component
}
