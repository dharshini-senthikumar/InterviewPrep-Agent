import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, FileText, Bot, Code, Users, Mic,
  Building2, LineChart, Award, Settings, LogOut, Sparkles, Trophy
} from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Resume & ATS', path: '/resume', icon: FileText },
    { name: 'AI HR Mock Interview', path: '/interview/ai-hr', icon: Bot, badge: 'Core AI' },
    { name: 'Coding Interview', path: '/interview/coding', icon: Code },
    { name: 'Behavioral (STAR)', path: '/interview/behavioral', icon: Users },
    { name: 'Voice Interview', path: '/interview/voice', icon: Mic },
    { name: 'Company Specific', path: '/interview/company', icon: Building2 },
    { name: 'Analytics & Growth', path: '/analytics', icon: LineChart },
    { name: 'AI Feedback Hub', path: '/feedback', icon: Sparkles },
    { name: 'Challenges & Rewards', path: '/extra', icon: Trophy },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0B1020] border-r border-white/10 flex flex-col justify-between min-h-screen sticky top-0 z-40">
      {/* Brand Header */}
      <div>
        <div className="h-16 px-6 flex items-center gap-3 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6C63FF] via-[#7F5AF0] to-[#00D9FF] flex items-center justify-center shadow-lg shadow-[#6C63FF]/30">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold bg-gradient-to-r from-white via-gray-200 to-[#00D9FF] bg-clip-text text-transparent">
              InterviewAce <span className="text-[#00D9FF]">AI</span>
            </h1>
            <p className="text-[10px] text-gray-400 font-medium">Your AI Preparation Assistant</p>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-140px)]">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6C63FF]/30 to-[#7F5AF0]/20 border border-[#6C63FF]/50 text-white shadow-md shadow-[#6C63FF]/20'
                      : 'text-gray-400 hover:text-white hover:bg-[#171C33] hover:border-white/5 border border-transparent'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#00D9FF]" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#6C63FF] text-white uppercase tracking-wider animate-pulse">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout Footer */}
      <div className="p-4 border-t border-white/10">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 hover:border-red-500/20 border border-transparent transition-all"
        >
          <LogOut className="w-4 h-4 text-red-400" />
          <span>Exit to Landing</span>
        </NavLink>
      </div>
    </aside>
  );
}
