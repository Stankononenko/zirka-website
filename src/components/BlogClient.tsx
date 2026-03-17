'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blogPosts';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTABanner from '@/components/CTABanner';

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPosts = activeCategory === 'All' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
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
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: '1px solid var(--border-color)',
                  backgroundColor: activeCategory === cat ? 'var(--accent)' : 'transparent',
                  color: activeCategory === cat ? '#F8FAFC' : 'var(--text-muted)',
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {filteredPosts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div 
                    className="card" 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%',
                      padding: 0,
                      overflow: 'hidden',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 12,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ 
                      height: 200, 
                      position: 'relative', 
                      overflow: 'hidden',
                    }} role="img" aria-label={`Featured image for article: ${post.title}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
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
                        flexWrap: 'wrap',
                        marginBottom: 16,
                      }}>
                        <span>By {post.author}</span>
                        <span>·</span>
                        <span>{new Date(post.date).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div style={{ 
                        marginTop: 'auto', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 4, 
                        color: 'var(--accent)', 
                        fontWeight: 600, 
                        fontSize: 14 
                      }}>
                        Read Article <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
