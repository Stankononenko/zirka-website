'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, Phone, Star, Video, Send, Layout, 
  CheckCircle, ArrowRight, Mic, Activity, ShieldCheck, PlayCircle
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const products = [
  {
    id: 'aria',
    name: 'ARIA',
    role: 'AI Chat Agent',
    status: 'LIVE',
    icon: MessageSquare,
    href: '/aria',
    painPoint: 'Losing leads after hours?',
    price: 'From $99/mo',
    stat: 'Replaces: $3,500/mo human chat team'
  },
  {
    id: 'mia',
    name: 'MIA',
    role: 'AI Phone Receptionist',
    status: 'LIVE',
    icon: Phone,
    href: '/mia',
    painPoint: 'Missed calls = Missed money.',
    price: 'From $149/mo',
    stat: 'Replaces: $4,200/mo receptionist'
  },
  {
    id: 'daya',
    name: 'DAYA',
    role: 'AI Video Avatar',
    status: 'LIVE',
    icon: Video,
    href: '/daya',
    painPoint: 'Hate being on camera?',
    price: 'From $249/mo',
    stat: 'Replaces: $2,500 per video production'
  },
  {
    id: 'sova',
    name: 'SOVA',
    role: 'AI Reputation Manager',
    status: 'COMING SOON',
    icon: Star,
    href: '/contact',
    painPoint: 'Negative reviews killing sales?',
    price: 'From $149/mo',
    stat: 'Replaces: $1,200/mo agency fee'
  },
  {
    id: 'luna',
    name: 'LUNA',
    role: 'AI Social Media Manager',
    status: 'COMING SOON',
    icon: Layout,
    href: '/contact',
    painPoint: 'Consistent posting is hard.',
    price: 'From $299/mo',
    stat: 'Replaces: $2,800/mo social manager'
  },
  {
    id: 'niko',
    name: 'NIKO',
    role: 'AI Sales Outreach',
    status: 'COMING SOON',
    icon: Send,
    href: '/contact',
    painPoint: 'Cold outreach takes forever.',
    price: 'From $399/mo',
    stat: 'Replaces: $5,500/mo SDR hire'
  }
];

