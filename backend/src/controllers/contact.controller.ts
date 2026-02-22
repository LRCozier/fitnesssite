import { Request, Response } from 'express';
import { validateContact } from '../utils/validatecontact';
import { verifyCaptcha } from '../services/recaptcha';
import { sendContactEmail } from '../services/email';

export const submitContactForm = async (req: Request, res: Response) => {
  const error = validateContact(req.body);
  if (error) return res.status(400).json({ error });

  const captchaValid = await verifyCaptcha(req.body.captchaToken);
  if (!captchaValid) return res.status(400).json({ error: 'Captcha failed' });

  await sendContactEmail(req.body);

  res.json({ success: true });
  console.log('Incoming payload:', req.body);

};

