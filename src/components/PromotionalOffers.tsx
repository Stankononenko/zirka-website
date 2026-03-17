'use client';

import Link from 'next/link';
import { Camera, Code, Share2, ArrowRight, Zap, Gift } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TiltCard from '@/components/TiltCard';

export default function PromotionalOffers() {
  const offers = [
    {
      id: 'website',
      icon: Code,
      title: 'Professional Business Website',
      originalPrice: '$1,900',
      currentPrice: '$800',
      badge: 'Most Popular',
      features: [
        'Custom Premium Design',
        'Mobile-First & SEO Ready',
        'Lightning Fast Load Speeds',
      ],
      bonus: 'FREE Professional Logo Design ($300 value)',
      link: '/services/web-development'
    },
    {
      id: 'photo-video',
      icon: Camera,
      title: 'Photo/Video Production',
      originalPrice: '$1,500',
      currentPrice: '$750',
      badge: '50% OFF',
      features: [
        '1 Full Month of Social Content',
        'High-End Corporate Photography',
        'Cinematic Short-Form Video (Reels/TikTok)',
      ],
      bonus: 'On-site direction & professional editing included',
      link: '/services/photo-video-production'
    },
    {
      id: 'smm',
      icon: Share2,
      title: 'Turnkey SMM Management',
      originalPrice: 'Scale Faster',
      currentPrice: 'from $950/mo',
      badge: '',
      features: [
        'Full Account Management (IG/FB/LinkedIn)',
        'Content Creation & Copywriting',
        'Community Engagement & Posting',
      ],
      bonus: 'Monthly progress reporting & strategy sessions',
      link: '/services/social-media-marketing'
    }
  ];

  return (
    <section className="section-spacing" style={{ backgroundColor: '#0a0f1a', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '100vw', height: '100%', background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: 6, 
              backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-gold)',
              padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16
            }}>
              <Zap size={14} fill="currentColor" /> Limited Time Special Offers
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-heading)', marginBottom: 16, lineHeight: 1.1 }}>
              Premium Quality. <br className="nav-desktop" /> <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>Unbeatable Value.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            const isPopular = offer.badge === 'Most Popular';
            
            return (
              <AnimateOnScroll key={offer.id} delay={i * 0.1}>
                <TiltCard maxTilt={3}>
                  <div style={{
                    backgroundColor: 'var(--bg-card)',
                    border: `1px solid ${isPopular ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.05)'}`,
                    borderRadius: 20,
                    padding: 32,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: isPopular ? '0 20px 40px -10px rgba(59, 130, 246, 0.15)' : 'none'
                  }}>
                    {offer.badge && (
                      <div style={{
                        position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                        backgroundColor: isPopular ? 'var(--accent)' : 'var(--color-error)',
                        color: 'white', padding: '4px 16px', borderRadius: 100,
                        fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1,
                        boxShadow: `0 4px 12px ${isPopular ? 'rgba(59, 130, 246, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`
                      }}>
                        {offer.badge}
                      </div>
                    )}
                    
                    <Icon size={32} color={isPopular ? 'var(--accent)' : 'var(--text-muted)'} style={{ marginBottom: 20 }} />
                    <h3 style={{ fontSize: 22, fontFamily: 'var(--font-heading)', color: 'var(--text-heading)', marginBottom: 12 }}>
                      {offer.title}
                    </h3>
                    
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
                      <span style={{ fontSize: 36, fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1 }}>
                        {offer.currentPrice}
                      </span>
                      {offer.originalPrice !== 'Scale Faster' && (
                        <span style={{ fontSize: 18, color: 'var(--text-muted)', textDecoration: 'line-through', fontWeight: 500 }}>
                          {offer.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {offer.features.map((feature, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--text-body)', fontSize: 15 }}>
                          <CheckIcon color={isPopular ? 'var(--accent)' : 'var(--text-muted)'} />
                          <span style={{ paddingTop: 2 }}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {offer.bonus && (
                      <div style={{ 
                        backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)',
                        padding: '12px 16px', borderRadius: 8, display: 'flex', alignItems: 'flex-start', gap: 10,
                        marginBottom: 24
                      }}>
                        <Gift size={18} color="var(--color-success)" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ color: 'var(--color-success)', fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>
                          {offer.bonus}
                        </span>
                      </div>
                    )}

                    <Link href={offer.link} className={isPopular ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center' }}>
                      Claim Offer <ArrowRight size={16} />
                    </Link>
                  </div>
                </TiltCard>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
