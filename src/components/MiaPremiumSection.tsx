'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, CheckCircle, Mic, Activity, ShieldCheck, PlayCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function MiaPremiumSection() {
  const [demoPhone, setDemoPhone] = useState('');
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  const handleDemoCall = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoPhone) return;
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setDemoPhone('');
    }, 6000);
  };

  const handlePlayDemo = () => {
    setIsPlayingDemo(true);
    setTimeout(() => setIsPlayingDemo(false), 5000); // Simulate audio play duration
  };

  return (
    <section className="section-spacing" style={{ backgroundColor: '#030712', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow specific to Mia */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
        filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ 
              display: 'inline-block', padding: '6px 16px', borderRadius: 100,
              backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)',
              fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
              marginBottom: 16, border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              Flagship Voice Product
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', marginBottom: 16, lineHeight: 1.1 }}>
              Meet <span className="gradient-text">Mia.</span> <br className="nav-desktop" /> Your 24/7 AI Voice Agent.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 640, margin: '0 auto' }}>
              Stop losing leads to voicemail. Mia takes your calls, sounds indistinguishable from a human, qualifies prospects, and books meetings directly to your calendar—for just <strong style={{color: 'white'}}>from $149/month.</strong>
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/mia" className="btn-primary" style={{ padding: '12px 24px' }}>
                Learn More About Mia
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 48, alignItems: 'center' 
        }}>
          
          {/* Left Column: AI Voice Visualizer */}
          <AnimateOnScroll delay={0.1}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
              display: 'flex', flexDirection: 'column',
              height: 520, position: 'relative'
            }}>
              {/* Header */}
              <div style={{ 
                padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)',
                zIndex: 2
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                    }}>
                      <Mic color="white" size={24} />
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 2, right: 2, width: 12, height: 12,
                      backgroundColor: 'var(--color-success)', borderRadius: '50%',
                      border: '2px solid #030712'
                    }} />
                  </div>
                  <div>
                    <h3 style={{ color: 'white', fontSize: 16, fontWeight: 600, margin: '0 0 4px 0' }}>Mia Receptionist</h3>
                    <p style={{ color: 'var(--color-success)', fontSize: 13, margin: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <ShieldCheck size={14} /> System Active
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Voice Orb/Visualizer */}
              <div style={{ 
                flex: 1, display: 'flex', flexDirection: 'column', 
                alignItems: 'center', justifyContent: 'center', position: 'relative',
                padding: 40
              }}>
                <div style={{
                  width: 160, height: 160, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.1) 60%, transparent 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: isPlayingDemo ? '0 0 80px rgba(6, 182, 212, 0.6)' : '0 0 40px rgba(59, 130, 246, 0.2)',
                  animation: isPlayingDemo ? 'pulseOrb 1s infinite alternate' : 'pulseOrb 3s infinite alternate',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer'
                }} onClick={handlePlayDemo}>
                   <Activity size={isPlayingDemo ? 80 : 64} color={isPlayingDemo ? '#06B6D4' : 'rgba(255,255,255,0.8)'} style={{ transition: 'all 0.3s' }} />
                </div>
                
                <h4 style={{ color: 'white', fontSize: 24, marginTop: 40, fontFamily: 'var(--font-heading)' }}>
                  {isPlayingDemo ? 'Speaking...' : 'Listening...'}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, textAlign: 'center', marginTop: 12 }}>
                  {isPlayingDemo ? 'Playing a typical call recording.' : 'Click the orb to hear a live demo of Mia answering a call.'}
                </p>

                {/* Simulated Audio Waveform at bottom */}
                <div style={{
                  position: 'absolute', bottom: 32, left: 0, width: '100%',
                  display: 'flex', gap: 4, alignItems: 'flex-end', justifyContent: 'center',
                  height: 40, opacity: isPlayingDemo ? 0.8 : 0.2, transition: 'opacity 0.5s'
                }}>
                  {[...Array(20)].map((_, i) => (
                    <div key={i} style={{
                      width: 6, backgroundColor: 'var(--accent)', borderRadius: 4,
                      height: isPlayingDemo ? `${20 + (i % 5) * 20}%` : '20%',
                      animation: isPlayingDemo ? `bounceAudio 0.8s infinite alternate ${i * 0.05}s` : 'none'
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Copy & Demo Call */}
          <AnimateOnScroll delay={0.2}>
            <div>
              <h3 style={{ fontSize: 28, color: 'white', fontFamily: 'var(--font-heading)', marginBottom: 20 }}>
                Flawless human voice. Infinite patience.
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  '100% human-sounding voice models with natural pacing',
                  'Answers common questions (hours, pricing, location)',
                  'Blocks spam, qualifies leads, and transfers urgent calls',
                  'From $149/month flat rate (Zero payroll taxes or sick days)'
                ].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'var(--text-muted)', fontSize: 16 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent)', marginTop: 8, flexShrink: 0, boxShadow: '0 0 10px var(--accent)' }} />
                    <span style={{ lineHeight: 1.5 }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Demo Call CTA */}
              <div style={{
                backgroundColor: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: 16, padding: 24, position: 'relative', overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', backgroundColor: 'var(--accent)' }} />
                
                {demoSubmitted ? (
                  <div style={{ textAlign: 'center', animation: 'fadeInScale 0.5s ease', padding: '20px 0' }}>
                    <CheckCircle size={48} color="var(--color-success)" style={{ margin: '0 auto 16px' }} />
                    <h4 style={{ fontSize: 18, color: 'white', marginBottom: 8 }}>Mia is calling you!</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Answer your phone to experience the live voice agent.</p>
                  </div>
                ) : (
                  <>
                     <h4 style={{ fontSize: 18, color: 'white', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Phone size={18} color="var(--accent)" /> Request a Live Voice Demo
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 16 }}>
                      Enter your number and Mia will call you right now so you can converse with her natively on your phone.
                    </p>
                    <form onSubmit={handleDemoCall} style={{ display: 'flex', gap: 8 }}>
                      <input 
                        type="tel" 
                        required
                        value={demoPhone}
                        onChange={(e) => setDemoPhone(e.target.value)}
                        placeholder="(403) 555-0199"
                        style={{
                          flex: 1, padding: '12px 16px', borderRadius: 8,
                          backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                          color: 'white', fontSize: 15, outline: 'none'
                        }}
                      />
                      <button type="submit" className="btn-primary" style={{ padding: '12px 20px', whiteSpace: 'nowrap' }}>
                        Call Me
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Tailwind Animations for Voice UI */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseOrb {
          0% { transform: scale(0.95); opacity: 0.8; }
          100% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes bounceAudio {
          0% { height: 10%; }
          100% { height: 100%; }
        }
      `}} />
    </section>
  );
}
