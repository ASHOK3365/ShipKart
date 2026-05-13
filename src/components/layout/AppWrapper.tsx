import { usePathname } from 'next/navigation';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGroceryPage = pathname === '/categories/grocery';

  if (isGroceryPage) {
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

