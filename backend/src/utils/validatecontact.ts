import { ContactPayload } from '../types/contact';

export const validateContact = (data: ContactPayload): any | null => {
if (!data.name || !data.name.trim()) {
    throw new Error('Name is required');
  }

  if (!data.email || !data.email.trim()) {
    throw new Error('Email is required');
  }

  if (!Array.isArray(data.services) || data.services.length === 0) {
    throw new Error('Please select at least one service');
  }

  if (!data.message || !data.message.trim()) {
    throw new Error('Message is required');
  }

  return {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone?.trim() || '',
    services: data.services,
    message: data.message.trim(),
  };
}