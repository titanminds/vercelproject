import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  suggestionA: { type: String },
  suggestionB: { type: String },
});

const FAQ = mongoose.models.FAQ || mongoose.model('FAQ', faqSchema, 'faq');

export default FAQ;
