import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Crown, Users, Briefcase, UserCheck, DollarSign, Scale, ShieldAlert, 
  Megaphone, Calendar, FileCheck, Sparkles, Send, FileText, CheckCircle2,
  AlertCircle, MessageSquare, ArrowLeft, Bot, User, Clock
} from 'lucide-react';
import { Agent, DocumentItem, AgentId } from '../types';

interface AgentDetailProps {
  agents: Agent[];
  documents: DocumentItem[];
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

const SUGGESTED_PROMPTS: Record<AgentId, string[]> = {
  ceo: [
    'Summarize Q3 board deck decisions needed',
    'What are the key financial risks for Q4?',
    'Draft executive memo for M&A progress'
  ],
  hr: [
    'Compare top candidates for Sr PM role',
    'Flag non-standard terms in draft offer letter',
    'Summarize team exit interview feedback'
  ],
  manager: [
    'Extract Linear tasks from Acme project brief',
    'Highlight current sprint bottleneck items',
    'Generate squad workload status report'
  ],
  employee: [
    'Draft response email for client request #4',
    'Synthesize raw user research notes',
    'Check completion status for task #214'
  ],
  finance: [
    'Explain the $4,200 anomaly on INV-22419',
    'List all unapproved invoices above $5,000',
    'Check Q3 cloud spend against budget'
  ],
  legal: [
    'Analyze risk score 72 on Vendor MSA',
    'Suggest redlines for uncapped liability clause',
    'Verify jurisdiction compliance for Delaware'
  ],
  it: [
    'Analyze stack trace for ticket CRIT-119',
    'Suggest troubleshooting steps for RDS timeout',
    'Show all unassigned P1 support tickets'
  ],
  marketing: [
    'Evaluate brand tone on Spring Launch copy',
    'Generate 3 alternative headlines for email',
    'Audit SEO keywords for product launch page'
  ],
  pm: [
    'Update Phoenix release roadmap timeline',
    'Identify critical path dependency slip risks',
    'Draft release notes for version 2.4'
  ],
  compliance: [
    'Explain minor flag on SOC2 evidence audit',
    'Validate vendor security posture questionnaire',
    'Audit PII data retention compliance'
  ]
};

export const AgentDetail: React.FC<AgentDetailProps> = ({ agents, documents }) => {
  const { agentId } = useParams<{ agentId: AgentId }>();
  const navigate = useNavigate();

  const agent = agents.find((a) => a.id === agentId);
  const agentDocs = documents.filter((d) => d.agentId === agentId);

  // Chat State
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'agent'; text: string; time: string }>>([
    {
      sender: 'agent',
      text: `Hello! I am the ${agent?.name || 'AI Agent'}. How can I assist you with document processing or strategic analysis today?`,
      time: 'Just now'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!agent) {
    return (
      <div className="p-8 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Agent not found</h2>
        <button onClick={() => navigate('/')} className="text-purple-400 font-medium text-sm">
          Return to Dashboard
        </button>
      </div>
    );
  }

  const IconComponent = ICON_MAP[agent.icon] || Sparkles;
  const prompts = SUGGESTED_PROMPTS[agent.id] || [];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = { sender: 'user' as const, text, time: 'Just now' };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    setIsTyping(true);

    setTimeout(() => {
      let responseText = `I have processed your query: "${text}". Based on recent documents in my vault, everything is synchronized and compliant.`;
      
      if (agent.id === 'finance') {
        responseText = `Analyzing financial ledger for "${text}": Invoice INV-22419 has been flagged due to a +340% variance in AWS compute charges. Recommend requesting an itemized log from the vendor before releasing payment.`;
      } else if (agent.id === 'legal') {
        responseText = `Legal risk assessment for "${text}": Contract section 14.2 contains an uncapped indemnity clause. Recommending standard cap set at 2x annual contract value.`;
      } else if (agent.id === 'ceo') {
        responseText = `Executive Overview for "${text}": Q3 revenue growth is tracking +24% YoY. Key decision required by Friday: authorization for expanding EMEA sales squad.`;
      } else if (agent.id === 'hr') {
        responseText = `Talent evaluation for "${text}": Candidate Sarah Lin scored 94% on technical fit. Interview panel scheduled for Thursday 2 PM.`;
      } else if (agent.id === 'it') {
        responseText = `Incident Triage for "${text}": Log error trace CRIT-119 points to pool exhaustion on us-east-1 database. Auto-escalated to On-Call SRE.`;
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'agent', text: responseText, time: 'Just now' }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 pb-16">
      {/* Top Header Card */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button onClick={() => navigate('/')} className="hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Dashboard
          </button>
          <span>/</span>
          <span className="text-purple-400 font-medium">Agents</span>
          <span>/</span>
          <span className="text-white font-semibold">{agent.name}</span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-2">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${agent.color} text-white shadow-xl shadow-purple-950/40`}>
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white tracking-tight">{agent.name}</h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {agent.badgeCount} Tasks
                </span>
                {agent.riskScore && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Risk Score {agent.riskScore}/100
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-300 mt-1">{agent.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs flex items-center gap-2 text-slate-300">
              <span className={`w-2 h-2 rounded-full ${
                agent.status === 'active' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
              }`}></span>
              <span className="capitalize">{agent.status}</span>
            </div>
            <button
              onClick={() => navigate('/upload')}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-950 transition-all hover:scale-105"
            >
              Upload for this agent
            </button>
          </div>
        </div>
      </div>

      {/* Capabilities Section (Receives & Actions) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Receives */}
        <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" /> Receives
          </h3>
          <ul className="space-y-2">
            {agent.receives.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" /> Automated Actions
          </h3>
          <ul className="space-y-2">
            {agent.actions.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Documents Table for this Agent */}
      <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white">Recent documents for {agent.shortName}</h3>

        {agentDocs.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs border border-dashed border-slate-800 rounded-xl">
            No recent documents processed for this agent yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                  <th className="pb-3 font-semibold">Document Title</th>
                  <th className="pb-3 font-semibold">Uploaded</th>
                  <th className="pb-3 font-semibold">Confidence</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold">Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {agentDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-800/40">
                    <td className="py-3 font-semibold text-white">{doc.title}</td>
                    <td className="py-3 text-slate-400 font-mono">{doc.uploadDate}</td>
                    <td className="py-3 text-purple-300 font-mono">{doc.confidenceScore}%</td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        doc.status === 'Flagged' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'
                      }`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-300 max-w-md truncate">{doc.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Interactive "Ask this Agent" AI Chat Drawer */}
      <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Ask {agent.name}</h3>
              <p className="text-xs text-slate-400">Query this agent directly on documents, policies, or decisions</p>
            </div>
          </div>
        </div>

        {/* Suggested Prompts Pills */}
        <div className="flex flex-wrap gap-2">
          {prompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-purple-950/40 text-slate-300 hover:text-purple-300 border border-slate-800 hover:border-purple-500/30 text-xs transition-colors"
            >
              "{p}"
            </button>
          ))}
        </div>

        {/* Chat Messages Log */}
        <div className="h-64 overflow-y-auto space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 text-xs max-w-2xl ${
                m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
              }`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold ${
                m.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-purple-400 border border-purple-500/30'
              }`}>
                {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>
              <div className={`p-3 rounded-xl ${
                m.sender === 'user'
                  ? 'bg-purple-600 text-white rounded-tr-none'
                  : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none leading-relaxed'
              }`}>
                <p>{m.text}</p>
                <span className="text-[9px] opacity-60 mt-1 block text-right">{m.time}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2 text-xs text-purple-400 items-center">
              <Bot className="w-4 h-4 animate-bounce" />
              <span className="animate-pulse">{agent.name} is formulating response...</span>
            </div>
          )}
        </div>

        {/* Chat Input Field */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={`Ask ${agent.shortName} Agent a question or request document analysis...`}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={() => handleSendMessage()}
            className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-purple-950 transition-all hover:scale-105"
          >
            <Send className="w-3.5 h-3.5" /> Send
          </button>
        </div>
      </div>
    </div>
  );
};
