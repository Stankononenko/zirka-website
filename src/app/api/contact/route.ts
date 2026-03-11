import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, flow, companySize, challenge, selectedServices, timeline, budget, description, message, caslConsent } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Build email body
    const lines = [
      `**New ${flow === 'audit' ? 'Growth Audit Request' : flow === 'quote' ? 'Quote Request' : 'General Inquiry'}**`,
      '',
      `**Name:** ${name}`,
      `**Email:** ${email}`,
      company ? `**Company:** ${company}` : '',
      phone ? `**Phone:** ${phone}` : '',
      companySize ? `**Company Size:** ${companySize}` : '',
      challenge ? `**Biggest Challenge:** ${challenge}` : '',
      selectedServices?.length ? `**Services Interested In:** ${selectedServices.join(', ')}` : '',
      timeline ? `**Timeline:** ${timeline}` : '',
      budget ? `**Budget:** ${budget}` : '',
      description ? `**Description:** ${description}` : '',
      message ? `**Message:** ${message}` : '',
      `**CASL Consent:** ${caslConsent ? 'Yes' : 'No'}`,
    ].filter(Boolean).join('\n');

    const htmlBody = lines.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');

    // Check if SMTP is configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"Zirka Website" <${smtpUser}>`,
        to: 'stan@zirkasolutions.com',
        replyTo: email,
        subject: `[Zirka Website] ${flow === 'audit' ? 'Growth Audit Request' : flow === 'quote' ? 'Quote Request' : 'General Inquiry'} from ${name}`,
        html: htmlBody,
      });
    } else {
      // SMTP not configured — log to console for dev/staging
      console.log('=== CONTACT FORM SUBMISSION (SMTP not configured) ===');
      console.log(lines);
      console.log('=====================================================');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
