import type { Metadata } from 'next';
import MiaClient from '@/components/MiaClient';

export const metadata: Metadata = {
  title: 'MIA AI Voice Agent | Calgary\'s 24/7 AI Receptionist',
  description: 'Never miss a Calgary customer call again. MIA is your AI receptionist that answers every call, books appointments, and follows up with leads 24/7. Start your free trial today.',
  alternates: { canonical: 'https://zirka.solutions/mia' },
  openGraph: {
    title: 'MIA AI Voice Agent | Calgary\'s 24/7 AI Receptionist',
    description: 'The AI receptionist for Calgary businesses. Answers calls, books appointments, and follows up 24/7.',
    url: 'https://zirka.solutions/mia',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'MIA AI Voice Agent' }],
  },
};

export default function MiaLandingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will MIA sound like a robot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. MIA uses advanced conversational AI that sounds natural and professional. Most callers don't realize they're speaking with an AI."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can MIA be set up for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MIA can be live and answering your calls within 24 hours. Our team handles all the configuration."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. No contracts, no cancellation fees. We also offer a 30-day money-back guarantee."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MIA AI Voice Agent",
    "description": "24/7 AI Receptionist for Calgary businesses. Answers calls, books appointments, and follows up with leads.",
    "image": "https://zirka.solutions/images/zirka-og.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Zirka Solutions"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://zirka.solutions/mia",
      "priceCurrency": "CAD",
      "price": "149.00",
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
      <MiaClient />
    </>
  );
}
