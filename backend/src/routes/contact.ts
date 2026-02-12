import express from 'express';
import { ContactSchema } from '../validators/contact.schema';
import { verifyCaptcha } from '../services/recaptcha';
import { sendContactEmail } from '../services/email';


const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const parsed = ContactSchema.parse(req.body);

    await verifyCaptcha(parsed.captcha);
    await sendContactEmail(parsed);

    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: 'Invalid submission' });
  }
});

export default router;
