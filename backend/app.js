import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

import chatRoutes from './routes/chatRoutes.js';

dotenv.config();
connectDB();

const app = express();

// ✅ Allow multiple origins (localhost and deployed frontend)
const allowedOrigins = [
  'http://localhost:3000',
  'https://vercelproject-production.up.railway.app', // Replace with your actual frontend domain
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('🚀 Bitrader API is running...');
});

// API routes
app.use('/api', chatRoutes);

export default app;
