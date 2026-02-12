import nodemailer from 'nodemailer';
import type { ContactPayload } from '../types/contact.ts';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendContactEmail = async (payload: ContactPayload) => {
  await transporter.sendMail({
    from: `"LAC Fitness" <${process.env.SMTP_USER}>`,
    to: process.env.INBOX_EMAIL,
    subject: `New enquiry from ${payload.name}`,
    text: `
Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Services: ${payload.services}

Message:
${payload.message}
`
  });
};
