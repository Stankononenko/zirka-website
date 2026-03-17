import type { Metadata } from 'next';
import AriaClient from '@/components/AriaClient';

export const metadata: Metadata = {
  title: 'ARIA — AI Chat Agent for Calgary Business Websites',
  description: 'ARIA captures leads from your website 24/7. AI chat that answers questions, collects contact info, and books appointments. $99/month. Free 14-day trial.',
  alternates: { canonical: 'https://zirka.solutions/aria' },
  openGraph: {
    title: 'ARIA — AI Chat Agent',
    description: 'ARIA captures leads from your website 24/7. Answers questions, collects info, and books appointments. For just $99/month.',
    url: 'https://zirka.solutions/aria',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'ARIA — AI Chat Agent' }],
  },
};

export default function AriaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How hard is it to install ARIA on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Easy — it's one line of code that we install for you. Works on WordPress, Wix, Squarespace, Shopify, or any custom website. Most installations take under 5 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Will ARIA sound robotic or generic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We train ARIA specifically on your business — your services, your prices, your hours, your FAQs. She answers as if she's been working at your front desk for years."
        }
      },
      {
        "@type": "Question",
        "name": "Does ARIA work on mobile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. ARIA's chat window is fully responsive and works perfectly on phones, tablets, and desktops."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ARIA — AI Chat Agent",
    "description": "24/7 AI chat agent for websites. Captures leads, answers questions, and books appointments automatically.",
    "brand": {
      "@type": "Brand",
      "name": "Zirka Solutions"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://zirka.solutions/aria",
      "priceCurrency": "CAD",
      "price": "99.00",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Zirka Solutions"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <AriaClient />
    </>
  );
}
