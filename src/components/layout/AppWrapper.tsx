'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import GlobalSidebar from "./GlobalSidebar";
import Navbar from "./Navbar";

const AIAssistant = dynamic(() => import('@/components/ui/AIAssistant'), {
  ssr: false
});

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCustomLayoutPage = pathname === '/categories/grocery' || 
                             pathname === '/categories/mobiles' || 
                             pathname === '/categories/electronics' ||
                             pathname === '/categories/fashion' ||
                             pathname === '/categories/beauty';

  if (isCustomLayoutPage) {
    return (
      <div className="app-container" style={{ padding: 0 }}>
        <main style={{ flex: 1, height: '100vh', overflow: 'hidden' }}>
          {children}
        </main>
        <AIAssistant />
      </div>
    );
  }

  return (
    <div className="app-container">
      <GlobalSidebar />
      <div className="main-viewport">
        <Navbar />
        <main className="page-content">
          {children}
        </main>
      </div>
      <AIAssistant />
    </div>
  );
}
