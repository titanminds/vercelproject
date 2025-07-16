import express from 'express';
import { askFAQ } from '../controllers/chatController.js'; // ✅ works if you're in /routes
import FAQ from '../models/faqModel.js';

const router = express.Router();

router.post('/ask', askFAQ);

router.get('/faqs', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    console.error('Error fetching FAQs:', err.message);
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
});

export default router;
