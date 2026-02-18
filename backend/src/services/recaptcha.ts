import { RECAPTCHA_SECRET } from '../config/recaptcha';

export const verifyCaptcha = async (token: string): Promise<boolean> => {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${token}`,
    { method: 'POST' }
  );

  const data = await res.json();

  return Boolean(data.success);
};
