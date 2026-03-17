'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Star, Brain, 
  CheckCircle, 
  ChevronDown, Send, Search
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function SovaClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    // Window is available, handle any client-side initialization if needed
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const statCards = [
    { value: '88%', label: 'of consumers trust online reviews as much as personal recommendations' },
    { value: '94%', label: 'of consumers say a negative online review has convinced them to avoid a business' },
    { value: '4.2+', label: 'The minimum rating customers look for before contacting a local business' }
  ];

  const steps = [
    {
      icon: Search,
      title: '24/7 Review Monitoring',
      desc: 'SOVA monitors Google, Facebook, Yelp, and more. The moment a review is posted, she knows about it.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Responses',
      desc: 'SOVA generates professional, brand-aligned responses to every review. She thanks happy customers and professionally handles negative ones.'
    },
    {
      icon: Send,
      title: 'Automated Review Requests',
      desc: 'SOVA sends SMS and Email requests to your happy customers, making it effortless for them to leave 5-star reviews.'
    }
  ];

  const features = [
    {
      title: 'Instant Response Time',
      desc: 'SOVA responds to reviews within minutes, showing Google and customers that you are highly active and attentive.'
    },
    {
      title: 'Negative Review Protection',
      desc: 'SOVA identifies negative sentiment and alerts you immediately, while drafting a professional response to de-escalate.'
    },
    {
      title: 'Review Generation Engine',
      desc: 'Automatically sync your CRM to send review requests after a purchase or service. Turn every customer into a reviewer.'
    },
    {
      title: 'SEO Ranking Boost',
      desc: 'More reviews and faster response times directly improve your Google Maps and Local Search ranking.'
    },
    {
      title: 'Cross-Platform Management',
      desc: 'Manage Google, Facebook, Yelp, and Industry-specific sites from one unified SOVA dashboard.'
    },
    {
      title: 'Insightful Analytics',
      desc: 'Track your rating growth, sentiment trends, and response rates with monthly performance reports.'
    }
  ];

  const faqs = [
    {
      q: 'Does SOVA post responses automatically or do I have to approve them?',
      a: 'You choose. SOVA can run on "Auto-Pilot" (posting responses instantly) or "Co-Pilot" (drafting them for your one-click approval). Most businesses start with Co-Pilot and switch to Auto-Pilot once they see how accurate she is.'
    },
    {
      q: 'Can SOVA delete bad reviews?',
      a: 'No software can "delete" a legitimate Google review. However, SOVA helps you dispute reviews that violate platforms policies and, more importantly, de-escalates valid complaints to turn unhappy customers into loyal ones.'
    },
    {
      q: 'How does the SMS review request work?',
      a: 'We integrate SOVA with your POS or CRM. The moment a job is completed, she sends a friendly, personalized text: "Hi [Name], thanks for choosing [Business]! How was your experience?" If they reply positively, she sends them the direct review link.'
    },
    {
      q: 'Is SOVA better than hiring a marketing agency?',
      a: 'Agencies often charge $500-$1,000/mo for reputation management and only check reviews once a week. SOVA checks every 15 minutes, never misses a review, and costs just $149/mo.'
    },
    {
      q: 'What platforms does SOVA support?',
      a: 'Google Business Profile, Facebook, Yelp, Trustpilot, and many industry-specific sites like Tripadvisor, Houzz, and more.'
    },
    {
      q: 'What is the setup process like?',
      a: 'We handle everything. We connect your accounts, train SOVA on your brand voice, and set up your SMS/Email templates. You can be live in 24-48 hours.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#030712', color: 'white', minHeight: '100vh', position: 'relative' }}>
      <div style={{ width: '100%', backgroundColor: 'rgba(234, 179, 8, 0.1)', borderBottom: '1px solid rgba(234, 179, 8, 0.2)', padding: '12px 0', textAlign: 'center', fontSize: 14, color: '#EAB308' }}>🚧 Coming Soon — Join the waitlist to get early access + $0 setup when we launch</div>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(circle at center, rgba(234, 179, 8, 0.05) 0%, transparent 70%)'
      }}>
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(234, 179, 8, 0.1)',
              border: '1px solid rgba(234, 179, 8, 0.2)', color: '#EAB308',
              fontSize: 13, fontWeight: 600, marginBottom: 24
            }}>
              <Star size={14} fill="#EAB308" /> Coming Soon — Early Bird Pricing
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 24, fontWeight: 800 
            }}>
              5-Star Reviews on <br /> <span style={{ color: '#EAB308' }}>Autopilot</span>
            </h1>
            
            <p style={{ 
              color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, 
              margin: '0 auto 40px', lineHeight: 1.6 
            }}>
              SOVA monitors your reviews, generates AI responses, and automatically asks your happy customers for 5-star feedback. Grow your rating while you sleep.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse" style={{ padding: '16px 32px', fontSize: 18, backgroundColor: '#EAB308', color: '#0F172A', border: 'none' }}>
                Join the Waitlist
              </Link>
              <Link href="#how-it-works" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                How it works ↓
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              <span>✓ No credit card</span>
              <span>·</span>
              <span>✓ Cancel anytime</span>
              <span>·</span>
              <span>✓ Installs in 2 minutes</span>
            </div>
          </AnimateOnScroll>
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
              Your Reputation Is Your Most <br /> Valuable Asset
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 56 }}>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#EAB308', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>24/7</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Review Monitoring</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#EAB308', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>100%</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Smart Response Rate</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#EAB308', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Auto</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Google Rating Growth</p>
              </div>
            </div>

            <p style={{ 
              textAlign: 'center', color: 'var(--text-muted)', 
              fontSize: 18, maxWidth: 800, margin: '0 auto', lineHeight: 1.6 
            }}>
              One negative review left unanswered can cost you dozens of new customers. But who has time to check Google, Facebook, and Yelp every day? SOVA does. She makes sure every customer feels heard and every happy client is invited to share their experience.
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
                How SOVA Works
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: 64, height: 64, borderRadius: 16, backgroundColor: 'rgba(234, 179, 8, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px', color: '#EAB308'
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
                The Ultimate Reputation Toolkit
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {features.map((feature, i) => (
                <div key={i} style={{ 
                  padding: 32, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease'
                }} className="hover-card-sova">
                  <h3 style={{ fontSize: 20, marginBottom: 12, color: 'white', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={20} color="#EAB308" />
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* AI vs Human Comparison */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56 
            }}>
              SOVA vs. The Old Way
            </h2>

            <div style={{ overflowX: 'auto', marginBottom: 40 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '24px', textAlign: 'left', color: 'var(--text-muted)', fontSize: 14 }}>Capability</th>
                    <th style={{ 
                      padding: '24px', textAlign: 'center', color: '#EAB308', 
                      backgroundColor: 'rgba(234, 179, 8, 0.05)', borderRadius: '12px 12px 0 0'
                    }}>
                      SOVA (AI)
                    </th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Marketing Agency</th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Doing It Yourself</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Monthly Cost', a: '$149/mo', c: '$500 - $1,500/mo', l: '$0 (but infinite time)' },
                    { f: 'Monitoring Frequency', a: 'Every 15 Minutes', c: 'Weekly', l: 'Whenever you remember' },
                    { f: 'Response Speed', a: 'Instant (24/7)', c: '2-3 Business Days', l: 'Days or Weeks' },
                    { f: 'Automated SMS Requests', a: '✓ Included', c: 'Extra Charge', l: 'Manual (rarely happens)' },
                    { f: 'Dashboard Access', a: '✓ Real-time', c: 'Monthly PDF', l: 'None' },
                    { f: 'Brand Voice Training', a: '✓ Custom for you', c: 'Generic', l: 'Natural' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '20px 24px', color: 'white', fontWeight: 500 }}>{row.f}</td>
                      <td style={{ 
                        padding: '20px 24px', textAlign: 'center', color: '#EAB308', 
                        fontWeight: 700, backgroundColor: 'rgba(234, 179, 8, 0.05)'
                      }}>
                        {row.a}
                      </td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.c}</td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.l}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 16, maxWidth: 800, margin: '0 auto' }}>
              Google favors businesses that respond to reviews quickly. SOVA makes you the fastest-responding business in Calgary, boosting your ranking and trust without you lifting a finger.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                One App. Total Reputation Control.
              </h2>
              <p style={{ fontSize: 20, color: '#EAB308', fontWeight: 600 }}>Join the waitlist to get early access</p>
            </div>

            <div style={{ 
              maxWidth: 500, margin: '0 auto', borderRadius: 32,
              backgroundColor: 'rgba(3, 7, 18, 0.5)', border: '2px solid #EAB308',
              padding: 48, position: 'relative', boxShadow: '0 0 80px rgba(234, 179, 8, 0.1)'
            }}>
              <div style={{ 
                position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                backgroundColor: '#EAB308', color: '#0F172A', padding: '4px 16px',
                borderRadius: 100, fontSize: 12, fontWeight: 800, letterSpacing: 1
              }}>
                Coming Soon — Early Bird Pricing
              </div>

              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 8 }}>Pricing announced at launch</div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Unlimited Review Monitoring',
                  'AI-Powered Responses (Any Language)',
                  'SMS & Email Review Requests',
                  'Google, Facebook, Yelp, Industry Sites',
                  'Negative Review Alerts (Instant)',
                  'Sentiment Analysis Dashboard',
                  'CRM/POS Integration',
                  'Monthly Performance Reports',
                  'Dedicated Local Support'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                    <CheckCircle size={18} color="#EAB308" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary cta-pulse" style={{ width: '100%', padding: '16px', fontSize: 18, textAlign: 'center', display: 'block', backgroundColor: '#EAB308', color: '#0F172A', border: 'none' }}>
                Join the Waitlist
              </Link>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 12, marginTop: 16 }}>
                No credit card required · Setup in under 48 hours · Cancel anytime
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="container-main" style={{ maxWidth: 800 }}>
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 40px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 48 
            }}>
              SOVA FAQ
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
                      transition: 'transform 0.3s ease', color: '#EAB308'
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
          width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontFamily: 'var(--font-heading)', marginBottom: 24, fontWeight: 800 }}>
              Don&apos;t Let a Single Review <br /> Go Unnoticed.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, margin: '0 auto 40px', lineHeight: 1.6 }}>
              Be among the first Calgary businesses to use SOVA to protect and grow their reputation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse" style={{ padding: '16px 32px', fontSize: 18, backgroundColor: '#EAB308', color: '#0F172A', border: 'none' }}>
                Join the Waitlist
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                Book a Reputation Audit →
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              <span>No credit card</span>
              <span>·</span>
              <span>$0 setup</span>
              <span>·</span>
              <span>Live in 24-48 hours</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      <style dangerouslySetInnerHTML={{ __html: `
        .hover-card-sova:hover { transform: translateY(-8px); border-color: rgba(234, 179, 8, 0.4) !important; }
        @keyframes cta-pulse-sova {
          0% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(234, 179, 8, 0); }
          100% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0); }
        }
        .cta-pulse { animation: cta-pulse-sova 2s infinite; }
      `}} />
    </div>
  );
}
