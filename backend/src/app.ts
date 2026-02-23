import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes';

const app = express();

app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:5173', 'https://lacfitness.com']
}));
app.use(express.json());
app.use('/api', contactRoutes);

export default app;