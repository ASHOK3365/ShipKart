'use client';
import React from 'react';
import Navbar from './Navbar';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="global-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
