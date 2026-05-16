'use client';
import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import AmbientOrbSystem from './AmbientOrbSystem';
import FloatingBackground from './FloatingBackground';
import GlobalSidebar from './GlobalSidebar';
import Navbar from './Navbar';
import AIAssistant from '../ui/AIAssistant';
import CategoryThemeProvider from './CategoryThemeProvider';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`app-wrapper ${theme}-theme`}>
      <CategoryThemeProvider />
      <FloatingBackground />
      <AmbientOrbSystem />
      <div className="app-container">
        <GlobalSidebar />
        <div className="main-viewport">
          <Navbar />
          <div className="page-content">
            {children}
          </div>
        </div>
      </div>
      <AIAssistant />
    </div>
  );
}
