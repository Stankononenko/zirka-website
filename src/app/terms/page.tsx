import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Zirka Solutions. Read the terms governing our marketing, AI automation, and operations consulting services for Calgary businesses.',
};

export default function TermsPage() {
  return (
    <div className="section-spacing container-main" style={{ paddingTop: 140 }}>
      <h1>Terms of Service</h1>
      <p>Last updated: March 13, 2026</p>
      <p>By using Zirka Solutions&apos; website and services, you agree to the following terms.</p>
      <h2>1. Services</h2>
      <p>Zirka Solutions provides marketing, AI automation, and operational consulting services.</p>
      <h2>2. Use of Website</h2>
      <p>You agree to use our website for lawful purposes only and in a manner that does not infringe on the rights of others.</p>
      <h2>3. Intellectual Property</h2>
      <p>All content on this website is the property of Zirka Solutions unless otherwise stated.</p>
      <h2>4. Limitation of Liability</h2>
      <p>Zirka Solutions will not be liable for any indirect or consequential loss arising from the use of our website or services.</p>
    </div>
  );
}
