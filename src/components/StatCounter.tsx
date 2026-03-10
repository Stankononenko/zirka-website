'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Extract numeric part
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) return;

    const targetNum = parseFloat(numMatch[0]);
    const prefix = value.substring(0, value.indexOf(numMatch[0]));
    const suffix = value.substring(value.indexOf(numMatch[0]) + numMatch[0].length);

    setDisplayed(`${prefix}0${suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = targetNum * eased;

            if (Number.isInteger(targetNum)) {
              setDisplayed(`${prefix}${Math.round(current)}${suffix}`);
            } else {
              setDisplayed(`${prefix}${current.toFixed(1)}${suffix}`);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayed(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 36,
        fontWeight: 700,
        color: 'var(--text-heading)',
        lineHeight: 1.2,
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
