import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Bot, FileText, Code, Users, Mic, Building2, Flame, Award,
  Sparkles, ArrowRight, CheckCircle2, TrendingUp
} from 'lucide-react';

export default function DashboardHome() {
  const { user, resumeData } = useApp();

  const quickActions = [
    { title: "Real AI HR Mock", path: "/interview/ai-hr", desc: "Adaptive dynamic interviewer tailored to your resume", icon: Bot, color: "from-[#6C63FF] to-[#7F5AF0]" },
    { title: "ATS Resume Analysis", path: "/resume", desc: `Current score: ${resumeData.atsScore}/100. Extract skills & projects`, icon: FileText, color: "from-[#00D9FF] to-[#6C63FF]" },
    { title: "Coding Compiler", path: "/interview/coding", desc: "Run Java, Python, C++, JS with automated test cases", icon: Code, color: "from-[#7F5AF0] to-[#00C853]" },
    { title: "Behavioral STAR", path: "/interview/behavioral", desc: "Leadership, conflict, failure & communication prompts", icon: Users, color: "from-[#00C853] to-[#00D9FF]" },
    { title: "Voice Studio", path: "/interview/voice", desc: "Hands-free voice recognition & text-to-speech evaluation", icon: Mic, color: "from-[#FF5252] to-[#7F5AF0]" },
    { title: "Company Packs", path: "/interview/company", desc: "Google, Amazon, Microsoft, Netflix, Meta & top MNCs", icon: Building2, color: "from-[#6C63FF] to-[#00D9FF]" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 bg-gradient-to-r from-[#171C33] via-[#171C33] to-[#6C63FF]/20 border border-white/10 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/40 text-[#00D9FF] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Candidate Workspace</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white">
              Welcome back, <span className="text-[#00D9FF]">{user.name}</span>!
            </h1>
            <p className="text-gray-300 text-sm mt-1 max-w-xl">
              Target Role: <strong className="text-white">{user.role}</strong> • Target Company: <strong className="text-[#6C63FF]">{user.targetCompany}</strong>
            </p>
          </div>

          <Link
            to="/interview/ai-hr"
            className="btn-glow px-6 py-3 rounded-2xl text-xs font-bold text-white flex items-center gap-2 shadow-lg"
          >
            <Bot className="w-4 h-4 text-white" />
            <span>Launch AI HR Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/30 flex items-center justify-center text-[#6C63FF]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{resumeData.atsScore}/100</div>
            <div className="text-xs text-gray-400">ATS Resume Score</div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/20 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{user.interviewsCompleted}</div>
            <div className="text-xs text-gray-400">Interviews Completed</div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#00C853]/20 border border-[#00C853]/30 flex items-center justify-center text-[#00C853]">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">89%</div>
            <div className="text-xs text-gray-400">Average Readiness Score</div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{user.streakDays} Days</div>
            <div className="text-xs text-gray-400">Active Prep Streak</div>
          </div>
        </div>
      </div>

      {/* Core Action Grid */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#00D9FF]" /> Select Interview Mode
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <Link
                key={i}
                to={action.path}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${action.color} p-2.5 flex items-center justify-center text-white mb-4 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00D9FF] transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {action.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00D9FF] group-hover:translate-x-1 transition-transform">
                  <span>Launch Module</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Extracted Resume Tags Summary */}
      <div className="glass-card p-6 rounded-2xl border border-white/10">
        <h3 className="text-sm font-bold text-white mb-3">Extracted Resume Skill Tags</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 rounded-lg bg-[#6C63FF]/15 border border-[#6C63FF]/30 text-xs text-[#00D9FF] font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
