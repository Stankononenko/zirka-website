'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Lock, Star, Clock, CheckCircle2, FileSearch, FileText, MessageSquare } from 'lucide-react';
import { services } from '@/data/services';
import ScrollReveal from '@/components/ScrollReveal';

type FlowType = 'audit' | 'quote' | 'inquiry' | null;

export default function ContactPage() {
  const [flow, setFlow] = useState<FlowType>(null);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [challenge, setChallenge] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [caslConsent, setCaslConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState('');

  const validate = (fields: string[]) => {
    const newErrors: Record<string, string> = {};
    if (fields.includes('name') && !name.trim()) newErrors.name = 'Full name is required';
    if (fields.includes('email')) {
      if (!email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email';
    }
    if (fields.includes('company') && !company.trim()) newErrors.company = 'Company name is required';
    if (fields.includes('message') && !message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const totalSteps = flow === 'audit' ? 4 : flow === 'quote' ? 5 : flow === 'inquiry' ? 2 : 1;

  const handleSubmit = () => {
    if (honeypot) return; // spam bot
    setSubmitted(true);
  };

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName) ? prev.filter((s) => s !== serviceName) : [...prev, serviceName]
    );
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 8,
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-elevated)',
    color: 'var(--text-heading)',
    fontSize: 16,
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-heading)',
    marginBottom: 6,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zirka.solutions" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://zirka.solutions/contact" },
    ],
  };

  const renderFormContent = () => {
    if (submitted) {
      const messages: Record<string, { title: string; body: string }> = {
        audit: { title: 'Your growth audit request is confirmed!', body: 'We\'ll review your details and come prepared with insights. You can also book a call below.' },
        quote: { title: 'We\'ll prepare a custom quote within 24 hours.', body: 'Our team will review your requirements and get back to you with a detailed proposal.' },
        inquiry: { title: 'Thanks for reaching out!', body: 'We\'ll get back to you within 4 business hours.' },
      };
      const msg = messages[flow || 'inquiry'];
      return (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <CheckCircle2 size={48} color="var(--color-success)" style={{ marginBottom: 16 }} />
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--text-heading)', marginBottom: 12 }}>
            Thank You!
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: 16, marginBottom: 8 }}>{msg.title}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>{msg.body}</p>
          {flow === 'audit' && (
            <div style={{
              marginTop: 24,
              padding: 24,
              backgroundColor: 'var(--bg-elevated)',
              borderRadius: 12,
              border: '1px solid var(--border-color)',
            }}>
              <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Calendly Booking Embed Placeholder</p>
            </div>
          )}
        </div>
      );
    }

    // Step 1: Choose flow
    if (!flow) {
      return (
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--text-heading)', marginBottom: 24 }}>
            How Can We Help?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { type: 'audit' as FlowType, Icon: FileSearch, title: 'Free Growth Audit', desc: 'Discover hidden revenue opportunities' },
              { type: 'quote' as FlowType, Icon: FileText, title: 'Get a Quote', desc: 'Select services and get a custom estimate' },
              { type: 'inquiry' as FlowType, Icon: MessageSquare, title: 'General Inquiry', desc: 'Ask us anything' },
            ].map(({ type, Icon, title, desc }) => (
              <button
                key={type}
                onClick={() => { setFlow(type); setStep(2); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: 20,
                  backgroundColor: 'var(--bg-primary)',
                  border: `2px solid ${type === 'audit' ? 'var(--accent)' : 'var(--border-color)'}`,
                  borderRadius: 12,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  width: '100%',
                  minHeight: 48,
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  backgroundColor: 'var(--bg-elevated)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={20} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 16 }}>{title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>{desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // --- AUDIT FLOW ---
    if (flow === 'audit') {
      if (step === 2) {
        return (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 24 }}>Tell Us About You</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Full Name *</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ ...inputStyle, borderColor: errors.name ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.name && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert" aria-describedby="name">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ ...inputStyle, borderColor: errors.email ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.email && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="company" style={labelStyle}>Company Name *</label>
                <input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} style={{ ...inputStyle, borderColor: errors.company ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.company && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert">{errors.company}</p>}
              </div>
              {/* Honeypot */}
              <div style={{ position: 'absolute', left: -9999, opacity: 0 }} aria-hidden="true">
                <input type="text" tabIndex={-1} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" />
              </div>
              <button className="btn-primary" style={{ width: '100%' }} onClick={() => { if (validate(['name', 'email', 'company'])) setStep(3); }}>
                Next
              </button>
            </div>
          </div>
        );
      }
      if (step === 3) {
        return (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 24 }}>About Your Business</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label htmlFor="size" style={labelStyle}>Company Size</label>
                <select id="size" value={companySize} onChange={(e) => setCompanySize(e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="1-5">1-5 employees</option>
                  <option value="6-20">6-20 employees</option>
                  <option value="21-50">21-50 employees</option>
                  <option value="50+">50+ employees</option>
                </select>
              </div>
              <div>
                <label htmlFor="challenge" style={labelStyle}>Biggest Challenge</label>
                <select id="challenge" value={challenge} onChange={(e) => setChallenge(e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="Not enough leads">Not enough leads</option>
                  <option value="Inconsistent marketing">Inconsistent marketing</option>
                  <option value="Operational chaos">Operational chaos</option>
                  <option value="Need to scale the team">Need to scale the team</option>
                  <option value="All of the above">All of the above</option>
                  <option value="Something else">Something else</option>
                </select>
              </div>
              <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                <legend style={labelStyle}>Primary Service Interest</legend>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                  {services.map((s) => (
                    <label key={s.slug} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-body)', fontSize: 14, cursor: 'pointer', minHeight: 32 }}>
                      <input type="checkbox" checked={selectedServices.includes(s.name)} onChange={() => toggleService(s.name)} style={{ width: 18, height: 18, accentColor: 'var(--accent)' }} />
                      {s.name}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'var(--text-muted)', fontSize: 13, cursor: 'pointer', marginTop: 8 }}>
                <input type="checkbox" checked={caslConsent} onChange={(e) => setCaslConsent(e.target.checked)} style={{ width: 18, height: 18, accentColor: 'var(--accent)', marginTop: 2, flexShrink: 0 }} />
                I&apos;d like to receive growth tips and insights from Zirka Solutions. You can unsubscribe at any time.
              </label>
              <button className="btn-primary" style={{ width: '100%' }} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        );
      }
    }

    // --- QUOTE FLOW ---
    if (flow === 'quote') {
      if (step === 2) {
        return (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 8 }}>Select Services</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 20 }}>Choose one or more services for your quote.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }} className="quote-services-grid">
              {services.map((s) => {
                const isSelected = selectedServices.includes(s.name);
                return (
                  <button
                    key={s.slug}
                    onClick={() => toggleService(s.name)}
                    style={{
                      padding: 14,
                      borderRadius: 10,
                      border: `2px solid ${isSelected ? 'var(--accent)' : 'var(--border-color)'}`,
                      backgroundColor: 'var(--bg-primary)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                      boxShadow: isSelected ? '0 0 14px rgba(59,130,246,0.15)' : 'none',
                      minHeight: 48,
                    }}
                  >
                    <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 13 }}>{s.name}</div>
                  </button>
                );
              })}
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: 20 }} onClick={() => { if (selectedServices.length > 0) setStep(3); }}>
              Next
            </button>
          </div>
        );
      }
      if (step === 3) {
        return (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 24 }}>Project Details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label htmlFor="timeline" style={labelStyle}>Timeline</label>
                <select id="timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="This month">This month</option>
                  <option value="Next month">Next month</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" style={labelStyle}>Budget Range (optional)</label>
                <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="Under $1,000/mo">Under $1,000/mo</option>
                  <option value="$1,000-$3,000/mo">$1,000-$3,000/mo</option>
                  <option value="$3,000-$5,000/mo">$3,000-$5,000/mo</option>
                  <option value="$5,000+/mo">$5,000+/mo</option>
                  <option value="Let's discuss">Let&apos;s discuss</option>
                </select>
              </div>
              <div>
                <label htmlFor="desc" style={labelStyle}>Brief Description</label>
                <textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Tell us about your business and what you're looking to achieve..." style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button className="btn-primary" style={{ width: '100%' }} onClick={() => setStep(4)}>Next</button>
            </div>
          </div>
        );
      }
      if (step === 4) {
        return (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 24 }}>Your Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label htmlFor="name-q" style={labelStyle}>Full Name *</label>
                <input id="name-q" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ ...inputStyle, borderColor: errors.name ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.name && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email-q" style={labelStyle}>Email *</label>
                <input id="email-q" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ ...inputStyle, borderColor: errors.email ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.email && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone-q" style={labelStyle}>Phone (optional)</label>
                <input id="phone-q" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="company-q" style={labelStyle}>Company Name *</label>
                <input id="company-q" type="text" value={company} onChange={(e) => setCompany(e.target.value)} style={{ ...inputStyle, borderColor: errors.company ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.company && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert">{errors.company}</p>}
              </div>
              <div style={{ position: 'absolute', left: -9999, opacity: 0 }} aria-hidden="true">
                <input type="text" tabIndex={-1} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" />
              </div>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'var(--text-muted)', fontSize: 13, cursor: 'pointer' }}>
                <input type="checkbox" checked={caslConsent} onChange={(e) => setCaslConsent(e.target.checked)} style={{ width: 18, height: 18, accentColor: 'var(--accent)', marginTop: 2, flexShrink: 0 }} />
                I&apos;d like to receive growth tips and insights from Zirka Solutions. You can unsubscribe at any time.
              </label>
              <button className="btn-primary" style={{ width: '100%' }} onClick={() => { if (validate(['name', 'email', 'company'])) handleSubmit(); }}>Submit</button>
            </div>
          </div>
        );
      }
    }

    // --- INQUIRY FLOW ---
    if (flow === 'inquiry') {
      if (step === 2) {
        return (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-heading)', marginBottom: 24 }}>Send Us a Message</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label htmlFor="name-i" style={labelStyle}>Full Name *</label>
                <input id="name-i" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ ...inputStyle, borderColor: errors.name ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.name && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email-i" style={labelStyle}>Email *</label>
                <input id="email-i" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ ...inputStyle, borderColor: errors.email ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.email && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="msg" style={labelStyle}>Message *</label>
                <textarea id="msg" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} style={{ ...inputStyle, resize: 'vertical', borderColor: errors.message ? 'var(--color-error)' : 'var(--border-color)' }} />
                {errors.message && <p style={{ color: 'var(--color-error)', fontSize: 13, marginTop: 4 }} role="alert">{errors.message}</p>}
              </div>
              <div style={{ position: 'absolute', left: -9999, opacity: 0 }} aria-hidden="true">
                <input type="text" tabIndex={-1} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" />
              </div>
              <button className="btn-primary" style={{ width: '100%' }} onClick={() => { if (validate(['name', 'email', 'message'])) handleSubmit(); }}>
                Send Message
              </button>
            </div>
          </div>
        );
      }
    }

    return null;
  };

  const currentStep = !flow ? 1 : step;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ paddingTop: 140 }} className="section-spacing">
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48 }} className="contact-grid">
            {/* Left Side */}
            <div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 44px)', color: 'var(--text-heading)', marginBottom: 16 }}>
                Let&apos;s Talk Growth
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
                Whether you need a full growth audit, a quick quote, or just want to chat — we&apos;re here.
              </p>

              <ScrollReveal>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--text-body)', fontSize: 15 }}>
                    <MapPin size={18} color="var(--accent)" /> 123 Centre Street SW, Calgary, AB
                  </div>
                  <a href="tel:+14035551234" style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--text-body)', fontSize: 15 }}>
                    <Phone size={18} color="var(--accent)" /> (403) 555-1234
                  </a>
                  <a href="mailto:hello@zirka.solutions" style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--text-body)', fontSize: 15 }}>
                    <Mail size={18} color="var(--accent)" /> hello@zirka.solutions
                  </a>
                </div>
              </ScrollReveal>

              {/* Map Placeholder */}
              <div style={{
                width: '100%', height: 200, borderRadius: 12,
                backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', fontSize: 14, marginBottom: 24,
              }} role="img" aria-label="Google Maps showing Zirka Solutions office in Calgary">
                Google Maps Embed
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { label: 'Instagram', href: '#', Icon: Instagram },
                  { label: 'LinkedIn', href: '#', Icon: Linkedin },
                  { label: 'Facebook', href: '#', Icon: Facebook },
                ].map(({ label, href, Icon }) => (
                  <a key={label} href={href} aria-label={`Zirka Solutions on ${label}`} style={{
                    width: 40, height: 40, borderRadius: 8,
                    backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', transition: 'all 0.2s',
                  }}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div>
              <div style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 12,
                padding: '32px 24px',
                position: 'relative',
              }}>
                {/* Progress bar */}
                {!submitted && (
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
                      <span>Step {currentStep} of {totalSteps}</span>
                      {flow && (
                        <button
                          onClick={() => { if (step > 2) setStep(step - 1); else { setFlow(null); setStep(1); } }}
                          style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: 12, fontWeight: 600, padding: 0 }}
                        >
                          ← Back
                        </button>
                      )}
                    </div>
                    <div style={{ width: '100%', height: 4, borderRadius: 2, backgroundColor: 'var(--bg-elevated)' }}>
                      <div style={{
                        width: `${(currentStep / totalSteps) * 100}%`,
                        height: '100%',
                        borderRadius: 2,
                        backgroundColor: 'var(--accent)',
                        transition: 'width 0.3s ease',
                      }} />
                    </div>
                  </div>
                )}

                {renderFormContent()}
              </div>

              {/* Trust signals */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 20, justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)' }}>
                  <Star size={14} color="var(--accent-gold)" fill="var(--accent-gold)" /> 4.9★ from 50+ reviews
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)' }}>
                  <Clock size={14} /> We respond within 4 business hours
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)' }}>
                  <Lock size={14} /> Your information is secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
