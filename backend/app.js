import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import chatRoutes from './routes/chatRoutes.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ CORS: Allow local and production frontend domains
const allowedOrigins = [
  'http://localhost:3000',
  'https://vercelproject-production.up.railway.app', // Replace with your frontend domain
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('🚀 Bitrader API is running...');
});

// ✅ API routes (mounted under /api)
app.use('/api', chatRoutes);

export default app;
