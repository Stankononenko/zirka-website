import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTABanner from '@/components/CTABanner';
import { Zap, LayoutGrid, MapPin, BarChart3, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Calgary Growth & Operations Partner',
  description: "Meet Zirka Solutions — Calgary's growth & operations partner. Founded by Anastasiia Sukhostavets and Stan Kononenko. 6 AI products, 9 specialized services under one roof.",
  alternates: { canonical: 'https://zirka.solutions/about' },
  openGraph: {
    title: 'About Us | Calgary Growth & Operations Partner',
    description: 'Meet the founders behind Zirka Solutions — operator-first growth consulting for Calgary businesses.',
    url: 'https://zirka.solutions/about',
    type: 'website',
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'About Zirka Solutions Calgary' }],
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
              src="/images/about_v7.png"
              alt="Zirka Solutions team - Calgary growth and operations consulting"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main" style={{ maxWidth: 720 }}>
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 24 }}>Our Story</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, color: 'var(--text-body)', fontSize: 16, lineHeight: 1.8 }}>
              <p>
                We started Zirka after years of watching Calgary businesses struggle — not because of bad products, but because of bad systems. One of us comes from growth strategy and operations, the other from technology and AI development. Together, we built Zirka to be the growth partner we wished existed — one team with deep expertise across marketing, technology, and operations.
              </p>
              <p>
                When your SEO strategy informs your ads, and your ads inform your web experience, and your operations keep the whole machine running — the results multiply.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Founders */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 40, textAlign: 'center' }}>
              Meet the Founders
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, maxWidth: 900, margin: '0 auto' }} className="founders-grid">
            <AnimateOnScroll delay={0.1}>
              <div style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid rgba(59, 130, 246, 0.10)',
                borderRadius: 12,
                padding: 32,
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
                    src="/images/founder-avatar.png"
                    alt="Anastasiia Sukhostavets - Co-Founder, Zirka Solutions Calgary"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 6 }}>
                  Anastasiia Sukhostavets
                </h3>
                <p style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
                  Co-Founder & Growth Partner
                </p>
                <a href="https://www.instagram.com/anastasiia.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: 13, marginBottom: 16, transition: 'color 0.2s' }}>
                  <Instagram size={16} /> @anastasiia.ca
                </a>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  Growth & operations strategist specializing in marketing, recruiting, and business scaling. Drives client relationships and strategic direction at Zirka.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid rgba(59, 130, 246, 0.10)',
                borderRadius: 12,
                padding: 32,
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
                    alt="Stan Kononenko - Co-Founder, Zirka Solutions Calgary"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 6 }}>
                  Stan Kononenko
                </h3>
                <p style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
                  Co-Founder & Technical Lead
                </p>
                <a href="https://www.instagram.com/stass_knk/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: 13, marginBottom: 16, transition: 'color 0.2s' }}>
                  <Instagram size={16} /> @stass_knk
                </a>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  Technical architect behind Zirka&apos;s AI products and automation systems. Builds the technology that powers MIA, ARIA, DAYA, and the entire AI ecosystem.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 40, textAlign: 'center' }}>
              What We Believe
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, maxWidth: 900, margin: '0 auto' }} className="values-grid">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.name} delay={i * 0.1}>
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
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
