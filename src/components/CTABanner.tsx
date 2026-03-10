import Link from 'next/link';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
  note?: string;
}

export default function CTABanner({
  heading = "Ready to Unlock Your Growth Potential?",
  subheading = "Book your free growth audit — we'll identify $50K+ in hidden revenue opportunities.",
  buttonText = "Get Your Free Growth Audit",
  buttonHref = "/contact",
  note = "No commitment. No pressure. Just clarity.",
}: CTABannerProps) {
  return (
    <section
      id="footer-cta"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
      className="section-spacing"
    >
      <div className="container-main" style={{ textAlign: 'center', maxWidth: 640 }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 32,
          color: 'var(--text-heading)',
          marginBottom: 16,
        }}>
          {heading}
        </h2>
        <p style={{
          color: 'var(--text-body)',
          fontSize: 17,
          lineHeight: 1.6,
          marginBottom: 32,
        }}>
          {subheading}
        </p>
        <Link href={buttonHref} className="btn-primary" style={{ padding: '16px 32px', fontSize: 16 }}>
          {buttonText}
        </Link>
        {note && (
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 16 }}>
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
