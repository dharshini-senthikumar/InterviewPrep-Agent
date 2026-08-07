import React, { useState } from 'react';
import { Bell, Search, Moon, Sun, Flame, CheckCheck, User, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { user, notifications, markNotificationsRead } = useApp();
  const [showNotifs, setShowNotifs] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-[#0B1020]/90 backdrop-blur-md border-b border-white/10 px-4 md:px-6 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search questions, companies, topics (e.g. Google React, MERN architecture)..."
            className="w-full bg-[#171C33]/80 border border-white/10 rounded-xl pl-9 pr-4 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-all"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Streak Counter */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold">
          <Flame className="w-4 h-4 fill-amber-400 animate-pulse" />
          <span>{user.streakDays} Day Streak</span>
        </div>

        {/* AI Assistant Quick Pill */}
        <Link to="/interview/ai-hr" className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-[#6C63FF]/20 border border-[#6C63FF]/40 rounded-full text-[#00D9FF] text-xs font-medium hover:bg-[#6C63FF]/30 transition-all">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick AI HR Session</span>
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-gray-400 hover:text-white rounded-xl bg-[#171C33] border border-white/5 hover:border-white/20 transition-all"
          title="Toggle Theme"
        >
          {darkMode ? <Moon className="w-4 h-4 text-[#00D9FF]" /> : <Sun className="w-4 h-4 text-amber-400" />}
        </button>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => setShowNotifs(!showNotifs)}
            className="relative p-2 text-gray-400 hover:text-white rounded-xl bg-[#171C33] border border-white/5 hover:border-white/20 transition-all"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5252] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifs && (
            <div className="absolute right-0 mt-3 w-80 bg-[#171C33] border border-white/10 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <h4 className="text-sm font-semibold text-white">Notifications</h4>
                <button
                  onClick={markNotificationsRead}
                  className="text-xs text-[#00D9FF] hover:underline flex items-center gap-1"
                >
                  <CheckCheck className="w-3 h-3" /> Mark all read
                </button>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className={`p-2.5 rounded-xl border text-xs transition-all ${n.unread ? 'bg-[#6C63FF]/10 border-[#6C63FF]/30' : 'bg-black/20 border-white/5'}`}>
                    <div className="font-semibold text-white">{n.title}</div>
                    <div className="text-gray-300 mt-0.5">{n.message}</div>
                    <div className="text-[10px] text-gray-500 mt-1">{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 pl-2 border-l border-white/10">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full border border-[#6C63FF] object-cover"
          />
          <div className="hidden md:block text-left">
            <div className="text-xs font-bold text-white leading-tight">{user.name}</div>
            <div className="text-[10px] text-gray-400">{user.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
