# EQUITIQ Enterprise Platform `v2.0.0-ENT`

[![Build Status](https://img.shields.io/badge/Build-Passing-059669?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/)
[![Deployment Status](https://img.shields.io/badge/Deployment-Live%20Edge-C5A059?style=for-the-badge&logo=google-cloud&logoColor=white)](https://github.com/)
[![Architecture & Compliance](https://img.shields.io/badge/Compliance-Clean%20Architecture%20%7C%20ISO%2027001-2563EB?style=for-the-badge)](https://github.com/)
[![Security Proxy](https://img.shields.io/badge/Security-Zero--Trust%20Proxy-111827?style=for-the-badge&logo=shield&logoColor=white)](https://github.com/)

> **EQUITIQ** is an enterprise-grade institutional suite designed for Commercial Real Estate (CRE) portfolio orchestration, underwriting, econometric simulation, and comprehensive asset management. The platform implements deterministic Discounted Cash Flow (DCF) models, multidimensional stress testing matrices, Debt Service Coverage Ratio (DSCR) analysis, and capital structure optimization under international financial reporting standards.
>
> **[View Live Platform (Production) 🟢](https://equitiq.vercel.app)**

![EQUITIQ Preview](https://github.com/user-attachments/assets/666398c1-bce2-4693-a72e-3243282a2c9d)

---

## 🎥 Financial Platform Demonstration

**🎬 Commercial Real Estate (CRE) Investment Analysis & Simulation**  
Operational walkthrough of the financial engine: asset portfolio management, discounted cash flow (DCF) models, multidimensional sensitivity matrices, and automated executive report generation for investment committees.

https://github.com/user-attachments/assets/da113871-35dc-4c1c-a09b-54c36f9697d7

---

> *Security & Regulatory Compliance Notice:* This repository comprises the client orchestration layer, micro-frontend, and secure edge proxy. Distributed persistence services, backend transactional microservices, and banking settlement engines reside in private repositories and isolated networks (VPC) under strict governance, confidentiality, and regulatory compliance policies (SOC2 / ISO 27001).

---

## 🏛️ System Architecture & Technology Stack

The solution is structured following **Clean Architecture** principles, decoupling deterministic mathematical engines from presentation and context orchestration layers.

```
┌─────────────────────────────────────────────────────────────┐
│               EQUITIQ Client / Edge Gateway                 │
├──────────────────────────────┬──────────────────────────────┤
│      UI & Motion Layer       │    Financial Core Engines    │
│  (React 19 + Tailwind CSS)   │   (DCF, IRR, Amortization)   │
├──────────────────────────────┼──────────────────────────────┤
│   Analytics & Logic Layer    │     Security & Edge Proxy    │
│    (Econometric Models)      │    (Express + Vite Engine)   │
└──────────────────────────────┴──────────────────────────────┘
```

### Key Dependencies Specification (`package.json`)

* **Core & Runtime:**
  * `react` (`^19.0.1`) & `react-dom` (`^19.0.1`): Concurrent rendering layer and next-generation component lifecycle.
  * `typescript` (`~5.8.2`): Strict static typing system for asset models and domain contracts.

* **UI, Visual Analytics & Motion:**
  * `tailwindcss` (`^4.1.14`) & `@tailwindcss/vite` (`^4.1.14`): High-performance utility design engine with dark/luxury institutional styling.
  * `recharts` (`^3.10.1`): Vector rendering engine for financial telemetry and cash flow projections.
  * `motion` (`^12.23.24`): Declarative interface state transition orchestrator.
  * `lucide-react` (`^0.546.0`): Unified technical iconography system.
  * `canvas-confetti` (`^1.9.4`): Haptic visual feedback for high-priority milestone events.

* **Backend, Proxy & Edge Server:**
  * `express` (`^4.21.2`): Edge server and reverse proxy for secure endpoint mediation.
  * `vite` (`^6.2.3`): Optimized compilation tool and HMR server module.
  * `tsx` (`^4.21.0`) & `esbuild` (`^0.25.0`): TypeScript compiler and executor in server runtime.

---

## 📦 Operational Modules (Deployed)

1. **Asset Management & Portfolio Orchestration (`PortfolioView`)**
   * Control and monitoring of macro metrics: Gross Asset Value (GAV), Net Operating Income (NOI), global weighted Cap Rate, and structural vacancy rates.
   * Multidimensional filters by typology (Office, Industrial/Logistics, Retail, Healthcare, Hospitality) and geolocation.

2. **Underwriting & Financial Modeling Core (`FinancialCalculator`)**
   * Comprehensive capital structure modeling: Debt amortization schedules, LTV/DSCR ratios, Cash-on-Cash returns, and inflation-escalated DCF projections.

3. **Multivariable Stress & Sensitivity Matrix (`SensitivityMatrix`)**
   * Two-dimensional scenario analysis evaluating cross-variations of interest rates, *Exit Cap Rates*, and occupancy fluctuations on the Internal Rate of Return (IRR).

4. **Cross-Asset Comparative Analytics (`AssetComparator`)**
   * Simultaneous benchmarking of commercial assets, weighing financial performance metrics, tenant credit profiles, and Weighted Average Lease Term (WALT).

5. **AI Investment Advisor & Executive Reporting (`AiAdvisorModal`, `ExecutiveReportModal`)**
   * Automated generation of investment theses and auditable executive summaries for investment and fiduciary committees.

---

## 🚀 Deployment & Audit Guide

### Environment Prerequisites
* **Node.js**: `v20.0.0` or higher (LTS recommended).
* **Package Manager**: `npm` `v10.0.0+`.

### Local Deployment Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/JastinBolanos/equitiq-investment-platform.git
   cd equitiq-investment-platform
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run in Development / Sandbox Environment:**
   ```bash
   npm run dev
   ```
   *Access the local gateway at: `http://localhost:3000`*

---

## ⚙️ Integration & Deployment Tools (CI/CD)

| Command | Execution Context | Pipeline Description |
| :--- | :--- | :--- |
| `npm run dev` | Local Development / Edge | Launches the development server and proxy with hot module replacement on port 3000. |
| `npm run build` | CI/CD Pipeline | Executes Vite production bundling and bundles the server using esbuild into `dist/`. |
| `npm run lint` | Code Audit | Validates syntactic consistency, strict typing, and absence of regressions using `tsc --noEmit`. |
| `npm start` | Production Runtime | Starts the bundled artifact `dist/server.cjs` for containerized execution. |

---

## 📂 Domain Architecture (`src/`)

```
src/
├── components/          # Modular components and operational views (Portfolio, Calculator, Matrix, etc.)
│   ├── calculator/      # Revenue, OpEx, exit valuation, and cash flow projection submodules
│   ├── common/          # Institutional visual primitives (KPI cards, toggles, badges)
│   ├── detail/          # Asset audit tabs (tenants, operating expenses, cash flows)
│   └── portfolio/       # Asset aggregation components and data tables
├── context/             # Global state providers (i18n, currencies)
├── core/                # Immutable constants, enums, and base domain types
├── data/                # Initial structured dataset and reference models
├── hooks/               # Custom orchestration hooks for session, portfolio, and scenarios
├── i18n/                # Corporate translation dictionaries (ES / EN)
├── services/            # Decoupled mathematical service and formatting layer
│   ├── financial/       # Amortization engines, DCF, numerical IRR solver, and sensitivity models
│   ├── formatters/      # Currency formatters and precision indicators
│   └── storage/         # Secure local persistence abstraction
└── utils/               # Utility functions and auxiliary calculations
```

---

Software Architecture Ownership - Jastin Bolaños © 2026. Enterprise Technical Demonstration Project.

