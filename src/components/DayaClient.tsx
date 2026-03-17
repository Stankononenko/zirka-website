'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Video, Camera, Wand2, Sparkles, Infinity, RefreshCw, 
  Play, FileText, Monitor, HelpCircle, MessageCircle, 
  Megaphone, Target, Globe, Languages, CheckCircle, 
  ArrowRight, Rocket, Menu, X, ChevronDown, Plus, Minus
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function DayaClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$249',
      setup: '$0',
      setupOld: '$499',
      features: [
        '4 videos per month (up to 60 sec)',
        'You provide the script',
        'Basic editing (subtitles, logo, branding)',
        '1 platform format',
        '48-hour delivery',
        'Email support'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Growth',
      price: '$499',
      setup: '$0',
      setupOld: '$499',
      features: [
        '10 videos per month (up to 90 sec)',
        'We write your scripts for you',
        'Full editing (transitions, music, thumbnails, CTAs)',
        'Adapted for 3 platforms (Reels + TikTok + YouTube)',
        '24-48 hour delivery',
        'Priority support'
      ],
      cta: 'Get Started Free',
      popular: true,
      badge: '🔥 Most Popular'
    },
    {
      name: 'Scale',
      price: '$899',
      setup: '$0',
      setupOld: '$499',
      features: [
        '20+ videos per month (up to 2 min)',
        'We write scripts + monthly content strategy',
        'Premium editing + A/B ad variants',
        'All platforms + long-form YouTube',
        'Multilingual versions included',
        '24-hour priority delivery',
        'Dedicated account manager'
      ],
      cta: 'Get Started Free',
      popular: false
    }
  ];

  const faqs = [
    {
      q: 'Will my AI avatar actually look and sound like me?',
      a: 'Yes. We use advanced AI to replicate your face, expressions, and voice with remarkable accuracy. Most viewers can\'t tell the difference. We always send you a test video for approval before producing any content.'
    },
    {
      q: 'How does the initial recording session work?',
      a: 'If you\'re in Calgary, we schedule a 30-minute in-person session at our studio or your location. If you\'re anywhere else, we guide you through a simple remote recording via video call. We capture 2-3 minutes of footage from different angles — that\'s all we need to build your avatar.'
    },
    {
      q: 'Who writes the video scripts?',
      a: 'On the Starter plan, you provide the script or talking points. On Growth and Scale plans, our team writes professional scripts for you — you just review and approve. We know what works for each platform and industry.'
    },
    {
      q: 'How fast do I get my videos?',
      a: '24-48 hours from the moment you approve the script. Scale plan clients get priority 24-hour delivery. Need something urgent? Let us know and we\'ll do our best to rush it.'
    },
    {
      q: 'Can I use DAYA videos for paid ads?',
      a: 'Absolutely. Many of our clients use DAYA specifically for Facebook, Instagram, and YouTube ad creatives. The Scale plan includes A/B variant creation so you can test different hooks and messaging.'
    },
    {
      q: 'What if I don\'t like a video?',
      a: 'We include unlimited revisions on every video. If the script needs adjusting, the pacing is off, or you want a different tone — we regenerate it at no extra cost until you\'re satisfied.'
    },
    {
      q: 'Can my avatar speak other languages?',
      a: 'Yes. Your avatar can speak 50+ languages with natural lip-sync — perfect for serving Calgary\'s multicultural communities or expanding nationally. Multilingual content is included in the Scale plan, or available as an add-on for other plans.'
    },
    {
      q: 'Is there a contract or commitment?',
      a: 'No contracts. Cancel anytime with no penalties. We also offer a 30-day money-back guarantee — if DAYA doesn\'t deliver value, you get a full refund.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#030712', color: 'white', minHeight: '100vh', position: 'relative' }}>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)'
      }}>
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.2)', color: '#A855F7',
              fontSize: 13, fontWeight: 600, marginBottom: 24
            }}>
              🎬 New from Zirka — $0 Avatar Setup (Save $499)
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 24, fontWeight: 800 
            }}>
              Your Face. Your Voice. <br />
              Unlimited Videos. Zero Shoots.
            </h1>
            
            <p style={{ 
              color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, 
              margin: '0 auto 40px', lineHeight: 1.6 
            }}>
              DAYA creates your AI digital twin — then we produce professional video content on demand. One session. Infinite content. No camera crew ever again.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse" style={{ padding: '16px 32px', fontSize: 18 }}>
                Create My AI Avatar — Free Setup
              </Link>
              <Link href="#examples" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                See Examples ↓
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              <span>✓ First 2 videos free</span>
              <span>·</span>
              <span>✓ 24-48 hour delivery</span>
              <span>·</span>
              <span>✓ Cancel anytime</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 2: Problem */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
                marginBottom: 16
              }}>
                Video Is King. But Production Is <br /> Killing Your Budget.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 56 }}>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--accent)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Scale</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Unlimited Video Content</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--accent)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>24-48h</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Average Turnaround</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--accent)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Growing</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Proprietary AI Tech</p>
              </div>
            </div>

            <p style={{ 
              textAlign: 'center', color: 'var(--text-muted)', 
              fontSize: 18, maxWidth: 850, margin: '0 auto', lineHeight: 1.8 
            }}>
              You know video works. Your competitors are posting Reels, TikToks, and YouTube content every week. But every time you need a new video, it&apos;s another $2,000-$10,000 shoot, another day away from your business, another month of waiting. What if you could create professional video content anytime you want — with your own face and voice — without ever stepping in front of a camera again?
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 3: How it Works */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                How DAYA Works — 3 Simple Steps
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>
                From your first session to unlimited content in under a week.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 56 }}>
              {[
                { 
                  step: '1',
                  icon: Camera, 
                  title: 'Record Once',
                  desc: 'We film a 30-minute session with you (in person in Calgary or remotely via video call). That\'s all we need — forever.'
                },
                { 
                  step: '2',
                  icon: Wand2, 
                  title: 'We Create Your Avatar',
                  desc: 'Our AI builds your digital twin — your face, your voice, your mannerisms. We test it and you approve before we produce anything.'
                },
                { 
                  step: '3',
                  icon: Infinity, 
                  title: 'Unlimited Content On Demand',
                  desc: 'Tell us what you need. We write the script, generate the video with your avatar, add professional editing, and deliver in 24-48 hours. Repeat forever.'
                }
              ].map((feat, i) => (
                <div key={i} style={{ 
                  padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)', position: 'relative'
                }} className="hover-card">
                  <div style={{ 
                    position: 'absolute', top: 20, right: 32, fontSize: 64, 
                    fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 1
                  }}>
                    {feat.step}
                  </div>
                  <div style={{ 
                    width: 56, height: 56, borderRadius: 12, backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24, color: '#A855F7'
                  }}>
                    <feat.icon size={28} />
                  </div>
                  <h3 style={{ fontSize: 22, marginBottom: 16, color: 'white' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '14px 40px' }}>
                Create My AI Avatar — Free Setup
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 4: What We Create (#examples) */}
      <section id="examples" className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                One Avatar. Endless Possibilities.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>
                Here&apos;s what Calgary businesses use DAYA for every week.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {[
                { 
                  icon: Play, 
                  title: 'Social Media Reels & TikToks',
                  desc: 'Weekly short-form videos for Instagram, TikTok, Facebook, and LinkedIn. Stay visible without the constant filming grind.'
                },
                { 
                  icon: FileText, 
                  title: 'Service & Product Explainers',
                  desc: 'Walk potential customers through what you offer, how it works, and why they should choose you. Perfect for your website and ads.'
                },
                { 
                  icon: Monitor, 
                  title: 'Website Welcome Videos',
                  desc: 'Greet every visitor with a personal video message. Build trust instantly — studies show welcome videos increase conversion by 80%.'
                },
                { 
                  icon: MessageCircle, 
                  title: 'FAQ Video Answers',
                  desc: 'Turn your most common questions into engaging video responses. Reduce support calls and educate customers 24/7.'
                },
                { 
                  icon: Target, 
                  title: 'Ad Creatives for Paid Campaigns',
                  desc: 'Generate multiple versions of video ads to test and optimize on Facebook, Instagram, and YouTube. No reshoot needed for A/B testing.'
                },
                { 
                  icon: Languages, 
                  title: 'Multilingual Content',
                  desc: 'Reach Calgary\'s diverse communities. Your avatar speaks English, French, and 50+ other languages — with perfect lip sync.'
                }
              ].map((feat, i) => (
                <div key={i} style={{ 
                  padding: 32, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }} className="hover-card">
                  <div style={{ 
                    width: 48, height: 48, borderRadius: 8, backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20, color: 'var(--accent)'
                  }}>
                    <feat.icon size={24} />
                  </div>
                  <h3 style={{ fontSize: 18, marginBottom: 12, color: 'white', fontWeight: 700 }}>{feat.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 5: Comparison */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56 
            }}>
              DAYA vs Traditional Video Production
            </h2>

            <div style={{ overflowX: 'auto', marginBottom: 40 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '24px', textAlign: 'left', color: 'var(--text-muted)', fontSize: 14 }}>Feature</th>
                    <th style={{ 
                      padding: '24px', textAlign: 'center', color: '#A855F7', 
                      backgroundColor: 'rgba(168, 85, 247, 0.05)', borderRadius: '12px 12px 0 0'
                    }}>
                      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 4 }}>BEST VALUE</div>
                      DAYA
                    </th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Traditional Production</th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>DIY (iPhone)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Cost per video', m: 'From $62', r: '$2,000-$10,000', v: '$0' },
                    { f: 'Turnaround', m: '24-48 hours', r: '2-4 weeks', v: 'Immediate' },
                    { f: 'Professional quality', m: '✓', r: '✓', v: '✗' },
                    { f: 'Consistent branding', m: '✓ (identical every time)', r: 'Varies by shoot', v: 'Varies' },
                    { f: 'Scale to 20+ videos/month', m: '✓', r: 'Budget-breaking', v: 'Time-breaking' },
                    { f: 'Multilingual versions', m: '✓ (50+ languages)', r: 'Reshoot needed', v: '✗' },
                    { f: 'No camera crew needed', m: '✓', r: '✗', v: '✓' },
                    { f: 'Script writing included', m: '✓ (Growth+)', r: 'Usually extra cost', v: 'You write' },
                    { f: 'A/B testing versions', m: '✓ (Scale)', r: 'Reshoot each version', v: '✗' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '20px 24px', color: 'white', fontWeight: 500 }}>{row.f}</td>
                      <td style={{ 
                        padding: '20px 24px', textAlign: 'center', color: '#A855F7', 
                        fontWeight: 700, backgroundColor: 'rgba(168, 85, 247, 0.05)'
                      }}>
                        {row.m}
                      </td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.r}</td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 16, maxWidth: 900, margin: '0 auto' }}>
              Traditional video production in Calgary costs $2,000-$10,000 per video. With DAYA, you get 10 videos for $499/month — that&apos;s just $50 per professional video. Same quality. Your face. Your voice. No camera crew.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 6: Social Proof */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56 
            }}>
              Calgary Business Owners Love DAYA
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 80 }}>
              {[
                {
                  quote: '"I used to spend $3,000 every time I needed a new video for my clinic. Now I get 10 videos a month and they look just as good — sometimes better. My patients can\'t tell the difference."',
                  author: 'Dr. Amanda K., Dental Clinic Owner, Calgary NW'
                },
                {
                  quote: '"I post 3 Reels a week now. Before DAYA, I posted maybe once a month because I hated being on camera. My avatar does it for me and my engagement is through the roof."',
                  author: 'Jason P., Real Estate Agent, Calgary SW'
                },
                {
                  quote: '"We needed French and Mandarin versions of our welcome video. DAYA generated them in 24 hours. That would have cost us $15,000+ with a traditional agency."',
                  author: 'Lisa C., Immigration Consultant, Downtown Calgary'
                }
              ].map((test, i) => (
                <div key={i} style={{ 
                  padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)', position: 'relative'
                }}>
                  <div style={{ color: '#FCD34D', fontSize: 16, marginBottom: 16 }}>⭐⭐⭐⭐⭐</div>
                  <p style={{ color: 'white', fontSize: 18, fontStyle: 'italic', marginBottom: 24, lineHeight: 1.6 }}>{test.quote}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>— {test.author}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 10, marginTop: 12 }}>Results shown are representative examples. Individual results may vary.</p>
                </div>
              ))}
            </div>
            
            <div style={{ 
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 64px',
              padding: '40px', borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center'
            }}>
              <div style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>24-48h Delivery</div>
              <div style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>50+ Languages</div>
              <div style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>Unlimited Revisions</div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Simple Plans. Powerful Content. No Contracts.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>
                Every plan includes your AI avatar, professional editing, and branded delivery.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 56 }}>
              {pricingPlans.map((plan, i) => (
                <div key={i} style={{ 
                  padding: 40, borderRadius: 32, backgroundColor: 'rgba(255,255,255,0.02)',
                  border: plan.popular ? '2px solid #A855F7' : '1px solid rgba(255,255,255,0.05)',
                  position: 'relative', display: 'flex', flexDirection: 'column',
                  boxShadow: plan.popular ? '0 0 40px rgba(168, 85, 247, 0.1)' : 'none'
                }}>
                  {plan.popular && (
                    <div style={{ 
                      position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                      backgroundColor: '#A855F7', color: 'white', padding: '4px 16px',
                      borderRadius: 100, fontSize: 12, fontWeight: 800, letterSpacing: 1
                    }}>
                      {plan.badge}
                    </div>
                  )}

                  <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{plan.name}</h3>
                  <div style={{ fontSize: 48, fontWeight: 800, color: 'white', marginBottom: 24 }}>
                    {plan.price} <span style={{ fontSize: 16, color: 'var(--text-muted)', fontWeight: 400 }}>CAD/month</span>
                  </div>

                  <div style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: 14 }}>
                    Setup fee: <span style={{ textDecoration: 'line-through' }}>{plan.setupOld}</span> <span style={{ color: '#A855F7', fontWeight: 700 }}>{plan.setup} (Limited Time)</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: 14.5 }}>
                        <CheckCircle size={18} color="#A855F7" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className={`btn-primary ${plan.popular ? 'cta-pulse' : ''}`} style={{ width: '100%', padding: '14px', textAlign: 'center' }}>
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              All plans: 30-day money-back guarantee · Cancel anytime · No long-term contracts · First 2 videos free during setup
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main" style={{ maxWidth: 800 }}>
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 40px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 48 
            }}>
              Questions About DAYA? We&apos;ve Got Answers.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ 
                  borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' 
                }}>
                  <button 
                    onClick={() => toggleFaq(i)}
                    style={{ 
                      width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', background: 'none', border: 'none', color: 'white',
                      textAlign: 'left', cursor: 'pointer', fontWeight: 600, fontSize: 16, gap: 16
                    }}
                  >
                    <span style={{ flex: 1 }}>{faq.q}</span>
                    {activeFaq === i ? <Minus size={20} color="#A855F7" /> : <Plus size={20} color="#A855F7" />}
                  </button>
                  <div style={{ 
                    maxHeight: activeFaq === i ? '1000px' : '0', overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', color: 'var(--text-muted)',
                    fontSize: 15, lineHeight: 1.7
                  }}>
                    <div style={{ padding: '0 24px 24px 24px' }}>{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="section-spacing" style={{ 
        background: 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.1))',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container-main" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 6vw, 56px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 24, fontWeight: 800 
            }}>
              Your Competitors Are Posting Video <br /> Every Day. When Will You Start?
            </h2>
            
            <p style={{ 
              color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, 
              margin: '0 auto 48px', lineHeight: 1.6 
            }}>
              Create your AI avatar today. Get your first 2 videos free. Start posting content that grows your business — without ever filming again.
            </p>

            <Link href="/contact" className="btn-primary cta-pulse" style={{ padding: '20px 48px', fontSize: 20 }}>
              Create My AI Avatar — Free Setup
            </Link>

            <div style={{ marginTop: 32, color: 'var(--text-muted)', fontSize: 14 }}>
              No credit card for setup · $0 avatar creation (save $499) · First 2 videos included free
            </div>

            <div style={{ marginTop: 40 }}>
              <Link href="/contact" style={{ color: 'white', fontWeight: 600, fontSize: 16, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Want to see it first? Book a free 15-min demo <ArrowRight size={18} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* Sticky Bottom CTA for Mobile */}
      {isScrolled && (
        <div className="nav-mobile" style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1001,
          padding: '16px 20px', backgroundColor: 'rgba(3, 7, 18, 0.95)',
          backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.1)',
          animation: 'slideUp 0.3s ease'
        }}>
          <Link href="/contact" className="btn-primary cta-pulse" style={{ width: '100%', padding: '14px', textAlign: 'center', display: 'block' }}>
            Create My AI Avatar
          </Link>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .hover-card { transition: all 0.3s ease; }
        .hover-card:hover { 
          transform: translateY(-8px); 
          border-color: rgba(168, 85, 247, 0.4) !important; 
          background-color: rgba(255,255,255,0.05) !important;
        }
        .hover-white:hover { color: white; transition: color 0.2s; }
      `}} />
    </div>
  );
}
