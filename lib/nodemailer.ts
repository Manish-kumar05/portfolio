import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendContactEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'patarmanishjuly06@gmail.com',
      subject: 'New Portfolio Message',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border-left: 4px solid #007bff;">
              ${escapeHtml(message)}
            </p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This is an automated message from your portfolio contact form.</p>
        </div>
      `,
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('[v0] Email sent successfully:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('[v0] Email send error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send email' }
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
