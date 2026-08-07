import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import ResumeUploadPage from './pages/ResumeUploadPage';
import AiHRInterviewPage from './pages/AiHRInterviewPage';
import BehavioralInterviewPage from './pages/BehavioralInterviewPage';
import CodingInterviewPage from './pages/CodingInterviewPage';
import VoiceInterviewPage from './pages/VoiceInterviewPage';
import FeedbackPage from './pages/FeedbackPage';
import AnalyticsPage from './pages/AnalyticsPage';
import CompanyInterviewPage from './pages/CompanyInterviewPage';
import SettingsPage from './pages/SettingsPage';
import ExtraFeaturesPage from './pages/ExtraFeaturesPage';

function ToastContainer() {
  const { toastMessage } = useApp();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5">
      <div className={`px-4 py-3 rounded-2xl shadow-2xl border text-xs font-bold text-white flex items-center gap-2 ${
        toastMessage.type === 'success'
          ? 'bg-[#00C853]/90 border-[#00C853]'
          : toastMessage.type === 'warning'
          ? 'bg-amber-500/90 border-amber-500'
          : 'bg-[#6C63FF]/90 border-[#6C63FF]'
      }`}>
        <span>{toastMessage.message}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Authenticated Dashboard Pages */}
          <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="resume" element={<ResumeUploadPage />} />
            <Route path="interview/ai-hr" element={<AiHRInterviewPage />} />
            <Route path="interview/behavioral" element={<BehavioralInterviewPage />} />
            <Route path="interview/coding" element={<CodingInterviewPage />} />
            <Route path="interview/voice" element={<VoiceInterviewPage />} />
            <Route path="interview/company" element={<CompanyInterviewPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="extra" element={<ExtraFeaturesPage />} />
          </Route>

          {/* Fallback Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ToastContainer />
      </Router>
    </AppProvider>
  );
}
