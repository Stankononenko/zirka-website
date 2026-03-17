import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, flow, companySize, challenge, selectedServices, timeline, budget, description, message, caslConsent } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Build email body
    const htmlBody = [
      `<h2>New ${flow === 'audit' ? 'Growth Audit Request' : flow === 'quote' ? 'Quote Request' : 'General Inquiry'}</h2>`,
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
      company ? `<p><strong>Company:</strong> ${company}</p>` : '',
      phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '',
      companySize ? `<p><strong>Company Size:</strong> ${companySize}</p>` : '',
      challenge ? `<p><strong>Biggest Challenge:</strong> ${challenge}</p>` : '',
      selectedServices?.length ? `<p><strong>Services Interested In:</strong> ${selectedServices.join(', ')}</p>` : '',
      timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : '',
      budget ? `<p><strong>Budget:</strong> ${budget}</p>` : '',
      description ? `<p><strong>Description:</strong> ${description}</p>` : '',
      message ? `<p><strong>Message:</strong> ${message}</p>` : '',
      `<p><strong>CASL Consent:</strong> ${caslConsent ? 'Yes' : 'No'}</p>`,
      `<hr>`,
      `<p style="color: #666; font-size: 12px;">Sent from zirka.solutions contact form</p>`,
    ].filter(Boolean).join('\n');

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey && !resendKey.startsWith('re_your')) {
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: 'Zirka Solutions <info@zirka.solutions>',
        to: 'info@zirka.solutions',
        replyTo: email,
        subject: `[Zirka] ${flow === 'audit' ? 'Growth Audit' : flow === 'quote' ? 'Quote Request' : 'Inquiry'} from ${name}`,
        html: htmlBody,
      });
    } else {
      // Not configured — log to console
      console.log('=== CONTACT FORM SUBMISSION (Resend not configured) ===');
      console.log({ name, email, company, phone, flow, selectedServices, message });
      console.log('======================================================');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
