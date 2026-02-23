import dotenv from 'dotenv';

dotenv.config();

const getEnv = (name: string): string => {
  const value = process.env[name];
  if (!value || value.trim() === '') {
    throw new Error(`CRITICAL: Missing required environment variable: ${name}`);
  }
  return value.trim(); 
};

export const PORT = process.env.PORT || 4000;
export const EMAIL_USER = getEnv('EMAIL_USER');
export const EMAIL_PASS = getEnv('EMAIL_PASS');
export const RECAPTCHA_SECRET = getEnv('RECAPTCHA_SECRET');