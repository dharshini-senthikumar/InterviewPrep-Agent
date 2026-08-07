const express = require('express');
const router = express.Router();

// GET /api/analytics/dashboard
router.get('/dashboard', (req, res) => {
  return res.status(200).json({
    success: true,
    stats: {
      totalInterviews: 14,
      avgScore: 89,
      weeklyImprovement: "+15%",
      atsScoreAvg: 88,
      streakDays: 5
    },
    weeklyPerformance: [
      { day: "Mon", score: 72, confidence: 65, technical: 70 },
      { day: "Tue", score: 78, confidence: 72, technical: 75 },
      { day: "Wed", score: 82, confidence: 80, technical: 82 },
      { day: "Thu", score: 85, confidence: 84, technical: 86 },
      { day: "Fri", score: 91, confidence: 88, technical: 92 },
      { day: "Sat", score: 94, confidence: 92, technical: 95 },
      { day: "Sun", score: 96, confidence: 94, technical: 96 }
    ],
    radarMetrics: [
      { topic: "Communication", score: 90 },
      { topic: "Data Structures", score: 88 },
      { topic: "System Design", score: 82 },
      { topic: "Behavioral STAR", score: 92 },
      { topic: "React/Frontend", score: 95 },
      { topic: "Node/Backend", score: 91 }
    ],
    topicDistribution: [
      { name: "System Design", value: 30, color: "#6C63FF" },
      { name: "MERN Stack", value: 35, color: "#00D9FF" },
      { name: "DSA & Algorithms", value: 20, color: "#7F5AF0" },
      { name: "Behavioral STAR", value: 15, color: "#00C853" }
    ]
  });
});

module.exports = router;
