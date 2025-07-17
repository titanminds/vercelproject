import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

import chatRoutes from './routes/chatRoutes.js';


dotenv.config();
connectDB();

const app = express();


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