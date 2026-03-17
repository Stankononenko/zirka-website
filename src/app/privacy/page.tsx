import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Zirka Solutions. Learn how we handle your data in accordance with Canadian laws.',
};

export default function PrivacyPage() {
  return (
    <div className="section-spacing container-main" style={{ paddingTop: 140 }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: March 13, 2026</p>
      <p>At Zirka Solutions, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.</p>
      {/* Basic placeholder content for professional look */}
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly to us through contact forms, growth audit requests, and direct communication.</p>
      <h2>2. Use of Information</h2>
      <p>We use your information to provide our services, communicate with you, and improve our website and marketing efforts.</p>
      <h2>3. Data Protection</h2>
      <p>We implement security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
      <h2>4. PIPEDA Compliance</h2>
      <p>We adhere to the Personal Information Protection and Electronic Documents Act (PIPEDA) regarding the collection, use, and disclosure of personal information in Canada.</p>
    </div>
  );
}
