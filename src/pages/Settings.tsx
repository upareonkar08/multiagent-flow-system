import React, { useState } from 'react';
import { Settings as SettingsIcon, Cpu, Sliders, Shield, Bell, CheckCircle2, RefreshCw } from 'lucide-react';

export const Settings: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('Antigravity Flash 3.6 (Recommended)');
  const [confidenceThreshold, setConfidenceThreshold] = useState(85);
  const [autoApproval, setAutoApproval] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 pb-16">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <SettingsIcon className="w-6 h-6 text-purple-400" /> Platform Settings
        </h2>
        <p className="text-sm text-slate-300">
          Configure AI router sensitivity, LLM models, and automated execution thresholds.
        </p>
      </div>

      <div className="space-y-6">
        {/* Model Selection Card */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">AI LLM Model Engine</h3>
              <p className="text-xs text-slate-400">Select model for document entity parsing & agent reasoning</p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { id: 'Antigravity Flash 3.6 (Recommended)', speed: 'Ultra-fast (1.2s avg)', desc: 'Optimized for high-speed multi-agent routing & structured JSON' },
              { id: 'Gemini 1.5 Pro', speed: 'High reasoning (2.4s avg)', desc: 'Best for complex legal contracts & deep compliance checks' },
              { id: 'Claude 3.5 Sonnet', speed: 'Deep analysis (2.8s avg)', desc: 'Excellent at technical stack traces & executive summaries' }
            ].map((m) => (
              <label
                key={m.id}
                onClick={() => setSelectedModel(m.id)}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedModel === m.id
                    ? 'bg-purple-950/30 border-purple-500 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/40'
                }`}
              >
                <div>
                  <strong className="text-xs font-semibold block">{m.id}</strong>
                  <span className="text-[11px] text-slate-400">{m.desc}</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                  {m.speed}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Router Thresholds */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Auto-Routing Sensitivity</h3>
              <p className="text-xs text-slate-400">Set minimum confidence threshold for automated action dispatch</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-white">
              <span>Minimum Confidence Threshold</span>
              <span className="font-mono text-purple-400">{confidenceThreshold}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="99"
              value={confidenceThreshold}
              onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-800 rounded-lg cursor-pointer h-2"
            />
            <p className="text-[11px] text-slate-400">
              Documents scoring below {confidenceThreshold}% confidence will require manual human signoff.
            </p>
          </div>
        </div>

        {/* Toggles */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Autonomous Guardrails</h3>
              <p className="text-xs text-slate-400">Safety rules and alert triggers</p>
            </div>
          </div>

          <div className="space-y-3 divide-y divide-slate-800">
            <div className="pt-2 flex items-center justify-between">
              <div>
                <strong className="text-xs text-white block">Auto-approve safe documents (&gt;$5,000 threshold)</strong>
                <span className="text-[11px] text-slate-400">Allow Finance Agent to process routine invoices under budget</span>
              </div>
              <input
                type="checkbox"
                checked={autoApproval}
                onChange={(e) => setAutoApproval(e.target.checked)}
                className="w-4 h-4 accent-purple-500 rounded cursor-pointer"
              />
            </div>

            <div className="pt-3 flex items-center justify-between">
              <div>
                <strong className="text-xs text-white block">Send instant email alerts on High Risk flags</strong>
                <span className="text-[11px] text-slate-400">Notify legal and financial leads immediately when risk &gt; 70</span>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="w-4 h-4 accent-purple-500 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-end gap-3">
          {savedSuccess && (
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Settings updated!
            </span>
          )}
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-950 transition-all hover:scale-105"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
};
