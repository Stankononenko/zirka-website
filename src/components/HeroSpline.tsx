'use client';

import Link from 'next/link';
import { Spotlight } from '@/components/ui/spotlight';
import { SplineScene } from '@/components/ui/splite';

export default function HeroSpline() {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden" style={{ backgroundColor: 'rgb(3, 7, 18)' }}>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 16px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }} className="hero-spline-grid">
          {/* Left: Text */}
          <div style={{ flex: 1, position: 'relative', zIndex: 10 }}>
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.1,
              background: 'linear-gradient(to bottom, #fafafa, #a3a3a3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Your AI-Powered Growth Partner in Calgary
            </h1>
            <p style={{ marginTop: 24, color: '#d4d4d4', fontSize: 18, maxWidth: 560, lineHeight: 1.7 }}>
              We build AI employees that answer your phones, capture website leads,
              create video content, and manage your reputation — so you can focus on
              running your business.
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Link href="/contact" style={{
                padding: '12px 32px', backgroundColor: '#2563EB', color: 'white',
                borderRadius: 8, fontWeight: 500, transition: 'background-color 0.2s',
                textDecoration: 'none', display: 'inline-block',
              }}>
                Get Your Free Growth Audit
              </Link>
              <Link href="/ai-team" style={{
                padding: '12px 32px', border: '1px solid rgba(255,255,255,0.2)',
                color: 'white', borderRadius: 8, fontWeight: 500,
                transition: 'border-color 0.2s', textDecoration: 'none', display: 'inline-block',
              }}>
                Meet the AI Team
              </Link>
            </div>
            <p style={{ marginTop: 24, fontSize: 14, color: '#737373' }}>Serving Calgary businesses with AI-powered solutions</p>
          </div>

          {/* Right: Spline 3D (hidden on mobile) */}
          <div className="hero-spline-3d" style={{ flex: 1, position: 'relative', height: 500, display: 'none' }}>
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
