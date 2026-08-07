const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fileName: { type: String, required: true },
  extractedData: {
    name: String,
    email: String,
    phone: String,
    skills: [String],
    technicalSkills: [String],
    softSkills: [String],
    languages: [String],
    frameworks: [String],
    projects: [{
      title: String,
      description: String,
      techStack: [String]
    }],
    education: [{
      degree: String,
      institution: String,
      year: String
    }],
    experience: [{
      role: String,
      company: String,
      duration: String,
      highlights: [String]
    }],
    certifications: [String],
    strengths: [String],
    weaknesses: [String]
  },
  atsScore: { type: Number, default: 0 },
  atsSuggestions: [String],
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', resumeSchema);
