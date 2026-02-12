import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7),
  services: z.array(z.string()).min(1),
  message: z.string().min(5),
  captcha: z.string()
});

export type ContactPayload = z.infer<typeof ContactSchema>;
