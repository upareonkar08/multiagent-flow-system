import { Agent, DocumentItem, AuditLog, NotificationItem, WorkloadData, MetricData } from '../types';

export const INITIAL_AGENTS: Agent[] = [
  {
    id: 'ceo',
    name: 'CEO Agent',
    shortName: 'CEO',
    role: 'Executive Director AI',
    badgeCount: 4,
    status: 'active',
    recentTask: 'Summarized Q3 board deck & growth projections',
    description: 'Executive summaries & strategic decision support across cross-functional units.',
    receives: [
      'Board reports & decks',
      'Company KPI summaries',
      'Strategic briefs & M&A notes',
      'Investor quarterly updates'
    ],
    actions: [
      'Generate high-level executive summary',
      'Highlight critical decisions needed',
      'Flag urgent corporate risks & capital needs'
    ],
    icon: 'Crown',
    color: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'hr',
    name: 'HR Agent',
    shortName: 'HR',
    role: 'Head of Talent AI',
    badgeCount: 12,
    status: 'active',
    recentTask: 'Ranked 8 candidates for Senior PM role',
    description: 'Automated resume screening, offer letter compliance, and staff sentiment analysis.',
    receives: [
      'Candidate resumes & CVs',
      'Offer letter drafts & contracts',
      'Employee exit interviews & feedback',
      'Policy document updates'
    ],
    actions: [
      'Rank candidates by job description fit',
      'Detect non-standard contract terms',
      'Summarize quarterly team sentiment'
    ],
    icon: 'Users',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'manager',
    name: 'Manager Agent',
    shortName: 'Manager',
    role: 'Operations Manager AI',
    badgeCount: 7,
    status: 'processing',
    recentTask: 'Created 14 tasks from Acme Corp brief',
    description: 'Project breakdown, cross-team workload balancing, and deliverable tracking.',
    receives: [
      'Client project briefs',
      'Sprint planning docs',
      'Status updates & blockers',
      'Scope change requests'
    ],
    actions: [
      'Extract action items into Jira/Linear tasks',
      'Identify workload bottlenecks',
      'Generate weekly squad status reports'
    ],
    icon: 'Briefcase',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'employee',
    name: 'Employee Agent',
    shortName: 'Employee',
    role: 'Individual Contributor AI',
    badgeCount: 5,
    status: 'idle',
    recentTask: 'Marked task #214 complete & updated PR',
    description: 'Task execution helper, draft generator, and operational documentation builder.',
    receives: [
      'Assigned task descriptions',
      'Research notes & raw data',
      'User story specifications'
    ],
    actions: [
      'Draft documentation & email responses',
      'Validate acceptance criteria completion',
      'Synthesize raw research notes'
    ],
    icon: 'UserCheck',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'finance',
    name: 'Finance Agent',
    shortName: 'Finance',
    role: 'Chief Financial Controller AI',
    badgeCount: 9,
    status: 'active',
    recentTask: 'Flagged $4,200 anomaly on INV-22419',
    description: 'Invoice OCR parsing, spend anomaly detection, and budget compliance.',
    receives: [
      'Vendor invoices & receipts',
      'Expense reports',
      'Purchase orders (POs)',
      'Budget allocation sheets'
    ],
    actions: [
      'Extract line items, tax, and payment totals',
      'Flag price deviations & duplicate invoices',
      'Approve POs within threshold ($5,000)'
    ],
    icon: 'DollarSign',
    color: 'from-emerald-500 to-teal-600',
    riskScore: 85,
  },
  {
    id: 'legal',
    name: 'Legal Agent',
    shortName: 'Legal',
    role: 'General Counsel AI',
    badgeCount: 3,
    status: 'active',
    recentTask: 'Risk score 72 on Vendor MSA contract',
    description: 'Contract analysis, liability clause detection, and NDA validation.',
    receives: [
      'Master Services Agreements (MSAs)',
      'Non-Disclosure Agreements (NDAs)',
      'Vendor contracts & SLAs',
      'Terms of Service updates'
    ],
    actions: [
      'Compute overall contract risk score',
      'Highlight uncapped liability & indemnification',
      'Suggest redlines & standard clause swaps'
    ],
    icon: 'Scale',
    color: 'from-red-500 to-orange-600',
    riskScore: 72,
  },
  {
    id: 'it',
    name: 'IT / Support Agent',
    shortName: 'IT',
    role: 'Systems Administrator AI',
    badgeCount: 18,
    status: 'active',
    recentTask: 'Routed CRIT-119 to backend infra team',
    description: 'Support ticket routing, incident triage, and access control management.',
    receives: [
      'Support ticket logs',
      'Infrastructure error traces',
      'Access request forms',
      'Security incident alerts'
    ],
    actions: [
      'Categorize severity (P1-P4)',
      'Auto-route to responsible engineering pod',
      'Suggest instant KB troubleshooting steps'
    ],
    icon: 'ShieldAlert',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'marketing',
    name: 'Marketing Agent',
    shortName: 'Marketing',
    role: 'Growth & Brand Director AI',
    badgeCount: 6,
    status: 'idle',
    recentTask: 'Tone-checked Spring launch campaign copy',
    description: 'Campaign copy review, brand voice consistency check, and SEO audit.',
    receives: [
      'Marketing campaign drafts',
      'Press releases & blogs',
      'Ad copy & social posts',
      'Brand guidelines'
    ],
    actions: [
      'Analyze brand tone & clarity',
      'Optimize SEO keywords & titles',
      'Generate multi-channel launch variations'
    ],
    icon: 'Megaphone',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'pm',
    name: 'Project Manager Agent',
    shortName: 'PM',
    role: 'Product Operations Lead AI',
    badgeCount: 4,
    status: 'processing',
    recentTask: 'Updated Phoenix v2.4 release timeline',
    description: 'Milestone tracking, roadmap alignment, and release management.',
    receives: [
      'PRDs & feature specs',
      'Release milestone updates',
      'Customer feedback sheets'
    ],
    actions: [
      'Map dependencies & critical path',
      'Generate release notes draft',
      'Alert on schedule slip risks'
    ],
    icon: 'Calendar',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'compliance',
    name: 'Compliance Agent',
    shortName: 'Compliance',
    role: 'Chief Governance & Audit AI',
    badgeCount: 2,
    status: 'idle',
    recentTask: 'SOC2 audit pass — 1 minor flag noted',
    description: 'SOC2 / GDPR compliance checking, data privacy auditing, and policy enforcement.',
    receives: [
      'SOC2 compliance evidence',
      'Data privacy consent logs',
      'Vendor security questionnaires'
    ],
    actions: [
      'Check PII exposure compliance',
      'Validate vendor security posture',
      'Flag non-compliant data retention policies'
    ],
    icon: 'FileCheck',
    color: 'from-teal-500 to-emerald-600',
  }
];

