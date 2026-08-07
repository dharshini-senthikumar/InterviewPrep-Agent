const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  photoURL: { type: String },
  role: { type: String, default: 'Software Engineer' },
  targetCompanies: [{ type: String }],
  streak: { type: Number, default: 3 },
  interviewsCompleted: { type: Number, default: 12 },
  atsScoreAvg: { type: Number, default: 85 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
