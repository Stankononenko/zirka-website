'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
  note?: string;
}

export default function CTABanner({
  heading = "Ready to Unlock Your Growth Potential?",
  subheading = "Book your free growth audit — we'll identify $50K+ in hidden revenue opportunities.",
  buttonText = "Get Your Free Growth Audit",
  buttonHref = "/contact",
  note = "No commitment. No pressure. Just clarity.",
}: CTABannerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="footer-cta"
      className="section-spacing cta-gradient-bg"
      style={{
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-main" style={{ textAlign: 'center', maxWidth: 640, position: 'relative', zIndex: 1 }}>
        <AnimateOnScroll variant="fadeUp">
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 32,
            color: 'var(--text-heading)',
            marginBottom: 16,
          }}>
            {heading}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fadeUp" delay={0.15}>
          <p style={{
            color: 'var(--text-body)',
            fontSize: 17,
            lineHeight: 1.6,
            marginBottom: 32,
          }}>
            {subheading}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll variant="scaleIn" delay={0.3}>
          <Link href={buttonHref} className="btn-primary btn-shimmer" style={{ padding: '16px 32px', fontSize: 16, position: 'relative', overflow: 'hidden' }}>
            {buttonText}
          </Link>
        </AnimateOnScroll>
        {note && (
          <AnimateOnScroll variant="fadeIn" delay={0.4}>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 16 }}>
              {note}
            </p>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