export const INITIAL_DOCUMENTS: DocumentItem[] = [
  {
    id: 'DOC-8912',
    title: 'Q3 Board Presentation Deck.pdf',
    fileName: 'Q3_Board_Deck_vFinal.pdf',
    fileSize: '4.8 MB',
    uploadDate: '2026-07-28 14:20',
    agentId: 'ceo',
    status: 'Completed',
    summary: 'Extracted key revenue metrics (+24% YoY), highlighted Q4 expansion strategy, and flagged 2 board decisions needed regarding Series C timeline.',
    confidenceScore: 98,
    category: 'Executive'
  },
  {
    id: 'DOC-8913',
    title: 'INV-22419 Cloud Services Invoice.pdf',
    fileName: 'Invoice_22419_AWS.pdf',
    fileSize: '1.2 MB',
    uploadDate: '2026-07-28 13:45',
    agentId: 'finance',
    status: 'Flagged',
    summary: 'Flagged $4,200 anomaly: bandwidth costs increased 340% over baseline month without prior PO authorization.',
    confidenceScore: 94,
    category: 'Financial'
  },
  {
    id: 'DOC-8914',
    title: 'Acme Corp Master Services Agreement.docx',
    fileName: 'Acme_MSA_Draft_v3.docx',
    fileSize: '850 KB',
    uploadDate: '2026-07-28 11:10',
    agentId: 'legal',
    status: 'Flagged',
    summary: 'Identified risk score of 72. Uncapped indemnity clause found in section 14.2 and non-standard governing jurisdiction (Delaware requested).',
    confidenceScore: 96,
    category: 'Legal'
  },
  {
    id: 'DOC-8915',
    title: 'Sr_Product_Manager_Resumes_Batch.zip',
    fileName: 'PM_Candidates_Batch_July.zip',
    fileSize: '12.4 MB',
    uploadDate: '2026-07-28 09:30',
    agentId: 'hr',
    status: 'Completed',
    summary: 'Parsed 8 candidate resumes. Top candidate: Sarah Lin (94% match) with 7 years B2B SaaS product experience.',
    confidenceScore: 99,
    category: 'Recruiting'
  },
  {
    id: 'DOC-8916',
    title: 'Project Phoenix Product Requirements Brief.pdf',
    fileName: 'Phoenix_PRD_v1.pdf',
    fileSize: '2.1 MB',
    uploadDate: '2026-07-27 18:15',
    agentId: 'manager',
    status: 'Completed',
    summary: 'Generated 14 actionable user stories for Engineering and assigned preliminary story points across 3 sprints.',
    confidenceScore: 95,
    category: 'Operations'
  },
  {
    id: 'DOC-8917',
    title: 'CRIT-119 Database Connection Timeout Log.txt',
    fileName: 'prod_db_timeout_trace.log',
    fileSize: '420 KB',
    uploadDate: '2026-07-27 16:50',
    agentId: 'it',
    status: 'Completed',
    summary: 'Parsed stack trace. Identified connection pool exhaustion in us-east-1 RDS cluster. Escalated to Backend Infra team with P1 tag.',
    confidenceScore: 97,
    category: 'IT Incident'
  },
  {
    id: 'DOC-8918',
    title: 'Spring Product Launch Campaign Copy.docx',
    fileName: 'Spring2026_Campaign_Copy.docx',
    fileSize: '620 KB',
    uploadDate: '2026-07-27 14:05',
    agentId: 'marketing',
    status: 'Completed',
    summary: 'Evaluated brand voice consistency (91% score). Suggested 3 headline alternatives with higher click-through potential for email blast.',
    confidenceScore: 92,
    category: 'Marketing'
  },
  {
    id: 'DOC-8919',
    title: 'SOC2 Type II Audit Evidence Report.pdf',
    fileName: 'SOC2_Evidence_Q2.pdf',
    fileSize: '8.7 MB',
    uploadDate: '2026-07-26 11:20',
    agentId: 'compliance',
    status: 'Completed',
    summary: 'Validated 48 controls. 1 minor finding: quarterly user access review missing signoff signature from HR department lead.',
    confidenceScore: 96,
    category: 'Compliance'
  }
];

