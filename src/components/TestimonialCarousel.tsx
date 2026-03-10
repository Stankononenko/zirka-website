'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Client testimonials"
      aria-roledescription="carousel"
    >
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 12,
          padding: '40px 32px',
          maxWidth: 720,
          margin: '0 auto',
          position: 'relative',
          minHeight: 280,
        }}
        role="group"
        aria-roledescription="slide"
        aria-label={`Testimonial ${current + 1} of ${testimonials.length}`}
      >
        {/* Quote mark */}
        <span style={{
          position: 'absolute',
          top: 16,
          left: 24,
          fontFamily: 'var(--font-heading)',
          fontSize: 80,
          color: 'rgba(59, 130, 246, 0.2)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>&ldquo;</span>

        <p style={{
          color: 'var(--text-body)',
          fontSize: 17,
          fontStyle: 'italic',
          lineHeight: 1.7,
          marginBottom: 24,
          marginTop: 24,
        }}>
          {t.quote}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Headshot placeholder */}
          <div style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: 'var(--bg-elevated)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading)',
            fontSize: 18,
            color: 'var(--accent)',
          }}>
            {t.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 15 }}>{t.name}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>{t.title}, {t.company}</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              border: 'none',
              backgroundColor: i === current ? 'var(--accent)' : 'var(--border-color)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
