import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Careers at Zirka Solutions | Join Our Calgary Team',
  description: 'Explore career opportunities at Zirka Solutions. We are growing our Calgary-based growth and operations consulting team. Check back for open positions.',
  alternates: { canonical: 'https://zirka.solutions/careers' },
  openGraph: {
    title: 'Careers at Zirka Solutions | Join Our Calgary Team',
    description: 'Explore career opportunities at Zirka Solutions in Calgary.',
    url: 'https://zirka.solutions/careers',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Careers at Zirka Solutions Calgary' }],
  },
};

export default function CareersPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 64 }}>
        <div className="container-main" style={{ maxWidth: 640, textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 5vw, 52px)',
            color: 'var(--text-heading)',
            marginBottom: 16,
          }}>
            We&apos;re Growing
          </h1>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: 18,
            lineHeight: 1.7,
            marginBottom: 32,
          }}>
            Zirka Solutions is always looking for talented people who are passionate about helping Calgary businesses grow. We don&apos;t have open positions right now, but check back soon — or reach out directly.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '16px 28px', fontSize: 16 }}>
            Get in Touch
          </Link>
        </div>
      </section>

      <CTABanner
        heading="Know someone who'd be a great fit?"
        subheading="Send them our way. We're building a team of operators, marketers, and builders."
        buttonText="Contact Us"
        buttonHref="/contact"
        note=""
      />
    </>
  );
}
