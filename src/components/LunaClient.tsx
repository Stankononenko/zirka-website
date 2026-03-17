'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Star, 
  CheckCircle, 
  ChevronDown, Layout, Instagram, Facebook, Linkedin, Video, Calendar, Palette, PenTool, Globe
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function LunaClient() {
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

  const statCards = [
    { value: '72%', label: 'of local businesses struggle to post consistently on social media' },
    { value: '3x', label: 'higher engagement for businesses that post 4+ times per week' },
    { value: '20+', label: 'hours saved per month by automating content creation and posting' }
  ];

  const steps = [
    {
      icon: Palette,
      title: 'Strategy & Brand Design',
      desc: 'LUNA analyzes your brand, colors, and voice. She creates a custom content strategy that resonates with your Calgary audience.'
    },
    {
      icon: PenTool,
      title: 'AI Content Creation',
      desc: 'LUNA writes engaging captions, generates high-quality visuals, and identifies trending hashtags specific to your niche.'
    },
    {
      icon: Calendar,
      title: 'Automated Publishing',
      desc: 'LUNA schedules and publishes your posts across Instagram, Facebook, LinkedIn, and TikTok at the optimal times for reach.'
    }
  ];

  const features = [
    {
      title: 'Multichannel Presence',
      desc: 'One strategy, one LUNA. She manages your presence across all major social platforms simultaneously.'
    },
    {
      title: 'Brand Voice Mastery',
      desc: 'Whether you want to sound professional, funny, or bold, LUNA learns and executes your unique voice perfectly.'
    },
    {
      title: 'AI Visual Studio',
      desc: 'Generate stunning social media graphics and short-form video concepts tailored to your brand aesthetic.'
    },
    {
      title: 'Active Community Engagement',
      desc: 'LUNA can be trained to respond to comments and DMs, keeping your community engaged 24/7.'
    },
    {
      title: 'Trending Content Sync',
      desc: 'LUNA stays on top of industry trends and local Calgary news to keep your content relevant and viral.'
    },
    {
      title: 'ROI-Focused Analytics',
      desc: 'Track reach, engagement, and most importantly, how many leads your social media is actually generating.'
    }
  ];

  const faqs = [
    {
      q: 'Will LUNA make my brand look like a bot?',
      a: 'Absolutely not. LUNA is trained on your specific brand guide, past successful posts, and industry best practices. Her content is designed to be indistinguishable from a high-end social media manager.'
    },
    {
      q: 'Do I get to review the posts before they go live?',
      a: 'Yes. LUNA generates your entire monthly calendar in advance. You can review, edit, or swap any post with one click before she publishes them.'
    },
    {
      q: 'Can LUNA handle video content like Reels and TikToks?',
      a: 'LUNA helps script Reels, find trending audio, and provides captions/descriptions. She even works perfectly alongside DAYA (our AI Video Avatar) to create a total video strategy.'
    },
    {
      q: 'What makes LUNA better than just using ChatGPT?',
      a: 'ChatGPT just writes text. LUNA is a complete manager: she researches trends, creates visuals, schedules posts, manages the calendar, and analyzes performance. She is a tool + a team member.'
    },
    {
      q: 'Does she post to Instagram and Facebook at the same time?',
      a: 'She publishes to Instagram, Facebook, LinkedIn, TikTok, and even Google Business Profile. She optimizes the format and caption for each platform automatically.'
    },
    {
      q: 'How much time will this actually save me?',
      a: 'The average business owner spends 5-7 hours per week on social media (planning, writing, designing, posting). LUNA reduces that to 15 minutes of review time per month.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#030712', color: 'white', minHeight: '100vh', position: 'relative' }}>
      <div style={{ width: '100%', backgroundColor: 'rgba(236, 72, 153, 0.1)', borderBottom: '1px solid rgba(236, 72, 153, 0.2)', padding: '12px 0', textAlign: 'center', fontSize: 14, color: '#EC4899' }}>🚧 Coming Soon — Join the waitlist to get early access + $0 setup when we launch</div>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.05) 0%, transparent 70%)'
      }}>
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.2)', color: '#EC4899',
              fontSize: 13, fontWeight: 600, marginBottom: 24
            }}>
              <Layout size={14} /> Coming Soon — Early Bird Pricing
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 24, fontWeight: 800 
            }}>
              Your Social Media, <br /> <span style={{ color: '#EC4899' }}>On Autopilot</span>
            </h1>
            
            <p style={{ 
              color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, 
              margin: '0 auto 40px', lineHeight: 1.6 
            }}>
              LUNA is your AI Social Media Manager. She creates your monthly content plan, writes captions, generates visuals, and publishes to all platforms while you focus on your business.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse-luna" style={{ padding: '16px 32px', fontSize: 18, backgroundColor: '#EC4899', color: 'white', border: 'none' }}>
                Join the Waitlist
              </Link>
              <Link href="#how-it-works" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                See Sample Content ↓
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              <span>✓ No credit card</span>
              <span>·</span>
              <span>✓ Cancel anytime</span>
              <span>·</span>
              <span>✓ Save 20+ hours/mo</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Social Platforms List */}
      <section style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-main">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40, opacity: 0.5, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Instagram size={20} /> Instagram</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Facebook size={20} /> Facebook</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Linkedin size={20} /> LinkedIn</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Video size={20} /> TikTok</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Globe size={20} /> Google Business</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56, maxWidth: 800, margin: '0 auto 56px' 
            }}>
              Consistency Is The <span style={{ color: '#EC4899' }}>Hardest Part</span> <br /> of Social Media
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 56 }}>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#EC4899', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Full</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Social Media Automation</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#EC4899', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Daily</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Smart Content Posting</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#EC4899', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>6+</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Platforms Managed</p>
              </div>
            </div>

            <p style={{ 
              textAlign: 'center', color: 'var(--text-muted)', 
              fontSize: 18, maxWidth: 800, margin: '0 auto', lineHeight: 1.6 
            }}>
              Most Calgary business owners start strong on social media, but quit after 3 weeks because it takes too much time. When your profile is &quot;dark,&quot; potential customers think you are out of business. LUNA makes sure you are always visible, always active, and always professional.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                How LUNA Works
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: 64, height: 64, borderRadius: 16, backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px', color: '#EC4899'
                  }}>
                    <step.icon size={32} />
                  </div>
                  <h3 style={{ fontSize: 22, marginBottom: 16 }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Expert Social Management, Automated
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {features.map((feature, i) => (
                <div key={i} style={{ 
                  padding: 32, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease'
                }} className="hover-card-luna">
                  <h3 style={{ fontSize: 20, marginBottom: 12, color: 'white', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={20} color="#EC4899" />
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Hire a Manager for the Price of a Tool
              </h2>
              <p style={{ fontSize: 20, color: '#EC4899', fontWeight: 600 }}>Save $2,500/mo vs. a human social media manager.</p>
            </div>

            <div style={{ 
              maxWidth: 500, margin: '0 auto', borderRadius: 32,
              backgroundColor: 'rgba(3, 7, 18, 0.5)', border: '2px solid #EC4899',
              padding: 48, position: 'relative', boxShadow: '0 0 80px rgba(236, 72, 153, 0.1)'
            }}>
              <div style={{ 
                position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                backgroundColor: '#EC4899', color: 'white', padding: '4px 16px',
                borderRadius: 100, fontSize: 12, fontWeight: 800, letterSpacing: 1
              }}>
                Coming Soon — Early Bird Pricing
              </div>

              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 8 }}>Pricing announced at launch</div>
                <div style={{ color: 'var(--text-muted)' }}>
                  Join the waitlist to get early access
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Custom Strategy & Content Plan',
                  '16 High-Quality Posts per Month',
                  'Custom Graphic Design & AI Visuals',
                  'Engaging Captions & Hashtags',
                  'Publishing to 4 Platforms',
                  'Optimal Time Scheduling',
                  'Monthly Strategy & Analytics Call',
                  'Full Calendar Approval Access',
                  'Dedicated Calgary Support'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                    <CheckCircle size={18} color="#EC4899" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary cta-pulse-luna" style={{ width: '100%', padding: '16px', fontSize: 18, textAlign: 'center', display: 'block', backgroundColor: '#EC4899', color: 'white', border: 'none' }}>
                Join the Waitlist
              </Link>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 12, marginTop: 16 }}>
                No credit card required · Full setup in under 7 days · Cancel anytime
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container-main" style={{ maxWidth: 800 }}>
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 40px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 48 
            }}>
              LUNA FAQ
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
                      textAlign: 'left', cursor: 'pointer', fontWeight: 600, fontSize: 16
                    }}
                  >
                    {faq.q}
                    <ChevronDown size={20} style={{ 
                      transform: activeFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease', color: '#EC4899'
                    }} />
                  </button>
                  <div style={{ 
                    maxHeight: activeFaq === i ? '500px' : '0', overflow: 'hidden',
                    transition: 'all 0.3s ease', color: 'var(--text-muted)',
                    fontSize: 15, lineHeight: 1.6
                  }}>
                    <div style={{ padding: '0 24px 24px 24px' }}>{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontFamily: 'var(--font-heading)', marginBottom: 24, fontWeight: 800 }}>
              Your Social Media Doesn&apos;t <br /> Have to Be a Burden.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, margin: '0 auto 40px', lineHeight: 1.6 }}>
              Let LUNA handle the work while you handle the growth.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse-luna" style={{ padding: '16px 32px', fontSize: 18, backgroundColor: '#EC4899', color: 'white', border: 'none' }}>
                Join the Waitlist
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                Book a Social Media Audit →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      <style dangerouslySetInnerHTML={{ __html: `
        .hover-card-luna:hover { transform: translateY(-8px); border-color: rgba(236, 72, 153, 0.4) !important; }
        @keyframes cta-pulse-luna {
          0% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(236, 72, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0); }
        }
        .cta-pulse-luna { animation: cta-pulse-luna 2s infinite; }
      `}} />
    </div>
  );
}
