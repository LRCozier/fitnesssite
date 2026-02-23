import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from '../config/config';
import { ContactPayload } from '../validators/contact.schema';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

transporter.verify().then(() => {
  console.log('SMTP connection established successfully.');
}).catch((error) => {
  console.error('SMTP connection failed. Check your EMAIL_USER and EMAIL_PASS:', error);
});

export const sendContactEmail = async (data: ContactPayload): Promise<void> => {
  const servicesList = data.services.join(', ');
  const textContent = `
New Enquiry from LAC Fitness Contact Form

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Services Interested In:
${servicesList}

Message:
${data.message}
  `.trim();

console.log('Attempting to send email TO:', EMAIL_USER);

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">New Enquiry: LAC Fitness</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Services:</strong> ${servicesList}</p>
      
      <h3 style="color: #555; margin-top: 20px;">Message:</h3>
      <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #ccc; white-space: pre-wrap;">
        ${data.message}
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: EMAIL_USER,
    to: EMAIL_USER,
    subject: `New Enquiry from ${data.name}`,
    replyTo: data.email,
    text: textContent,
    html: htmlContent
  });
};