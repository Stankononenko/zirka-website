'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { services } from '@/data/services';

export default function Footer() {
  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Results', href: '/results' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/contact' },
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
              <span style={{
                width: 32, height: 32,
                background: 'linear-gradient(135deg, var(--accent), var(--accent-cyan))',
                borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 700, color: '#F8FAFC',
              }}>Z</span>
              Zirka Solutions
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
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="footer-link" style={{
                    color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s',
                  }}>
                    {s.name}
                  </Link>
                </li>
              ))}
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
                <a href="mailto:stan@zirkasolutions.com" className="footer-link" style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-muted)', fontSize: 14, transition: 'color 0.2s' }}>
                  <Mail size={16} /> stan@zirkasolutions.com
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
          {['BBB Accredited', 'Calgary Chamber of Commerce', 'Google Partner', 'Meta Business Partner'].map((badge) => (
            <div key={badge} style={{
              padding: '8px 16px', backgroundColor: 'var(--bg-elevated)',
              borderRadius: 6, fontSize: 12, color: 'var(--text-muted)',
              border: '1px solid var(--border-color)',
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
