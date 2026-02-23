import { Request, Response } from 'express';
import { ContactSchema } from '../validators/contact.schema';
import { verifyCaptcha } from '../services/recaptchaService';
import { sendContactEmail } from '../services/emailService';

export const submitContactForm = async (req: Request, res: Response): Promise<any> => {
  try {
    const validation = ContactSchema.safeParse(req.body);
    
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.errors[0].message });
    }

    const payload = validation.data;

    const captchaValid = await verifyCaptcha(payload.captcha);
    if (!captchaValid) {
      return res.status(400).json({ error: 'Captcha verification failed. Please try again.' });
    }

    await sendContactEmail(payload);

    return res.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};