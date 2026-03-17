import type { Metadata } from 'next';
import DayaClient from '@/components/DayaClient';

export const metadata: Metadata = {
  title: 'DAYA — AI Avatar Video Production for Calgary Businesses',
  description: "DAYA creates your AI digital twin and produces unlimited video content on demand. Reels, TikToks, explainers, ads — from $249/month. No reshoots ever.",
  alternates: { canonical: 'https://zirka.solutions/daya' },
  openGraph: {
    title: "DAYA — AI Avatar Video Production | Zirka Solutions",
    description: "Your Face. Your Voice. Unlimited Videos. Zero Shoots. Professional AI video content produced for your Calgary business on demand.",
    url: 'https://zirka.solutions/daya',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'DAYA — AI Video Production' }],
  },
};

export default function DayaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will my AI avatar actually look and sound like me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use advanced AI to replicate your face, expressions, and voice with remarkable accuracy. Most viewers can't tell the difference."
        }
      },
      {
        "@type": "Question",
        "name": "How does the initial recording session work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you're in Calgary, we schedule a 30-minute in-person session. If you're anywhere else, we guide you through a simple remote recording via video call."
        }
      }
      // Add more as needed, but Product schema is more critical
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DAYA — AI Avatar Video Production",
    "description": "Done-for-you AI avatar video production service. We create your digital twin and produce unlimited professional video content on demand.",
    "brand": {
      "@type": "Brand",
      "name": "Zirka Solutions"
    },
    "offers": [
      {
        "@type": "Offer",
        "url": "https://zirka.solutions/daya",
        "price": "249",
        "priceCurrency": "CAD",
        "name": "Starter Plan"
      },
      {
        "@type": "Offer",
        "url": "https://zirka.solutions/daya",
        "price": "499",
        "priceCurrency": "CAD",
        "name": "Growth Plan"
      },
      {
        "@type": "Offer",
        "url": "https://zirka.solutions/daya",
        "price": "899",
        "priceCurrency": "CAD",
        "name": "Scale Plan"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <DayaClient />
    </>
  );
}
