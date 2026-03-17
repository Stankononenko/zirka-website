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
import TiltCard from '@/components/TiltCard';
import PromotionalOffers from '@/components/PromotionalOffers';
import AiProductsSection from '@/components/AiProductsSection';
import HeroSpline from '@/components/HeroSpline';

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
  title: 'Calgary Marketing & Growth Agency',
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
    email: "info@zirka.solutions",
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
    founder: [
      {
        "@type": "Person",
        name: "Anastasiia Sukhostavets",
        jobTitle: "Co-Founder & Growth Partner",
        sameAs: "https://www.instagram.com/anastasiia.ca/",
      },
      {
        "@type": "Person",
        name: "Stan Kononenko",
        jobTitle: "Co-Founder & Technical Lead",
        sameAs: "https://www.instagram.com/stass_knk/",
      },
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
      <HeroSpline />

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
              <StatCounter value="6" label="AI Products" />
              <StatCounter value="9" label="Specialized Services" />
              <StatCounter value="24/7" label="AI Coverage" />
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
                  <TiltCard maxTilt={5}>
                    <Link href={`/services/${service.slug}`} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 0, height: '100%', padding: 0, overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: 160, position: 'relative', overflow: 'hidden' }}>
                          <Image src={service.image} alt={service.name} fill style={{ objectFit: 'cover' }} quality={70} />
                          <div style={{
                            position: 'absolute', top: 12, left: 12, width: 32, height: 32, borderRadius: '50%',
                            backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)',
                          }}>
                            {Icon && <Icon size={16} color="var(--accent)" />}
                          </div>
                        </div>
                        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                          <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-heading)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                            {service.name}
                          </h3>
                          <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.5, margin: 0, flex: 1 }}>
                            {service.shortDescription}
                          </p>
                          <span style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                            Learn more <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* === AI PRODUCTS SECTION === */}
      <AiProductsSection />

      {/* === PROMOTIONAL OFFERS === */}
      <PromotionalOffers />

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
            <TiltCard maxTilt={3}>
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
                    src="/images/case-study-calgary-dental-revenue-growth.png"
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
                      <strong>Solution:</strong> Comprehensive growth strategy spanning SEO, Google Ads, social media, and Mia (AI voice agent).
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
            </TiltCard>
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
