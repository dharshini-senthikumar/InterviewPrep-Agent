import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UploadCloud, FileText, CheckCircle, Award, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResumeUploadPage() {
  const { resumeData, setResumeData, showToast } = useApp();
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file) => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      showToast(`Resume "${file.name}" analyzed & ATS Score generated!`, 'success');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
          <FileText className="w-8 h-8 text-[#00D9FF]" />
          <span>Resume Analysis & ATS Score Generator</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Upload your PDF or DOCX resume to extract technical tags, evaluate ATS score, and power your AI interviewer.
        </p>
      </div>

      {/* Drag and Drop Zone */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-3xl p-8 md:p-12 text-center transition-all ${
          dragActive
            ? 'border-[#00D9FF] bg-[#00D9FF]/10 scale-[1.01]'
            : 'border-white/15 bg-[#171C33]/60 hover:border-[#6C63FF]/50'
        }`}
      >
        <input
          type="file"
          accept=".pdf,.docx,.doc"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6C63FF] to-[#00D9FF] flex items-center justify-center shadow-xl shadow-[#6C63FF]/30">
            {isUploading ? (
              <Sparkles className="w-8 h-8 text-white animate-spin" />
            ) : (
              <UploadCloud className="w-8 h-8 text-white" />
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              {isUploading ? "AI Deep-Scanning Resume..." : "Drag & Drop your Resume here"}
            </h3>
            <p className="text-xs text-gray-400">Supports PDF, DOCX (Max size: 10MB)</p>
          </div>

          <button className="btn-glow-outline px-6 py-2.5 rounded-xl text-xs font-bold text-white pointer-events-none">
            Browse File
          </button>
        </div>
      </div>

      {/* ATS Score Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">ATS Score</span>
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-5xl font-extrabold text-white mb-2">
              {resumeData.atsScore}<span className="text-2xl text-gray-400">/100</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5 mb-4">
              <div className="bg-gradient-to-r from-[#6C63FF] to-[#00C853] h-2.5 rounded-full" style={{ width: `${resumeData.atsScore}%` }} />
            </div>
            <p className="text-xs text-[#00C853] font-semibold flex items-center gap-1">
              <CheckCircle className="w-4 h-4" /> Strong ATS Optimization (Ready for Top Tech HRs)
            </p>
          </div>

          <Link
            to="/interview/ai-hr"
            className="btn-glow mt-6 w-full py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2"
          >
            <span>Start AI Interview with this Resume</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ATS Suggestions */}
        <div className="md:col-span-2 glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00D9FF]" /> Recommended ATS Improvements
          </h3>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong>Add Metrics to Project Achievements:</strong> Include measurable results like "Reduced query latency by 45%" or "Served 10k users".
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/20 text-xs text-gray-300 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
              <div>
                <strong>Keyword Density:</strong> Great coverage on ReactJS, Node.js, Express, and System Architecture keywords.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extracted Details Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">Extracted Resume Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Personal & Overview */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-[#00D9FF] uppercase tracking-wider">Candidate Info</h4>
            <div className="text-sm font-extrabold text-white">{resumeData.name}</div>
            <div className="text-xs text-gray-400">{resumeData.email}</div>
          </div>

          {/* Technical Skills */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-[#6C63FF] uppercase tracking-wider">Technical Skills</h4>
            <div className="flex flex-wrap gap-1.5">
              {resumeData.technicalSkills.map((s, idx) => (
                <span key={idx} className="px-2.5 py-0.5 rounded-md bg-[#6C63FF]/20 text-[11px] text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-[#00C853] uppercase tracking-wider">Soft Skills</h4>
            <div className="flex flex-wrap gap-1.5">
              {resumeData.softSkills.map((s, idx) => (
                <span key={idx} className="px-2.5 py-0.5 rounded-md bg-[#00C853]/20 text-[11px] text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2 md:col-span-2">
            <h4 className="text-xs font-bold text-[#00D9FF] uppercase tracking-wider">Extracted Projects</h4>
            {resumeData.projects.map((p, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xs font-bold text-white">{p.title}</div>
                <div className="text-[11px] text-gray-400">{p.description}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Certifications</h4>
            <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
              {resumeData.certifications.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
