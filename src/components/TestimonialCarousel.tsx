'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

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
          overflow: 'hidden',
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

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={prefersReducedMotion ? undefined : slideVariants}
            initial={prefersReducedMotion ? undefined : "enter"}
            animate="center"
            exit={prefersReducedMotion ? undefined : "exit"}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
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
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            aria-label={`Go to testimonial ${i + 1}`}
            animate={{
              width: i === current ? 28 : 10,
              opacity: i === current ? 1 : 0.4,
              scale: i === current ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
            style={{
              height: 10,
              borderRadius: 5,
              border: 'none',
              backgroundColor: i === current ? 'var(--accent)' : 'var(--border-color)',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