export const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'AUD-901',
    timestamp: '2026-07-28 14:21:05',
    agentId: 'ceo',
    agentName: 'CEO Agent',
    action: 'Executive Summary Created',
    documentTitle: 'Q3 Board Presentation Deck.pdf',
    severity: 'info',
    details: 'Generated strategic brief and sent notification to executive team.'
  },
  {
    id: 'AUD-902',
    timestamp: '2026-07-28 13:46:12',
    agentId: 'finance',
    agentName: 'Finance Agent',
    action: 'Anomaly Risk Flagged',
    documentTitle: 'INV-22419 Cloud Services Invoice.pdf',
    severity: 'critical',
    details: 'Line item #4 exceeds baseline budget by +340%. Required approval locked.'
  },
  {
    id: 'AUD-903',
    timestamp: '2026-07-28 11:12:40',
    agentId: 'legal',
    agentName: 'Legal Agent',
    action: 'Contract Risk Analyzed',
    documentTitle: 'Acme Corp Master Services Agreement.docx',
    severity: 'warning',
    details: 'High risk score (72/100). Highlighted indemnification section 14.2.'
  },
  {
    id: 'AUD-904',
    timestamp: '2026-07-28 09:32:18',
    agentId: 'hr',
    agentName: 'HR Agent',
    action: 'Resumes Ranked',
    documentTitle: 'Sr_Product_Manager_Resumes_Batch.zip',
    severity: 'info',
    details: 'Batch processed 8 candidates. Candidate match matrix generated.'
  },
  {
    id: 'AUD-905',
    timestamp: '2026-07-27 16:51:30',
    agentId: 'it',
    agentName: 'IT / Support Agent',
    action: 'P1 Incident Escalated',
    documentTitle: 'CRIT-119 Database Connection Timeout Log.txt',
    severity: 'critical',
    details: 'Auto-created Jira ticket INFRA-442 and assigned to On-Call SRE.'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'NOTIF-1',
    title: 'Financial Anomaly Detected',
    message: 'Finance Agent flagged $4,200 price spike on INV-22419 Cloud Services Invoice.',
    timestamp: '15 mins ago',
    unread: true,
    agentId: 'finance',
    type: 'alert'
  },
  {
    id: 'NOTIF-2',
    title: 'High Legal Risk Score (72/100)',
    message: 'Legal Agent flagged indemnification clause on Acme Corp MSA draft.',
    timestamp: '2 hours ago',
    unread: true,
    agentId: 'legal',
    type: 'warning'
  },
  {
    id: 'NOTIF-3',
    title: '8 Candidate Resumes Screened',
    message: 'HR Agent finished ranking candidates for Senior PM role. Top pick: Sarah Lin.',
    timestamp: '4 hours ago',
    unread: true,
    agentId: 'hr',
    type: 'info'
  },
  {
    id: 'NOTIF-4',
    title: 'Q3 Board Deck Summarized',
    message: 'CEO Agent extracted key strategic points and highlighted 2 pending decisions.',
    timestamp: '5 hours ago',
    unread: true,
    agentId: 'ceo',
    type: 'success'
  },
  {
    id: 'NOTIF-5',
    title: 'CRIT-119 Escalated to SRE',
    message: 'IT Support Agent routed database timeout incident log to Backend team.',
    timestamp: '1 day ago',
    unread: false,
    agentId: 'it',
    type: 'alert'
  }
];

