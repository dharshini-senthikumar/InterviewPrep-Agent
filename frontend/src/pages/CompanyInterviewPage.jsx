import React, { useState } from 'react';
import { Building2, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function CompanyInterviewPage() {
  const { showToast } = useApp();
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState('Google');
  const [selectedRole, setSelectedRole] = useState('Software Engineer');

  const companies = [
    { name: 'Google', color: 'from-blue-500 to-red-500', desc: 'Focus on System Design, Distributed Caching & DSA' },
    { name: 'Amazon', color: 'from-amber-500 to-yellow-600', desc: 'Focus on Leadership Principles & High Scale Architecture' },
    { name: 'Microsoft', color: 'from-blue-600 to-cyan-500', desc: 'Focus on Async Pipelines, Cloud & Object-Oriented Code' },
    { name: 'Netflix', color: 'from-red-600 to-red-800', desc: 'Focus on Microservice Resiliency & Chaos Engineering' },
    { name: 'Meta', color: 'from-blue-500 to-indigo-600', desc: 'Focus on Graph DBs, Infinite Scroll & High Throughput' },
    { name: 'TCS', color: 'from-purple-500 to-indigo-500', desc: 'Focus on Core Java OOP, SQL Joins & Web Fundamentals' },
    { name: 'Infosys', color: 'from-cyan-500 to-blue-500', desc: 'Focus on OS Concepts, DBMS & Basic Data Structures' },
    { name: 'Zoho', color: 'from-emerald-500 to-teal-600', desc: 'Focus on Custom Data Structures without built-in libraries' },
    { name: 'Accenture', color: 'from-violet-500 to-purple-600', desc: 'Focus on Cloud Migration & Agile Sprint Workflows' },
    { name: 'Wipro', color: 'from-pink-500 to-rose-600', desc: 'Focus on REST vs GraphQL APIs & Linked List logic' }
  ];

  const roles = [
    'Software Engineer', 'Data Analyst', 'Data Scientist',
    'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
    'ML Engineer', 'Cloud Engineer', 'DevOps Engineer'
  ];

  const questionsMap = {
    Google: [
      { q: "Design a High-Throughput Distributed Cache (like Redis cluster).", type: "System Design" },
      { q: "Invert Binary Tree & optimize memory footprint.", type: "DSA" },
      { q: "Explain global consensus in Google Spanner DB.", type: "Distributed Systems" }
    ],
    Amazon: [
      { q: "Design Amazon Prime Video Recommendation Engine.", type: "System Architecture" },
      { q: "Customer Obsession STAR question: Tell me about a time you went above and beyond.", type: "Behavioral" },
      { q: "Optimize LRU Cache for high-frequency concurrent read requests.", type: "Algorithms" }
    ],
    Microsoft: [
      { q: "Implement an async non-blocking task queue pipeline.", type: "Concurrency" },
      { q: "Azure Blob Storage partitioning strategies.", type: "Cloud Architecture" }
    ]
  };

  const currentQuestions = questionsMap[selectedCompany] || questionsMap['Google'];

  const handleLaunchCompanyInterview = () => {
    showToast(`Launching ${selectedCompany} Mock Interview for ${selectedRole}!`, 'success');
    navigate('/interview/ai-hr');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
          <Building2 className="w-8 h-8 text-[#6C63FF]" />
          <span>Company-Wise & Role-Based AI Interview Packs</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Select target MNC companies and prompt roles to customize your AI HR question generator.
        </p>
      </div>

      {/* Role Prompt Selector */}
      <div className="glass-card p-5 rounded-3xl border border-white/10 space-y-3">
        <label className="text-xs font-bold text-[#00D9FF] uppercase tracking-wider flex items-center gap-2">
          <Briefcase className="w-4 h-4" /> Prompt Engineering Role Preset
        </label>
        <div className="flex flex-wrap gap-2">
          {roles.map(role => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                selectedRole === role
                  ? 'bg-[#6C63FF] border-[#6C63FF] text-white shadow-md'
                  : 'bg-[#171C33] border-white/10 text-gray-300 hover:text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Company Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {companies.map((c) => (
          <div
            key={c.name}
            onClick={() => setSelectedCompany(c.name)}
            className={`glass-card glass-card-hover p-4 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
              selectedCompany === c.name
                ? 'border-[#00D9FF] bg-[#00D9FF]/10 scale-[1.02]'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${c.color} flex items-center justify-center text-white font-extrabold text-sm mb-3 shadow-md`}>
                {c.name.slice(0, 2)}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{c.name}</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
            <div className="mt-3 text-[10px] font-bold text-[#00D9FF] flex items-center gap-1">
              {selectedCompany === c.name ? "Selected Pack" : "Select Company"}
            </div>
          </div>
        ))}
      </div>

      {/* Question Preview Box */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00D9FF]" /> {selectedCompany} Question Bank Preview ({selectedRole})
          </h3>
          <button
            onClick={handleLaunchCompanyInterview}
            className="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2"
          >
            <span>Start {selectedCompany} Interview</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {currentQuestions.map((q, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#0B1020] border border-white/10 flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                <span>{q.q}</span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-[#6C63FF]/20 text-[#00D9FF] font-semibold text-[10px]">
                {q.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
