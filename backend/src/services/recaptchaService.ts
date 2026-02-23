import { RECAPTCHA_SECRET } from '../config/config';

interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export const verifyCaptcha = async (token: string): Promise<boolean> => {
  try {
    const params = new URLSearchParams({
      secret: RECAPTCHA_SECRET,
      response: token
    });

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    if (!response.ok) {
      console.error(`[reCAPTCHA] Google API responded with status: ${response.status}`);
      return false;
    }

    const data = (await response.json()) as RecaptchaResponse;

    if (!data.success) {
      console.warn('[reCAPTCHA] Verification failed. Error codes:', data['error-codes']);
    }

    return data.success;
  } catch (error) {
    console.error('[reCAPTCHA] Network error during verification:', error);
    return false;
  }
};