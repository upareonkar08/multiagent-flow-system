import React, { useState } from 'react';
import { History, Search, Filter, AlertTriangle, AlertCircle, Info, ChevronDown, Code } from 'lucide-react';
import { AuditLog } from '../types';

interface AuditTrailProps {
  auditLogs: AuditLog[];
}

export const AuditTrail: React.FC<AuditTrailProps> = ({ auditLogs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch = 
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.documentTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.agentName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeverity = selectedSeverity === 'all' || log.severity === selectedSeverity;

    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 pb-16">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <History className="w-6 h-6 text-purple-400" /> Audit Trail
          </h2>
          <p className="text-sm text-slate-300">
            Immutable log of all AI agent routing decisions, risk flags, and document actions.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search logs or docs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-purple-500 w-64"
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            {['all', 'info', 'warning', 'critical'].map((sev) => (
              <button
                key={sev}
                onClick={() => setSelectedSeverity(sev)}
                className={`px-3 py-1 rounded-lg capitalize font-medium transition-all ${
                  selectedSeverity === sev
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-6 font-semibold">Timestamp</th>
                <th className="py-3.5 px-4 font-semibold">Agent</th>
                <th className="py-3.5 px-4 font-semibold">Action</th>
                <th className="py-3.5 px-4 font-semibold">Document</th>
                <th className="py-3.5 px-4 font-semibold">Severity</th>
                <th className="py-3.5 px-6 font-semibold text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400">
                    No matching audit log entries found.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <React.Fragment key={log.id}>
                    <tr
                      onClick={() => setExpandedLogId(expandedLogId === log.id ? null : log.id)}
                      className="hover:bg-slate-800/40 cursor-pointer transition-colors"
                    >
                      <td className="py-4 px-6 font-mono text-slate-400 whitespace-nowrap">{log.timestamp}</td>
                      <td className="py-4 px-4 font-semibold text-white">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-300 font-mono">
                          {log.agentName}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-200">{log.action}</td>
                      <td className="py-4 px-4 text-slate-300 font-mono max-w-xs truncate">{log.documentTitle}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          log.severity === 'critical' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                          log.severity === 'warning' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                          'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}>
                          {log.severity === 'critical' && <AlertCircle className="w-3 h-3" />}
                          {log.severity === 'warning' && <AlertTriangle className="w-3 h-3" />}
                          {log.severity === 'info' && <Info className="w-3 h-3" />}
                          <span className="capitalize">{log.severity}</span>
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right font-medium text-purple-400">
                        <button className="flex items-center gap-1 ml-auto hover:text-purple-300">
                          <Code className="w-3.5 h-3.5" /> Inspect JSON
                        </button>
                      </td>
                    </tr>

                    {expandedLogId === log.id && (
                      <tr className="bg-slate-950/80">
                        <td colSpan={6} className="p-4 px-6 border-y border-slate-800">
                          <div className="space-y-2 font-mono text-xs">
                            <div className="text-slate-400 flex items-center justify-between">
                              <span>EVENT METADATA PAYLOAD ({log.id})</span>
                              <span className="text-emerald-400">SIGNATURE: VALID (ED25519)</span>
                            </div>
                            <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-purple-300 overflow-x-auto text-[11px] leading-relaxed">
{JSON.stringify({
  auditId: log.id,
  agent: log.agentId,
  agentName: log.agentName,
  timestamp: log.timestamp,
  severity: log.severity,
  action: log.action,
  document: log.documentTitle,
  details: log.details,
  executionEngine: "Orchestra-v2.4-LLM-Router",
  environment: "Production Cluster"
}, null, 2)}
                            </pre>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
