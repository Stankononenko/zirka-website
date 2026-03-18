'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Phone, Calendar, MessageSquare, Smartphone, Globe, 
  BarChart, ArrowRight, Mic, Loader2, Zap
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function MiaClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [demoState, setDemoState] = useState<'idle' | 'calling' | 'connected' | 'completed'>('idle');

  useEffect(() => {
    // Window is available, handle any client-side initialization if needed
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleDemoCall = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phoneNumber) return;

        let formattedNumber = phoneNumber.replace(/[^0-9+]/g, '');
        if (!formattedNumber.startsWith('+')) {
                if (!formattedNumber.startsWith('1')) {
                          formattedNumber = '+1' + formattedNumber;
                } else {
                          formattedNumber = '+' + formattedNumber;
                }
        }

        setDemoState('calling');

        try {
                const response = await fetch('https://stanislavkononenko.app.n8n.cloud/webhook/mia-demo-call', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ phoneNumber: formattedNumber }),
                });

                if (response.ok) {
                          setTimeout(() => setDemoState('connected'), 5000);
                          setTimeout(() => setDemoState('completed'), 30000);
                          setTimeout(() => {
                                      setDemoState('idle');
                                      setPhoneNumber('');
                          }, 35000);
                } else {
                          setDemoState('idle');
                }
        } catch {
                setDemoState('idle');
        }
  };

  return (
    <div style={{ backgroundColor: '#030712', color: 'white', minHeight: '100vh', position: 'relative' }}>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)'
      }}>
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)', color: 'var(--accent)',
              fontSize: 13, fontWeight: 600, marginBottom: 24
            }}>
              Limited Calgary Launch — $0 Setup Fee (Save $299)
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 24, fontWeight: 800 
            }}>
              Never Miss a Calgary <br /> Customer Call Again
            </h1>
            
            <p style={{ 
              color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, 
              margin: '0 auto 40px', lineHeight: 1.6 
            }}>
              MIA is your AI receptionist that answers every call, books appointments, and follows up with leads — 24/7, 365 days a year. For less than $5/day.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse" style={{ padding: '16px 32px', fontSize: 18 }}>
                Start My Free 7-Day Trial
              </Link>
              <Link href="#demo" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                Hear MIA in Action <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              <span>✓ No credit card required</span>
              <span>·</span>
              <span>✓ Setup in 24 hours</span>
              <span>·</span>
              <span>✓ Cancel anytime</span>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Background glow effects */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          width: '80vw', height: '40vw', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)', pointerEvents: 'none'
        }} />
      </section>

      {/* Section 2: Problem */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56, maxWidth: 800, margin: '0 auto 56px' 
            }}>
              Every Missed Call Is Money Walking to Your Competitor
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 56 }}>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--accent)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>24/7/365</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Live Calgary Coverage</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--accent)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>100%</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Zero Missed Calls</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--accent)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Growing</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Proprietary AI Tech</p>
              </div>
            </div>

            <p style={{ 
              textAlign: 'center', color: 'var(--text-muted)', 
              fontSize: 18, maxWidth: 800, margin: '0 auto', lineHeight: 1.6 
            }}>
              You&apos;re on a job site. In a meeting. With a patient. Your phone rings — and rings — and goes to voicemail. That caller? They&apos;re already dialing your competitor. In Calgary&apos;s competitive market, the business that answers first wins the customer. MIA makes sure that business is always yours.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 3: Features */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Meet MIA — Your 24/7 AI Receptionist
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>
                She answers calls, books appointments, and never takes a sick day.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginBottom: 56 }}>
              {[
                { 
                  icon: Phone, 
                  title: 'Answers Every Call, 24/7',
                  desc: 'Never miss a call again — even at 2 AM, on weekends, or during Calgary\'s -30°C emergency season. MIA picks up on the first ring.'
                },
                { 
                  icon: Calendar, 
                  title: 'Books Appointments Instantly',
                  desc: 'MIA checks your real availability on Google Calendar and books appointments in real-time. No double-booking. No phone tag.'
                },
                { 
                  icon: MessageSquare, 
                  title: 'Website Chat Widget',
                  desc: 'Capture leads from your website around the clock. MIA chats with visitors, answers FAQs, and converts browsers into booked appointments.'
                },
                { 
                  icon: Smartphone, 
                  title: 'SMS Follow-Ups',
                  desc: 'After every call, MIA sends confirmation texts, appointment reminders, and follow-up messages automatically. Zero effort from you.'
                },
                { 
                  icon: Globe, 
                  title: 'Speaks Multiple Languages',
                  desc: 'English, French, and more. Serve Calgary\'s diverse communities without hiring multilingual staff.'
                },
                { 
                  icon: BarChart, 
                  title: 'Call Summaries & Insights',
                  desc: 'Get instant email/SMS notifications with AI-generated summaries of every call. Know exactly who called, why, and what was scheduled.'
                }
              ].map((feat, i) => (
                <div key={i} style={{ 
                  padding: 32, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease'
                }} className="hover-card">
                  <div style={{ 
                    width: 56, height: 56, borderRadius: 12, backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24, color: 'var(--accent)'
                  }}>
                    <feat.icon size={28} />
                  </div>
                  <h3 style={{ fontSize: 20, marginBottom: 12, color: 'white' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>
                See MIA in Action — Start Free Trial
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 4: Live Demo */}
      <section id="demo" className="section-spacing" style={{ 
        background: 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.05), transparent)' 
      }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Hear MIA in Action — Right Now
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 700, margin: '0 auto' }}>
                Input your phone number and MIA will &quot;call&quot; you to demonstrate her capabilities.
              </p>
            </div>

            <div style={{ 
              maxWidth: 600, margin: '0 auto', padding: '48px 32px', borderRadius: 32,
              backgroundColor: 'rgba(3, 7, 18, 0.8)', border: '1px solid rgba(6, 182, 212, 0.3)',
              boxShadow: '0 0 60px rgba(6, 182, 212, 0.1)', textAlign: 'center',
              position: 'relative', overflow: 'hidden'
            }}>
              {demoState === 'idle' && (
                <form onSubmit={handleDemoCall} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ position: 'relative' }}>
                    <Phone style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent)' }} size={20} />
                    <input 
                      type="tel" 
                      placeholder="+1 (403) XXX-XXXX" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      style={{
                        width: '100%', padding: '16px 16px 16px 48px', borderRadius: 12,
                        backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white', fontSize: 18, outline: 'none', transition: 'all 0.3s'
                      }}
                      className="demo-input"
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: 18, fontWeight: 700 }}>
                    Call Me Now
                  </button>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12 }}>
                    * In this demo mode, MIA will simulate a call experience in your browser.
                  </p>
                </form>
              )}

              {demoState !== 'idle' && (
                <div style={{ padding: '20px 0', animation: 'fadeIn 0.5s ease' }}>
                  <div style={{ 
                    width: 80, height: 80, borderRadius: '50%', backgroundColor: 'var(--accent)',
                    margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div className="ping-animation" style={{
                      position: 'absolute', width: '100%', height: '100%', borderRadius: '50%',
                      border: '2px solid var(--accent)', opacity: 0.5
                    }} />
                    {demoState === 'calling' ? <Loader2 className="animate-spin" size={32} /> : <Mic size={32} />}
                  </div>
                  
                  <h3 style={{ fontSize: 24, marginBottom: 12 }}>
                    {demoState === 'calling' ? 'Calling...' : demoState === 'connected' ? 'Connected' : 'Call Completed'}
                  </h3>
                  
                  <div style={{ 
                    backgroundColor: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16, 
                    textAlign: 'left', minHeight: 120, display: 'flex', alignItems: 'center'
                  }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: 16, fontStyle: 'italic', margin: 0 }}>
                      {demoState === 'calling' && "Initiating secure connection to MIA..."}
                      {demoState === 'connected' && "MIA: 'Hello! I'm MIA, your AI business assistant. I'm currently demonstrating how I can answer calls and book appointments for your Calgary business...'"}
                      {demoState === 'completed' && "MIA: 'Thank you for trying this demo! I've sent a summary of our call to your system. Have a great day!'"}
                    </p>
                  </div>
                </div>
              )}
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
              Why Calgary Businesses Choose MIA
            </h2>

            <div style={{ overflowX: 'auto', marginBottom: 40 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '24px', textAlign: 'left', color: 'var(--text-muted)', fontSize: 14 }}>Feature</th>
                    <th style={{ 
                      padding: '24px', textAlign: 'center', color: 'var(--accent)', 
                      backgroundColor: 'rgba(6, 182, 212, 0.05)', borderRadius: '12px 12px 0 0'
                    }}>
                      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 4 }}>BEST VALUE</div>
                      MIA
                    </th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Full-Time Receptionist</th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Voicemail</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Monthly Cost', m: '$149/mo', r: '$4,600/mo', v: '$0' },
                    { f: 'Available 24/7', m: '✓', r: '✗', v: '✓' },
                    { f: 'Books Appointments', m: '✓', r: '✓', v: '✗' },
                    { f: 'SMS Follow-Ups', m: '✓', r: '✗', v: '✗' },
                    { f: 'Website Chat', m: '✓', r: '✗', v: '✗' },
                    { f: 'Multilingual', m: '✓', r: 'Expensive', v: '✗' },
                    { f: 'Never Calls in Sick', m: '✓', r: '✗', v: '✓' },
                    { f: 'AI Insights', m: '✓', r: 'Sometimes', v: '✗' },
                    { f: 'Setup Time', m: '24 hours', r: '2-4 weeks', v: 'Instant' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '20px 24px', color: 'white', fontWeight: 500 }}>{row.f}</td>
                      <td style={{ 
                        padding: '20px 24px', textAlign: 'center', color: 'var(--accent)', 
                        fontWeight: 700, backgroundColor: 'rgba(6, 182, 212, 0.05)'
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

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 16 }}>
              A full-time receptionist in Calgary costs $55,000+/year. MIA gives you 24/7 coverage for less than $5/day — and she never needs a coffee break.
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
              Calgary Businesses Trust MIA
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 64 }}>
              {[
                {
                  quote: '"MIA answered 47 calls in her first week — 12 of them were after hours. That\'s 12 customers we would have lost to competitors."',
                  author: 'Dr. Sarah M., Dental Clinic Owner, Calgary NW'
                },
                {
                  quote: '"We had a furnace emergency call at 11 PM on a Saturday. MIA picked up, collected all the details, and booked the service call. The customer couldn\'t believe it wasn\'t a real person."',
                  author: 'Mike R., HVAC Company Owner, Calgary SE'
                },
                {
                  quote: '"I was spending $3,800/month on an answering service. MIA does more for $149/month. The ROI was obvious from day one."',
                  author: 'Jennifer L., Law Firm Administrator, Downtown Calgary'
                }
              ].map((test, i) => (
                <div key={i} style={{ 
                  padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)', position: 'relative'
                }}>
                  <div style={{ color: 'var(--accent)', fontSize: 16, marginBottom: 16 }}>⭐⭐⭐⭐⭐</div>
                  <p style={{ color: 'white', fontSize: 18, fontStyle: 'italic', marginBottom: 24, lineHeight: 1.6 }}>{test.quote}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>— {test.author}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 10, marginTop: 12 }}>Results shown are representative examples. Individual results may vary.</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Simple, Transparent Pricing
              </h2>
            </div>

            <div style={{ 
              maxWidth: 500, margin: '0 auto', borderRadius: 32,
              backgroundColor: 'rgba(3, 7, 18, 0.5)', border: '2px solid var(--accent)',
              padding: 48, position: 'relative', boxShadow: '0 0 80px rgba(6, 182, 212, 0.15)'
            }}>
              <div style={{ 
                position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                backgroundColor: 'var(--accent)', color: 'white', padding: '4px 16px',
                borderRadius: 100, fontSize: 12, fontWeight: 800, letterSpacing: 1
              }}>
                🔥 CALGARY LAUNCH SPECIAL
              </div>

              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ fontSize: 56, fontWeight: 800, color: 'white', marginBottom: 8 }}>$149 <span style={{ fontSize: 18, color: 'var(--text-muted)' }}>CAD/month</span></div>
                <div style={{ color: 'var(--text-muted)' }}>
                  Setup fee: <span style={{ textDecoration: 'line-through' }}>$299</span> <span style={{ color: 'var(--accent)', fontWeight: 700 }}>$0 (Limited Time)</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Unlimited inbound call answering, 24/7/365',
                  'Appointment booking with Google Calendar sync',
                  'Website chat widget',
                  'SMS notifications & automated follow-ups',
                  'Multilingual support',
                  'AI call summaries',
                  'Dedicated Calgary support'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: 'rgba(235, 179, 8, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Zap size={10} color="var(--accent)" />
                    </div>
                    <span style={{ fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary cta-pulse" style={{ width: '100%', padding: '16px', fontSize: 18, textAlign: 'center' }}>
                Start My Free 7-Day Trial
              </Link>
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
              Questions? We&apos;ve Got Answers.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { 
                  q: 'Will MIA sound like a robot?', 
                  a: 'Not at all. MIA uses advanced conversational AI that sounds natural and professional.' 
                },
                { 
                  q: 'How quickly can MIA be set up?', 
                  a: 'MIA can be live and answering your calls within 24 hours.' 
                },
                { 
                  q: 'What happens if MIA can&apos;t handle a question?', 
                  a: 'She takes a detailed message and immediately notifies you via SMS and email.' 
                }
              ].map((faq, i) => (
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
                    <Zap size={20} style={{ 
                      transform: activeFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease', color: 'var(--accent)'
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


      {/* Sticky Bottom CTA for Mobile */}
      <div className="nav-mobile" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1001,
        padding: '16px 20px', backgroundColor: 'rgba(3, 7, 18, 0.95)',
        backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.1)',
        animation: 'slideUp 0.3s ease'
      }}>
        <Link href="/contact" className="btn-primary cta-pulse" style={{ width: '100%', padding: '14px', textAlign: 'center', display: 'block' }}>
          Start My Free 7-Day Trial
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .ping-animation {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hover-card:hover { transform: translateY(-8px); border-color: rgba(6, 182, 212, 0.4) !important; }
        .gradient-text { background: linear-gradient(to right, #3B82F6, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .demo-input:focus { border-color: var(--accent) !important; box-shadow: 0 0 10px rgba(6, 182, 212, 0.2); }
      `}} />
    </div>
  );
}
