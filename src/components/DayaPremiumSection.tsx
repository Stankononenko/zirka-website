'use client';

import Link from 'next/link';
import { Video, CheckCircle, Wand2, Sparkles, Play, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function DayaPremiumSection() {
  return (
    <section className="section-spacing" style={{ backgroundColor: '#030712', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Background glow specific to Daya (Purple/A855F7) */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
        filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ 
              display: 'inline-block', padding: '6px 16px', borderRadius: 100,
              backgroundColor: 'rgba(168, 85, 247, 0.1)', color: '#A855F7',
              fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
              marginBottom: 16, border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              Flagship Video Product
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', marginBottom: 16, lineHeight: 1.1 }}>
              Meet <span style={{ color: '#A855F7' }}>Daya.</span> <br className="nav-desktop" /> Your AI Digital Twin for Video.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 640, margin: '0 auto' }}>
              One 30-minute recording session gives you infinite video content. Your face, your voice, professional results—without ever filming again. For just <strong style={{color: 'white'}}>from $249/month.</strong>
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/daya" className="btn-primary" style={{ padding: '12px 24px', backgroundColor: '#A855F7', borderColor: '#A855F7' }}>
                Learn More About Daya
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 48, alignItems: 'center' 
        }}>
          
          {/* Left Column: AI Video Visualizer Simulation */}
          <AnimateOnScroll delay={0.1}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
              display: 'flex', flexDirection: 'column',
              height: 480, position: 'relative'
            }}>
              {/* Header */}
              <div style={{ 
                padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'linear-gradient(to right, rgba(168, 85, 247, 0.1), transparent)',
                zIndex: 2
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'linear-gradient(135deg, #A855F7, #7C3AED)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Video color="white" size={16} />
                  </div>
                  <div>
                    <h3 style={{ color: 'white', fontSize: 14, fontWeight: 600, margin: 0 }}>Daya Studio</h3>
                    <p style={{ color: '#A855F7', fontSize: 11, margin: 0 }}>Rendering Avatar...</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981' }} />
                </div>
              </div>

              {/* Central Video Simulation */}
              <div style={{ 
                flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,0,0,0.3)'
              }}>
                <div style={{ 
                  width: '90%', height: '85%', borderRadius: 16, border: '1px dashed rgba(168, 85, 247, 0.3)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(168, 85, 247, 0.05)'
                }}>
                  <div className="avatar-pulse" style={{
                    width: 120, height: 120, borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(124, 58, 237, 0.2))',
                    border: '2px solid rgba(168, 85, 247, 0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20
                  }}>
                    <Wand2 size={40} color="#A855F7" />
                  </div>
                  <div style={{ width: '60%', height: 8, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
                    <div className="render-progress" style={{ height: '100%', backgroundColor: '#A855F7', width: '0%' }} />
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 12 }}>Syncing voice with lip movements...</p>
                </div>
              </div>

              {/* Bottom Controls */}
              <div style={{ padding: 16, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', gap: 12 }}>
                <div style={{ flex: 1, height: 32, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }} />
                <div style={{ width: 60, height: 32, borderRadius: 6, backgroundColor: '#A855F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={14} color="white" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Copy */}
          <AnimateOnScroll delay={0.2}>
            <div>
              <h3 style={{ fontSize: 28, color: 'white', fontFamily: 'var(--font-heading)', marginBottom: 20 }}>
                High-Converting Video. <br /> Zero Production Effort.
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Professional reels & TikToks in 24-48 hours',
                  'Perfectly replicated face, expressions & voice',
                  'Multilingual support (speak 50+ languages instantly)',
                  'Unlimited revisions until you are 100% happy'
                ].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'var(--text-muted)', fontSize: 16 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#A855F7', marginTop: 8, flexShrink: 0, boxShadow: '0 0 10px #A855F7' }} />
                    <span style={{ lineHeight: 1.5 }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div style={{
                backgroundColor: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: 16, padding: 24, position: 'relative', overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', backgroundColor: '#A855F7' }} />
                <h4 style={{ fontSize: 18, color: 'white', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sparkles size={18} color="#A855F7" /> Ready to Scale Your Content?
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 20 }}>
                  Join other Calgary business owners who have eliminated the filming grind with DAYA.
                </p>
                <Link href="/contact" className="btn-primary" style={{ padding: '12px 24px', backgroundColor: '#A855F7', borderColor: '#A855F7', width: '100%', textAlign: 'center' }}>
                  Create My AI Avatar
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseAvatar {
          0% { transform: scale(1); opacity: 1; border-color: rgba(168, 85, 247, 0.5); }
          100% { transform: scale(1.05); opacity: 0.8; border-color: rgba(168, 85, 247, 0.8); }
        }
        .avatar-pulse { animation: pulseAvatar 2s infinite alternate ease-in-out; }
        
        @keyframes renderLine {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .render-progress { animation: renderLine 4s infinite linear; }
      `}} />
    </section>
  );
}
