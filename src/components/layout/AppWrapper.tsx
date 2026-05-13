'use client';
import React from 'react';
import GlobalSidebar from "./GlobalSidebar";
import Navbar from "./Navbar";
import dynamic from 'next/dynamic';

const AIAssistant = dynamic(() => import('@/components/ui/AIAssistant'), {
  ssr: false
});

export default function AppWrapper({ children }: { children: React.ReactNode }) {
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
