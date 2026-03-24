import type { Metadata } from 'next';
import LunaClient from '@/components/LunaClient';

export const metadata: Metadata = {
  title: 'LUNA — AI Social Media Manager (Coming Soon)',
  description: 'LUNA creates content plans, writes posts, generates visuals, and publishes to all platforms. AI-powered social media management for Calgary businesses.',
  alternates: { canonical: 'https://zirka.solutions/luna' },
};

export default function LunaPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "LUNA — AI Social Media Manager",
    "description": "Your Social Media, On Autopilot. AI-powered content creation and posting for Calgary businesses.",
    "image": "https://zirka.solutions/images/zirka-og.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Zirka Solutions"
    },
    "offers": {
      "@type": "Offer",
      "price": "299.00",
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
        "name": "Do I get to review the posts before they go live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. LUNA generates your entire monthly calendar in advance for your review and approval before publishing."
        }
      },
      {
        "@type": "Question",
        "name": "Which platforms does LUNA support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LUNA publishes to Instagram, Facebook, LinkedIn, TikTok, and Google Business Profile."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LunaClient />
    </>
  );
}
