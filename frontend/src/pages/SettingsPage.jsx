import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Volume2, Shield, Lock, Save, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SettingsPage() {
  const { user, setUser, showToast } = useApp();
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);
  const [targetCompany, setTargetCompany] = useState(user.targetCompany);
  const [notifsEnabled, setNotifsEnabled] = useState(true);
  const [voiceSpeed, setVoiceSpeed] = useState('1.0');

  const handleSave = () => {
    setUser(prev => ({ ...prev, name, role, targetCompany }));
    showToast('Settings saved successfully!', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-[#00D9FF]" />
          <span>Account & System Settings</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">Manage profile, voice preferences, notifications, and security options.</p>
      </div>

      {/* Profile Settings Card */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <User className="w-5 h-5 text-[#6C63FF]" /> Profile Settings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-gray-400 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0B1020] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block text-gray-400 font-semibold mb-1">Email Address</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full bg-[#0B1020]/50 border border-white/5 rounded-xl px-4 py-2.5 text-gray-400 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-400 font-semibold mb-1">Target Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-[#0B1020] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block text-gray-400 font-semibold mb-1">Target Company</label>
            <input
              type="text"
              value={targetCompany}
              onChange={(e) => setTargetCompany(e.target.value)}
              className="w-full bg-[#0B1020] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#6C63FF]"
            />
          </div>
        </div>
      </div>

      {/* Voice & Theme Preferences */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-[#00D9FF]" /> Voice & Theme Controls
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-gray-400 font-semibold mb-1">AI Voice Speech Rate</label>
            <select
              value={voiceSpeed}
              onChange={(e) => setVoiceSpeed(e.target.value)}
              className="w-full bg-[#0B1020] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none"
            >
              <option value="0.8">0.8x (Slower)</option>
              <option value="1.0">1.0x (Normal Pace)</option>
              <option value="1.2">1.2x (Faster)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 font-semibold mb-1">Notification Toasts</label>
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                checked={notifsEnabled}
                onChange={() => setNotifsEnabled(!notifsEnabled)}
                className="w-4 h-4 accent-[#6C63FF]"
              />
              <span className="text-white font-medium">Enable real-time toast alerts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="btn-glow px-8 py-3.5 rounded-2xl text-xs font-bold text-white flex items-center gap-2"
      >
        <Save className="w-4 h-4" />
        <span>Save All Settings</span>
      </button>
    </div>
  );
}
