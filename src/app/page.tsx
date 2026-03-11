import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code, MapPin, Snowflake, Network } from 'lucide-react';
import { services } from '@/data/services';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

const homepageFaqs = [
  {
    question: 'What makes Zirka different from a traditional marketing agency?',
    answer: "We're not an agency — we're a Growth & Operations Partner. That means we don't just run your ads or post on social media. We look at your entire business: marketing, operations, team, and systems. Then we build an integrated growth plan where every piece works together. Most agencies optimize one channel. We optimize your whole business.",
  },
  {
    question: 'How quickly can we get started?',
    answer: 'Fast. After your free Growth Audit, we can have a custom strategy ready within 7 business days. Implementation typically starts in week 2. No 3-month onboarding processes or endless kickoff calls.',
  },
  {
    question: 'Do you work with businesses outside Calgary?',
    answer: 'Yes — we serve clients across Canada and the US remotely. Our core focus is Calgary businesses, but our services (especially AI automation, SEO, and consulting) work for any location.',
  },
  {
    question: "What's included in the free Growth Audit?",
    answer: "A 60-minute deep dive into your business. We review your current marketing, operations, team structure, and growth bottlenecks. You leave with a clear picture of your biggest opportunities and a prioritized action plan — whether you work with us or not.",
  },
  {
    question: 'Do you require long-term contracts?',
    answer: "No lock-in contracts. We work month-to-month on most services. We believe in earning your business every month, not trapping you in a contract.",
  },
  {
    question: 'How do you measure success?',
    answer: "Every engagement starts with defining clear KPIs — revenue, leads, cost per acquisition, operational efficiency metrics. We provide monthly reporting and are transparent about what's working and what isn't.",
  },
  {
    question: 'Can you help a business that\'s just starting out?',
    answer: 'Yes, though our sweet spot is businesses doing $500K–$10M in revenue that are ready to scale. Startups are welcome, but we\'re most effective when there\'s already a proven product or service.',
  },
  {
    question: 'What does AI Automation actually look like for a small business?',
    answer: "Practical examples: a voice agent that answers your phones 24/7 and books appointments, automated follow-up sequences for leads that don't close immediately, automated reporting that saves your team 5+ hours per week, or CRM integrations that eliminate manual data entry. We build these specifically for your business — not generic templates.",
  },
];

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
    images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: 'Zirka Solutions — Growth & Operations Partner for Calgary Businesses' }],
  },
};

