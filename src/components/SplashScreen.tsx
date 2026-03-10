'use client';

import { useEffect, useRef, useState } from 'react';

export default function SplashScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Check session flag
    if (sessionStorage.getItem('zirka-splash-shown')) return;

    setShow(true);
    sessionStorage.setItem('zirka-splash-shown', '1');

    // Dynamic import GSAP
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline({
        onComplete: () => setShow(false),
      });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        )
        .to(overlayRef.current, {
          y: '-100%',
          duration: 0.6,
          ease: 'power3.inOut',
          delay: 0.1,
        });
    });
  }, []);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0B0D12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
      aria-hidden="true"
    >
      <div
        ref={logoRef}
        style={{
          opacity: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{
          width: 48, height: 48,
          background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
          borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, fontWeight: 700, color: '#F8FAFC',
          fontFamily: "'Space Grotesk', sans-serif",
        }}>Z</span>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 32,
          fontWeight: 700,
          color: '#F8FAFC',
        }}>Zirka Solutions</span>
      </div>
      <p
        ref={taglineRef}
        style={{
          opacity: 0,
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          color: '#94A3B8',
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}
      >
        Growth & Operations Partner
      </p>
    </div>
  );
}
