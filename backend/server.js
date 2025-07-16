import dotenv from 'dotenv';
dotenv.config(); 

import app from './app.js';

const PORT = process.env.PORT || 8000;

console.log('PORT from env:', process.env.PORT);
console.log('Using port:', PORT);
console.log('✅ OPENAI_API_KEY loaded:', !!process.env.OPENAI_API_KEY);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
