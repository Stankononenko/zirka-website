'use client';

import { useState, useEffect, useCallback } from 'react';
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
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      filter: 'blur(4px)',
    }),
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Client testimonials"
      aria-roledescription="carousel"
      style={{ padding: '0 20px' }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: 880,
          margin: '0 auto',
          minHeight: 340,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        role="group"
        aria-roledescription="slide"
        aria-label={`Testimonial ${current + 1} of ${testimonials.length}`}
      >
        {/* Huge subtle quote mark */}
        <span style={{
          position: 'absolute',
          top: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-heading)',
          fontSize: 240,
          color: 'var(--bg-elevated)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          opacity: 0.5,
        }}>&ldquo;</span>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={prefersReducedMotion ? undefined : slideVariants}
            initial={prefersReducedMotion ? undefined : "enter"}
            animate="center"
            exit={prefersReducedMotion ? undefined : "exit"}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // smooth ease out
            style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
          >
            <p style={{
              color: 'var(--text-heading)',
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              lineHeight: 1.4,
              marginBottom: 40,
              fontWeight: 500,
            }}>
              &quot;{t.quote}&quot;
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: 18, marginBottom: 4 }}>{t.name}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 15, letterSpacing: 0.5 }}>{t.title}, <span style={{ color: 'var(--text-body)' }}>{t.company}</span></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 40 }}>
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            aria-label={`Go to testimonial ${i + 1}`}
            animate={{
              width: i === current ? 40 : 12,
              opacity: i === current ? 1 : 0.4,
              backgroundColor: i === current ? 'var(--accent)' : 'var(--text-muted)',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              height: 4,
              borderRadius: 2,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
