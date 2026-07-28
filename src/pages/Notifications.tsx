import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, CheckCheck, AlertCircle, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';
import { NotificationItem } from '../types';

interface NotificationsProps {
  notifications: NotificationItem[];
  onMarkAllRead: () => void;
}

export const Notifications: React.FC<NotificationsProps> = ({ notifications, onMarkAllRead }) => {
  const navigate = useNavigate();

  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'alert':
        return <AlertCircle className="w-5 h-5 text-rose-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Info className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 pb-16">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Bell className="w-6 h-6 text-purple-400" /> Notifications & Alerts
          </h2>
          <p className="text-sm text-slate-300">
            Real-time notifications sent by AI agents when documents require human review.
          </p>
        </div>

        <button
          onClick={onMarkAllRead}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700/80"
        >
          <CheckCheck className="w-4 h-4" /> Mark all as read
        </button>
      </div>

      <div className="glass-panel rounded-2xl border border-slate-800 divide-y divide-slate-800/80 overflow-hidden shadow-xl">
        {notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => navigate(`/agents/${n.agentId}`)}
            className={`p-5 flex items-start gap-4 hover:bg-slate-800/40 cursor-pointer transition-colors ${
              n.unread ? 'bg-purple-950/20' : ''
            }`}
          >
            <div className="mt-1">{getIcon(n.type)}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  {n.title}
                  {n.unread && (
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  )}
                </h4>
                <span className="text-xs text-slate-500 font-mono">{n.timestamp}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">{n.message}</p>
              <span className="text-[11px] font-semibold text-purple-400 hover:text-purple-300">
                Inspect agent view ({n.agentId.toUpperCase()}) →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
