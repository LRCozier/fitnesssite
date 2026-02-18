import { ContactPayload } from '../types/contact';

export const validateContact = (data: ContactPayload): string | null => {
  if (!data.name) return 'Missing name';
  if (!data.email) return 'Missing email';
  if (!data.phone) return 'Missing phone';
  if (!data.services.length) return 'No services selected';
  if (!data.message) return 'Missing message';

  return null;
};
