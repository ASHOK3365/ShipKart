'use client';
import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import AmbientOrbSystem from './AmbientOrbSystem';
import FloatingBackground from './FloatingBackground';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`app-wrapper ${theme}-theme`}>
      <FloatingBackground />
      <AmbientOrbSystem />
      {children}
    </div>
  );
}
