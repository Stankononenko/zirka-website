import type { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Free Calgary Growth Audit',
  description: "Get in touch with Zirka Solutions. Book your free growth audit, get a custom quote, or ask an inquiry. Calgary's trusted growth & operations partner.",
  alternates: { canonical: 'https://zirka.solutions/contact' },
  openGraph: {
    title: 'Contact Us | Free Calgary Growth Audit',
    description: "Book your free growth audit with Zirka Solutions today.",
    url: 'https://zirka.solutions/contact',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Contact Zirka Solutions' }],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://zirka.solutions/contact" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactClient />
    </>
  );
}
