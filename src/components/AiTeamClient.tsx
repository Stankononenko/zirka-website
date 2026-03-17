'use client';

import Link from 'next/link';
import { 
  MessageSquare, Phone, Star, Video, Send, Layout, 
  CheckCircle, ArrowRight, Wallet, Users, Zap, Bot,
  TrendingUp, ShieldCheck
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
    stat: 'Replaces: $3,500/mo human chat team',
    desc: 'Captures leads from your website 24/7. Answers questions, collects contact info, books appointments.'
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
    stat: 'Replaces: $4,200/mo receptionist',
    desc: 'Answers every call 24/7. Books appointments, qualifies leads, sends SMS follow-ups.'
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
    stat: 'Replaces: $2,500 per video production',
    desc: 'Creates your AI digital twin. Produces unlimited professional video content on demand. No reshoots.'
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
    stat: 'Replaces: $1,200/mo agency fee',
    desc: 'Monitors reviews, generates AI responses, requests reviews via SMS. Grow your Google rating on autopilot.'
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
    stat: 'Replaces: $2,800/mo social manager',
    desc: 'Creates content plans, writes posts, generates visuals, publishes everywhere. Social media on autopilot.'
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
    stat: 'Replaces: $5,500/mo SDR hire',
    desc: 'Finds potential clients, writes personalized outreach, follows up automatically. New leads on autopilot.'
  }
];

const bundles = [
  {
    name: 'AI Starter',
    products: 'ARIA + MIA',
    services: 'Website chat + Phone answering',
    price: '$199/month',
    save: '$49',
    ideal: 'Perfect for: Businesses that want to capture every lead — online and by phone.'
  },
  {
    name: 'AI Growth',
    products: 'MIA + DAYA + SOVA',
    services: 'Phone + Video + Reviews',
    price: '$449/month',
    save: '$98',
    ideal: 'Perfect for: Businesses ready to automate communication, content, and reputation.',
    popular: true
  },
  {
    name: 'AI Domination',
    products: 'ARIA + MIA + DAYA + SOVA',
    services: 'Chat + Phone + Video + Reviews',
    price: '$549/month',
    save: '$97',
    ideal: 'Perfect for: Businesses that want the full AI advantage over competitors.'
  }
];

const ecosystemSteps = [
  { title: 'A customer finds your website', sub: 'ARIA chats with them, answers questions, captures their info' },
  { title: 'They call your business', sub: 'MIA answers, books an appointment, sends confirmation SMS' },
  { title: 'After their visit', sub: 'SOVA sends a review request → they leave a 5-star review → SOVA responds' },
  { title: 'Meanwhile', sub: 'DAYA creates video content with your AI avatar for social media' },
  { title: 'Social Distribution', sub: 'LUNA posts it across Instagram, Facebook, TikTok, LinkedIn' },
  { title: 'Sales Outreach', sub: 'NIKO finds new potential clients and reaches out via email' }
];

const comparisonData = [
  { role: 'Receptionist', human: '$55,000', ai: 'MIA: $1,788/yr', save: '$53,212' },
  { role: 'Video Producer', human: '$65,000', ai: 'DAYA: $2,988/yr', save: '$62,012' },
  { role: 'Social Media Manager', human: '$52,000', ai: 'LUNA: $3,588/yr', save: '$48,412' },
  { role: 'Chat Support Agent', human: '$42,000', ai: 'ARIA: $1,188/yr', save: '$40,812' },
  { role: 'Reputation Manager', human: '$48,000', ai: 'SOVA: $1,788/yr', save: '$46,212' },
  { role: 'Sales Rep', human: '$60,000', ai: 'NIKO: $4,788/yr', save: '$55,212' }
];

