'use client';

interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 36,
        fontWeight: 800,
        color: 'var(--text-heading)',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      }}>
        {value}
      </div>
      <div style={{
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 4,
      }}>
        {label}
      </div>
    </div>
  );
}
