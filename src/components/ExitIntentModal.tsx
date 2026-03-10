'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 768) return;
    if (sessionStorage.getItem('zirka-exit-shown')) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setShow(true);
        sessionStorage.setItem('zirka-exit-shown', '1');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Delay listener to avoid triggering on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(11, 13, 18, 0.80)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={() => setShow(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Exit intent offer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 12,
          padding: 40,
          maxWidth: 480,
          width: '90%',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <button
          onClick={() => setShow(false)}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'var(--bg-elevated)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 28,
          color: 'var(--text-heading)',
          marginBottom: 12,
        }}>
          Before You Go...
        </h2>
        <p style={{
          color: 'var(--text-body)',
          fontSize: 16,
          marginBottom: 24,
          lineHeight: 1.6,
        }}>
          Grab our free Growth Audit Checklist — the same framework we use with every new client.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShow(false);
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            aria-label="Email address"
            style={{
              padding: '14px 16px',
              borderRadius: 8,
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-elevated)',
              color: 'var(--text-heading)',
              fontSize: 16,
              outline: 'none',
              width: '100%',
            }}
          />
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Send Me the Checklist
          </button>
        </form>

        <button
          onClick={() => setShow(false)}
          style={{
            marginTop: 16,
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            fontSize: 13,
            cursor: 'pointer',
          }}
        >
          No thanks, I don&apos;t need help growing
        </button>
      </div>
    </div>
  );
}
