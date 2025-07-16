import mongoose from 'mongoose';
import dotenv from 'dotenv';
import FAQ from './models/faqModel.js';
import connectDB from './config/db.js';
dotenv.config();
connectDB();
const seedFAQs = async () => {
  try {
  
    await FAQ.deleteMany();

    const sampleFAQs = [
      {
        question: 'hello',
        answer: 'hi how may I help you.',
        suggestionA: 'how to create account',
        suggestionB: 'how can I track my order',
        fallbackAllowed: true,  
      },
      {
        question: 'What are your business hours',
        answer: '24/7',
        suggestionA: 'how to create account',
        suggestionB: 'how can I track my order',
        fallbackAllowed: false, 
      },
      {
        question: 'Where is your company located',
        answer: 'ghori town pahse 2',
        suggestionA: 'What is your return policy',
        suggestionB: 'Do you offer international shipping',
        fallbackAllowed: true,
      },
      {
        question: 'how to create account',
        answer: 'To create an account, please watch this tutorial: https://www.youtube.com/watch?v=6FOq4cUdH8k',
        suggestionA: 'What is your return policy',
        suggestionB: 'Do you offer international shipping',
        fallbackAllowed: true,
      },
      {
        question: 'What is your return policy',
        answer: 'You can return any item within 30 days of purchase for a full refund.',
        suggestionA: 'Do you offer international shipping',
        suggestionB: 'What payment methods do you accept',
        fallbackAllowed: true,
      },
      {
        question: 'Do you offer international shipping',
        answer: 'Yes, we ship to over 100 countries worldwide.',
        suggestionA: 'How can I track my order',
        suggestionB: 'What is your return policy',
        fallbackAllowed: true,
      },
      {
        question: 'How can I track my order',
        answer: 'Once your order ships, we will email you a tracking number.',
        suggestionA: 'What payment methods do you accept',
        suggestionB: 'Do you offer international shipping',
        fallbackAllowed: true,
      },
      {
        question: 'What payment methods do you accept',
        answer: 'We accept Visa, MasterCard, PayPal, and Apple Pay.',
        suggestionA: 'How can I track my order',
        suggestionB: 'What is your return policy',
        fallbackAllowed: true,
      },
    ];

    await FAQ.insertMany(sampleFAQs);
    console.log('✅ Sample FAQs with suggestions inserted!');
    process.exit();
  } catch (error) {
    console.error('❌ Error inserting FAQs:', error);
    process.exit(1);
  }
};

seedFAQs();
