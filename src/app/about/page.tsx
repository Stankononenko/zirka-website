import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTABanner from '@/components/CTABanner';
import { Zap, LayoutGrid, MapPin, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Zirka Solutions | Calgary Growth & Operations Team',
  description: "Meet the founder behind Zirka Solutions. Builder-operated, operator-minded, growth-obsessed consulting for Calgary businesses.",
  alternates: { canonical: 'https://zirka.solutions/about' },
  openGraph: {
    title: 'About Zirka Solutions | Calgary Growth & Operations Team',
    description: 'Meet the founder behind Zirka Solutions.',
    url: 'https://zirka.solutions/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://zirka.solutions/about" },
    ],
  };

  const values = [
    { icon: Zap, name: 'Execution Over Promises', description: 'We don\'t just advise — we build, launch, and optimize. Real results beat beautiful presentations.' },
    { icon: LayoutGrid, name: 'Systems Thinking', description: 'Every problem is connected. We design solutions that work together, not in isolation.' },
    { icon: MapPin, name: 'Local-First', description: 'Calgary is our home. We understand the local market, the business community, and the opportunities unique to this city.' },
    { icon: BarChart3, name: 'Transparent Results', description: 'No vanity metrics. We report the numbers that matter — revenue, leads, efficiency — with full transparency.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 32 }}>
        <div className="container-main" style={{ maxWidth: 720 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--text-heading)', marginBottom: 16 }}>
            About Us
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 20, lineHeight: 1.7 }}>
            Builder-operated. Operator-minded. Growth-obsessed.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section style={{ paddingBottom: 0 }}>
        <div className="container-main">
          <div style={{
            width: '100%',
            height: 320,
            borderRadius: 12,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <Image
              src="/images/about-hero.jpg"
              alt="Zirka Solutions — modern workspace representing business growth and operations"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main" style={{ maxWidth: 720 }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 24 }}>Our Story</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, color: 'var(--text-body)', fontSize: 16, lineHeight: 1.8 }}>
              <p>
                Zirka Solutions was born from a simple frustration: growing businesses in Calgary shouldn&apos;t need to hire five different agencies, a recruiter, and a consultant just to scale.
              </p>
              <p>
                We built Zirka to be the growth partner we wished existed — one team with deep expertise across marketing, technology, and operations. When your SEO team talks to your ads team, and your ads team talks to your web developer, and your operations consultant understands the whole picture — the results multiply.
              </p>
              <p>
                We&apos;re operators first. We&apos;ve built businesses, scaled teams, and navigated the same challenges our clients face. We don&apos;t sell deliverables — we create measurable outcomes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder */}
      <section className="section-spacing">
        <div className="container-main">
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 40, textAlign: 'center' }}>
              Meet the Founder
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid rgba(59, 130, 246, 0.10)',
              borderRadius: 12,
              padding: 32,
              maxWidth: 520,
              margin: '0 auto',
              textAlign: 'center',
            }}>
              <div style={{
                width: 96, height: 96, borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 20px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                position: 'relative',
              }}>
                <Image
                  src="/images/stan-kononenko.jpg"
                  alt="Stan Kononenko, Founder of Zirka Solutions"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 6 }}>
                Stan Kononenko
              </h3>
              <p style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 600, marginBottom: 16 }}>
                Founder & Growth Partner
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Growth & Operations consultant with experience in marketing, recruiting, AI automation, and business operations. Built Zirka to be the partner he wished existed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main">
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 40, textAlign: 'center' }}>
              What We Believe
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, maxWidth: 900, margin: '0 auto' }} className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.name} delay={i * 0.1}>
                <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid rgba(59, 130, 246, 0.10)', borderRadius: 12, padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 10, backgroundColor: 'var(--bg-elevated)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <v.icon size={22} color="var(--accent)" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'var(--text-heading)', marginBottom: 6 }}>{v.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