export default function Home() {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Zirka Solutions",
    url: "https://zirka.solutions",
    telephone: "+1-587-973-1455",
    email: "zirka.calgary@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
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
      "https://www.instagram.com/zirka.solutions/",
      "https://linkedin.com/company/zirkasolutions",
      "https://facebook.com/zirkasolutions",
    ],
    founder: {
      "@type": "Person",
      name: "Anastasiia Sukhostavets",
      jobTitle: "Founder & Growth Partner",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" }],
  };

  const clientNames = ['Restaurant Group', 'Dental Clinic', 'Real Estate Co.', 'Tech Startup', 'Fitness Studio'];

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

        <div className="hero-grid container-main" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, position: 'relative', zIndex: 1, width: '100%', alignItems: 'center' }}>
          <div style={{ maxWidth: 720 }}>
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
              fontSize: 'clamp(40px, 6vw, 64px)',
              color: 'var(--text-heading)',
              marginBottom: 20,
              lineHeight: 1.05,
              fontWeight: 900,
            }}>
              <span className="gradient-text">Scale</span> Your Business Without the Growing Pains
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

            {/* Client name pills */}
            <div>
              <div style={{ display: 'flex', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
                {clientNames.map((name) => (
                  <span key={name} style={{
                    padding: '6px 14px',
                    borderRadius: 20,
                    backgroundColor: 'rgba(148, 163, 184, 0.08)',
                    border: '1px solid rgba(148, 163, 184, 0.12)',
                    color: 'var(--text-muted)',
                    fontSize: 12,
                    fontWeight: 500,
                  }}>
                    {name}
                  </span>
                ))}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Trusted by 36+ Calgary Businesses</p>
            </div>
          </div>

          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 520, margin: '0 auto' }} className="hero-image-wrapper">
            <div style={{
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(59, 130, 246, 0.15)',
              boxShadow: '0 8px 40px rgba(59, 130, 246, 0.12)',
            }}>
              <Image
                src="/images/hero-main.jpg"
                alt="Calgary business growth consulting - Zirka Solutions"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* === SOCIAL PROOF STATS === */}
      <AnimateOnScroll>
        <section style={{
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          padding: '48px 0',
        }}>
          <div className="container-main">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: 32,
            }} className="stats-grid">
              <StatCounter value="36+" label="Clients Served" />
              <StatCounter value="9" label="Services, One Partner" />
              <StatCounter value="5+" label="Years Experience" />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* === SERVICES OVERVIEW === */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-heading)', marginBottom: 12 }}>
                Everything You Need to <span className="gradient-text">Grow</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
                Nine specialized services that work better together.
              </p>
            </div>
          </AnimateOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 16,
          }} className="services-grid">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <AnimateOnScroll key={service.slug} delay={i * 0.08}>
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
                        Learn more <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* === CALGARY'S GROWTH PARTNER === */}
      <AnimateOnScroll>
        <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-heading)', marginBottom: 12 }}>
                Built for <span className="gradient-text">Calgary</span>. Proven in Calgary.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                We don&apos;t work with businesses in 50 cities. We go deep in one — Calgary. That means we know your market, your competition, and what actually moves the needle here.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, maxWidth: 900, margin: '0 auto' }} className="steps-grid">
              {[
                { Icon: MapPin, title: 'NW, SW, SE, NE', desc: 'We cover all Calgary quadrants' },
                { Icon: Snowflake, title: 'Chinook Effect', desc: "We understand Calgary's unique seasonal business cycles" },
                { Icon: Network, title: 'Local Network', desc: 'Direct connections to Calgary Chamber of Commerce ecosystem' },
              ].map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 0.12}>
                  <div style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid rgba(59, 130, 246, 0.10)',
                    borderRadius: 12,
                    padding: 28,
                    textAlign: 'center',
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 12,
                      backgroundColor: 'var(--bg-elevated)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}>
                      <item.Icon size={24} color="var(--accent)" />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, color: 'var(--text-heading)', marginBottom: 6 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* === HOW IT WORKS === */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-heading)', marginBottom: 12 }}>
                How It Works
              </h2>
            </div>
          </AnimateOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, maxWidth: 900, margin: '0 auto' }} className="steps-grid">
            {[
              { num: '1', title: 'Free Growth Audit', desc: 'We analyze your business, identify bottlenecks, and map your biggest opportunities.' },
              { num: '2', title: 'Custom Strategy', desc: 'You get a tailored growth roadmap with clear priorities, timelines, and expected outcomes.' },
              { num: '3', title: 'Measurable Results', desc: 'We execute, measure, optimize, and scale — reporting real metrics every step.' },
            ].map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700,
                    color: '#F8FAFC', marginBottom: 16,
                    boxShadow: '0 0 24px rgba(59, 130, 246, 0.35)',
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
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURED CASE STUDY === */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid rgba(59, 130, 246, 0.10)',
              borderRadius: 12,
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1fr',
            }} className="case-study-card">
              <div style={{
                aspectRatio: '16/9',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <Image
                  src="/images/cs-dental-hero.jpg"
                  alt="Calgary dental clinic 147% revenue growth case study"
                  fill
                  style={{ objectFit: 'cover' }}
                />
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
          </AnimateOnScroll>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-heading)' }}>
                What Calgary Business Owners Say
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <TestimonialCarousel />
          </AnimateOnScroll>
        </div>
      </section>

      {/* === FAQ SECTION === */}
      <section className="section-spacing">
        <div className="container-main" style={{ maxWidth: 720, margin: '0 auto' }}>
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-heading)', marginBottom: 12 }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
                Everything you need to know about working with Zirka
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <FAQAccordion items={homepageFaqs} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homepageFaqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      {/* === CTA BANNER === */}
      <CTABanner />
    </>
  );
}
