'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, UserPlus, BookOpen, 
  Monitor, CheckCircle,
  Zap, ChevronDown, Send
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AriaClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    // Window is available, handle any client-side initialization if needed
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const statCards = [
    { value: '53%', label: 'of website visitors leave without taking any action' },
    { value: '79%', label: 'of leads never convert because businesses respond too slowly' },
    { value: '$0', label: 'revenue from visitors who leave without contacting you' }
  ];

  const steps = [
    {
      icon: Monitor,
      title: 'We Install ARIA on Your Website',
      desc: 'One line of code. Works with any website — WordPress, Wix, Squarespace, Shopify, custom sites. Our team handles the installation.'
    },
    {
      icon: BookOpen,
      title: 'ARIA Learns Your Business',
      desc: 'We train ARIA with your services, pricing, hours, FAQs, and booking link. She becomes an expert on YOUR business in 24 hours.'
    },
    {
      icon: UserPlus,
      title: 'ARIA Captures Leads 24/7',
      desc: 'Every visitor gets instant answers. ARIA collects their name, phone, and email, then notifies you immediately via SMS and email.'
    }
  ];

  const features = [
    {
      title: 'Instant Answers, 24/7',
      desc: 'ARIA responds to every visitor in under 2 seconds. No waiting, no business hours limitations.'
    },
    {
      title: 'Lead Capture on Autopilot',
      desc: 'ARIA naturally collects name, phone, and email during conversation. Every lead goes straight to your Google Sheet + SMS notification.'
    },
    {
      title: 'Appointment Booking',
      desc: 'ARIA sends your booking link at the perfect moment in conversation, driving visitors to schedule.'
    },
    {
      title: 'Trained on YOUR Business',
      desc: 'ARIA knows your services, pricing, hours, policies. She answers exactly like you would.'
    },
    {
      title: 'Works on Any Website',
      desc: 'WordPress, Wix, Squarespace, Shopify, custom — one line of code, installs in 5 minutes.'
    },
    {
      title: 'Real-Time Notifications',
      desc: 'Get SMS and email alerts the moment a new lead is captured. Follow up while they\'re still warm.'
    }
  ];

  const faqs = [
    {
      q: 'How hard is it to install ARIA on my website?',
      a: 'Easy — it\'s one line of code that we install for you. Works on WordPress, Wix, Squarespace, Shopify, or any custom website. Most installations take under 5 minutes.'
    },
    {
      q: 'Will ARIA sound robotic or generic?',
      a: 'No. We train ARIA specifically on your business — your services, your prices, your hours, your FAQs. She answers as if she\'s been working at your front desk for years.'
    },
    {
      q: 'What happens when someone asks a question ARIA can\'t answer?',
      a: 'ARIA says "Let me connect you with our team!" and collects their name and phone number. You get an instant SMS so you can follow up personally.'
    },
    {
      q: 'Can I see what ARIA is saying to my visitors?',
      a: 'Yes. Every conversation is logged and accessible to you. You can review transcripts anytime and we can adjust ARIA\'s responses based on your feedback.'
    },
    {
      q: 'Does ARIA work on mobile?',
      a: 'Absolutely. ARIA\'s chat window is fully responsive and works perfectly on phones, tablets, and desktops.'
    },
    {
      q: 'What\'s the ROI? Is $99/month worth it?',
      a: 'If your average customer is worth $200+, ARIA needs to capture just ONE extra lead every two months to pay for herself. Most businesses see 15-30 new leads per month from ARIA.'
    }
  ];

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
              padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.2)', color: 'var(--accent)',
              fontSize: 13, fontWeight: 600, marginBottom: 24
            }}>
              <Zap size={14} /> 💬 Launch Special — $0 Setup + First 14 Days Free
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-heading)', 
              lineHeight: 1.1, marginBottom: 24, fontWeight: 800 
            }}>
              Turn Every Website Visitor <br /> Into a Lead — Automatically
            </h1>
            
            <p style={{ 
              color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, 
              margin: '0 auto 40px', lineHeight: 1.6 
            }}>
              ARIA is your AI chat agent that lives on your website 24/7. She answers questions, captures contact info, and books appointments while you sleep. For just $99/month.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse" style={{ padding: '16px 32px', fontSize: 18 }}>
                Get ARIA on My Website — Free
              </Link>
              <Link href="#demo" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                See ARIA in Action ↓
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              <span>✓ 14-day free trial</span>
              <span>·</span>
              <span>✓ Installs in 5 minutes</span>
              <span>·</span>
              <span>✓ No coding required</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 2: Problem */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56, maxWidth: 800, margin: '0 auto 56px' 
            }}>
              Your Website Is Leaking Leads Right Now
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 56 }}>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--accent)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>24/7</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Lead Capture Coverage</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--accent)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>100%</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Customer Response Rate</p>
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
              Right now, people are visiting your website at 10 PM, on weekends, during lunch breaks. They have questions about your services. They want to book. But there&apos;s no one there to talk to. They leave. They find your competitor. ARIA makes sure that never happens again.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 3: How it works */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                How ARIA Works
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: 64, height: 64, borderRadius: 16, backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px', color: 'var(--accent)'
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

      {/* Section 4: Demo */}
      <section id="demo" className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                See ARIA in Action
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>
                This is a live ARIA demo. Try chatting with her right now.
              </p>
            </div>

            <div style={{ maxWidth: 500, margin: '0 auto', backgroundColor: '#111827', borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#1F2937', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent-cyan))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={20} color="white" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>ARIA</div>
                  <div style={{ fontSize: 12, color: '#10B981', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                    Online
                  </div>
                </div>
              </div>
              
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 400 }}>
                <div style={{ alignSelf: 'flex-start', maxWidth: '85%', padding: '12px 16px', borderRadius: '4px 16px 16px 16px', backgroundColor: '#1F2937', color: 'white', fontSize: 14 }}>
                  Hi! 👋 Welcome to Calgary Dental Care. How can I help you today?
                </div>
                <div style={{ alignSelf: 'flex-end', maxWidth: '85%', padding: '12px 16px', borderRadius: '16px 16px 4px 16px', backgroundColor: 'var(--accent)', color: 'white', fontSize: 14 }}>
                  How much is a teeth cleaning?
                </div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '85%', padding: '12px 16px', borderRadius: '4px 16px 16px 16px', backgroundColor: '#1F2937', color: 'white', fontSize: 14 }}>
                  Great question! A standard cleaning starts at $180, which includes scaling, polishing, and a fluoride treatment. Would you like to book an appointment? I can check available times for you.
                </div>
                <div style={{ alignSelf: 'flex-end', maxWidth: '85%', padding: '12px 16px', borderRadius: '16px 16px 4px 16px', backgroundColor: 'var(--accent)', color: 'white', fontSize: 14 }}>
                  Yes, do you have anything this Saturday?
                </div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '85%', padding: '12px 16px', borderRadius: '4px 16px 16px 16px', backgroundColor: '#1F2937', color: 'white', fontSize: 14 }}>
                  Let me check... We have openings at 10:00 AM and 2:30 PM this Saturday. Which works better? I&apos;ll just need your name and phone number to confirm.
                </div>
              </div>

              <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#1F2937', display: 'flex', gap: 12 }}>
                <div style={{ flexGrow: 1, height: 44, padding: '0 16px', borderRadius: 22, backgroundColor: '#374151', display: 'flex', alignItems: 'center', color: '#9CA3AF', fontSize: 14 }}>
                  Type a message...
                </div>
                <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Send size={18} />
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>
                Get ARIA on My Website — Free
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 5: Features */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Everything ARIA Does For Your Business
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {features.map((feature, i) => (
                <div key={i} style={{ 
                  padding: 32, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease'
                }} className="hover-card">
                  <h3 style={{ fontSize: 20, marginBottom: 12, color: 'white', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={20} color="var(--accent)" />
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 5b: Combo */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ 
              padding: '64px 40px', borderRadius: 32, 
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.2)', textAlign: 'center'
            }}>
              <div style={{ 
                width: 56, height: 56, borderRadius: '50%', backgroundColor: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', color: 'white'
              }}>
                <Zap size={28} />
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-heading)', marginBottom: 24 }}>
                ARIA + MIA = Total Lead Capture
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 700, margin: '0 auto 32px', lineHeight: 1.6 }}>
                ARIA catches leads on your WEBSITE. MIA catches leads on your PHONE.
                Together, you never miss a customer — online or offline.
              </p>
              <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>
                Bundle both for <span style={{ color: 'var(--accent)' }}>$199/month</span> (save $49)
              </div>
              <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>
                Get the Bundle →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 6: Comparison */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56 
            }}>
              ARIA vs The Alternatives
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
                      ARIA
                    </th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Contact Form</th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>Live Chat (Human)</th>
                    <th style={{ padding: '24px', textAlign: 'center', color: 'white' }}>No Chat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Monthly Cost', a: '$99/mo', c: '$0', l: '$300-$1,500/mo', n: '$0' },
                    { f: 'Available 24/7', a: '✓', c: '✓ (but no conversation)', l: '✗ (business hours)', n: '✗' },
                    { f: 'Answers Questions', a: '✓ (instantly)', c: '✗', l: '✓ (when someone\'s there)', n: '✗' },
                    { f: 'Captures Leads', a: '✓ (conversational)', c: '✓ (form only, 3% fill rate)', l: '✓', n: '✗' },
                    { f: 'Instant Notifications', a: '✓ (SMS + email)', c: '✓ (email only)', l: 'Depends', n: '✗' },
                    { f: 'Books Appointments', a: '✓', c: '✗', l: '✓', n: '✗' },
                    { f: 'Setup Time', a: '5 minutes', c: '10 minutes', l: 'Days-weeks', n: 'N/A' },
                    { f: 'No Coding Required', a: '✓', c: 'Depends', l: 'Depends', n: 'N/A' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '20px 24px', color: 'white', fontWeight: 500 }}>{row.f}</td>
                      <td style={{ 
                        padding: '20px 24px', textAlign: 'center', color: 'var(--accent)', 
                        fontWeight: 700, backgroundColor: 'rgba(6, 182, 212, 0.05)'
                      }}>
                        {row.a}
                      </td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.c}</td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.l}</td>
                      <td style={{ padding: '20px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 16, maxWidth: 800, margin: '0 auto' }}>
              Contact forms convert at 3%. ARIA converts at 15-25% because she has real conversations with your visitors. That&apos;s 5-8x more leads from the same traffic you already have.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 7: Social Proof */}
      <section className="section-spacing">
        <div className="container-main">
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 56 
            }}>
              Calgary Businesses Love ARIA
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 64 }}>
              {[
                {
                  quote: '"We added ARIA to our website on Monday. By Friday, she had captured 23 leads we would have completely missed. Our old contact form was getting maybe 3-4 per week."',
                  author: 'David T., Home Renovation Company, Calgary SE'
                },
                {
                  quote: '"I check my phone and see \'New lead from ARIA\' at 11:30 PM. Someone wanted an emergency plumbing quote. I called them back at 7 AM and booked a $2,800 job. ARIA paid for herself for the next 2 years with one lead."',
                  author: 'Kevin M., Plumbing Company, Calgary NW'
                },
                {
                  quote: '"Honestly the setup was shockingly easy. I\'m not technical at all. Zirka installed it for us and ARIA was live the same day. The ROI is insane."',
                  author: 'Priya S., Spa Owner, Calgary SW'
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

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 16, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 40 }}>
              <span>24/7 Coverage</span>
              <span>·</span>
              <span>Instant Response</span>
              <span>·</span>
              <span>Any Website Platform</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 8: Pricing */}
      <section className="section-spacing" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container-main">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Simple Pricing. Massive ROI.
              </h2>
              <p style={{ fontSize: 20, color: 'var(--accent)', fontWeight: 600 }}>One lead pays for a full year of ARIA.</p>
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
                🚀 LAUNCH SPECIAL
              </div>

              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ fontSize: 56, fontWeight: 800, color: 'white', marginBottom: 8 }}>$99 <span style={{ fontSize: 18, color: 'var(--text-muted)' }}>CAD/month</span></div>
                <div style={{ color: 'var(--text-muted)' }}>
                  Setup fee: <span style={{ textDecoration: 'line-through' }}>$199</span> <span style={{ color: 'var(--accent)', fontWeight: 700 }}>$0 (Limited Time)</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'AI chat widget on your website',
                  'Trained on your business (services, pricing, hours, FAQs)',
                  '24/7 automated lead capture',
                  'Appointment booking link integration',
                  'SMS + email notifications for every lead',
                  'Google Sheets lead tracking',
                  'Works on any website platform',
                  'Monthly performance report',
                  'Dedicated Calgary-based support'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                    <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary cta-pulse" style={{ width: '100%', padding: '16px', fontSize: 18, textAlign: 'center', display: 'block' }}>
                Get ARIA Free for 14 Days
              </Link>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 12, marginTop: 16 }}>
                14-day free trial · No credit card required · Cancel anytime
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="section-spacing">
        <div className="container-main" style={{ maxWidth: 800 }}>
          <AnimateOnScroll>
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 40px)', fontFamily: 'var(--font-heading)', 
              textAlign: 'center', marginBottom: 48 
            }}>
              Questions? We&apos;ve Got Answers.
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

      {/* Section 10: Final CTA */}
      <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontFamily: 'var(--font-heading)', marginBottom: 24, fontWeight: 800 }}>
              Your Website Visitors Are Leaving Right Now. <br /> Let ARIA Catch Them.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 20, maxWidth: 800, margin: '0 auto 40px', lineHeight: 1.6 }}>
              Setup takes 5 minutes. Your first lead could come tonight.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <Link href="/contact" className="btn-primary cta-pulse" style={{ padding: '16px 32px', fontSize: 18 }}>
                Get ARIA Free for 14 Days
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 18 }}>
                Want to see it first? Book a free demo →
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              <span>No credit card</span>
              <span>·</span>
              <span>$0 setup</span>
              <span>·</span>
              <span>Live in 24 hours</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      <style dangerouslySetInnerHTML={{ __html: `
        .hover-card:hover { transform: translateY(-8px); border-color: rgba(6, 182, 212, 0.4) !important; }
        @keyframes cta-pulse {
          0% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(6, 182, 212, 0); }
          100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
        }
        .cta-pulse { animation: cta-pulse 2s infinite; }
      `}} />
    </div>
  );
}
