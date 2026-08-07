import React, { useState } from 'react';
import { Trophy, Flame, Award, Bookmark, Clock, Sparkles, CheckCircle2, Download, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import jsPDF from 'jspdf';

export default function ExtraFeaturesPage() {
  const { user, showToast } = useApp();
  const [dailyCompleted, setDailyCompleted] = useState(false);

  const leaderboard = [
    { rank: 1, name: "Dharshini S", xp: 2850, streak: "5 Days", avatar: user.avatar },
    { rank: 2, name: "Arun Kumar", xp: 2620, streak: "4 Days", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" },
    { rank: 3, name: "Priya Sharma", xp: 2400, streak: "7 Days", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150" },
    { rank: 4, name: "Vikram R", xp: 2150, streak: "3 Days", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150" }
  ];

  const badges = [
    { name: "MERN Master", desc: "Completed 5 full-stack interviews", icon: "🚀", color: "from-[#6C63FF] to-[#7F5AF0]" },
    { name: "STAR Champion", desc: "Scored 90+ on behavioral STAR test", icon: "⭐", color: "from-amber-500 to-yellow-500" },
    { name: "Voice Ace", desc: "Completed hands-free voice interview", icon: "🎙️", color: "from-[#00D9FF] to-[#6C63FF]" },
    { name: "Speed Coder", desc: "Passed code test in under 2 mins", icon: "⚡", color: "from-[#00C853] to-[#00D9FF]" }
  ];

  const handleCompleteDailyChallenge = () => {
    setDailyCompleted(true);
    showToast('Daily Challenge Completed! +50 XP added to your leaderboard rank!', 'success');
  };

  const handleDownloadCertificate = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("InterviewAce AI - Certificate of Excellence", 20, 30);

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(`This is to certify that`, 20, 50);

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(`${user.name}`, 20, 65);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`has successfully completed the Full-Stack AI HR Mock Interview & System Design Program`, 20, 80);
    doc.text(`with an average technical rating of 89%.`, 20, 90);

    doc.text(`Issued by InterviewAce AI Team on ${new Date().toLocaleDateString()}`, 20, 120);

    doc.save("InterviewAce_Completion_Certificate.pdf");
    showToast("Completion Certificate generated!", "success");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
          <Trophy className="w-8 h-8 text-amber-400" />
          <span>Gamification, Badges & AI Career Roadmap</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Daily challenges, leaderboard rankings, earned certificates, and saved question bookmarks.
        </p>
      </div>

      {/* Daily Challenge & Certificate row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Challenge */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#00D9FF] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> Daily Challenge
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">+50 XP</span>
          </div>

          <h3 className="text-base font-bold text-white">
            React Re-render Optimization & Memoization Challenge
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Explain when to use useCallback vs useMemo to prevent unnecessary child re-renders.
          </p>

          <button
            onClick={handleCompleteDailyChallenge}
            disabled={dailyCompleted}
            className={`w-full py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all ${
              dailyCompleted ? 'bg-[#00C853]/20 border border-[#00C853] text-[#00C853]' : 'btn-glow'
            }`}
          >
            {dailyCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
            <span>{dailyCompleted ? "Challenge Completed (+50 XP Claimed)" : "Complete Daily Challenge"}</span>
          </button>
        </div>

        {/* Certificate Card */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#6C63FF] uppercase tracking-wider">AI Certificate</span>
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-white">Official Completion Certificate</h3>
            <p className="text-xs text-gray-400 mt-1">
              Earn an official PDF certificate verifying your AI HR Mock Interview readiness score of 89%.
            </p>
          </div>

          <button
            onClick={handleDownloadCertificate}
            className="btn-glow-outline w-full py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-[#00D9FF]" />
            <span>Generate & Download Certificate PDF</span>
          </button>
        </div>
      </div>

      {/* Leaderboard & Achievements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaderboard Table */}
        <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" /> Community Candidate Leaderboard
          </h3>

          <div className="space-y-2">
            {leaderboard.map((item) => (
              <div key={item.rank} className="p-3.5 rounded-2xl bg-[#0B1020] border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className={`w-6 font-extrabold text-center text-sm ${item.rank === 1 ? 'text-amber-400' : 'text-gray-400'}`}>
                    #{item.rank}
                  </span>
                  <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover border border-[#6C63FF]" />
                  <div>
                    <div className="font-bold text-white">{item.name}</div>
                    <div className="text-[10px] text-gray-400">Streak: {item.streak}</div>
                  </div>
                </div>
                <div className="font-extrabold text-[#00D9FF] text-sm">{item.xp} XP</div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Grid */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-[#00D9FF]" /> Earned Achievements
          </h3>

          <div className="space-y-3">
            {badges.map((b, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-[#0B1020] border border-white/10 flex items-center gap-3">
                <div className="text-xl p-2 rounded-xl bg-white/5">{b.icon}</div>
                <div>
                  <div className="text-xs font-bold text-white">{b.name}</div>
                  <div className="text-[10px] text-gray-400">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
