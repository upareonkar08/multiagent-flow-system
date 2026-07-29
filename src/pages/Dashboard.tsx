import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell 
} from 'recharts';
import { 
  Upload, ArrowUpRight, ShieldAlert, Sparkles, Crown, Users, Briefcase, 
  UserCheck, DollarSign, Scale, Megaphone, Calendar, FileCheck, CheckCircle2,
  Clock, FileText, ChevronRight, Activity, TrendingUp, AlertTriangle, Eye, Globe
} from 'lucide-react';
import { Agent, DocumentItem, AuditLog, MetricData, WorkloadData } from '../types';

interface DashboardProps {
  agents: Agent[];
  documents: DocumentItem[];
  auditLogs: AuditLog[];
  metrics: MetricData[];
  workload: WorkloadData[];
  visitorCount?: number;
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

export const Dashboard: React.FC<DashboardProps> = ({
  agents,
  documents,
  auditLogs,
  metrics,
  workload,
  visitorCount = 1483,
}) => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d');

  const totalDocsThisWeek = metrics.reduce((acc, curr) => acc + curr.documents, 0);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 pb-16">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-900/40 via-slate-900 to-indigo-900/30 border border-purple-500/20 p-6 shadow-xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> AI Routing Engine Active
              </span>
              <span className="text-xs text-slate-400">10 Autonomous Specialized Agents</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Orchestrate document intelligence across your organization
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Upload contracts, invoices, board decks, or support logs — our routing pipeline automatically categorizes, extracts, and dispatches actions to the right agent.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/upload')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-purple-950/50 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Upload className="w-4 h-4" />
              Quick Upload
            </button>
          </div>
        </div>
      </div>

      {/* Top Stat Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Visitors Card */}
        <div className="glass-panel rounded-xl p-5 border border-purple-500/30 bg-purple-950/10 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-xs font-medium text-purple-300">Total Site Visitors</p>
            <h3 className="text-2xl font-bold text-white mt-1 font-mono">{visitorCount.toLocaleString()}</h3>
            <p className="text-[11px] text-purple-400 font-medium flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-emerald-400" /> +18.4% live visits
            </p>
          </div>
          <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Globe className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <div className="glass-panel rounded-xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Processed this week</p>
            <h3 className="text-2xl font-bold text-white mt-1">{totalDocsThisWeek}</h3>
            <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" /> +14.2% from last week
            </p>
          </div>
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-panel rounded-xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Active AI Agents</p>
            <h3 className="text-2xl font-bold text-white mt-1">{agents.length}</h3>
            <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3 h-3" /> 100% Operational
            </p>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Activity className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-panel rounded-xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Action Risk Flags</p>
            <h3 className="text-2xl font-bold text-amber-400 mt-1">2</h3>
            <p className="text-[11px] text-amber-400/90 font-medium flex items-center gap-1 mt-1">
              <AlertTriangle className="w-3 h-3" /> Requires review
            </p>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <ShieldAlert className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-panel rounded-xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Average Speed</p>
            <h3 className="text-2xl font-bold text-white mt-1">1.4s</h3>
            <p className="text-[11px] text-purple-400 font-medium flex items-center gap-1 mt-1">
              <Clock className="w-3 h-3" /> Sub-second routing
            </p>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documents Processed Chart */}
        <div className="lg:col-span-2 glass-panel rounded-xl p-6 border border-slate-800/80">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white">Documents processed this week</h3>
              <p className="text-xs text-slate-400">Real-time throughput across all AI agents</p>
            </div>
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-xs">
              {(['7d', '30d', '90d'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setTimeRange(r)}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    timeRange === r
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metrics} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDocs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="documents"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorDocs)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Agent Workload Distribution Chart */}
        <div className="glass-panel rounded-xl p-6 border border-slate-800/80">
          <div className="mb-4">
            <h3 className="text-base font-bold text-white">Agent workload</h3>
            <p className="text-xs text-slate-400">Task distribution by agent role</p>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workload} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <XAxis type="number" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} width={80} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="tasks" radius={[0, 4, 4, 0]}>
                  {workload.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index % 2 === 0 ? '#8b5cf6' : '#06b6d4'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Agent Status Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Agent status</h3>
            <p className="text-xs text-slate-400">Click any agent card to inspect history & ask questions</p>
          </div>
          <button
            onClick={() => navigate('/upload')}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
          >
            Quick upload →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => {
            const IconComponent = ICON_MAP[agent.icon] || Sparkles;
            return (
              <div
                key={agent.id}
                onClick={() => navigate(`/agents/${agent.id}`)}
                className="glass-card rounded-xl p-5 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${agent.color} text-white shadow-md shadow-purple-950/20`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                          {agent.name}
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <span className="text-[11px] text-slate-400">{agent.role}</span>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {agent.badgeCount}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 mb-3">
                    "{agent.recentTask}"
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      agent.status === 'active' ? 'bg-emerald-400 animate-pulse' :
                      agent.status === 'processing' ? 'bg-purple-400 animate-spin' : 'bg-slate-500'
                    }`}></span>
                    <span className="capitalize">{agent.status}</span>
                  </span>
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform font-medium">
                    View agent details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="glass-panel rounded-xl p-6 border border-slate-800/80 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Recent activity</h3>
            <p className="text-xs text-slate-400 font-normal">Real-time trace of agent actions & decision flags</p>
          </div>
          <Link
            to="/audit"
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
          >
            View full audit trail →
          </Link>
        </div>

        <div className="divide-y divide-slate-800/80 overflow-x-auto">
          {auditLogs.slice(0, 5).map((log) => (
            <div key={log.id} className="py-3.5 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3 min-w-0">
                <span className={`w-2 h-2 rounded-full shrink-0 ${
                  log.severity === 'critical' ? 'bg-rose-500 shadow-sm shadow-rose-500' :
                  log.severity === 'warning' ? 'bg-amber-400 shadow-sm shadow-amber-400' : 'bg-cyan-400'
                }`}></span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white truncate">{log.action}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-purple-300 font-mono">
                      {log.agentName}
                    </span>
                  </div>
                  <p className="text-slate-400 truncate mt-0.5">{log.details}</p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[11px] text-slate-500 font-mono">{log.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
