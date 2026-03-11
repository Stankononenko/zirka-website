'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (sessionStorage.getItem('zirka-splash-shown')) return;

    setShow(true);
    sessionStorage.setItem('zirka-splash-shown', '1');

    // Hard timeout — dismiss after 2.5s no matter what
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#080B12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        animation: 'splashFadeOut 0.5s ease 2s forwards',
      }}
      aria-hidden="true"
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        animation: 'fadeInScale 0.5s ease forwards',
      }}>
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
          fontSize: 32, fontWeight: 700, color: '#F8FAFC',
        }}>Zirka Solutions</span>
      </div>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 16, color: '#94A3B8',
        letterSpacing: 2, textTransform: 'uppercase',
        animation: 'fadeInUp 0.3s ease 0.4s forwards',
        opacity: 0,
      }}>
        Growth & Operations Partner
      </p>
    </div>
  );
}
