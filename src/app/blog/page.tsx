'use client';

import { useState } from 'react';
import { blogPosts, blogCategories } from '@/data/blogPosts';
import ScrollReveal from '@/components/ScrollReveal';
import CTABanner from '@/components/CTABanner';

export default function BlogPage() {
  const [category, setCategory] = useState('All');
  const filtered = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://zirka.solutions/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 40 }}>
        <div className="container-main" style={{ maxWidth: 720 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--text-heading)', marginBottom: 16 }}>
            Blog
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.7 }}>
            Actionable insights on marketing, SEO, AI automation, and operations for Calgary business owners.
          </p>
        </div>
      </section>

      {/* Filters + Posts */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container-main">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: '1px solid var(--border-color)',
                  backgroundColor: category === cat ? 'var(--accent)' : 'transparent',
                  color: category === cat ? '#F8FAFC' : 'var(--text-muted)',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  minHeight: 36,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="blog-grid">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <article style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    height: 200,
                    backgroundColor: 'var(--bg-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }} role="img" aria-label={`Featured image for article: ${post.title}`}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>Featured Image</span>
                    <span style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      padding: '4px 10px',
                      borderRadius: 4,
                      backgroundColor: 'var(--accent)',
                      color: '#F8FAFC',
                      fontSize: 11,
                      fontWeight: 600,
                    }}>
                      {post.category}
                    </span>
                  </div>
                  <div style={{ padding: 24 }}>
                    <h2 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 18,
                      color: 'var(--text-heading)',
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}>
                      {post.title}
                    </h2>
                    <p style={{
                      color: 'var(--text-muted)',
                      fontSize: 14,
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontSize: 13,
                      color: 'var(--text-muted)',
                    }}>
                      <span>{new Date(post.date).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
