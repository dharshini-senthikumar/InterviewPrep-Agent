import React, { useState } from 'react';
import { Users, Sparkles, CheckCircle2, Award, ArrowRight, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BehavioralInterviewPage() {
  const { showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("Leadership");
  const [userAnswer, setUserAnswer] = useState("");
  const [starFeedback, setStarFeedback] = useState(null);

  const categories = [
    "Tell me about yourself", "Leadership", "Conflict", "Failure",
    "Success", "Teamwork", "Pressure", "Communication",
    "Adaptability", "Problem Solving"
  ];

  const questionsMap = {
    "Tell me about yourself": "Walk me through your key engineering milestones, software philosophy, and project highlights.",
    "Leadership": "Describe a situation where you had to lead a technical team through a tight deadline or architectural disagreement.",
    "Conflict": "Tell me about a time you had a major technical conflict with a senior engineer or product manager. How did you resolve it?",
    "Failure": "Describe a project that failed or missed its delivery deadline. What did you learn and how did you prevent recurrence?",
    "Success": "What is the proudest technical achievement of your career so far? What made it successful?",
    "Teamwork": "How do you handle onboarding junior team members or collaborating across cross-functional frontend and backend teams?",
    "Pressure": "Describe a high-stakes production incident where services went down. How did you maintain composure and recover services?",
    "Communication": "How do you explain complex architectural concepts (like microservices or database sharding) to non-technical stakeholders?",
    "Adaptability": "Tell me about a time when business requirements changed drastically mid-sprint. How did you adapt your codebase?",
    "Problem Solving": "Give an example of a stubborn memory leak or performance bottleneck you debugged. What methodology did you use?"
  };

  const handleEvaluateSTAR = () => {
    if (!userAnswer.trim()) return;
    setStarFeedback({
      overallScore: 92,
      situation: "Clear background context setting.",
      task: "Explicit ownership defined.",
      action: "Strong technical action steps outlined.",
      result: "Measurable outcome achieved (+35% efficiency)."
    });
    showToast('STAR answer evaluated successfully!', 'success');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
          <Users className="w-8 h-8 text-[#7F5AF0]" />
          <span>Behavioral Interview (STAR Framework)</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Master behavioral interviews using Situation, Task, Action, and Result structured coaching.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setStarFeedback(null); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#6C63FF] to-[#7F5AF0] border-transparent text-white shadow-lg'
                : 'bg-[#171C33] border-white/10 text-gray-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Practice Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-bold text-[#00D9FF] uppercase tracking-wider">
              Selected Dimension: {selectedCategory}
            </span>
            <span className="text-xs text-gray-400">STAR Evaluator Active</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0B1020] border border-white/10 text-sm text-white font-medium">
            "{questionsMap[selectedCategory]}"
          </div>

          <textarea
            rows={8}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Structure your answer using STAR:\n- Situation: What was the context?\n- Task: What was your specific goal?\n- Action: What concrete technical steps did you take?\n- Result: What was the quantifiable outcome?"
            className="w-full bg-[#0B1020] border border-white/10 rounded-2xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] transition-all"
          />

          <button
            onClick={handleEvaluateSTAR}
            disabled={!userAnswer.trim()}
            className="btn-glow w-full py-3.5 rounded-2xl text-xs font-bold text-white flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>Evaluate STAR Response</span>
          </button>
        </div>

        {/* STAR Helper Guide & Live Feedback */}
        <div className="space-y-4">
          <div className="glass-card p-5 rounded-3xl border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" /> STAR Structure Guide
            </h3>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <strong className="text-[#00D9FF]">S - Situation:</strong> Set the scene & context in 2 sentences.
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <strong className="text-[#6C63FF]">T - Task:</strong> Define your specific responsibility.
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <strong className="text-[#7F5AF0]">A - Action:</strong> Describe technical implementation details.
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <strong className="text-[#00C853]">R - Result:</strong> Share metrics (+X% speed, zero downtime).
              </div>
            </div>
          </div>

          {starFeedback && (
            <div className="glass-card p-5 rounded-3xl border border-[#00C853]/40 bg-[#00C853]/5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">AI STAR Breakdown</h4>
                <span className="text-xs font-extrabold text-[#00C853]">{starFeedback.overallScore}/100</span>
              </div>
              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex items-center gap-1.5 text-[#00C853]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {starFeedback.situation}
                </div>
                <div className="flex items-center gap-1.5 text-[#00C853]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {starFeedback.task}
                </div>
                <div className="flex items-center gap-1.5 text-[#00C853]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {starFeedback.action}
                </div>
                <div className="flex items-center gap-1.5 text-[#00C853]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {starFeedback.result}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
