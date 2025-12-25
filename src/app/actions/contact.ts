'use server';

import { resend } from '@/lib/resend';

export async function sendContactEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const type = formData.get('type') as string;
    const timeline = formData.get('timeline') as string;
    const description = formData.get('description') as string;

    if (!name || !email || !description) {
        return { error: 'Please fill in all required fields.' };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: `${name} <no-reply@company.nienalabs.com>`,
            to: process.env.CONTACT_RECIPIENT_EMAIL || 'company@nienalabs.com',
            subject: `New Project Request: ${type} from ${name}`,
            replyTo: email,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
                        .header { margin-bottom: 30px; border-bottom: 2px solid #7c5cff; padding-bottom: 20px; }
                        .logo { font-size: 24px; font-weight: 700; color: #7c5cff; letter-spacing: -0.02em; }
                        .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
                        .value { font-size: 16px; color: #0f172a; margin-bottom: 24px; }
                        .description-box { background: #f8fafc; border-radius: 8px; padding: 24px; border-left: 4px solid #3b82f6; }
                        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 14px; color: #94a3b8; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <div class="logo">Niena Labs <span style="font-weight: 400; color: #94a3b8;">/ Inquiry</span></div>
                        </div>
                        
                        <div class="section">
                            <div class="label">From</div>
                            <div class="value"><strong>${name}</strong> (${email})</div>
                            
                            <div class="label">Project Type</div>
                            <div class="value">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                            
                            <div class="label">Timeline & Budget</div>
                            <div class="value">${timeline || 'Not specified'}</div>
                            
                            <div class="label">Problem Description</div>
                            <div class="description-box">
                                ${description.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                        
                        <div class="footer">
                            This inquiry was sent from the Niena Labs contact form.
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return { error: 'Failed to send message. Please try again later.' };
        }

        return { success: true };
    } catch (err) {
        console.error('Contact action error:', err);
        return { error: 'An unexpected error occurred.' };
    }
}
