import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code } from 'lucide-react';
import { services, getServiceBySlug, getRelatedServices } from '@/data/services';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code,
};

const heroImageMap: Record<string, string> = {
  'social-media-marketing': '/images/svc-social-media.png',
  'photo-video-production': '/images/svc-photo-video.png',
  'seo': '/images/svc-seo.png',
  'google-ads': '/images/svc-google-ads.png',
  'ai-automation': '/images/svc-ai-automation.png',
  'growth-consulting': '/images/svc-business-growth.png',
  'operations-optimization': '/images/svc-operations.png',
  'recruiting-staffing': '/images/svc-recruiting.png',
  'web-development': '/images/svc-web-dev.png',
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.metaTitle} | Zirka Solutions`,
    description: service.metaDescription,
    alternates: { canonical: `https://zirka.solutions/services/${slug}` },
    openGraph: {
      title: `${service.metaTitle} | Zirka Solutions`,
      description: service.metaDescription,
      url: `https://zirka.solutions/services/${slug}`,
      type: 'website',
      images: [{ url: '/images/zirka-og.jpg', width: 1200, height: 630, alt: `Calgary ${service.name} - Zirka Solutions` }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return <div className="container-main section-spacing"><h1>Service Not Found</h1></div>;

  const related = getRelatedServices(service.relatedSlugs);
  const heroImage = heroImageMap[slug];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://zirka.solutions/services" },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://zirka.solutions/services/${slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Zirka Solutions",
      url: "https://zirka.solutions",
    },
    areaServed: "Calgary",
    url: `https://zirka.solutions/services/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 32, position: 'relative', overflow: 'hidden' }}>
        <div className="gradient-mesh" style={{ opacity: 0.5 }} />
        <div className="container-main" style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--text-heading)', marginBottom: 16 }}>
            {service.name}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.7, marginBottom: 32, maxWidth: 600 }}>
            {service.heroTagline}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn-primary">Get Your Free Growth Audit</Link>
            <Link href="/results" className="btn-secondary">See {service.name} Results</Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {heroImage && (
        <section style={{ paddingBottom: 0 }}>
          <div className="container-main">
            <div style={{ width: '100%', height: 320, borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
              <Image src={heroImage} alt={`${service.name} — Zirka Solutions`} fill style={{ objectFit: 'cover' }} priority />
            </div>
          </div>
        </section>
      )}

      {/* Problem / Solution */}
      <section className="section-spacing">
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48 }} className="problem-solution-grid">
            <AnimateOnScroll>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'var(--text-heading)', marginBottom: 24 }}>
                  The Challenge
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {service.challenges.map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-error)', flexShrink: 0, marginTop: 8 }} />
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-heading)', marginBottom: 4, fontFamily: 'var(--font-heading)' }}>{c.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'var(--text-heading)', marginBottom: 24 }}>
                  Our Approach
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {service.solutions.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-success)', flexShrink: 0, marginTop: 8 }} />
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-heading)', marginBottom: 4, fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 40, textAlign: 'center' }}>
              What You Get
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="deliverables-grid">
            {service.deliverables.map((d, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div style={{
                  backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                  borderRadius: 12, padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 8, backgroundColor: 'var(--bg-elevated)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    color: 'var(--accent)', fontSize: 16, fontWeight: 700,
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-heading)', marginBottom: 4, fontFamily: 'var(--font-heading)' }}>{d.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>{d.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 32, maxWidth: 800, margin: '0 auto' }} className="metrics-grid">
              {service.metrics.map((m, i) => (
                <StatCounter key={i} value={m.value} label={m.label} />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main" style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnimateOnScroll>
            <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 12, padding: 32 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, display: 'block' }}>
                CASE STUDY
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'var(--text-heading)', marginBottom: 16 }}>
                {service.caseStudy.headline}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                  <strong>Challenge:</strong> {service.caseStudy.challenge}
                </p>
                <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                  <strong>Solution:</strong> {service.caseStudy.solution}
                </p>
                <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                  <strong>Result:</strong> {service.caseStudy.result}
                </p>
              </div>
              <Link href="/results" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Explore more case studies <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="container-main" style={{ maxWidth: 720, margin: '0 auto' }}>
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-heading)', marginBottom: 32, textAlign: 'center' }}>
              Frequently Asked Questions
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <FAQAccordion items={service.faqs} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'var(--text-heading)', marginBottom: 32, textAlign: 'center' }}>
              Services That Pair Well With {service.name}
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, maxWidth: 900, margin: '0 auto' }} className="related-grid">
            {related.map((r, i) => {
              const Icon = iconMap[r.icon];
              return (
                <AnimateOnScroll key={r.slug} delay={i * 0.1}>
                  <Link href={`/services/${r.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%', backgroundColor: 'var(--bg-elevated)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        {Icon && <Icon size={22} color="var(--accent)" />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-heading)', marginBottom: 4, fontFamily: 'var(--font-heading)' }}>{r.name}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0 }}>{r.shortDescription}</p>
                      </div>
                      <ArrowRight size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Ready to Get Started with ${service.name}?`}
        subheading="Book your free growth audit and discover how this service can transform your business."
      />
    </>
  );
}
