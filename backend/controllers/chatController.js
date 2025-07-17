import FAQ from '../models/faqModel.js';
import stringSimilarity from 'string-similarity';




export const askFAQ = async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ reply: 'Please ask a valid question.' });
  }

  try {
    const faqs = await FAQ.find();
    const userInput = message.toLowerCase().trim();

    // STEP 1: Handle one-word input via keyword match
    if (userInput.split(/\s+/).length === 1) {
      const keywordMatch = faqs.find(faq =>
        faq.question.toLowerCase().includes(userInput)
      );

      if (keywordMatch) {
        return res.json({
          reply: keywordMatch.answer,
          suggestions: [
            keywordMatch.suggestionA,
            keywordMatch.suggestionB,
          ],
        });
      }
    }

    // STEP 2: Use string similarity for longer input
    const questions = faqs.map(faq => faq.question);
    const { bestMatch } = stringSimilarity.findBestMatch(userInput, questions);
    const bestQuestion = bestMatch.target;
    const bestScore = bestMatch.rating;

    if (bestScore >= 0.6) {
      const matchedFAQ = faqs.find(faq => faq.question === bestQuestion);
      return res.json({
        reply: matchedFAQ.answer,
        suggestions: [
          matchedFAQ.suggestionA,
          matchedFAQ.suggestionB,
        ],
      });
    }

    // STEP 3: No good match found — return default professional reply with random suggestions
    const randomFAQs = await FAQ.aggregate([{ $sample: { size: 3 } }]);
    const suggestions = randomFAQs.map(f => f.question);

    return res.json({
      reply: "🤖 Sorry, I am unable to find an exact match for your question. You can try one of these common questions:",
      suggestions,
    });

  } catch (error) {
    console.error('❌ FAQ processing error:', error);
    return res.status(500).json({
      reply: 'Something went wrong. Please try again later.',
      suggestions: [],
    });
  }
};
