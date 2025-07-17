

import app from './app.js';

const PORT = process.env.PORT || 8000;

console.log('PORT from env:', process.env.PORT);
console.log('Using port:', PORT);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
