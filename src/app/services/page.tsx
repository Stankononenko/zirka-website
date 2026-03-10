import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code } from 'lucide-react';
import { services } from '@/data/services';
import ScrollReveal from '@/components/ScrollReveal';
import CTABanner from '@/components/CTABanner';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code,
};

export const metadata: Metadata = {
  title: 'Our Services | Marketing, AI, Operations & More',
  description: 'Nine specialized services under one roof — social media, SEO, Google Ads, photo/video, AI automation, consulting, operations, recruiting, and web development.',
  alternates: { canonical: 'https://zirka.solutions/services' },
  openGraph: {
    title: 'Our Services | Marketing, AI, Operations & More | Zirka Solutions',
    description: 'Nine specialized services under one roof.',
    url: 'https://zirka.solutions/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://zirka.solutions/services" },
    ],
  };

  const clusters = [
    {
      name: 'Marketing',
      color: 'var(--accent)',
      services: services.filter((s) => s.cluster === 'marketing'),
      connections: ['SMM ↔ SEO ↔ Google Ads ↔ Photo/Video'],
    },
    {
      name: 'Technology',
      color: 'var(--accent-cyan)',
      services: services.filter((s) => s.cluster === 'technology'),
      connections: ['Web Dev ↔ AI Automation'],
    },
    {
      name: 'Operations',
      color: 'var(--accent-gold)',
      services: services.filter((s) => s.cluster === 'operations'),
      connections: ['Growth Consulting ↔ Ops Optimization ↔ Recruiting'],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 64 }}>
        <div className="container-main" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--text-heading)', marginBottom: 16 }}>
            Our Services
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.7 }}>
            Nine specialized services. One growth partner. No coordination headaches.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="services-grid">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <ScrollReveal key={service.slug} delay={i * 0.06}>
                  <Link href={`/services/${service.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%', backgroundColor: 'var(--bg-elevated)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {Icon && <Icon size={22} color="var(--accent)" />}
                      </div>
                      <h2 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-heading)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                        {service.name}
                      </h2>
                      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, margin: 0, flex: 1 }}>
                        {service.shortDescription}
                      </p>
                      <span style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                        Explore {service.name} <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Better Together */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--text-heading)', marginBottom: 12 }}>
                Better Together
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
                Our services are designed to interconnect. When they work together, the results multiply.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }} className="clusters-grid">
            {clusters.map((cluster, ci) => (
              <ScrollReveal key={cluster.name} delay={ci * 0.15}>
                <div style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 12,
                  padding: 32,
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 20,
                    color: cluster.color,
                    marginBottom: 8,
                  }}>
                    {cluster.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 20, fontFamily: 'monospace' }}>
                    {cluster.connections[0]}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cluster.services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        style={{
                          padding: '8px 16px',
                          borderRadius: 6,
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-body)',
                          fontSize: 13,
                          fontWeight: 500,
                          transition: 'all 0.2s',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        {s.name}
                      </Link>
                    ))}
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
