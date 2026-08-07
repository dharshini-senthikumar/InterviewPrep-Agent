const express = require('express');
const router = express.Router();
const multer = require('multer');
const aiService = require('../services/aiService');

const upload = multer({ dest: 'uploads/' });

// POST /api/resume/upload
router.post('/upload', upload.single('resume'), async (req, res) => {
  try {
    const fileName = req.file ? req.file.originalname : (req.body.fileName || 'Dharshini_Resume.pdf');
    const result = await aiService.parseResume(fileName);
    
    return res.status(200).json({
      success: true,
      message: 'Resume parsed successfully',
      fileName,
      extractedData: result.extractedData,
      atsScore: result.atsScore,
      atsSuggestions: result.atsSuggestions
    });
  } catch (error) {
    console.error('Error parsing resume:', error);
    return res.status(500).json({ success: false, error: 'Failed to process resume' });
  }
});

// GET /api/resume/parsed
router.get('/parsed', async (req, res) => {
  const result = await aiService.parseResume('Dharshini_Resume.pdf');
  return res.status(200).json({
    success: true,
    extractedData: result.extractedData,
    atsScore: result.atsScore,
    atsSuggestions: result.atsSuggestions
  });
});

module.exports = router;
