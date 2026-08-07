const express = require('express');
const router = express.Router();

const companyQuestionsMap = {
  Google: [
    { title: "Design a High-Throughput Distributed Cache", topic: "System Design", difficulty: "Hard" },
    { title: "Invert Binary Tree & Optimize Depth-First Traversal", topic: "Data Structures", difficulty: "Medium" },
    { title: "How would you handle global consistency in Spanner DB?", topic: "Distributed Systems", difficulty: "Hard" }
  ],
  Amazon: [
    { title: "Design Amazon Prime Video Recommendation Engine", topic: "System Architecture", difficulty: "Hard" },
    { title: "Customer Obsession & Bias for Action STAR Scenario", topic: "Behavioral Leadership", difficulty: "Medium" },
    { title: "Optimize LRU Cache for High Concurrent Reads", topic: "Algorithms", difficulty: "Medium" }
  ],
  Microsoft: [
    { title: "Implement Async Event Loop Pipeline in C#/.NET", topic: "Concurrency", difficulty: "Hard" },
    { title: "Azure Blob Storage Scalability & Partitioning", topic: "Cloud Architecture", difficulty: "Medium" },
    { title: "Explain garbage collection cycles in JVM vs V8 engine", topic: "Runtime Execution", difficulty: "Hard" }
  ],
  Netflix: [
    { title: "Video Streaming Microservice & Content Delivery Networks", topic: "System Design", difficulty: "Hard" },
    { title: "Chaos Engineering: How do you design resilient microservices?", topic: "DevOps & Architecture", difficulty: "Hard" }
  ],
  Meta: [
    { title: "Design Newsfeed Graph Database & Fanout Architecture", topic: "System Design", difficulty: "Hard" },
    { title: "Implement Virtualized Infinite Scroll Component in React", topic: "Frontend Engineering", difficulty: "Medium" }
  ],
  TCS: [
    { title: "Explain OOP Concepts with Real-World E-commerce Example", topic: "Core Java/OOP", difficulty: "Easy" },
    { title: "SQL Joins & Indexing Optimization Strategies", topic: "Database", difficulty: "Medium" }
  ],
  Infosys: [
    { title: "Difference between Process and Thread in OS", topic: "Operating Systems", difficulty: "Easy" },
    { title: "Implement Stack using Queues in Python/Java", topic: "Data Structures", difficulty: "Medium" }
  ],
  Zoho: [
    { title: "Implement Custom HashMap without Java Collections", topic: "Data Structures", difficulty: "Hard" },
    { title: "Design Multi-Tenant SaaS Billing Database", topic: "System Design", difficulty: "Medium" }
  ],
  Accenture: [
    { title: "Explain Cloud Migration Strategy for Legacy Monolith", topic: "Cloud & Microservices", difficulty: "Medium" },
    { title: "Agile Scrum Sprint Planning Conflict Resolution", topic: "Behavioral", difficulty: "Easy" }
  ],
  Wipro: [
    { title: "REST vs GraphQL API design trade-offs", topic: "Web Technologies", difficulty: "Medium" },
    { title: "Write a function to detect cyclic linked list", topic: "Data Structures", difficulty: "Easy" }
  ]
};

// GET /api/company/questions/:companyName
router.get('/questions/:companyName', (req, res) => {
  const company = req.params.companyName;
  const questions = companyQuestionsMap[company] || companyQuestionsMap['Google'];
  return res.status(200).json({
    success: true,
    company,
    questions
  });
});

module.exports = router;
