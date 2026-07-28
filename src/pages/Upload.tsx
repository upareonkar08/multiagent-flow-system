import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Upload as UploadIcon, FileText, CheckCircle2, Sparkles, AlertCircle, 
  ArrowRight, ShieldCheck, Cpu, RefreshCw, FileUp
} from 'lucide-react';
import { AgentId, DocumentItem } from '../types';
import { SAMPLE_UPLOAD_PRESETS } from '../data/mockData';

interface UploadProps {
  onAddDocument: (doc: DocumentItem) => void;
}

export const Upload: React.FC<UploadProps> = ({ onAddDocument }) => {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<typeof SAMPLE_UPLOAD_PRESETS[0] | null>(null);
  const [customFile, setCustomFile] = useState<File | null>(null);

  // Simulation State
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState<number>(0);
  const [resultDoc, setResultDoc] = useState<DocumentItem | null>(null);

  const steps = [
    'Scanning document structure & OCR parsing...',
    'Extracting entities, key metrics & semantic intent...',
    'Calculating agent relevance & confidence score...',
    'Auto-routing document & dispatching background tasks!'
  ];

  const handleSimulate = (preset: typeof SAMPLE_UPLOAD_PRESETS[0]) => {
    setSelectedPreset(preset);
    setIsProcessing(true);
    setProcessStep(0);
    setResultDoc(null);

    // Step 0 -> 1 -> 2 -> 3 -> Finish
    setTimeout(() => setProcessStep(1), 700);
    setTimeout(() => setProcessStep(2), 1400);
    setTimeout(() => setProcessStep(3), 2100);
    setTimeout(() => {
      setIsProcessing(false);
      const newDoc: DocumentItem = {
        id: `DOC-${Math.floor(1000 + Math.random() * 9000)}`,
        title: preset.title,
        fileName: preset.file,
        fileSize: preset.size,
        uploadDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
        agentId: preset.suggestedAgent,
        status: preset.suggestedAgent === 'legal' || preset.suggestedAgent === 'finance' ? 'Flagged' : 'Completed',
        summary: preset.summary,
        confidenceScore: 98,
        category: preset.suggestedAgent.toUpperCase()
      };
      setResultDoc(newDoc);
      onAddDocument(newDoc);
    }, 2800);
  };

  const handleCustomFileUpload = (file: File) => {
    setCustomFile(file);
    setIsProcessing(true);
    setProcessStep(0);

    // Guess agent based on file extension or name
    const lower = file.name.toLowerCase();
    let agentId: AgentId = 'employee';
    if (lower.includes('invoice') || lower.includes('bill') || lower.includes('cost')) agentId = 'finance';
    else if (lower.includes('msa') || lower.includes('contract') || lower.includes('nda')) agentId = 'legal';
    else if (lower.includes('resume') || lower.includes('cv') || lower.includes('hr')) agentId = 'hr';
    else if (lower.includes('log') || lower.includes('error') || lower.includes('bug')) agentId = 'it';
    else if (lower.includes('board') || lower.includes('deck') || lower.includes('kpi')) agentId = 'ceo';

    setTimeout(() => setProcessStep(1), 700);
    setTimeout(() => setProcessStep(2), 1400);
    setTimeout(() => setProcessStep(3), 2100);
    setTimeout(() => {
      setIsProcessing(false);
      const newDoc: DocumentItem = {
        id: `DOC-${Math.floor(1000 + Math.random() * 9000)}`,
        title: file.name,
        fileName: file.name,
        fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        uploadDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
        agentId: agentId,
        status: 'Completed',
        summary: `Parsed ${file.name}. Extracted semantic intent and auto-routed to ${agentId.toUpperCase()} agent pipeline.`,
        confidenceScore: 95,
        category: agentId.toUpperCase()
      };
      setResultDoc(newDoc);
      onAddDocument(newDoc);
    }, 2800);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 pb-16">
      {/* Header Info */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-2xl font-bold text-white tracking-tight">Upload document</h2>
        <p className="text-sm text-slate-300">
          Drop a file — the AI router will automatically classify, extract entities, and dispatch to the correct specialized agent.
        </p>
      </div>

      {/* Main Drag & Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleCustomFileUpload(e.dataTransfer.files[0]);
          }
        }}
        className={`relative border-2 border-dashed rounded-2xl p-10 text-center transition-all ${
          dragActive
            ? 'border-purple-400 bg-purple-500/10 scale-[1.01]'
            : 'border-slate-700/80 bg-slate-900/40 hover:border-purple-500/50 hover:bg-slate-900/60'
        }`}
      >
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mx-auto flex items-center justify-center mb-4">
          <UploadIcon className="w-8 h-8 animate-bounce" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1">Drop your document here</h3>
        <p className="text-xs text-slate-400 mb-6">
          PDF, DOCX, XLSX, images, or text — up to 25 MB
        </p>

        <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs cursor-pointer shadow-lg shadow-purple-950/40 transition-all hover:scale-105">
          <FileUp className="w-4 h-4" />
          <span>Browse File</span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleCustomFileUpload(e.target.files[0]);
              }
            }}
          />
        </label>
      </div>

      {/* Preset Sample Documents Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Or test with preset sample documents
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SAMPLE_UPLOAD_PRESETS.map((preset, idx) => (
            <div
              key={idx}
              onClick={() => !isProcessing && handleSimulate(preset)}
              className="glass-card rounded-xl p-4 cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {preset.title}
                  </h4>
                  <span className="text-[10px] text-slate-400">{preset.size} • Suggested: <strong className="uppercase text-purple-300">{preset.suggestedAgent}</strong></span>
                </div>
              </div>

              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-[11px] font-semibold text-slate-300 group-hover:bg-purple-600 group-hover:text-white transition-all flex items-center gap-1">
                Route AI <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Live AI Processing Simulation Animation */}
      {isProcessing && (
        <div className="glass-panel rounded-2xl p-6 border border-purple-500/30 space-y-6 animate-fade-in shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                <Cpu className="w-6 h-6 animate-spin" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">AI Autonomous Router in Progress</h4>
                <p className="text-xs text-slate-400">Analyzing semantic intent & routing to specialized agent</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-purple-400">
              {Math.min(100, (processStep + 1) * 25)}%
            </span>
          </div>

          <div className="space-y-3">
            {steps.map((stepText, index) => (
              <div key={index} className="flex items-center gap-3 text-xs">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold text-[10px] ${
                  index < processStep
                    ? 'bg-emerald-500 text-white'
                    : index === processStep
                    ? 'bg-purple-600 text-white animate-pulse'
                    : 'bg-slate-800 text-slate-500'
                }`}>
                  {index < processStep ? '✓' : index + 1}
                </div>
                <span className={`${
                  index <= processStep ? 'text-slate-200 font-medium' : 'text-slate-500'
                }`}>
                  {stepText}
                </span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500 ease-out"
              style={{ width: `${(processStep + 1) * 25}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Live AI Router Output Result Card */}
      {resultDoc && !isProcessing && (
        <div className="glass-panel rounded-2xl p-6 border border-emerald-500/30 bg-emerald-950/10 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white">Routing Complete — Successfully Assigned!</h4>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {resultDoc.confidenceScore}% Confidence Match
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-3 border-b border-slate-800">
              <div>
                <span className="text-slate-400 block text-[10px]">DOCUMENT</span>
                <strong className="text-white font-semibold">{resultDoc.title}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">ASSIGNED AGENT</span>
                <strong className="text-purple-400 font-bold uppercase">{resultDoc.agentId} Agent</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">STATUS</span>
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                  resultDoc.status === 'Flagged' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {resultDoc.status}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">DOCUMENT ID</span>
                <span className="font-mono text-slate-300">{resultDoc.id}</span>
              </div>
            </div>

            <div>
              <span className="text-slate-400 text-[10px] block mb-1">AI AGENT ANALYSIS & SUMMARY</span>
              <p className="text-slate-200 leading-relaxed font-normal bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                {resultDoc.summary}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={() => { setResultDoc(null); }}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Upload another
            </button>
            <button
              onClick={() => navigate(`/agents/${resultDoc.agentId}`)}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-purple-950 transition-all hover:scale-105"
            >
              Go to {resultDoc.agentId.toUpperCase()} Agent view <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
