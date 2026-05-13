import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import StructuredData from "@/components/ui/StructuredData";

const inter = Inter({ subsets: ["latin"] });

const orgData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ShopKart AI",
  "url": "https://shopkart-ai.vercel.app",
  "logo": "https://shopkart-ai.vercel.app/logo.png"
};


export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: "ShopKart AI | Premium AI-Powered E-commerce Ecosystem",

  description: "Experience the future of commerce with Antigravity Brain. Predictive search, curated luxury products, and frictionless AI-assisted shopping.",
  keywords: ["ecommerce", "AI shopping", "luxury electronics", "smart appliances", "Antigravity AI"],
  authors: [{ name: "Antigravity Team" }],
  openGraph: {
    title: "ShopKart AI | Future of Commerce",
    description: "Premium AI-powered e-commerce ecosystem.",
    url: "https://shopkart-ai.vercel.app",
    siteName: "ShopKart AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShopKart AI Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopKart AI | Premium Commerce",
    description: "AI-powered shopping experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


import GlobalSidebar from "@/components/layout/GlobalSidebar";
import Navbar from "@/components/layout/Navbar";
import dynamic from 'next/dynamic';

const AIAssistant = dynamic(() => import('@/components/ui/AIAssistant'), {
  ssr: false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#EDE8FF" />
      </head>


      <body className={inter.className}>
        <StructuredData data={orgData} />
        <ErrorBoundary>
          <div className="app-container">
            <GlobalSidebar />
            <div className="main-viewport">
              <Navbar />
              <main className="page-content">
                {children}
              </main>
            </div>
          </div>
          <AIAssistant />
        </ErrorBoundary>

        <style jsx global>{`
          .app-container {
            display: flex;
            min-height: 100vh;
            background-color: var(--bg-primary);
          }
          .main-viewport {
            flex: 1;
            margin-left: 300px; /* Sidebar width + spacing */
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .page-content {
            margin-top: 80px; /* Navbar height + spacing */
            flex: 1;
          }
          @media (max-width: 1024px) {
            .main-viewport {
              margin-left: 0;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
