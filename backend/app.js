import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import OpenAI from 'openai';
import chatRoutes from './routes/chatRoutes.js';


dotenv.config();
connectDB();

const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors({
  origin: 'http://localhost:3000', 
}));
app.use(express.json());
app.use((req, res, next) => {
  req.openai = openai;
  next();
});


app.get('/', (req, res) => {
  res.send('🚀 Bitrader API is running...');
});

app.use('/api', chatRoutes);

export default app;