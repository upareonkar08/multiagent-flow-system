<p align="center">
  <img src="https://img.shields.io/badge/Orchestra-AI%20Platform-8b5cf6?style=for-the-badge&logoColor=white" alt="Orchestra AI" />
</p>

<h1 align="center">🎵 Orchestra AI — Multi-Agent Flow System</h1>

<p align="center">
  <strong>Smart business automation powered by 10 autonomous AI agents.</strong><br/>
  Upload documents and let AI agents route, analyze, and act — autonomously.
</p>

<p align="center">
  <a href="https://multiagent-flow-system.vercel.app">🌐 Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-architecture">Architecture</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Recharts-2.13-ff6b6b?style=flat-square" />
  <img src="https://img.shields.io/badge/Lucide_Icons-0.460-f97316?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel" />
</p>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Screenshots & UI Overview](#-screenshots--ui-overview)
- [AI Agents — Full Reference](#-ai-agents--full-reference)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [How the AI Routing Pipeline Works](#-how-the-ai-routing-pipeline-works)
- [Pages & Routes](#-pages--routes)
- [Key Components](#-key-components)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🎯 About the Project

**Orchestra AI** is a modern, full-featured **multi-agent business automation dashboard** that simulates how an enterprise would use specialized AI agents to process, classify, route, and take action on business documents — all in real time.

### The Problem It Solves

In any mid-to-large organization, business documents (invoices, contracts, resumes, incident logs, campaign copy, board decks, compliance evidence) are constantly flowing across departments. Each document type requires a different specialist to process it. This creates bottlenecks, delays, and human error.

### The Orchestra Solution

Orchestra AI introduces **10 specialized autonomous AI agents** — each trained for a specific business function — that work together like an orchestra:

1. A document is uploaded (PDF, DOCX, XLSX, image, or text).
2. The **AI Routing Engine** scans the document, extracts entities, and calculates confidence scores.
3. The document is **automatically assigned** to the most relevant AI agent.
4. The agent **processes the document** — extracting insights, flagging risks, generating summaries, or creating action items.
5. Every action is logged in an **immutable audit trail** for governance.
6. **Real-time notifications** alert stakeholders when human review is required.

All of this happens in under 2 seconds.

---

## 🌐 Live Demo

**🔗 [https://multiagent-flow-system.vercel.app](https://multiagent-flow-system.vercel.app)**

> The app is fully interactive — try uploading a sample document, explore each agent's detail page, chat with agents, and browse the audit trail.

---

## ✨ Features

### 📊 Real-Time Analytics Dashboard
- **Weekly Document Throughput Chart** — Interactive Recharts area chart with period toggles (7 days / 30 days / 90 days) showing documents processed over time.
- **Agent Workload Distribution** — Horizontal bar chart visualizing task distribution across all 10 AI agents, instantly identifying bottlenecks.
- **Live Agent Status Grid** — 10 interactive cards showing each agent's current state (`Active` / `Processing` / `Idle`), recent task summary, task badge count, and risk scores where applicable.
- **Recent Activity Feed** — Real-time chronological trace of all agent decisions, routing events, and risk flags with severity indicators (Info / Warning / Critical).
- **Key Metrics Row** — At-a-glance cards for: Total Site Visitors (live counter), Documents Processed This Week, Active AI Agents (10), Action Risk Flags, and Average Routing Speed (1.4s).

### 📤 Smart Document Upload & AI Auto-Router
- **Drag & Drop Upload Zone** — Supports PDF, DOCX, XLSX, images, and plain text files up to 25 MB. Visual hover feedback with purple glow animation.
- **Browse File Button** — Standard file picker fallback for non-drag-and-drop workflows.
- **1-Click Sample Document Presets** — Four pre-loaded test documents for instant demo:
  - Vendor Master Agreement (MSA.pdf) → routes to Legal Agent
  - Monthly Cloud Server Billing Invoice → routes to Finance Agent
  - Senior Frontend Developer Resume → routes to HR Agent
  - System Crash Stack Trace Log → routes to IT/Support Agent
- **Live AI Scanning Animation** — 4-step visual progress indicator:
  1. Scanning document structure & OCR parsing
  2. Extracting entities, key metrics & semantic intent
  3. Calculating agent relevance & confidence score
  4. Auto-routing document & dispatching background tasks
- **Routing Result Card** — Displays assigned agent, confidence percentage, document ID, processing status (Completed/Flagged), and AI-generated summary.

### 🤖 10 Autonomous AI Agent Detail Pages
Each agent has a dedicated route (`/agents/:agentId`) featuring:
- **Agent Profile Header** — Icon, name, role title, description, live status badge, task count, and risk score (where applicable).
- **Capabilities Breakdown** — Two panels listing what document types the agent "Receives" and what automated "Actions" it performs.
- **Recent Documents Table** — Filterable list of all documents processed by that specific agent, showing title, upload date, confidence score, status, and AI summary.
- **"Ask this Agent" AI Chat Interface** — Interactive conversational drawer where users can query the agent with natural language. Each agent has 3 domain-specific suggested prompts. Simulated AI responses are tuned to each agent's specialty (e.g., Finance Agent responds with invoice anomaly analysis, Legal Agent responds with contract risk redlines).

### 📜 Audit Trail — Full Execution History
- **Searchable Log Table** — Every routing decision, risk flag, and agent action is immutably logged with timestamp, agent name, action description, affected document, and severity tag.
- **Severity Filter Bar** — Quick toggle between All / Info / Warning / Critical severity levels.
- **Full-Text Search** — Search across log entries, document titles, and agent names.
- **Expandable JSON Metadata Drawer** — Click any log row to inspect the full event payload in structured JSON format, including execution engine version, environment tag, and digital signature status.

### 🔔 Notifications & Alert Panel
- **Unread Badge Counters** — Visible in the sidebar, header bell icon, and notification modal.
- **Severity-Coded Icons** — Alert (rose), Warning (amber), Success (emerald), Info (cyan).
- **Notification Modal Dropdown** — Quick-access dropdown from the header bell icon with mark-all-as-read functionality.
- **Full Notifications Page** — Dedicated `/notifications` route with complete alert history and click-through navigation to the responsible agent.

### ⚙️ Platform Settings & Configuration
- **AI LLM Model Engine Selection** — Choose between three model tiers:
  - Antigravity Flash 3.6 (Recommended) — Ultra-fast, 1.2s average
  - Gemini 1.5 Pro — High reasoning, 2.4s average
  - Claude 3.5 Sonnet — Deep analysis, 2.8s average
- **Auto-Routing Confidence Threshold Slider** — Adjustable 50%–99% minimum confidence score for automated dispatch. Documents below the threshold require manual human signoff.
- **Autonomous Guardrails Toggles** —
  - Auto-approve safe documents under $5,000 threshold
  - Send instant email alerts on High Risk flags (risk > 70)
- **Save Preferences** — Persisted settings with visual success confirmation.

### 👁️ Live Visitor Counter
- **Real-Time Visit Tracking** — Unique visitors tracked across sessions using `localStorage` + `sessionStorage` combination.
- **Global Counter API Sync** — Connects to CounterAPI for cross-device global synchronization.
- **Displayed in Two Locations** — Header navigation badge (animated pulse) and Dashboard metric card with globe icon.

### 🎨 Design System
- **Dark Glassmorphism Theme** — Frosted glass panels with `backdrop-filter: blur()`, subtle transparency layers, and border glow effects.
- **Violet / Indigo / Cyan Accent Palette** — Purple-to-cyan gradients with context-specific colors (emerald for success, amber for warnings, rose for critical alerts).
- **Micro-Animations** — Pulse indicators for live status, hover transforms with `translateY(-2px)`, bounce effects on upload icon, spin effects on processing states.
- **Inter Typography** — Google Font loaded for clean, modern readability.
- **Custom Scrollbars** — Styled `::-webkit-scrollbar` matching the dark theme.
- **Selection Styling** — Purple highlight with white text on text selection.

---

## 🤖 AI Agents — Full Reference

| # | Agent | Role Title | Specialization | Receives | Actions | Badge |
|---|-------|-----------|----------------|----------|---------|-------|
| 1 | 👑 **CEO** | Executive Director AI | Executive summaries & strategic decisions | Board reports, KPI summaries, strategic briefs, investor docs | Generate executive summary, highlight decisions needed, flag urgent items | 4 |
| 2 | 👥 **HR** | Head of Talent AI | Automated resume screening & talent evaluation | Candidate resumes, offer letters, exit interviews, policy docs | Rank candidates by fit, detect non-standard terms, summarize sentiment | 12 |
| 3 | 💼 **Manager** | Operations Manager AI | Project breakdown & workload balancing | Client briefs, sprint docs, status updates, scope changes | Extract tasks to Jira/Linear, identify bottlenecks, generate reports | 7 |
| 4 | ✅ **Employee** | Individual Contributor AI | Task execution & documentation | Assigned tasks, research notes, user stories | Draft docs & emails, validate completion, synthesize research | 5 |
| 5 | 💰 **Finance** | Chief Financial Controller AI | Invoice parsing & anomaly detection | Vendor invoices, expense reports, POs, budget sheets | Extract line items, flag anomalies & duplicates, approve POs under $5K | 9 |
| 6 | ⚖️ **Legal** | General Counsel AI | Contract risk scoring & clause review | MSAs, NDAs, vendor contracts, ToS updates | Compute risk score, highlight liability gaps, suggest redlines | 3 |
| 7 | 🛡️ **IT / Support** | Systems Administrator AI | Ticket routing & incident triage | Support tickets, error traces, access requests, security alerts | Categorize P1-P4 severity, auto-route to pods, suggest KB fixes | 18 |
| 8 | 📣 **Marketing** | Growth & Brand Director AI | Brand tone analysis & SEO optimization | Campaign drafts, press releases, ad copy, brand guidelines | Analyze tone/clarity, optimize SEO, generate channel variations | 6 |
| 9 | 📅 **PM** | Product Operations Lead AI | Release management & roadmap alignment | PRDs, release milestones, customer feedback | Map dependencies, generate release notes, alert on slip risks | 4 |
| 10 | 📋 **Compliance** | Chief Governance AI | SOC2/GDPR auditing & privacy enforcement | SOC2 evidence, consent logs, security questionnaires | Check PII compliance, validate vendor security, flag retention issues | 2 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** — [Download](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/upareonkar08/multiagent-flow-system.git

# 2. Navigate into the project directory
cd multiagent-flow-system

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

The application will be running at **http://localhost:3000/**

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the Vite development server with hot reload at port 3000 |
| `npm run build` | Runs TypeScript compiler (`tsc`) then builds production bundle with Vite |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint across all `.ts` and `.tsx` files |

### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The optimized output is generated in the `dist/` directory, ready for deployment to any static hosting provider.

---

## 📁 Project Structure

```
multiagent-flow-system/
│
├── public/                          # Static assets served as-is
│
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── Header.tsx               # Top navigation bar with notifications bell,
│   │   │                            #   visitor counter badge, router status pill,
│   │   │                            #   and quick upload button
│   │   ├── NotificationModal.tsx    # Dropdown notification panel with severity icons,
│   │   │                            #   mark-as-read, and agent navigation links
│   │   └── Sidebar.tsx              # Left sidebar with brand logo, platform links,
│   │                                #   10 agent navigation items with badge counters,
│   │                                #   operations section, and system status footer
│   │
│   ├── data/
│   │   └── mockData.ts              # Comprehensive mock datasets including:
│   │                                #   - 10 agent definitions with capabilities
│   │                                #   - 8 pre-loaded sample documents
│   │                                #   - 5 audit log entries
│   │                                #   - 5 notification items
│   │                                #   - Weekly metric chart data
│   │                                #   - Agent workload distribution data
│   │                                #   - 4 sample upload presets
│   │
│   ├── hooks/
│   │   └── useVisitorCounter.ts     # Custom React hook for live visitor tracking
│   │                                #   using localStorage + sessionStorage +
│   │                                #   CounterAPI global sync
│   │
│   ├── pages/                       # Full-page route components
│   │   ├── Dashboard.tsx            # Main analytics dashboard with charts, agent
│   │   │                            #   status grid, metric cards, and activity feed
│   │   ├── Upload.tsx               # Document upload page with drag-and-drop,
│   │   │                            #   sample presets, and AI routing simulator
│   │   ├── AgentDetail.tsx          # Dynamic agent detail view (/agents/:agentId)
│   │   │                            #   with capabilities, document vault, and
│   │   │                            #   interactive AI chat interface
│   │   ├── AuditTrail.tsx           # Searchable audit log with severity filters,
│   │   │                            #   expandable JSON metadata inspection
│   │   ├── Notifications.tsx        # Full notifications page with unread badges
│   │   │                            #   and click-through agent navigation
│   │   └── Settings.tsx             # Platform configuration: model selection,
│   │                                #   confidence threshold, guardrail toggles
│   │
│   ├── types/
│   │   └── index.ts                 # TypeScript type definitions:
│   │                                #   AgentId, Agent, DocumentItem, AuditLog,
│   │                                #   NotificationItem, WorkloadData, MetricData
│   │
│   ├── App.tsx                      # Root component with React Router, centralized
│   │                                #   state management, and document routing logic
│   ├── index.css                    # Global styles: TailwindCSS directives,
│   │                                #   glassmorphism utilities, custom scrollbar,
│   │                                #   radial gradient background
│   └── main.tsx                     # Application entry point (ReactDOM.createRoot)
│
├── index.html                       # HTML shell with Inter font, meta tags
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration with path aliases
├── tailwind.config.js               # TailwindCSS theme: custom colors, dark mode
├── postcss.config.js                # PostCSS plugins (Tailwind + Autoprefixer)
├── vite.config.ts                   # Vite config with React plugin and @ alias
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 18.3 | Component-based UI framework with hooks for state and lifecycle |
| [TypeScript](https://www.typescriptlang.org/) | 5.6 | Static type checking for all components, props, and data models |
| [Vite](https://vitejs.dev/) | 5.4 | Next-generation frontend build tool with instant HMR and optimized bundling |
| [TailwindCSS](https://tailwindcss.com/) | 3.4 | Utility-first CSS framework with custom dark glassmorphism theme |
| [React Router](https://reactrouter.com/) | 6.28 | Client-side routing with dynamic `/:agentId` parameters |
| [Recharts](https://recharts.org/) | 2.13 | Composable charting library for area charts and bar charts |
| [Lucide React](https://lucide.dev/) | 0.460 | Open-source premium icon library (80+ icons used across the app) |
| [Framer Motion](https://www.framer.com/motion/) | 11.11 | Animation library for micro-interactions and transitions |
| [clsx](https://github.com/lukeed/clsx) | 2.1 | Utility for constructing dynamic className strings |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 2.5 | Intelligent merging of Tailwind CSS classes without conflicts |

### Dev Dependencies

| Tool | Purpose |
|------|---------|
| `@vitejs/plugin-react` | Vite plugin for React JSX transform and Fast Refresh |
| `autoprefixer` | PostCSS plugin for automatic vendor prefixing |
| `postcss` | CSS transformation pipeline |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Orchestra AI Platform                      │
├─────────────┬───────────────────────────────────────────────┤
│             │                                                │
│  Sidebar    │              Main Content Area                 │
│  Navigation │  ┌──────────────────────────────────────────┐  │
│             │  │           Header (Sticky)                 │  │
│  ┌────────┐ │  │  Page Title │ Visitors │ Status │ Upload  │  │
│  │Platform│ │  └──────────────────────────────────────────┘  │
│  │Dashboard│ │                                               │
│  │Upload  │ │  ┌──────────────────────────────────────────┐  │
│  ├────────┤ │  │                                          │  │
│  │Agents  │ │  │         Route-Based Page Views            │  │
│  │CEO   4 │ │  │                                          │  │
│  │HR   12 │ │  │  /           → Dashboard                 │  │
│  │Mgr   7 │ │  │  /upload     → Smart Upload + AI Router  │  │
│  │Emp   5 │ │  │  /agents/:id → Agent Detail + AI Chat    │  │
│  │Fin   9 │ │  │  /audit      → Audit Trail               │  │
│  │Legal 3 │ │  │  /notif      → Notifications             │  │
│  │IT   18 │ │  │  /settings   → Platform Settings          │  │
│  │Mkt   6 │ │  │                                          │  │
│  │PM    4 │ │  └──────────────────────────────────────────┘  │
│  │Comp  2 │ │                                                │
│  ├────────┤ │                                                │
│  │Ops     │ │                                                │
│  │Audit   │ │                                                │
│  │Notifs  │ │                                                │
│  │Settings│ │                                                │
│  └────────┘ │                                                │
│  ┌────────┐ │                                                │
│  │Status  │ │                                                │
│  │v2.4 🟢 │ │                                                │
│  └────────┘ │                                                │
└─────────────┴───────────────────────────────────────────────┘
```

### State Management

The application uses **React's built-in `useState` hook** at the `App.tsx` root level as a centralized state store. All state flows down via props:

- `agents[]` — 10 agent definitions with live badge counts and status
- `documents[]` — All processed documents (grows as users upload)
- `auditLogs[]` — Immutable audit trail entries
- `notifications[]` — Alert items with read/unread state
- `metrics[]` — Weekly document throughput data for charts
- `workload[]` — Agent task distribution for bar chart
- `visitorCount` — Live visitor counter from `useVisitorCounter` hook

When a document is uploaded and routed:
1. The document is added to `documents[]`
2. The target agent's `badgeCount` increments and `status` updates
3. A new `AuditLog` entry is created
4. A new `NotificationItem` is pushed
5. Today's metric in `metrics[]` is incremented

---

## 🔄 How the AI Routing Pipeline Works

```
  Document Upload                    AI Routing Engine                     Agent Processing
  ─────────────                     ──────────────────                    ─────────────────

  ┌─────────────┐     Step 1       ┌──────────────────┐     Step 4      ┌─────────────────┐
  │ User drops   │ ──────────────► │ OCR & Structure   │ ─────────────► │ Agent receives   │
  │ file or      │                 │ Scanning          │                │ document into    │
  │ selects      │     Step 2      ├──────────────────┤                │ vault            │
  │ preset       │ ──────────────► │ Entity Extraction │                ├─────────────────┤
  │              │                 │ & Intent Analysis │     Step 5     │ Processes:       │
  └─────────────┘     Step 3      ├──────────────────┤ ─────────────► │ - Summarize      │
                   ──────────────► │ Confidence Score  │                │ - Flag risks     │
                                   │ & Agent Matching  │                │ - Create tasks   │
                                   └──────────────────┘                │ - Generate audit │
                                                                        └─────────────────┘
```

### Routing Logic (Intelligent Agent Matching)

The router uses filename and content-based keyword matching to determine the best agent:

| Keywords in Filename/Content | Assigned Agent |
|------------------------------|---------------|
| `invoice`, `bill`, `cost`, `expense` | 💰 Finance Agent |
| `msa`, `contract`, `nda`, `agreement` | ⚖️ Legal Agent |
| `resume`, `cv`, `candidate`, `hr` | 👥 HR Agent |
| `log`, `error`, `bug`, `crash`, `ticket` | 🛡️ IT/Support Agent |
| `board`, `deck`, `kpi`, `strategic` | 👑 CEO Agent |
| Other documents | ✅ Employee Agent (default) |

---

## 📍 Pages & Routes

| Route | Page Component | Description |
|-------|---------------|-------------|
| `/` | `Dashboard.tsx` | Main analytics hub with charts, agent grid, metrics, activity feed |
| `/upload` | `Upload.tsx` | Document upload with drag-and-drop, presets, and AI router simulation |
| `/agents/ceo` | `AgentDetail.tsx` | CEO Agent — executive summaries & strategic decisions |
| `/agents/hr` | `AgentDetail.tsx` | HR Agent — resume screening & talent evaluation |
| `/agents/manager` | `AgentDetail.tsx` | Manager Agent — project breakdown & task extraction |
| `/agents/employee` | `AgentDetail.tsx` | Employee Agent — task execution & documentation |
| `/agents/finance` | `AgentDetail.tsx` | Finance Agent — invoice parsing & anomaly detection |
| `/agents/legal` | `AgentDetail.tsx` | Legal Agent — contract risk scoring & clause review |
| `/agents/it` | `AgentDetail.tsx` | IT/Support Agent — ticket routing & incident triage |
| `/agents/marketing` | `AgentDetail.tsx` | Marketing Agent — brand tone & SEO optimization |
| `/agents/pm` | `AgentDetail.tsx` | PM Agent — release management & roadmap tracking |
| `/agents/compliance` | `AgentDetail.tsx` | Compliance Agent — SOC2/GDPR auditing |
| `/audit` | `AuditTrail.tsx` | Searchable audit log with severity filters & JSON inspection |
| `/notifications` | `Notifications.tsx` | Full notification history with unread management |
| `/settings` | `Settings.tsx` | Model selection, confidence threshold, guardrail toggles |

---

## 🧩 Key Components

### `Sidebar.tsx`
- Fixed 256px left sidebar with three sections: Platform, AI Agents, Operations
- Each agent link shows an icon, name, and live badge counter
- Footer displays system version and "All 10 Agents Online" status with animated green indicator

### `Header.tsx`
- Sticky top bar with dynamic page title based on current route
- Contains: Visitor Counter badge, Router Status pill, Notifications bell (with unread count), and Upload button
- Notification dropdown modal rendered inline

### `NotificationModal.tsx`
- Floating dropdown anchored to the bell icon
- Shows severity-coded notification list with timestamps
- Mark-all-as-read button and link to full notifications page
- Clicking a notification navigates to the relevant agent

### `useVisitorCounter.ts`
- Custom hook tracking unique visitors per session
- Uses versioned `localStorage` keys to support counter resets
- Async sync with external CounterAPI for global visitor count

---

## 🎨 Customization Guide

### Adding a New AI Agent

1. **Define the agent** in `src/data/mockData.ts` → `INITIAL_AGENTS` array:
   ```typescript
   {
     id: 'sales',
     name: 'Sales Agent',
     shortName: 'Sales',
     role: 'Revenue Operations AI',
     badgeCount: 0,
     status: 'active',
     recentTask: 'Qualified 12 inbound leads',
     description: 'Lead scoring, proposal generation, and pipeline management.',
     receives: ['Lead forms', 'RFP documents', 'Competitor analyses'],
     actions: ['Score leads', 'Generate proposals', 'Update CRM pipeline'],
     icon: 'Target',
     color: 'from-lime-500 to-green-600',
   }
   ```

2. **Add the AgentId** to the union type in `src/types/index.ts`:
   ```typescript
   export type AgentId = 'ceo' | 'hr' | ... | 'sales';
   ```

3. **Add suggested prompts** in `AgentDetail.tsx` → `SUGGESTED_PROMPTS` object.

4. **Add the icon** to the `ICON_MAP` in `Sidebar.tsx`, `Dashboard.tsx`, and `AgentDetail.tsx`.

### Changing the Color Theme

Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  background: '#090d16',     // Main background
  card: '#0f172a',           // Card backgrounds
  'card-border': '#1e293b',  // Card borders
  accent: {
    violet: '#8b5cf6',       // Primary accent
    indigo: '#6366f1',       // Secondary accent
    cyan: '#06b6d4',         // Tertiary accent
  }
}
```

### Connecting a Real Backend

Replace the mock data imports in `App.tsx` with API calls:
```typescript
// Replace:
const [documents, setDocuments] = useState(INITIAL_DOCUMENTS);

// With:
useEffect(() => {
  fetch('/api/documents').then(r => r.json()).then(setDocuments);
}, []);
```

---

## 🚢 Deployment

### Vercel (Recommended)

The project is currently deployed on Vercel. To deploy your own instance:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

Vite is auto-detected by Vercel — no additional configuration needed.

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

Add a `_redirects` file in `public/` for SPA routing:
```
/*    /index.html   200
```

### Docker

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-agent`)
3. **Commit** your changes (`git commit -m 'feat: add sales agent'`)
4. **Push** to the branch (`git push origin feature/new-agent`)
5. **Open** a Pull Request

### Contribution Ideas
- Add real LLM integration (OpenAI / Gemini API)
- Implement persistent database (Supabase / Firebase)
- Add user authentication and role-based access
- Create mobile-responsive layout
- Add WebSocket real-time updates
- Build agent-to-agent communication flow visualization

---

## 👤 Author

**Onkar Upare**

- GitHub: [@upareonkar08](https://github.com/upareonkar08)
- Email: upareonkar08@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>Built with ❤️ using React, TypeScript & AI-powered automation</strong><br/>
  <sub>If you found this project useful, consider giving it a ⭐ on GitHub!</sub>
</p>
