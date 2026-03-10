'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, MessageCircle, Camera, Search, Target, Bot, TrendingUp, Settings, Users, Code } from 'lucide-react';
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
            <span style={{
              width: 32,
              height: 32,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-cyan))',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              fontWeight: 700,
              color: '#F8FAFC',
            }}>Z</span>
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
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 8,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                  role="menu"
                >
                  {services.map((service) => {
                    const Icon = iconMap[service.icon];
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        role="menuitem"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                          padding: '10px 12px',
                          borderRadius: 8,
                          transition: 'background 0.2s',
                          color: 'var(--text-body)',
                          fontSize: 14,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-elevated)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {Icon && (
                          <span style={{
                            width: 32,
                            height: 32,
                            borderRadius: 6,
                            backgroundColor: 'var(--bg-elevated)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}>
                            <Icon size={16} color="var(--accent)" />
                          </span>
                        )}
                        <span>
                          <span style={{ fontWeight: 600, color: 'var(--text-heading)', display: 'block', fontSize: 13 }}>
                            {service.name}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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

            <Link href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>
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
            <div style={{ padding: '8px 0 8px 16px' }}>
              {services.map((s) => (
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