export default function AiTeamClient() {
  return (
    <div style={{ backgroundColor: '#030712', color: 'white', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        paddingTop: 180, paddingBottom: 100, position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)'
      }}>
        <div className="container-main" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <h1 style={{ 
              fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 24, fontWeight: 800 
            }}>
              Meet Your AI Team — <br /> Six AI Employees That Never Sleep
            </h1>
            
            <p style={{ 
              color: 'var(--text-muted)', fontSize: 20, maxWidth: 900, 
              margin: '0 auto 40px', lineHeight: 1.6 
            }}>
              Each one replaces a full-time hire. Together, they run your business 24/7 — answering calls, creating content, managing reviews, capturing leads, running social media, and finding new clients. All from Zirka Solutions.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
              <Link href="#products" className="btn-primary" style={{ padding: '16px 40px', fontSize: 18 }}>
                Build Your AI Team
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14, flexWrap: 'wrap' }}>
              <span>Powered by Zirka Solutions</span>
              <span>·</span>
              <span>Built for Calgary Businesses</span>
              <span>·</span>
              <span>Cancel Anytime</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 2: Product Grid */}
      <section id="products" className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
              {products.map((product) => (
                <div key={product.id} style={{ 
                  padding: 32, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)', position: 'relative',
                  display: 'flex', flexDirection: 'column',
                  opacity: product.status === 'COMING SOON' ? 0.7 : 1,
                  transition: 'all 0.3s ease'
                }} className="hover-card">
                  <div style={{ 
                    position: 'absolute', top: 20, right: 20,
                    padding: '4px 10px', borderRadius: 100, fontSize: 10, fontWeight: 800,
                    backgroundColor: product.status === 'LIVE' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(234, 179, 8, 0.1)',
                    color: product.status === 'LIVE' ? '#10B981' : '#EAB308',
                    border: `1px solid ${product.status === 'LIVE' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(234, 179, 8, 0.2)'}`
                  }}>
                    {product.status}
                  </div>

                  <div style={{ 
                    width: 56, height: 56, borderRadius: 12, backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24, color: 'var(--accent)'
                  }}>
                    <product.icon size={28} />
                  </div>

                  <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>{product.name}</h3>
                  <div style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>{product.role}</div>
                  
                  <p style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>
                    "{product.painPoint}"
                  </p>
                  
                  <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>{product.desc}</p>
                  
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 4 }}>Starting From</div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: 'white' }}>{product.price}</div>
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
                      style={{ width: '100%', padding: '14px', textAlign: 'center', display: 'block', fontSize: 15, fontWeight: 700 }}
                    >
                      {product.status === 'LIVE' ? 'Go to Page →' : 'Join Waitlist →'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 3: Bundles */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Save More With AI Bundles
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>
                Combine products for maximum impact — and maximum savings.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
              {bundles.map((bundle) => (
                <div key={bundle.name} style={{ 
                  padding: 40, borderRadius: 32, backgroundColor: 'rgba(255,255,255,0.03)',
                  border: bundle.popular ? '2px solid var(--accent)' : '1px solid rgba(255,255,255,0.05)',
                  position: 'relative'
                }}>
                  {bundle.popular && (
                    <div style={{ 
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      backgroundColor: 'var(--accent)', color: 'white', padding: '4px 16px',
                      borderRadius: 100, fontSize: 11, fontWeight: 800, letterSpacing: 0.5
                    }}>
                      MOST POPULAR
                    </div>
                  )}

                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, textAlign: 'center' }}>{bundle.name}</h3>
                  
                  <div style={{ marginBottom: 32, textAlign: 'center' }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 4 }}>{bundle.products}</div>
                    <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{bundle.services}</div>
                  </div>

                  <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    <div style={{ fontSize: 40, fontWeight: 800, color: 'white' }}>{bundle.price}</div>
                    <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 15 }}>Save {bundle.save}/month</div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, marginBottom: 32, textAlign: 'center', fontStyle: 'italic' }}>
                    {bundle.ideal}
                  </p>

                  <Link href="/contact" className="btn-primary" style={{ width: '100%', padding: '14px', textAlign: 'center', display: 'block' }}>
                    Get {bundle.name} →
                  </Link>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 14, marginTop: 48 }}>
              All bundles include $0 setup on every product. 30-day money-back guarantee. Cancel anytime.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 4: Ecosystem Visual */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                One Ecosystem. Total Automation.
              </h2>
            </div>
            
            <div style={{ maxWidth: 800, margin: '0 auto', borderLeft: '2px solid rgba(6, 182, 212, 0.2)', paddingLeft: 40, position: 'relative' }}>
              {ecosystemSteps.map((step, i) => (
                <div key={i} style={{ marginBottom: 40, position: 'relative' }}>
                  <div style={{ 
                    position: 'absolute', left: -51, top: 0,
                    width: 20, height: 20, borderRadius: '50%',
                    backgroundColor: 'var(--accent)', border: '4px solid #030712'
                  }} />
                  <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'white' }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{step.sub}</p>
                </div>
              ))}
              <div style={{ 
                marginTop: 48, padding: 24, borderRadius: 16,
                backgroundColor: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.1)',
                textAlign: 'center', fontWeight: 700, fontSize: 18, color: 'var(--accent)'
              }}>
                The cycle repeats — automatically, 24/7, forever.
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 5: Comparison */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56 
            }}>
              AI Team vs Human Team
            </h2>

            <div style={{ overflowX: 'auto', marginBottom: 40 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '24px', textAlign: 'left', color: 'var(--text-muted)', fontSize: 14 }}>Role</th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Human Cost (Annual)</th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'var(--accent)', backgroundColor: 'rgba(6, 182, 212, 0.05)' }}>Zirka AI</th>
                    <th style={{ padding: '24px', textAlign: 'center', color: '#10B981', fontWeight: 800 }}>You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '20px 24px', color: 'white', fontWeight: 500 }}>{row.role}</td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.human}</td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--accent)', fontWeight: 700, backgroundColor: 'rgba(6, 182, 212, 0.05)' }}>{row.ai}</td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: '#10B981', fontWeight: 800 }}>{row.save}</td>
                    </tr>
                  ))}
                  <tr style={{ borderTop: '2px solid var(--accent)' }}>
                    <td style={{ padding: '24px', color: 'white', fontWeight: 800, fontSize: 18 }}>TOTAL</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'white', fontWeight: 800, fontSize: 18 }}>$322,000/yr</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'var(--accent)', fontWeight: 800, fontSize: 18, backgroundColor: 'rgba(6, 182, 212, 0.05)' }}>$16,128/yr</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: '#10B981', fontWeight: 800, fontSize: 24 }}>$305,872</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 16, maxWidth: 900, margin: '0 auto' }}>
              A full team of 6 employees costs $322,000/year in Calgary. Zirka&apos;s AI team costs $16,128/year — 95% less — and works 24/7/365 without vacation, sick days, or benefits.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="section-spacing">
        <div className="container-main" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 24, fontWeight: 800 }}>
              Start With One. <br /> Add More As You Grow.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, margin: '0 auto 40px', lineHeight: 1.6 }}>
              Most businesses start with ARIA ($99/month) or MIA ($149/month) and add more AI employees as they see results. There&apos;s no commitment — cancel anytime.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: 18 }}>
                Build My AI Team
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14, flexWrap: 'wrap' }}>
              <span>No contracts</span>
              <span>·</span>
              <span>$0 setup on all products</span>
              <span>·</span>
              <span>30-day money-back guarantee</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .hover-card:hover { transform: translateY(-8px); border-color: rgba(6, 182, 212, 0.4) !important; }
      `}} />
    </div>
  );
}
