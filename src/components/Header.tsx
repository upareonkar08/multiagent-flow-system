import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, Upload, Search, CheckCircle2, ShieldCheck, Eye, Users } from 'lucide-react';
import { NotificationItem } from '../types';
import { NotificationModal } from './NotificationModal';

interface HeaderProps {
  notifications: NotificationItem[];
  onMarkAllRead: () => void;
  visitorCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ notifications, onMarkAllRead, visitorCount = 1483 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter(n => n.unread).length;

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return { title: 'Dashboard', subtitle: 'Live across your AI organization' };
    if (path === '/upload') return { title: 'Upload document', subtitle: 'Drop a file — the AI router will pick the right agent' };
    if (path === '/audit') return { title: 'Audit Trail', subtitle: 'Complete execution history & decision logs' };
    if (path === '/notifications') return { title: 'Notifications', subtitle: 'Real-time alerts and system events' };
    if (path === '/settings') return { title: 'Settings', subtitle: 'Agent routing rules, models & integrations' };
    if (path.startsWith('/agents/')) {
      const agentId = path.split('/')[2].toUpperCase();
      return { title: `${agentId} Agent`, subtitle: 'Specialized document processing & action pipeline' };
    }
    return { title: 'Orchestra', subtitle: 'Smart business automation' };
  };

  const pageInfo = getPageTitle();

  return (
    <header className="h-16 border-b border-slate-800/80 bg-[#090d16]/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-30 ml-64">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          {pageInfo.title}
        </h1>
        <p className="text-xs text-slate-400 font-normal">{pageInfo.subtitle}</p>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-4">
        {/* Live Visitor Counter Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs text-slate-200 shadow-sm">
          <Eye className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span className="text-[11px] text-slate-400">Total Visits:</span>
          <span className="font-mono font-bold text-purple-300">
            {visitorCount.toLocaleString()}
          </span>
        </div>

        {/* Active System Status Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] text-slate-400">Router Status:</span>
          <span className="font-medium text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Optimal
          </span>
        </div>

        {/* Notifications Trigger */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Modal Dropdown */}
          {showNotifications && (
            <NotificationModal
              notifications={notifications}
              onClose={() => setShowNotifications(false)}
              onMarkAllRead={onMarkAllRead}
            />
          )}
        </div>

        {/* Quick Upload Button */}
        <button
          onClick={() => navigate('/upload')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-purple-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Upload className="w-4 h-4" />
          <span>Upload</span>
        </button>
      </div>
    </header>
  );
};
