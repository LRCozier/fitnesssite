import type { EmailJSConfig } from '../types';

export const getEmailJSConfig = (): EmailJSConfig => {
  const config = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const missingVars = Object.entries(config)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    console.warn(
      `Missing EmailJS environment variables: ${missingVars.join(', ')}`
    );
  }

  return config as EmailJSConfig;
};

export const isEmailJSConfigured = (): boolean => {
  const config = getEmailJSConfig();
  return !!(config.serviceId && config.templateId && config.publicKey);
};
