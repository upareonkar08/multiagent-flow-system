import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Upload, 
  Crown, 
  Users, 
  Briefcase, 
  UserCheck, 
  DollarSign, 
  Scale, 
  ShieldAlert, 
  Megaphone, 
  Calendar, 
  FileCheck, 
  History, 
  Bell, 
  Settings,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Agent } from '../types';

interface SidebarProps {
  agents: Agent[];
  unreadCount: number;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Crown,
  Users,
  Briefcase,
  UserCheck,
  DollarSign,
  Scale,
  ShieldAlert,
  Megaphone,
  Calendar,
  FileCheck,
};

export const Sidebar: React.FC<SidebarProps> = ({ agents, unreadCount }) => {
  return (
    <aside className="w-64 h-screen bg-[#0d1322]/90 backdrop-blur-xl border-r border-slate-800/80 flex flex-col fixed left-0 top-0 z-40 selection:bg-purple-500">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20">
          <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
            Orchestra <span className="text-[10px] font-semibold tracking-wide uppercase px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">AI</span>
          </h1>
          <p className="text-xs text-slate-400 font-normal">Smart Business Automation</p>
        </div>
      </div>

      {/* Nav Content */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {/* Main Section */}
        <div>
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Platform
          </div>
          <nav className="space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm shadow-purple-950'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4 text-purple-400" />
                <span>Dashboard</span>
              </div>
            </NavLink>

            <NavLink
              to="/upload"
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm shadow-purple-950'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <Upload className="w-4 h-4 text-cyan-400" />
                <span>Upload Document</span>
              </div>
            </NavLink>
          </nav>
        </div>

        {/* AI Agents Section */}
        <div>
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              AI Agents
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
              {agents.length} Active
            </span>
          </div>

          <nav className="space-y-0.5">
            {agents.map((agent) => {
              const IconComponent = ICON_MAP[agent.icon] || Sparkles;
              return (
                <NavLink
                  key={agent.id}
                  to={`/agents/${agent.id}`}
                  className={({ isActive }) =>
                    `group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-slate-800 text-white font-semibold border-l-2 border-purple-500 pl-2.5'
                        : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                    }`
                  }
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <div className={`p-1 rounded-md bg-gradient-to-br ${agent.color} bg-opacity-10 text-white`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate">{agent.shortName} Agent</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    {agent.badgeCount > 0 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-slate-800 text-purple-300 border border-purple-500/20 group-hover:bg-purple-600/30 group-hover:text-purple-200">
                        {agent.badgeCount}
                      </span>
                    )}
                  </div>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Operations Section */}
        <div>
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Operations
          </div>
          <nav className="space-y-1">
            <NavLink
              to="/audit"
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <History className="w-4 h-4 text-emerald-400" />
                <span>Audit Trail</span>
              </div>
            </NavLink>

            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <Bell className="w-4 h-4 text-amber-400" />
                <span>Notifications</span>
              </div>
              {unreadCount > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  {unreadCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-slate-400" />
                <span>Settings</span>
              </div>
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Footer Profile / Status */}
      <div className="p-4 border-t border-slate-800/80 bg-[#0a0e19]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-white">
            AI
          </div>
          <div className="flex-1 truncate">
            <div className="text-xs font-medium text-white truncate">Orchestra Core v2.4</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              All 10 Agents Online
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
