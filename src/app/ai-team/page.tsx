import type { Metadata } from 'next';
import AiTeamClient from '@/components/AiTeamClient';

export const metadata: Metadata = {
  title: 'AI Products for Calgary Businesses — MIA, DAYA, ARIA & More',
  description: '6 AI employees that answer calls, create videos, manage reviews, capture leads, and run social media. Built for Calgary small businesses. From $99/month.',
  alternates: { canonical: 'https://zirka.solutions/ai-team' },
  openGraph: {
    title: 'Meet Your AI Team',
    description: 'Six AI employees that never sleep. Answering calls, creating content, managing reviews, and finding leads 24/7.',
    url: 'https://zirka.solutions/ai-team',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Zirka AI Team' }],
  },
};

export default function AiTeamPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Zirka AI Ecosystem",
    "description": "A suite of 6 AI-powered products for business automation and growth.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ARIA — AI Chat Agent",
        "url": "https://zirka.solutions/aria"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "MIA — AI Receptionist",
        "url": "https://zirka.solutions/mia"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SOVA — AI Reputation Manager",
        "url": "https://zirka.solutions/sova"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "DAYA — AI Video Avatar",
        "url": "https://zirka.solutions/daya"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "NIKO — AI Sales Outreach",
        "url": "https://zirka.solutions/niko"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "LUNA — AI Social Media Manager",
        "url": "https://zirka.solutions/luna"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <AiTeamClient />
    </>
  );
}
