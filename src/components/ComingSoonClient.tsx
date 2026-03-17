'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface ComingSoonProps {
  productName: string;
  slogan: string;
  description: string;
  price: string;
  Icon: React.ElementType;
}

export default function ComingSoonClient({ productName, slogan, description, price, Icon }: ComingSoonProps) {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setBusinessName('');
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: '#030712', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 20px' }}>
        <div className="container-main" style={{ maxWidth: 700 }}>
          <AnimateOnScroll>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(234, 179, 8, 0.1)',
                border: '1px solid rgba(234, 179, 8, 0.2)', color: '#EAB308',
                fontSize: 13, fontWeight: 700, marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1
              }}>
                Coming Soon
              </div>

              <div style={{ 
                width: 80, height: 80, borderRadius: 20, backgroundColor: 'rgba(6, 182, 212, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', color: 'var(--accent)'
              }}>
                <Icon size={40} />
              </div>

              <h1 style={{ 
                fontSize: 'clamp(36px, 6vw, 56px)', fontFamily: 'var(--font-heading)', 
                lineHeight: 1.1, marginBottom: 16, fontWeight: 800 
              }}>
                {productName}
              </h1>
              
              <p style={{ 
                fontSize: 24, fontWeight: 600, color: 'var(--accent)', 
                marginBottom: 24, fontFamily: 'var(--font-heading)' 
              }}>
                {slogan}
              </p>

              <p style={{ 
                color: 'var(--text-muted)', fontSize: 18, 
                marginBottom: 32, lineHeight: 1.6 
              }}>
                {description}
              </p>

              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 48, color: 'white' }}>
                Starting from <span style={{ color: 'var(--accent)' }}>{price}/month</span>
              </div>

              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 24, padding: 40, textAlign: 'left', maxWidth: 500, margin: '0 auto'
              }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>
                  Join the Waitlist — Be First to Get Access
                </h2>

                {status === 'success' ? (
                  <div style={{ 
                    textAlign: 'center', padding: '20px 0', color: '#10B981', 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 
                  }}>
                    <CheckCircle size={48} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>You&apos;re on the list!</div>
                      <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>We&apos;ll notify you as soon as {productName} launches. No spam.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                      <label htmlFor="email" style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8 }}>Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 12,
                          backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                          color: 'white', fontSize: 16, outline: 'none', transition: 'all 0.3s'
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="business" style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8 }}>Business Name (Optional)</label>
                      <input 
                        type="text" 
                        id="business"
                        placeholder="Your Business"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 12,
                          backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                          color: 'white', fontSize: 16, outline: 'none', transition: 'all 0.3s'
                        }}
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="btn-primary" 
                      style={{ 
                        marginTop: 8, padding: '14px', fontSize: 16, fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                      }}
                    >
                      {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Join Waitlist'}
                      {status !== 'loading' && <ArrowRight size={18} />}
                    </button>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 12, marginTop: 8 }}>
                      We&apos;ll notify you as soon as {productName} launches. No spam.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
      `}} />
    </div>
  );
}
