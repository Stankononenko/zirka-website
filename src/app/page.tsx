import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code } from 'lucide-react';
import { services } from '@/data/services';
import ScrollReveal from '@/components/ScrollReveal';
import StatCounter from '@/components/StatCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABanner from '@/components/CTABanner';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code,
};

export const metadata: Metadata = {
  title: 'Calgary Marketing & Growth Agency | Zirka Solutions',
  description: "Zirka Solutions is Calgary's growth & operations partner. Marketing, SEO, AI automation, web development, and recruiting under one roof. Book your free growth audit.",
  alternates: { canonical: 'https://zirka.solutions' },
  openGraph: {
    title: 'Calgary Marketing & Growth Agency | Zirka Solutions',
    description: "Zirka Solutions is Calgary's growth & operations partner.",
    url: 'https://zirka.solutions',
    type: 'website',
  },
};

export default function Home() {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Zirka Solutions",
    url: "https://zirka.solutions",
    telephone: "+1-403-555-1234",
    email: "hello@zirka.solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Centre Street SW",
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "T2G 0B6",
      addressCountry: "CA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.0447, longitude: -114.0719 },
    areaServed: "Calgary",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Growth & Operations Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.shortDescription },
      })),
    },
    sameAs: [
      "https://instagram.com/zirkasolutions",
      "https://linkedin.com/company/zirkasolutions",
      "https://facebook.com/zirkasolutions",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" }],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* === HERO === */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 72 }}>
        <div className="gradient-mesh" />
        <div className="floating-shape floating-shape-1" />
        <div className="floating-shape floating-shape-2" />
        <div className="floating-shape floating-shape-3" />
        <div className="floating-shape floating-shape-4" />

        <div className="container-main" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="hero-content" style={{ maxWidth: 680 }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              borderLeft: '3px solid var(--accent)',
              paddingLeft: 12,
              marginBottom: 24,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}>
              Growth & Operations Consulting
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--text-heading)',
              marginBottom: 20,
              lineHeight: 1.1,
            }}>
              Scale Your Business Without the Growing Pains
            </h1>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: 18,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 560,
            }}>
              Strategic consulting that transforms operational chaos into scalable growth systems. Marketing, AI, recruiting, and operations — all under one roof.
            </p>

            <div id="hero-cta" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '16px 28px' }}>
                Get Your Free Growth Audit
              </Link>
              <Link href="/results" className="btn-secondary" style={{ padding: '16px 28px' }}>
                See Our Results
              </Link>
            </div>

            {/* Client logos */}
            <div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} style={{
                    width: 80, height: 32, borderRadius: 4,
                    backgroundColor: 'rgba(148, 163, 184, 0.1)',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                  }} role="img" aria-label={`Client logo placeholder ${i + 1}`} />
                ))}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Trusted by 50+ Calgary Businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* === SOCIAL PROOF STATS === */}
      <ScrollReveal>
        <section style={{
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          padding: '48px 0',
        }}>
          <div className="container-main">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 32,
            }} className="stats-grid">
              <StatCounter value="50+" label="Clients Served" />
              <StatCounter value="9" label="Services, One Partner" />
              <StatCounter value="4.9" label="★ Google Rating" />
              <StatCounter value="100%" label="Calgary-Born & Operated" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* === SERVICES OVERVIEW === */}
      <section className="section-spacing">
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-heading)', marginBottom: 12 }}>
                Everything You Need to Grow
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
                Nine specialized services that work better together.
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 16,
          }} className="services-grid">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <ScrollReveal key={service.slug} delay={i * 0.08}>
                  <Link href={`/services/${service.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%',
                        backgroundColor: 'var(--bg-elevated)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {Icon && <Icon size={22} color="var(--accent)" />}
                      </div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-heading)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                        {service.name}
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, margin: 0, flex: 1 }}>
                        {service.shortDescription}
                      </p>
                      <span style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                        Learn more about {service.name} <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <ScrollReveal>
        <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-heading)', marginBottom: 12 }}>
                How It Works
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, maxWidth: 900, margin: '0 auto' }} className="steps-grid">
              {[
                { num: '1', title: 'Free Growth Audit', desc: 'We analyze your business, identify bottlenecks, and map your biggest opportunities.' },
                { num: '2', title: 'Custom Strategy', desc: 'You get a tailored growth roadmap with clear priorities, timelines, and expected outcomes.' },
                { num: '3', title: 'Measurable Results', desc: 'We execute, measure, optimize, and scale — reporting real metrics every step.' },
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: '50%',
                      backgroundColor: 'var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700,
                      color: '#F8FAFC', marginBottom: 16,
                    }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, color: 'var(--text-heading)', marginBottom: 8 }}>
                      {step.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 280, lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* === FEATURED CASE STUDY === */}
      <section className="section-spacing">
        <div className="container-main">
          <ScrollReveal>
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 12,
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1fr',
            }} className="case-study-card">
              <div style={{
                aspectRatio: '16/9',
                backgroundColor: 'var(--bg-elevated)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                fontSize: 14,
              }} role="img" aria-label="Case study: Meridian Dental Group revenue growth dashboard">
                Case Study Image
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: 2,
                  textTransform: 'uppercase', color: 'var(--accent)',
                  marginBottom: 12, display: 'block',
                }}>
                  CASE STUDY
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 3vw, 32px)',
                  color: 'var(--text-heading)', marginBottom: 16,
                }}>
                  147% Revenue Growth in 6 Months
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                  <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    <strong>Challenge:</strong> A Calgary dental group had hit a revenue plateau with inconsistent marketing and chaotic operations.
                  </p>
                  <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    <strong>Solution:</strong> Comprehensive growth strategy spanning SEO, Google Ads, social media, and AI voice agents.
                  </p>
                  <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    <strong>Result:</strong> 147% revenue growth, 340% social engagement increase, and 38% more leads via automation.
                  </p>
                </div>
                <Link href="/results" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Read the Full Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-heading)' }}>
                What Calgary Business Owners Say
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* === CTA BANNER === */}
      <CTABanner />
    </>
  );
}
