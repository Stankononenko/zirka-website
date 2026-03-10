import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Zirka Solutions | Free Growth Audit',
  description: "Get in touch with Zirka Solutions. Book a free growth audit, request a quote, or send us a message. Calgary's growth & operations partner.",
  alternates: { canonical: 'https://zirka.solutions/contact' },
  openGraph: {
    title: 'Contact Zirka Solutions | Free Growth Audit | Calgary',
    description: "Get in touch with Zirka Solutions. Book a free growth audit.",
    url: 'https://zirka.solutions/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
