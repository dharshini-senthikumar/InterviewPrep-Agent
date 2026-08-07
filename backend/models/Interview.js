const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, enum: ['ai_hr', 'coding', 'behavioral', 'voice', 'company_specific'], default: 'ai_hr' },
  targetRole: { type: String, default: 'Software Engineer' },
  targetCompany: { type: String, default: 'General' },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard', 'Adaptive'], default: 'Adaptive' },
  conversation: [{
    sender: { type: String, enum: ['ai', 'user'] },
    message: String,
    timestamp: { type: Date, default: Date.now },
    evaluation: {
      score: Number,
      feedback: String,
      difficultyAdjustment: String
    }
  }],
  status: { type: String, enum: ['active', 'completed'], default: 'active' },
  startedAt: { type: Date, default: Date.now },
  completedAt: Date
});

module.exports = mongoose.model('Interview', interviewSchema);
