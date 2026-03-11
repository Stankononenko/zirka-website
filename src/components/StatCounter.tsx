'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || hasAnimated) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated, prefersReducedMotion]);

  const animateValue = () => {
    // Extract numeric part and prefix/suffix
    const match = value.match(/^([^0-9]*)(\d+\.?\d*)(.*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes('.');
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;

      if (isFloat) {
        setDisplayed(`${prefix}${current.toFixed(1)}${suffix}`);
      } else {
        setDisplayed(`${prefix}${Math.round(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 36,
        fontWeight: 800,
        color: 'var(--text-heading)',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      }}>
        {displayed}
      </div>
      <div style={{
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 4,
      }}>
        {label}
      </div>
    </div>
  );
}
