# 🎵 Orchestra AI — Multi-Agent Flow System

![Orchestra AI Banner](https://img.shields.io/badge/Orchestra-AI%20Platform-8b5cf6?style=for-the-badge&logo=sparkles&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

> **Smart business automation.** Upload documents and let AI agents route, analyze, and act — autonomously.



---

## ✨ Features

### 🧠 10 Autonomous AI Agents

| Agent | Role | Specialization |
|-------|------|----------------|
| 👑 **CEO** | Executive Director AI | Board decks, KPI summaries, strategic decisions |
| 👥 **HR** | Head of Talent AI | Resume screening, offer letters, sentiment analysis |
| 💼 **Manager** | Operations Manager AI | Project briefs, sprint planning, task extraction |
| ✅ **Employee** | Individual Contributor AI | Task execution, documentation, research synthesis |
| 💰 **Finance** | Chief Financial Controller AI | Invoice OCR, anomaly detection, PO approvals |
| ⚖️ **Legal** | General Counsel AI | Contract risk scoring, liability detection, NDA checks |
| 🛡️ **IT / Support** | Systems Administrator AI | Ticket routing, incident triage, P1-P4 severity |
| 📣 **Marketing** | Growth & Brand Director AI | Brand tone analysis, SEO audit, campaign copy |
| 📅 **PM** | Product Operations Lead AI | Release timelines, dependency mapping, roadmaps |
| 📋 **Compliance** | Chief Governance AI | SOC2 audits, GDPR checks, data privacy |

### 📊 Real-Time Dashboard
- **Documents Processed Chart** — Interactive area chart with 7d / 30d / 90d toggles
- **Agent Workload Distribution** — Horizontal bar chart across all agents
- **Agent Status Grid** — Live cards with activity indicators and task counts
- **Recent Activity Feed** — Real-time trace of agent decisions and risk flags

### 📤 Smart Document Upload & AI Auto-Router
- **Drag & Drop** upload zone (PDF, DOCX, XLSX, images, text — up to 25 MB)
- **1-Click Sample Presets** — Test with Vendor MSA, Cloud Invoice, Resume, or Error Log
- **Live AI Scanner Animation** — Step-by-step OCR parsing → entity extraction → confidence scoring → agent dispatch

### 💬 "Ask this Agent" AI Chat
- Interactive conversational interface on every agent detail page
- Domain-tuned suggested prompts per agent specialty
- Real-time simulated AI responses

### 📜 Audit Trail & Governance
- Immutable, searchable execution log
- Severity filters: Info / Warning / Critical
- Expandable JSON metadata payload inspection

### 🔔 Notifications Panel
- Real-time alerts with unread badges
- Severity-coded icons (alert, warning, success, info)
- One-click mark-all-as-read

### ⚙️ Platform Settings
- AI LLM model selection (Antigravity Flash 3.6, Gemini 1.5 Pro, Claude Sonnet)
- Auto-routing confidence threshold slider
- Autonomous guardrails & email alert toggles

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/upareonkar08/multiagent-flow-system.git
cd multiagent-flow-system

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at **http://localhost:3000/**

### Production Build

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI component framework |
| **TypeScript** | Type-safe development |
| **Vite** | Lightning-fast dev server & bundler |
| **TailwindCSS** | Utility-first styling with custom dark theme |
| **Recharts** | Interactive data visualization charts |
| **Lucide React** | Premium icon library |
| **React Router v6** | Client-side routing |
| **Framer Motion** | Micro-animations & transitions |

---

## 📁 Project Structure

```
multiagent-flow-system/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Top bar with notifications & upload button
│   │   ├── NotificationModal.tsx # Dropdown notification panel
│   │   └── Sidebar.tsx           # Left navigation with agent links
│   ├── data/
│   │   └── mockData.ts           # Comprehensive sample datasets
│   ├── pages/
│   │   ├── AgentDetail.tsx       # Dynamic agent view (/agents/:id)
│   │   ├── AuditTrail.tsx        # Searchable audit log
│   │   ├── Dashboard.tsx         # Main analytics dashboard
│   │   ├── Notifications.tsx     # Full notifications page
│   │   ├── Settings.tsx          # Platform configuration
│   │   └── Upload.tsx            # Document upload & AI router
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   ├── App.tsx                   # Root app with routing & state
│   ├── index.css                 # Global styles & glassmorphism
│   └── main.tsx                  # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Design Philosophy

- **Dark Glassmorphism** — Frosted glass panels with subtle transparency
- **Violet & Indigo Accents** — Premium purple-to-cyan gradient palette
- **Micro-Animations** — Pulse indicators, hover transforms, and scanning effects
- **Inter Typography** — Clean, modern Google Font for readability
- **Responsive Layout** — Full sidebar navigation with adaptive content grid

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**upareonkar08** — [GitHub](https://github.com/upareonkar08)

---

<p align="center">
  Built with ❤️ using React, TypeScript & AI-powered automation
</p>