export const WEEKLY_DOCUMENTS_METRICS: MetricData[] = [
  { day: 'Mon', documents: 24, processed: 24 },
  { day: 'Tue', documents: 38, processed: 36 },
  { day: 'Wed', documents: 45, processed: 44 },
  { day: 'Thu', documents: 52, processed: 50 },
  { day: 'Fri', documents: 68, processed: 67 },
  { day: 'Sat', documents: 18, processed: 18 },
  { day: 'Sun', documents: 12, processed: 12 },
];

export const AGENT_WORKLOAD_DATA: WorkloadData[] = [
  { name: 'IT Support', tasks: 18 },
  { name: 'HR', tasks: 12 },
  { name: 'Finance', tasks: 9 },
  { name: 'Manager', tasks: 7 },
  { name: 'Marketing', tasks: 6 },
  { name: 'Employee', tasks: 5 },
  { name: 'CEO', tasks: 4 },
  { name: 'PM', tasks: 4 },
  { name: 'Legal', tasks: 3 },
  { name: 'Compliance', tasks: 2 }
];

export const SAMPLE_UPLOAD_PRESETS = [
  {
    title: 'Vendor Master Agreement (MSA.pdf)',
    file: 'Vendor_MSA_Acme_2026.pdf',
    size: '1.8 MB',
    suggestedAgent: 'legal' as const,
    summary: 'Standard MSA agreement containing liability caps, IP ownership, and jurisdiction terms.'
  },
  {
    title: 'Monthly Cloud Server Billing Invoice (AWS.pdf)',
    file: 'AWS_Invoice_INV99281.pdf',
    size: '840 KB',
    suggestedAgent: 'finance' as const,
    summary: 'Itemized cloud computing breakdown, EC2 compute hours, bandwidth, and tax charges.'
  },
  {
    title: 'Senior Frontend Developer Resume (John_Doe_CV.pdf)',
    file: 'John_Doe_Resume_2026.pdf',
    size: '450 KB',
    suggestedAgent: 'hr' as const,
    summary: 'Candidate profile with 6+ years React, TypeScript, and state management experience.'
  },
  {
    title: 'System Crash Stack Trace Log (error_log.txt)',
    file: 'system_error_trace_8819.txt',
    size: '120 KB',
    suggestedAgent: 'it' as const,
    summary: 'HTTP 500 Out of Memory error log from Kubernetes ingress controller.'
  }
];
