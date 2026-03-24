import type { Metadata } from 'next';
import SovaClient from '@/components/SovaClient';

export const metadata: Metadata = {
  title: 'SOVA — AI Reputation Manager (Coming Soon)',
  description: 'SOVA monitors your reviews, generates AI responses, and grows your Google rating on autopilot. 24/7 reputation management for Calgary businesses.',
  alternates: { canonical: 'https://zirka.solutions/sova' },
};

export default function SovaPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SOVA — AI Reputation Manager",
    "description": "5-Star Reviews on Autopilot. AI-powered reputation management for local businesses.",
    "image": "https://zirka.solutions/images/zirka-og.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Zirka Solutions"
    },
    "offers": {
      "@type": "Offer",
      "price": "149.00",
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
        "name": "Does SOVA post responses automatically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SOVA can be configured for full Auto-Pilot or Co-Pilot mode where you approve drafts with one click."
        }
      },
      {
        "@type": "Question",
        "name": "How does automated review request work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SOVA integrates with your CRM/POS to send SMS review requests to happy customers immediately after service."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SovaClient />
    </>
  );
}
