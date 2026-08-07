const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');

// POST /api/interview/next-question
router.post('/next-question', async (req, res) => {
  try {
    const { conversationHistory, extractedResume, role } = req.body;
    const nextQ = await aiService.getNextHRQuestion(conversationHistory || [], extractedResume);
    return res.status(200).json({
      success: true,
      question: nextQ.question,
      topic: nextQ.topic,
      difficulty: nextQ.difficulty
    });
  } catch (err) {
    console.error('Error generating question:', err);
    return res.status(500).json({ success: false, message: 'Failed to generate interview question' });
  }
});

// POST /api/interview/evaluate-answer
router.post('/evaluate-answer', async (req, res) => {
  try {
    const { answer, topic } = req.body;
    const evalData = await aiService.evaluateResponse(answer || '', topic || 'General');
    return res.status(200).json({
      success: true,
      evaluation: evalData
    });
  } catch (err) {
    console.error('Error evaluating answer:', err);
    return res.status(500).json({ success: false, message: 'Evaluation failed' });
  }
});

// POST /api/interview/final-feedback
router.post('/final-feedback', async (req, res) => {
  try {
    const { conversation } = req.body;
    const feedback = await aiService.generateFinalFeedback(conversation || []);
    return res.status(200).json({
      success: true,
      feedback
    });
  } catch (err) {
    console.error('Error generating feedback:', err);
    return res.status(500).json({ success: false, message: 'Feedback generation failed' });
  }
});

module.exports = router;
