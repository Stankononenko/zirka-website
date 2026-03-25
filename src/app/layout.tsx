import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ExitIntentModal from "@/components/ExitIntentModal";
import PageTransition from "@/components/PageTransition";
import FloatingMiaChat from "@/components/FloatingMiaChat";

import ConditionalLayout from "@/components/ConditionalLayout";

export const metadata: Metadata = {
  metadataBase: new URL('https://zirka.solutions'),
  title: {
    default: "Calgary Marketing & Growth Agency | Zirka Solutions",
    template: "%s | Zirka Solutions",
  },
  description: "Zirka Solutions is Calgary's growth & operations partner. Marketing, SEO, AI automation, web development, and recruiting under one roof. Book your free growth audit.",
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://zirka.solutions',
    siteName: 'Zirka Solutions',
    title: "Calgary Marketing & Growth Agency | Zirka Solutions",
    description: "Zirka Solutions is Calgary's growth & operations partner.",
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Zirka Solutions — Growth & Operations Partner for Calgary Businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Calgary Marketing & Growth Agency | Zirka Solutions",
    description: "Zirka Solutions is Calgary's growth & operations partner. Marketing, SEO, AI automation, web development, and recruiting under one roof.",
    images: ['/images/zirka-og.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://zirka.solutions' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zirka Solutions",
    url: "https://zirka.solutions",
    logo: "https://zirka.solutions/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-587-973-1455",
      contactType: "sales",
      areaServed: "Calgary",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.instagram.com/zirka.solutions/",
      "https://linkedin.com/company/zirkasolutions",
      "https://facebook.com/zirkasolutions",
    ],
  };

  return (
    <html lang="en-CA">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NRBY82SMRK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NRBY82SMRK');
          `}
        </Script>
        <meta name="theme-color" content="#2563EB" />
        <link rel="preload" href="/fonts/Inter-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SpaceGrotesk-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <SplashScreen />
        <ConditionalLayout>
          <main id="main-content">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </ConditionalLayout>
        <ScrollToTop />
        <MobileBottomCTA />
        <FloatingMiaChat />
        <ExitIntentModal />
      </body>
    </html>
  );
}
