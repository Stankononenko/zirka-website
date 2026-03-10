'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MobileBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCTA = document.getElementById('hero-cta');
    const footerCTA = document.getElementById('footer-cta');
    if (!heroCTA) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'hero-cta') {
            setVisible((prev) => !entry.isIntersecting && prev !== !entry.isIntersecting ? !entry.isIntersecting : prev);
            if (entry.isIntersecting) setVisible(false);
            else setVisible(true);
          }
          if (entry.target.id === 'footer-cta' && entry.isIntersecting) {
            setVisible(false);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(heroCTA);
    if (footerCTA) observer.observe(footerCTA);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="mobile-bottom-cta"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: '8px 16px',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        transition: 'transform 0.3s ease',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <Link
        href="/contact"
        className="btn-primary"
        style={{
          width: '100%',
          height: 48,
          textAlign: 'center',
          fontSize: 15,
        }}
      >
        Get Free Growth Audit
      </Link>
    </div>
  );
}
