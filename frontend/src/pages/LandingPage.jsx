import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bot, FileText, Code, Users, Mic, Award, LineChart, Sparkles,
  ArrowRight, Play, CheckCircle2, Building2, ShieldCheck, ChevronRight
} from 'lucide-react';

export default function LandingPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const features = [
    { title: "Resume Analysis", desc: "Automated extraction of skills, projects, and strengths.", icon: FileText },
    { title: "AI Mock HR Interview", desc: "Dynamic real-time adaptive HR agent tailored to your resume.", icon: Bot },
    { title: "Coding Interview", desc: "Multi-language code environment with test case execution.", icon: Code },
    { title: "Behavioral Interview", desc: "STAR framework coaching for leadership & problem solving.", icon: Users },
    { title: "Voice Interview", desc: "Hands-free speech-to-text and voice evaluation.", icon: Mic },
    { title: "ATS Resume Score", desc: "Instant score out of 100 with actionable formatting tips.", icon: Award },
    { title: "Progress Tracking", desc: "Comprehensive growth metrics across all technical domains.", icon: LineChart },
    { title: "AI Feedback Engine", desc: "Granular breakdown of fluency, confidence, and technical depth.", icon: Sparkles },
    { title: "Company-Wise Questions", desc: "Targeted question banks for Google, Amazon, Microsoft & top MNCs.", icon: Building2 },
    { title: "Performance Dashboard", desc: "Interactive radar & trend analytics to track interview readiness.", icon: ShieldCheck }
  ];

  const steps = [
    { step: "Step 1", title: "Upload Resume", desc: "Upload PDF or DOCX file" },
    { step: "Step 2", title: "AI Extracts Skills", desc: "Identifies languages, frameworks & projects" },
    { step: "Step 3", title: "Generates Questions", desc: "Creates custom technical & HR questions" },
    { step: "Step 4", title: "Candidate Answers", desc: "Respond via text or live voice recognition" },
    { step: "Step 5", title: "AI Gives Feedback", desc: "Instant scoring on grammar, confidence & clarity" },
    { step: "Step 6", title: "Track Progress", desc: "Monitor weekly growth & unlock achievements" }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B1020] text-white overflow-hidden selection:bg-[#6C63FF] selection:text-white">
      {/* Animated Blob Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#6C63FF]/20 rounded-full blur-[120px] pointer-events-none animate-blob-spin" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[#00D9FF]/15 rounded-full blur-[140px] pointer-events-none animate-blob-spin" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] bg-[#7F5AF0]/20 rounded-full blur-[130px] pointer-events-none animate-blob-spin" style={{ animationDelay: '-8s' }} />

      {/* Navigation Header */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6C63FF] via-[#7F5AF0] to-[#00D9FF] flex items-center justify-center shadow-lg shadow-[#6C63FF]/30">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-[#00D9FF] bg-clip-text text-transparent">
            InterviewAce <span className="text-[#00D9FF]">AI</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="btn-glow-outline px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2">
            <span>Sign In</span>
          </Link>
          <Link to="/dashboard" className="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171C33] border border-[#6C63FF]/40 text-[#00D9FF] text-xs font-semibold mb-6 shadow-md shadow-[#6C63FF]/20"
        >
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>Next-Gen AI HR Mock Interviewer Ready</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          Master Every Interview <br />
          <span className="bg-gradient-to-r from-[#6C63FF] via-[#7F5AF0] to-[#00D9FF] bg-clip-text text-transparent">
            with Real AI Automation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-normal space-y-2 mb-10"
        >
          Upload your resume. Practice with real adaptive AI HR agents. Receive instant feedback. Track your growth metrics.
        </motion.p>

        {/* Hero Features Bullet List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-300 mb-10"
        >
          <div className="flex items-center gap-1.5 bg-[#171C33]/60 px-3 py-1.5 rounded-lg border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Upload your resume.
          </div>
          <div className="flex items-center gap-1.5 bg-[#171C33]/60 px-3 py-1.5 rounded-lg border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Practice with AI.
          </div>
          <div className="flex items-center gap-1.5 bg-[#171C33]/60 px-3 py-1.5 rounded-lg border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Receive instant feedback.
          </div>
          <div className="flex items-center gap-1.5 bg-[#171C33]/60 px-3 py-1.5 rounded-lg border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Track your progress.
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/dashboard" className="btn-glow w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-3">
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setShowDemoModal(true)}
            className="btn-glow-outline w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-3"
          >
            <Play className="w-5 h-5 text-[#00D9FF] fill-[#00D9FF]" />
            <span>Watch Demo Video</span>
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Everything You Need to <span className="text-[#00D9FF]">Ace Your Interview</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive suite designed for software engineers, data analysts, ML engineers, and tech professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card glass-card-hover p-5 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            How It <span className="text-[#6C63FF]">Works</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            6 simple steps from resume upload to continuous technical improvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-5 rounded-2xl text-center relative border border-white/10"
            >
              <div className="text-[10px] font-bold tracking-widest text-[#00D9FF] uppercase mb-2">
                {s.step}
              </div>
              <h4 className="text-sm font-extrabold text-white mb-1">{s.title}</h4>
              <p className="text-[11px] text-gray-400">{s.desc}</p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#6C63FF]">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Watch Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#171C33] border border-white/20 rounded-3xl max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white font-bold text-lg"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00D9FF]" /> InterviewAce AI Interactive Demo
            </h3>
            <div className="aspect-video bg-black/60 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
              <Bot className="w-16 h-16 text-[#6C63FF] animate-bounce mb-3" />
              <p className="text-sm font-semibold text-white mb-2">AI HR Interviewer Preview</p>
              <p className="text-xs text-gray-400 max-w-md">
                "Hello Dharshini. I have reviewed your resume and noticed your work on the AI Interview Preparation System. Let's begin!"
              </p>
              <Link
                to="/interview/ai-hr"
                onClick={() => setShowDemoModal(false)}
                className="btn-glow mt-6 px-6 py-2.5 rounded-xl text-xs font-bold text-white"
              >
                Launch Live HR Session Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6 text-center text-xs text-gray-500">
        <p>© 2026 InterviewAce AI — Your Personal AI Interview Preparation Assistant. Built with ReactJS, Express & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
