'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { services } from '@/data/services';

export default function Footer() {
  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Results', href: '/results' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/zirka.solutions/', Icon: Instagram },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/zirkasolutions', Icon: Linkedin },
    { label: 'Facebook', href: 'https://facebook.com/zirkasolutions', Icon: Facebook },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }} role="contentinfo">
      <div className="container-main" style={{ paddingTop: 64, paddingBottom: 32 }}>
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: 40,
        }} className="footer-grid">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--text-heading)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 12,
            }}>
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#2563EB"/>
                <path d="M24 9L28 19.5L39 19.5L30 26.5L33.5 37L24 30L14.5 37L18 26.5L9 19.5L20 19.5Z" fill="white"/>
              </svg>
              <div>
                <div>Zirka</div>
                <div style={{ fontSize: 10, letterSpacing: 3, color: '#6b6b7a', fontWeight: 600 }}>SOLUTIONS</div>
              </div>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, maxWidth: 280, marginBottom: 16 }}>
              Growth & Operations Partner for Calgary Businesses
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Zirka Solutions on ${label}`}
                  className="footer-social-link"
                  style={{
                    width: 40, height: 40, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', backgroundColor: 'var(--bg-elevated)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {services.filter(s => s.slug !== 'ai-automation').map((s) => (
                <li key={s.slug}>
                  <Link 
                    href={`/services/${s.slug}`} 
                    className="footer-link" 
                    style={{
                      color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s',
                    }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s', fontWeight: 600 }}>
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: AI Products */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>AI Team</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { name: 'ARIA — AI Chat', href: '/aria' },
                { name: 'MIA — AI Phone', href: '/mia' },
                { name: 'DAYA — AI Video', href: '/daya' },
                { name: 'SOVA (Soon)', href: '/sova' },
                { name: 'LUNA (Soon)', href: '/luna' },
                { name: 'NIKO (Soon)', href: '/niko' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="footer-link" 
                    style={{
                      color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ai-team" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s', fontWeight: 600 }}>
                  Full AI Ecosystem →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link" style={{
                    color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s',
                  }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Contact</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: 14 }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>Calgary, AB, Canada</span>
              </li>
              <li>
                <a href="tel:+15879731455" className="footer-link" style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s' }}>
                  <Phone size={16} /> +1 (587) 973-1455
                </a>
              </li>
              <li>
                <a href="mailto:info@zirka.solutions" className="footer-link" style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s' }}>
                  <Mail size={16} /> info@zirka.solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center',
          marginTop: 48, paddingBottom: 24,
        }}>
          {['Local Calgary Experts', 'Data-Driven Strategies', 'Custom AI Solutions', 'Transparent Pricing'].map((badge) => (
            <div key={badge} style={{
              padding: '8px 16px', backgroundColor: 'var(--bg-elevated)',
              borderRadius: 6, fontSize: 13, color: 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              fontWeight: 500
            }}>
              {badge}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          fontSize: 13,
          color: 'var(--text-muted)',
        }}>
          <p>© 2026 Zirka Solutions. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/privacy" className="footer-link" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Privacy Policy</Link>
            <Link href="/terms" className="footer-link" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Terms of Service</Link>
          </div>
          <p style={{ flexBasis: '100%', textAlign: 'center', fontSize: 12, marginTop: 8 }}>
            We respect your privacy and comply with CASL. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </footer>
  );
}
