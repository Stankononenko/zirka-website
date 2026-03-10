import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Results | Case Studies & Client Success',
  description: "See real results from Calgary businesses we've helped grow. Case studies with measurable outcomes across marketing, operations, and AI.",
  alternates: { canonical: 'https://zirka.solutions/results' },
  openGraph: {
    title: 'Our Results | Case Studies & Client Success | Zirka Solutions',
    description: 'See real results from Calgary businesses we\'ve helped grow.',
    url: 'https://zirka.solutions/results',
    type: 'website',
  },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
