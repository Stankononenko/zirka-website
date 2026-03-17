'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, MessageCircle, Camera, Search, 
  Target, Bot, TrendingUp, Settings, Users, Code,
  Phone, Video, Star, Layout, Send
} from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code,
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 150);
  };

  const navLinks = [
    { label: 'AI Products', href: '/ai-team' },
    { label: 'Results', href: '/results' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 20px',
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(17, 24, 39, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        }}
        role="banner"
      >
        <nav
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 72,
          }}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--text-heading)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
            aria-label="Zirka Solutions - Return to homepage"
          >
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="#2563EB"/>
              <path d="M24 9L28 19.5L39 19.5L30 26.5L33.5 37L24 30L14.5 37L18 26.5L9 19.5L20 19.5Z" fill="white"/>
            </svg>
            Zirka
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
            }}
            className="nav-desktop"
          >
            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              style={{ position: 'relative' }}
            >
              <Link
                href="/services"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  color: 'var(--text-muted)',
                  fontSize: 15,
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '8px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-heading)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                Services
                <ChevronDown size={16} style={{
                  transition: 'transform 0.2s',
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }} />
              </Link>

              {/* Mega Menu */}
              {isDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 720,
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 12,
                    padding: 24,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                  role="menu"
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
                    <div style={{ padding: '0 12px' }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent)', letterSpacing: 1.5, textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>
                        Marketing & Growth
                      </span>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
                        {services.filter(s => s.slug !== 'ai-automation').map((service) => {
                          const Icon = iconMap[service.icon];
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              role="menuitem"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                padding: '8px 10px',
                                borderRadius: 8,
                                transition: 'background 0.2s',
                                color: 'var(--text-body)',
                                fontSize: 13,
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-elevated)')}
                              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {Icon && <Icon size={14} color="rgba(255,255,255,0.4)" />}
                              <span style={{ fontWeight: 500 }}>{service.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div style={{ padding: '0 12px', borderTop: '1px solid var(--border-color)', paddingTop: 24 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent)', letterSpacing: 1.5, textTransform: 'uppercase' }}>
                          AI Digital Team
                        </span>
                        <Link href="/ai-team" style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }} onClick={() => setIsDropdownOpen(false)}>
                          View All →
                        </Link>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
                        {[
                          { name: 'ARIA (Chat)', href: '/aria', icon: MessageCircle },
                          { name: 'MIA (Voice)', href: '/mia', icon: Phone },
                          { name: 'DAYA (Video)', href: '/daya', icon: Video },
                          { name: 'SOVA (Reviews)', href: '/sova', icon: Star, soon: true },
                          { name: 'LUNA (Social)', href: '/luna', icon: Layout, soon: true },
                          { name: 'NIKO (Sales)', href: '/niko', icon: Send, soon: true },
                        ].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            role="menuitem"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              padding: '8px 10px',
                              borderRadius: 8,
                              transition: 'background 0.2s',
                              color: 'var(--text-body)',
                              fontSize: 13,
                              opacity: item.soon ? 0.6 : 1
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-elevated)')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <item.icon size={14} color="var(--accent)" />
                            <span style={{ fontWeight: 600 }}>
                              {item.name} {item.soon && <span style={{ fontSize: 9, opacity: 0.6 }}>(Soon)</span>}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-hover"
                style={{
                  color: 'var(--text-muted)',
                  fontSize: 15,
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '8px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-heading)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact" className="btn-primary cta-pulse" style={{ padding: '10px 20px', fontSize: 14 }}>
              Get Your Free Growth Audit
            </Link>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="nav-mobile" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '8px 14px', fontSize: 13 }}>
              Free Audit
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                background: 'none',
                border: 'none',
                color: 'var(--text-heading)',
                cursor: 'pointer',
              }}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'var(--bg-primary)',
            paddingTop: 80,
            overflowY: 'auto',
          }}
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <div style={{ padding: '20px 24px' }}>
            <Link
              href="/ai-team"
              onClick={() => setIsMobileOpen(false)}
              style={{
                display: 'block',
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--text-heading)',
                padding: '16px 0',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              AI Products (Team)
            </Link>
            <div style={{ padding: '8px 0 8px 16px', borderBottom: '1px solid var(--border-color)' }}>
              {[
                { name: 'ARIA — AI Chat', href: '/aria' },
                { name: 'MIA — AI Phone', href: '/mia' },
                { name: 'DAYA — AI Video', href: '/daya' },
                { name: 'SOVA (Soon)', href: '/sova' },
                { name: 'LUNA (Soon)', href: '/luna' },
                { name: 'NIKO (Soon)', href: '/niko' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: 15,
                    color: 'var(--text-muted)',
                    padding: '10px 0',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/services"
              onClick={() => setIsMobileOpen(false)}
              style={{
                display: 'block',
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--text-heading)',
                padding: '16px 0',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              Services
            </Link>
            <div style={{ padding: '8px 0 8px 16px', borderBottom: '1px solid var(--border-color)' }}>
              {services.filter(s => s.slug !== 'ai-automation').map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: 15,
                    color: 'var(--text-muted)',
                    padding: '10px 0',
                  }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                style={{
                  display: 'block',
                  fontSize: 20,
                  fontWeight: 600,
                  color: 'var(--text-heading)',
                  padding: '16px 0',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: 24 }}>
              <Link
                href="/contact"
                className="btn-primary"
                onClick={() => setIsMobileOpen(false)}
                style={{ width: '100%', textAlign: 'center' }}
              >
                Get Your Free Growth Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
