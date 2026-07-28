import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, CheckCheck, AlertCircle, AlertTriangle, Info, CheckCircle2, X } from 'lucide-react';
import { NotificationItem } from '../types';

interface NotificationModalProps {
  notifications: NotificationItem[];
  onClose: () => void;
  onMarkAllRead: () => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  notifications,
  onClose,
  onMarkAllRead,
}) => {
  const navigate = useNavigate();

  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'alert':
        return <AlertCircle className="w-4 h-4 text-rose-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-amber-400" />;
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <Info className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="absolute right-0 mt-3 w-80 md:w-96 bg-[#0f172a] border border-slate-700/80 rounded-xl shadow-2xl z-50 overflow-hidden">
      {/* Header */}
      <div className="p-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-white">Notifications</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onMarkAllRead}
            className="text-[11px] text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            Mark all read
          </button>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/50">
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            No notifications available
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => {
                onClose();
                navigate(`/agents/${n.agentId}`);
              }}
              className={`p-3 hover:bg-slate-800/60 cursor-pointer transition-colors flex gap-3 ${
                n.unread ? 'bg-purple-950/20' : ''
              }`}
            >
              <div className="mt-0.5">{getIcon(n.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-white truncate">{n.title}</span>
                  <span className="text-[10px] text-slate-500 whitespace-nowrap ml-2">{n.timestamp}</span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{n.message}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-2.5 bg-slate-900/80 border-t border-slate-800 text-center">
        <button
          onClick={() => {
            onClose();
            navigate('/notifications');
          }}
          className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          View all notifications →
        </button>
      </div>
    </div>
  );
};
