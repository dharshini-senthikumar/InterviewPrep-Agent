const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  interviewId: { type: String, required: true },
  userId: { type: String, required: true },
  overallRating: { type: Number, default: 0 },
  communicationScore: { type: Number, default: 0 },
  technicalScore: { type: Number, default: 0 },
  confidenceScore: { type: Number, default: 0 },
  grammarScore: { type: Number, default: 0 },
  fluencyScore: { type: Number, default: 0 },
  bodyLanguageScore: { type: Number, default: 85 },
  eyeContactScore: { type: Number, default: 88 },
  strengths: [String],
  weaknesses: [String],
  recommendations: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
