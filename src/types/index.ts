export type AgentId = 
  | 'ceo' 
  | 'hr' 
  | 'manager' 
  | 'employee' 
  | 'finance' 
  | 'legal' 
  | 'it' 
  | 'marketing' 
  | 'pm' 
  | 'compliance';

export interface Agent {
  id: AgentId;
  name: string;
  shortName: string;
  role: string;
  badgeCount: number;
  status: 'active' | 'processing' | 'idle';
  recentTask: string;
  description: string;
  receives: string[];
  actions: string[];
  icon: string;
  color: string;
  riskScore?: number;
}

export interface DocumentItem {
  id: string;
  title: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  agentId: AgentId;
  status: 'Completed' | 'In Progress' | 'Flagged' | 'Pending Review';
  summary: string;
  confidenceScore: number;
  category: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  agentId: AgentId;
  agentName: string;
  action: string;
  documentTitle: string;
  severity: 'info' | 'warning' | 'critical';
  details: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  unread: boolean;
  agentId: AgentId;
  type: 'alert' | 'success' | 'info' | 'warning';
}

export interface WorkloadData {
  name: string;
  tasks: number;
}

export interface MetricData {
  day: string;
  documents: number;
  processed: number;
}
