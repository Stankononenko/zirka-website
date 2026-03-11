'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies, industries, serviceFilters } from '@/data/caseStudies';
import ScrollReveal from '@/components/ScrollReveal';
import CTABanner from '@/components/CTABanner';

export default function ResultsPage() {
  const [industryFilter, setIndustryFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');

  const filtered = caseStudies.filter((cs) => {
    const matchIndustry = industryFilter === 'All' || cs.industry === industryFilter;
    const matchService = serviceFilter === 'All' || cs.serviceTags.includes(serviceFilter);
    return matchIndustry && matchService;
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Results", item: "https://zirka.solutions/results" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 64 }}>
        <div className="container-main" style={{ maxWidth: 720 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--text-heading)', marginBottom: 16 }}>
            Client Success Stories
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 20, lineHeight: 1.7, marginBottom: 12 }}>
            Real businesses. Real numbers. Real growth.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, fontStyle: 'italic', opacity: 0.8 }}>
            Client names are anonymized to protect privacy. All results are based on real engagements.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container-main">
          {/* Filters */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 8 }}>Industry</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setIndustryFilter(ind)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      border: '1px solid var(--border-color)',
                      backgroundColor: industryFilter === ind ? 'var(--accent)' : 'transparent',
                      color: industryFilter === ind ? '#F8FAFC' : 'var(--text-muted)',
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      minHeight: 36,
                    }}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 8 }}>Service</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {serviceFilters.map((sf) => (
                  <button
                    key={sf}
                    onClick={() => setServiceFilter(sf)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      border: '1px solid var(--border-color)',
                      backgroundColor: serviceFilter === sf ? 'var(--accent)' : 'transparent',
                      color: serviceFilter === sf ? '#F8FAFC' : 'var(--text-muted)',
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      minHeight: 36,
                    }}
                  >
                    {sf}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="results-grid">
            {filtered.map((cs, i) => (
              <ScrollReveal key={cs.id} delay={i * 0.08}>
                <div style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: 180,
                    backgroundColor: 'var(--bg-elevated)',
                    overflow: 'hidden',
                    position: 'relative',
                  }} role="img" aria-label={`${cs.client} case study image`}>
                    <img src={cs.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <h2 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 22,
                      color: 'var(--text-heading)',
                      marginBottom: 8,
                    }}>
                      {cs.headlineMetric}
                    </h2>
                    <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>
                      {cs.summary}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                      {cs.serviceTags.map((tag) => (
                        <span key={tag} style={{
                          padding: '4px 10px',
                          borderRadius: 4,
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--accent)',
                          fontSize: 11,
                          fontWeight: 500,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href="/results" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      Read Full Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 16, padding: '40px 0' }}>
              No case studies match the selected filters.
            </p>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
