import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Upload } from './pages/Upload';
import { AgentDetail } from './pages/AgentDetail';
import { AuditTrail } from './pages/AuditTrail';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';
import { 
  INITIAL_AGENTS, 
  INITIAL_DOCUMENTS, 
  INITIAL_AUDIT_LOGS, 
  INITIAL_NOTIFICATIONS, 
  WEEKLY_DOCUMENTS_METRICS, 
  AGENT_WORKLOAD_DATA 
} from './data/mockData';
import { DocumentItem, AuditLog, NotificationItem } from './types';

export const App: React.FC = () => {
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [documents, setDocuments] = useState<DocumentItem[]>(INITIAL_DOCUMENTS);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(INITIAL_AUDIT_LOGS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [metrics, setMetrics] = useState(WEEKLY_DOCUMENTS_METRICS);
  const [workload, setWorkload] = useState(AGENT_WORKLOAD_DATA);

  // Add newly routed document from Upload simulator
  const handleAddDocument = (newDoc: DocumentItem) => {
    setDocuments((prev) => [newDoc, ...prev]);

    // Update target agent's badge count
    setAgents((prev) =>
      prev.map((a) =>
        a.id === newDoc.agentId
          ? { ...a, badgeCount: a.badgeCount + 1, status: 'active', recentTask: `Processed ${newDoc.title}` }
          : a
      )
    );

    // Create new audit log
    const newAudit: AuditLog = {
      id: `AUD-${Math.floor(900 + Math.random() * 100)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      agentId: newDoc.agentId,
      agentName: `${newDoc.agentId.toUpperCase()} Agent`,
      action: newDoc.status === 'Flagged' ? 'Document Flagged for Review' : 'Auto-Routed & Ingested',
      documentTitle: newDoc.title,
      severity: newDoc.status === 'Flagged' ? 'warning' : 'info',
      details: newDoc.summary
    };
    setAuditLogs((prev) => [newAudit, ...prev]);

    // Create new notification
    const newNotif: NotificationItem = {
      id: `NOTIF-${Date.now()}`,
      title: `${newDoc.agentId.toUpperCase()} Agent Received ${newDoc.title}`,
      message: newDoc.summary,
      timestamp: 'Just now',
      unread: true,
      agentId: newDoc.agentId,
      type: newDoc.status === 'Flagged' ? 'warning' : 'success'
    };
    setNotifications((prev) => [newNotif, ...prev]);

    // Increment today's metric
    setMetrics((prev) =>
      prev.map((m, idx) =>
        idx === prev.length - 1 ? { ...m, documents: m.documents + 1, processed: m.processed + 1 } : m
      )
    );
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const unreadNotificationsCount = notifications.filter((n) => n.unread).length;

  return (
    <Router>
      <div className="min-h-screen bg-[#090d16] text-slate-100 flex selection:bg-purple-500 selection:text-white">
        {/* Fixed Left Sidebar */}
        <Sidebar agents={agents} unreadCount={unreadNotificationsCount} />

        {/* Main Application Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Sticky Header */}
          <Header
            notifications={notifications}
            onMarkAllRead={handleMarkAllRead}
          />

          {/* Page View Routes */}
          <main className="flex-1 ml-64">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    agents={agents}
                    documents={documents}
                    auditLogs={auditLogs}
                    metrics={metrics}
                    workload={workload}
                  />
                }
              />
              <Route
                path="/upload"
                element={<Upload onAddDocument={handleAddDocument} />}
              />
              <Route
                path="/agents/:agentId"
                element={<AgentDetail agents={agents} documents={documents} />}
              />
              <Route
                path="/audit"
                element={<AuditTrail auditLogs={auditLogs} />}
              />
              <Route
                path="/notifications"
                element={
                  <Notifications
                    notifications={notifications}
                    onMarkAllRead={handleMarkAllRead}
                  />
                }
              />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};
