import React from 'react';
import { Sparkles, Download, CheckCircle, AlertTriangle, ArrowRight, Award, UserCheck, Eye, Activity } from 'lucide-react';
import { useApp } from '../context/AppContext';
import jsPDF from 'jspdf';

export default function FeedbackPage() {
  const { resumeData, showToast } = useApp();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("InterviewAce AI - Candidate Evaluation Report", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Candidate Name: ${resumeData.name}`, 20, 35);
    doc.text(`Role Target: Full Stack Software Engineer`, 20, 43);
    doc.text(`Overall Interview Rating: 9.2 / 10`, 20, 51);

    doc.text("Score Breakdown:", 20, 65);
    doc.text("- Communication Score: 90 / 100", 25, 73);
    doc.text("- Technical Depth Score: 94 / 100", 25, 81);
    doc.text("- Confidence Score: 88 / 100", 25, 89);
    doc.text("- Grammar & Fluency: 92 / 100", 25, 97);
    doc.text("- Body Language & Eye Contact: 86 / 100", 25, 105);

    doc.text("Key Strengths:", 20, 120);
    doc.text("1. Articulates complex architectural decisions with clear justification.", 25, 128);
    doc.text("2. Deep MERN stack and AI workflow understanding.", 25, 136);

    doc.text("Recommendations:", 20, 150);
    doc.text("1. Expand on quantitative benchmarks when explaining system scale.", 25, 158);

    doc.save("InterviewAce_Feedback_Report.pdf");
    showToast("Feedback PDF downloaded successfully!", "success");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#00D9FF]" />
            <span>AI Comprehensive Feedback Hub</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Detailed evaluation of technical accuracy, fluency, body language placeholders, and career recommendations.
          </p>
        </div>

        <button
          onClick={handleDownloadPDF}
          className="btn-glow px-6 py-3 rounded-2xl text-xs font-bold text-white flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Feedback PDF</span>
        </button>
      </div>

      {/* Overall Score Badge */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 bg-gradient-to-r from-[#171C33] via-[#171C33] to-[#6C63FF]/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6C63FF] via-[#7F5AF0] to-[#00D9FF] flex flex-col items-center justify-center text-white shadow-2xl shadow-[#6C63FF]/40">
            <span className="text-3xl font-extrabold">9.2</span>
            <span className="text-[10px] uppercase font-bold text-gray-200">Out of 10</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Exceptional Performance!</h2>
            <p className="text-xs text-gray-300 max-w-lg leading-relaxed">
              Candidate demonstrated strong mastery over architectural concepts, state management, and MERN deployment pipelines.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="px-3 py-1.5 rounded-xl bg-[#00C853]/20 border border-[#00C853]/40 text-[#00C853]">
            Strong Hire Recommendation
          </span>
        </div>
      </div>

      {/* 6 Score Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
          <div className="text-xs font-bold text-gray-400 mb-1">Communication</div>
          <div className="text-2xl font-extrabold text-[#00D9FF]">90%</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
          <div className="text-xs font-bold text-gray-400 mb-1">Technical Score</div>
          <div className="text-2xl font-extrabold text-[#6C63FF]">94%</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
          <div className="text-xs font-bold text-gray-400 mb-1">Confidence Score</div>
          <div className="text-2xl font-extrabold text-[#7F5AF0]">88%</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
          <div className="text-xs font-bold text-gray-400 mb-1">Grammar & Fluency</div>
          <div className="text-2xl font-extrabold text-[#00C853]">92%</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
          <div className="text-xs font-bold text-gray-400 mb-1 flex items-center justify-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Body Language
          </div>
          <div className="text-2xl font-extrabold text-amber-400">86%</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
          <div className="text-xs font-bold text-gray-400 mb-1 flex items-center justify-center gap-1">
            <Eye className="w-3.5 h-3.5 text-[#00D9FF]" /> Eye Contact
          </div>
          <div className="text-2xl font-extrabold text-[#00D9FF]">88%</div>
        </div>
      </div>

      {/* Strengths & Weaknesses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#00C853]" /> Demonstrated Strengths
          </h3>
          <ul className="space-y-2 text-xs text-gray-300">
            <li className="p-3 rounded-xl bg-[#00C853]/10 border border-[#00C853]/20">
              ✓ Articulates MERN stack & AI integration mechanics with clear technical justification.
            </li>
            <li className="p-3 rounded-xl bg-[#00C853]/10 border border-[#00C853]/20">
              ✓ Maintains excellent posture, confident voice pitch, and steady eye contact.
            </li>
            <li className="p-3 rounded-xl bg-[#00C853]/10 border border-[#00C853]/20">
              ✓ Effectively structured answers around component lifecycle and API error handling.
            </li>
          </ul>
        </div>

        {/* Areas for Improvement & Recommendations */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" /> Key Recommendations
          </h3>
          <ul className="space-y-2 text-xs text-gray-300">
            <li className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
              ⚠ Include exact quantitative benchmarks (e.g., latency numbers or throughput goals).
            </li>
            <li className="p-3 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/20">
              💡 Practice distributed system caching (Redis) for high-scale backend rounds.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
