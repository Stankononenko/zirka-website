import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Growth Tips for Calgary Businesses',
  description: 'Actionable insights on marketing, SEO, AI automation, and operations for Calgary business owners. Grow smarter with Zirka Solutions.',
  alternates: { canonical: 'https://zirka.solutions/blog' },
  openGraph: {
    title: 'Blog | Growth Tips for Calgary Businesses | Zirka Solutions',
    description: 'Actionable insights on marketing, SEO, AI automation, and operations for Calgary business owners.',
    url: 'https://zirka.solutions/blog',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
