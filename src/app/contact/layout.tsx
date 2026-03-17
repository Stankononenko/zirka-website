import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Free Growth Audit | Contact Us',
  description: "Get in touch with Zirka Solutions. Book a free growth audit, request a custom quote, or send us a message. Calgary's operator-first growth and operations partner.",
  alternates: { canonical: 'https://zirka.solutions/contact' },
  openGraph: {
    title: 'Book a Free Growth Audit | Contact Zirka Solutions',
    description: "Book a free growth audit with Zirka Solutions in Calgary.",
    url: 'https://zirka.solutions/contact',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Contact Zirka Solutions Calgary' }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