export default function AiProductsSection() {
  const [demoPhone, setDemoPhone] = useState('');
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

    const handleDemoCall = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoPhone) return;

    let formattedNumber = demoPhone.replace(/[^0-9+]/g, '');
    if (!formattedNumber.startsWith('+')) {
      formattedNumber = formattedNumber.startsWith('1') ? '+' + formattedNumber : '+1' + formattedNumber;
    }

    setDemoSubmitted(true);

    try {
      await fetch('https://stanislavkononenko.app.n8n.cloud/webhook/mia-demo-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: formattedNumber }),
      });
    } catch {
      // Call initiated regardless
    }

    setTimeout(() => {
      setDemoSubmitted(false);
      setDemoPhone('');
    }, 15000);
  };


  const handlePlayDemo = () => {
    setIsPlayingDemo(true);
    setTimeout(() => setIsPlayingDemo(false), 5000);
  };

  return (
    <section className="section-spacing" style={{ backgroundColor: '#030712', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '70vw', height: '70vw',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none'
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ 
              fontSize: 'clamp(36px, 6vw, 56px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 20, fontWeight: 800 
            }}>
              AI Team that <span className="gradient-text">Never Sleeps</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, margin: '0 auto' }}>
              Replace expensive human roles with specialized AI Employees for a fraction of the cost.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Product Grid */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 24, marginBottom: 64 
        }}>
          {products.map((product, i) => (
            <AnimateOnScroll key={product.id} delay={i * 0.05}>
              <div style={{ 
                padding: 32, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column',
                height: '100%', transition: 'all 0.3s ease'
              }} className="hover-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                  <div style={{ 
                    width: 48, height: 48, borderRadius: 12, backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)'
                  }}>
                    <product.icon size={24} />
                  </div>
                  <div style={{ 
                    padding: '4px 10px', borderRadius: 100, fontSize: 10, fontWeight: 800,
                    backgroundColor: product.status === 'LIVE' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(234, 179, 8, 0.1)',
                    color: product.status === 'LIVE' ? '#10B981' : '#EAB308',
                    border: `1px solid ${product.status === 'LIVE' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(234, 179, 8, 0.2)'}`
                  }}>
                    {product.status}
                  </div>
                </div>
                
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>{product.name}</h3>
                <p style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{product.role}</p>
                
                <p style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
                  "{product.painPoint}"
                </p>
                
                <div style={{ marginBottom: 24 }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 4 }}>Starting From</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>{product.price}</div>
                </div>

                <div style={{ 
                  padding: '12px 16px', borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)', marginBottom: 24
                }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Efficiency Metric</div>
                  <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: 13 }}>{product.stat}</div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Link 
                    href={product.href} 
                    className={product.status === 'LIVE' ? "btn-primary" : "btn-secondary"} 
                    style={{ width: '100%', padding: '12px', textAlign: 'center', display: 'block', fontSize: 14, fontWeight: 700 }}
                  >
                    {product.status === 'LIVE' ? 'Go to Page →' : 'Join Waitlist →'}
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Savings Comparison Board */}
        <AnimateOnScroll>
          <div style={{ 
            padding: 40, borderRadius: 24, backgroundColor: 'rgba(6, 182, 212, 0.03)',
            border: '1px solid rgba(6, 182, 212, 0.2)', marginBottom: 64, textAlign: 'center'
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              The ROI of an AI Team
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 4 }}>Human team cost</div>
                <div style={{ color: '#EF4444', fontSize: 24, fontWeight: 800, textDecoration: 'line-through' }}>$322,000/yr</div>
              </div>
              <ArrowRight style={{ color: 'rgba(255,255,255,0.1)' }} size={32} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 4 }}>Zirka AI Team cost</div>
                <div style={{ color: '#10B981', fontSize: 24, fontWeight: 800 }}>$16,128/yr</div>
              </div>
              <div style={{ 
                padding: '12px 24px', borderRadius: 12, backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)', marginLeft: 20
              }}>
                <div style={{ color: '#10B981', fontWeight: 800, fontSize: 18 }}>You Save: $305,872/yr</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Bundles Section */}
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Popular <span className="text-gradient">AI Bundles</span></h3>
            <p style={{ color: 'var(--text-muted)' }}>Combine multiple agents for exponential growth and maximum savings.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 100 }}>
            {[
              { name: 'AI Starter', price: '$199/mo', items: ['ARIA (Chat)', 'SOVA (Reviews)'], savings: 'Save $49/mo' },
              { name: 'AI Growth', price: '$449/mo', items: ['ARIA (Chat)', 'MIA (Phone)', 'LUNA (Social)'], accent: true, savings: 'Save $98/mo' },
              { name: 'AI Enterprise', price: '$1,099/mo', items: ['All 6 AI Agents', 'Priority Support'], savings: 'Save $245/mo' }
            ].map((bundle, idx) => (
              <div key={idx} style={{ 
                padding: 32, borderRadius: 24, backgroundColor: bundle.accent ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255,255,255,0.02)',
                border: bundle.accent ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                position: 'relative', overflow: 'hidden'
              }}>
                {bundle.accent && <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 12px', backgroundColor: 'var(--accent)', borderRadius: 100, fontSize: 10, fontWeight: 900, color: 'white' }}>MOST POPULAR</div>}
                <h4 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{bundle.name}</h4>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 16 }}>{bundle.price}</div>
                <div style={{ marginBottom: 24 }}>
                  {bundle.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 14, marginBottom: 8 }}>
                      <CheckCircle size={14} color="#10B981" /> {item}
                    </div>
                  ))}
                </div>
                <div style={{ color: '#10B981', fontWeight: 700, fontSize: 14, marginBottom: 24 }}>{bundle.savings}</div>
                <Link href="/contact" className={bundle.accent ? "btn-primary" : "btn-secondary"} style={{ width: '100%', textAlign: 'center', display: 'block' }}>Get Bundle →</Link>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* MIA Voice Demo Integration */}
        <AnimateOnScroll>
          <div style={{ 
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: 64, alignItems: 'center', padding: '64px 40px', borderRadius: 32,
            backgroundColor: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)'
          }}>
            {/* Visualizer */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 140, height: 140, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.1) 60%, transparent 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: isPlayingDemo ? '0 0 60px rgba(6, 182, 212, 0.4)' : '0 0 30px rgba(59, 130, 246, 0.1)',
                animation: isPlayingDemo ? 'pulseOrb 1s infinite alternate' : 'pulseOrb 3s infinite alternate',
                transition: 'all 0.5s ease', cursor: 'pointer', marginBottom: 24
              }} onClick={handlePlayDemo}>
                 <Activity size={isPlayingDemo ? 72 : 56} color={isPlayingDemo ? '#06B6D4' : 'rgba(255,255,255,0.6)'} />
              </div>
              <h4 style={{ color: 'white', fontSize: 20, fontWeight: 700 }}>{isPlayingDemo ? 'Speaking...' : 'Click for Audio Demo'}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, textAlign: 'center', marginTop: 8 }}>Hear a live recording of MIA answering a call.</p>
            </div>

            {/* Form */}
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Experience the Live Voice Demo</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>
                Enter your phone number and MIA (our AI Phone Receptionist) will call you right now for a live conversation.
              </p>
              
              <div style={{
                backgroundColor: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: 16, padding: 24, position: 'relative'
              }}>
                {demoSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '10px 0' }}>
                    <CheckCircle size={40} color="#10B981" style={{ margin: '0 auto 12px' }} />
                    <h4 style={{ fontSize: 18, color: 'white' }}>MIA is calling...</h4>
                  </div>
                ) : (
                  <form onSubmit={handleDemoCall} style={{ display: 'flex', gap: 10 }}>
                    <input 
                      type="tel" 
                      required
                      value={demoPhone}
                      onChange={(e) => setDemoPhone(e.target.value)}
                      placeholder="(403) 555-0199"
                      style={{
                        flex: 1, padding: '12px 16px', borderRadius: 10,
                        backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white', fontSize: 15, outline: 'none'
                      }}
                    />
                    <button type="submit" className="btn-primary" style={{ padding: '12px 20px', whiteSpace: 'nowrap' }}>
                      Call Me
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Link href="/ai-team" className="btn-secondary" style={{ padding: '12px 32px' }}>
            View Full AI Team Showcase →
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hover-card:hover { transform: translateY(-8px); border-color: rgba(6, 182, 212, 0.4) !important; }
        @keyframes pulseOrb {
          0% { transform: scale(0.95); opacity: 0.8; }
          100% { transform: scale(1.05); opacity: 1; }
        }
      `}} />
    </section>
  );
}
