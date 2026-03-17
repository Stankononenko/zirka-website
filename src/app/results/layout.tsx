import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calgary Business Results | Client Case Studies',
  description: "See real results from Calgary businesses we've helped grow. Case studies with measurable outcomes across marketing, operations, and AI automation.",
  alternates: { canonical: 'https://zirka.solutions/results' },
  openGraph: {
    title: 'Calgary Business Results | Client Case Studies | Zirka Solutions',
    description: "See real results from Calgary businesses we've helped grow.",
    url: 'https://zirka.solutions/results',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Zirka Solutions Calgary client results' }],
  },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
