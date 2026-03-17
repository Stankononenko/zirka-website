import type { Metadata } from 'next';
import ResultsClient from '@/components/ResultsClient';

export const metadata: Metadata = {
  title: 'Client Success Stories | Proven Growth Results',
  description: "Explore Zirka Solutions' client success stories. Real numbers, real growth. See how we help Calgary businesses scale with marketing, AI, and operations.",
  alternates: { canonical: 'https://zirka.solutions/results' },
  openGraph: {
    title: 'Client Success Stories | Proven Growth Results',
    description: "Real numbers, real growth. See how Zirka Solutions helps Calgary businesses scale.",
    url: 'https://zirka.solutions/results',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Zirka Solutions Results' }],
  },
};

export default function ResultsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Results", item: "https://zirka.solutions/results" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ResultsClient />
    </>
  );
}
