'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  ChevronDown, Send, Target, Handshake, Zap, ShieldCheck
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function NikoClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    // Window is available, handle any client-side initialization if needed
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const statCards = [
    { value: '47%', label: 'better response rates with personalized AI-driven outreach' },
    { value: '$0', label: 'spent on cold calling or expensive sales reps who quit in 3 months' },
    { value: '24/7', label: 'active prospecting and follow-ups — NIKO never misses an email' }
  ];

  const steps = [
    {
      icon: Target,
      title: 'Precision Prospecting',
      desc: 'NIKO scans directories, LinkedIn, and social media to find businesses in Calgary and beyond that perfectly match your ideal customer profile.'
    },
    {
      icon: Zap,
      title: 'Personalized Outreach',
      desc: 'NIKO researches each lead and writes a 1-to-1 personalized email. No generic templates — she references their specific work and needs.'
    },
    {
      icon: Handshake,
      title: 'Qualification & Handoff',
      desc: 'NIKO handles the initial replies and follow-ups. When a lead shows interest, she qualifies them and passes them directly to you.'
    }
  ];

  const features = [
    {
      title: 'Human-Like Personalization',
      desc: 'NIKO reads their website and social media before writing, ensuring every email feels like it came from a human researcher.'
    },
    {
      title: 'Smart Follow-up System',
      desc: 'Most sales happen in the 5th-8th follow-up. NIKO stays persistent without being annoying, using AI to time responses perfectly.'
    },
    {
      title: 'Lead Enrichment',
      desc: 'NIKO finds name, direct email, phone number, and company data for every prospect, building you a valuable database.'
    },
    {
      title: 'CRM Automation',
      desc: 'Every positive response is automatically synced to your CRM (HubSpot, Pipedrive, etc.) for your team to close.'
    },
    {
      icon: ShieldCheck,
      title: 'Compliance-First Outreach',
      desc: 'NIKO is built with CASL and GDPR compliance in mind, using verified email addresses and professional opt-out options.'
    },
    {
      title: 'Detailed Sales Insights',
      desc: 'Track open rates, reply rates, and conversion metrics in a real-time dashboard. See exactly which niches are biting.'
    }
  ];

  const faqs = [
    {
      q: 'Will NIKO get my email address blacklisted?',
      a: 'No. NIKO uses specialized "warm-up" techniques and sends emails at a human-like pace. We use secondary domains to protect your primary business email, ensuring 99.9% deliverability.'
    },
    {
      q: 'Can I see the emails NIKO is sending?',
      a: 'Yes. You have a full dashboard where you can see every draft, every sent email, and every reply. You are in total control of the messaging.'
    },
    {
      q: 'How does NIKO find the leads?',
      a: 'NIKO uses a combination of industry-leading B2B databases and live web scraping to find companies that meet your specific criteria (industry, location, size, etc.).'
    },
    {
      q: 'Does NIKO handle the whole sale?',
      a: 'NIKO handles the "Cold-to-Warm" phase — finding leads, reaching out, and qualifying their interest. Once they say "I\'d like to hear more," she passes the baton to YOU to close the deal.'
    },
    {
      q: 'What industries does NIKO work best for?',
      a: 'B2B services are her specialty: Marketing agencies, IT services, SaaS, Commercial cleaners, Trades, and Professional services (Law, Accounting, etc.).'
    },
    {
      q: 'Can NIKO follow up via LinkedIn too?',
      a: 'Absolutely. NIKO can perform multi-channel outreach, combining Email and LinkedIn connections to maximize your response rates.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#030712', color: 'white', minHeight: '100vh', position: 'relative' }}>
      <div style={{ width: '100%', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', padding: '12px 0', textAlign: 'center', fontSize: 14, color: '#10B981' }}>🚧 Coming Soon — Join the waitlist to get early access + $0 setup when we launch</div>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)'
      }}>
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)', color: '#10B981',
              fontSize: 13, fontWeight: 600, marginBottom: 24
            }}>
              <Send size={14} /> Coming Soon — Early Bird Pricing
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 24, fontWeight: 800 
            }}>
              New Clients Found and <br /> <span style={{ color: '#10B981' }}>Contacted</span> For You
            </h1>
            
            <p style={{ 
              color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, 
              margin: '0 auto 40px', lineHeight: 1.6 
            }}>
              NIKO is your AI Sales Outreach Agent. She finds your ideal prospects, writes personalized emails, and follows up automatically until they book a meeting.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse-niko" style={{ padding: '16px 32px', fontSize: 18, backgroundColor: '#10B981', color: 'white', border: 'none' }}>
                Join the Waitlist
              </Link>
              <Link href="#how-it-works" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                How she finds leads ↓
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              <span>✓ No credit card</span>
              <span>·</span>
              <span>✓ Scalable Outreach</span>
              <span>·</span>
              <span>✓ Dedicated Sales Box</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56, maxWidth: 800, margin: '0 auto 56px' 
            }}>
              Stop Waiting for Leads. <br /> Go <span style={{ color: '#10B981' }}>Get Them</span>.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 56 }}>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#10B981', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Smart</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Lead Prospecting</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#10B981', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>High</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Email Deliverability</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#10B981', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Infinite</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Sales Pipeline Growth</p>
              </div>
            </div>

            <p style={{ 
              textAlign: 'center', color: 'var(--text-muted)', 
              fontSize: 18, maxWidth: 800, margin: '0 auto', lineHeight: 1.6 
            }}>
              Traditional advertising is getting more expensive every day. Cold calling is exhausting and inefficient. NIKO combines the scale of automation with the personalization of a top-tier sales rep to fill your calendar with qualified prospects.
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
                NIKO&apos;s Sales Process
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: 64, height: 64, borderRadius: 16, backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px', color: '#10B981'
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
                Built-In Sales Excellence
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {features.map((feature, i) => (
                <div key={i} style={{ 
                  padding: 32, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease'
                }} className="hover-card-niko">
                  <h3 style={{ fontSize: 20, marginBottom: 12, color: 'white', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={20} color="#10B981" />
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
                Fair Pricing. Exponential Pipeline.
              </h2>
              <p style={{ fontSize: 20, color: '#10B981', fontWeight: 600 }}>One closed client often pays for 5 years of NIKO.</p>
            </div>

            <div style={{ 
              maxWidth: 500, margin: '0 auto', borderRadius: 32,
              backgroundColor: 'rgba(3, 7, 18, 0.5)', border: '2px solid #10B981',
              padding: 48, position: 'relative', boxShadow: '0 0 80px rgba(16, 185, 129, 0.1)'
            }}>
              <div style={{ 
                position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                backgroundColor: '#10B981', color: 'white', padding: '4px 16px',
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
                  '500+ Personalized Outreach Emails/mo',
                  'Custom Prospecting & Lead Scouring',
                  'AI-Written Humanized Content',
                  'Up to 8 Smart Follow-ups per Lead',
                  'Lead Labelling & Qualification',
                  'CRM & Google Sheets Integration',
                  'Dedicated Secondary Domain Setup',
                  'Monthly Optimization Report',
                  'Local Calgary Campaign Support'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                    <CheckCircle size={18} color="#10B981" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary cta-pulse-niko" style={{ width: '100%', padding: '16px', fontSize: 18, textAlign: 'center', display: 'block', backgroundColor: '#10B981', color: 'white', border: 'none' }}>
                Join the Waitlist
              </Link>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 12, marginTop: 16 }}>
                No credit card required · Setup in under 5 days · Cancel anytime
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
              NIKO FAQ
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
                      transition: 'transform 0.3s ease', color: '#10B981'
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
          width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontFamily: 'var(--font-heading)', marginBottom: 24, fontWeight: 800 }}>
              Stop Chasing Leads. <br /> Let Them Come to You.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, margin: '0 auto 40px', lineHeight: 1.6 }}>
              Get NIKO on your sales team today and start your first campaign this week.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse-niko" style={{ padding: '16px 32px', fontSize: 18, backgroundColor: '#10B981', color: 'white', border: 'none' }}>
                Join the Waitlist
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                Book a Sales Strategy Call →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      <style dangerouslySetInnerHTML={{ __html: `
        .hover-card-niko:hover { transform: translateY(-8px); border-color: rgba(16, 185, 129, 0.4) !important; }
        @keyframes cta-pulse-niko {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .cta-pulse-niko { animation: cta-pulse-niko 2s infinite; }
      `}} />
    </div>
  );
}

const PenTool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19 7-7 3 3-7 7-3-3Z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
    <path d="m2 2 5 5" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);
