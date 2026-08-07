import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { LineChart as ChartIcon, Sparkles, TrendingUp, Award, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
  const radarData = [
    { subject: 'Communication', A: 90, fullMark: 100 },
    { subject: 'Data Structures', A: 88, fullMark: 100 },
    { subject: 'System Design', A: 82, fullMark: 100 },
    { subject: 'Behavioral STAR', A: 92, fullMark: 100 },
    { subject: 'React / Frontend', A: 95, fullMark: 100 },
    { subject: 'Node / Backend', A: 91, fullMark: 100 },
  ];

  const weeklyTrendData = [
    { day: 'Mon', score: 72, confidence: 68 },
    { day: 'Tue', score: 78, confidence: 74 },
    { day: 'Wed', score: 82, confidence: 80 },
    { day: 'Thu', score: 85, confidence: 84 },
    { day: 'Fri', score: 91, confidence: 88 },
    { day: 'Sat', score: 94, confidence: 92 },
    { day: 'Sun', score: 96, confidence: 94 },
  ];

  const topicDistribution = [
    { name: 'System Design', value: 30, color: '#6C63FF' },
    { name: 'MERN Stack', value: 35, color: '#00D9FF' },
    { name: 'Data Structures', value: 20, color: '#7F5AF0' },
    { name: 'STAR Behavioral', value: 15, color: '#00C853' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
          <ChartIcon className="w-8 h-8 text-[#00D9FF]" />
          <span>Interview Analytics & Performance Telemetry</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Track technical improvement, topic mastery, and confidence growth over time.
        </p>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-2xl border border-white/10">
          <div className="text-xs font-bold text-gray-400">Total Interviews</div>
          <div className="text-2xl font-extrabold text-white mt-1">14</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/10">
          <div className="text-xs font-bold text-gray-400">Average Score</div>
          <div className="text-2xl font-extrabold text-[#00C853] mt-1">89%</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/10">
          <div className="text-xs font-bold text-gray-400">Weekly Growth</div>
          <div className="text-2xl font-extrabold text-[#00D9FF] mt-1">+15.4%</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-white/10">
          <div className="text-xs font-bold text-gray-400">Confidence Rating</div>
          <div className="text-2xl font-extrabold text-[#6C63FF] mt-1">94%</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#6C63FF]" /> Skill Mastery Radar
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" stroke="#8884d8" tick={{ fill: '#00D9FF', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="rgba(255,255,255,0.2)" />
                <Radar name="Candidate Score" dataKey="A" stroke="#6C63FF" fill="#6C63FF" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Progress Line Chart */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#00C853]" /> Weekly Score & Confidence Curve
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyTrendData}>
                <XAxis dataKey="day" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip contentStyle={{ backgroundColor: '#171C33', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                <Line type="monotone" dataKey="score" stroke="#00D9FF" strokeWidth={3} name="Technical Score" />
                <Line type="monotone" dataKey="confidence" stroke="#6C63FF" strokeWidth={2} strokeDasharray="5 5" name="Confidence" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pie Chart & Topic Breakdown */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-sm font-bold text-white mb-2">Topic Distribution</h3>
          <p className="text-xs text-gray-400 mb-4">Proportion of practice questions answered by category.</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={topicDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {topicDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#171C33', borderRadius: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-3">
          {topicDistribution.map((topic, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: topic.color }} />
                <span className="font-bold text-white">{topic.name}</span>
              </div>
              <span className="font-extrabold text-[#00D9FF]">{topic.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
