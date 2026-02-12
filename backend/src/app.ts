import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import contactRoute from './routes/contact';

export const app = express();

app.use(helmet());

app.use(cors({
  origin: ['http://localhost:5173'],
}));

app.use(express.json({ limit: '10kb' }));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

app.use('/api/contact', contactRoute);
