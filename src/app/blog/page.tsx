import type { Metadata } from 'next';
import BlogClient from '@/components/BlogClient';

export const metadata: Metadata = {
  title: 'Marketing & Operations Blog | Calgary Business Insights',
  description: "Actionable insights on marketing, SEO, AI automation, and operations for Calgary business owners. Stay ahead of the curve with Zirka Solutions.",
  alternates: { canonical: 'https://zirka.solutions/blog' },
  openGraph: {
    title: 'Marketing & Operations Blog | Calgary Business Insights',
    description: "Actionable insights for Calgary business owners on marketing, SEO, AI, and operations.",
    url: 'https://zirka.solutions/blog',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Zirka Solutions Blog' }],
  },
};

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://zirka.solutions/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogClient />
    </>
  );
}
