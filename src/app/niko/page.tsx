import type { Metadata } from 'next';
import NikoClient from '@/components/NikoClient';

export const metadata: Metadata = {
  title: 'NIKO — AI Sales Outreach Agent (Coming Soon)',
  description: 'NIKO finds leads, writes personalized emails, and follows up automatically. AI-powered sales outreach for Calgary businesses.',
  alternates: { canonical: 'https://zirka.solutions/niko' },
};

export default function NikoPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NIKO — AI Sales Outreach Agent",
    "description": "New Clients Found and Contacted For You. AI-powered lead generation and outreach for Calgary businesses.",
    "brand": {
      "@type": "Brand",
      "name": "Zirka Solutions"
    },
    "offers": {
      "@type": "Offer",
      "price": "399.00",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/PreOrder"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does NIKO find leads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NIKO uses a combination of industry-leading B2B databases and live web scraping to find companies that meet your specific criteria."
        }
      },
      {
        "@type": "Question",
        "name": "Will my email get blacklisted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. NIKO uses specialized warm-up techniques and secondary domains to protect your primary business email."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <NikoClient />
    </>
  );
}
