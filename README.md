<div align="center">
  <img alt="EQUITIQ Banner" src="https://github.com/user-attachments/assets/74bf4c12-394b-468a-ab64-41d3a10327bf" width="50%" />

  <br>

  <h3>Enterprise Platform (v2.0.0-ENT)</h3>

  <p>
    <img src="https://img.shields.io/badge/Build-Passing-059669?style=for-the-badge&logo=github-actions&logoColor=white" alt="Build Status" />
    <img src="https://img.shields.io/badge/Deployment-Live%20Edge-C5A059?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Deployment Status" />
    <img src="https://img.shields.io/badge/Compliance-Clean%20Architecture%20%7C%20ISO%2027001-2563EB?style=for-the-badge" alt="Architecture & Compliance" />
    <img src="https://img.shields.io/badge/Security-Zero--Trust%20Proxy-111827?style=for-the-badge&logo=shield&logoColor=white" alt="Security Proxy" />
  </p>
</div>

<br>

> **EQUITIQ** is an exploratory Commercial Real Estate (CRE) analytics and portfolio modeling client interface. The application features interactive financial calculations including Discounted Cash Flow (DCF) simulations, multi-variable sensitivity matrices, Debt Service Coverage Ratio (DSCR) modeling, and capital structure visualizations within a modern dark-themed dashboard.

<br>

<div align="center">
  <h3>🌍 <b><a href="https://equitiq.vercel.app">View Live Platform (Production) 🟢</a></b></h3>
  <br>
  <img alt="EQUITIQ Preview" src="https://github.com/user-attachments/assets/666398c1-bce2-4693-a72e-3243282a2c9d" width="80%" />
</div>

## 🎥 Financial Platform Demonstration

**🎬 Commercial Real Estate (CRE) Investment Analysis & Simulation**  
Interface walkthrough of the client application: asset portfolio views, interactive discounted cash flow (DCF) models, multidimensional sensitivity matrices, and structured executive summary generators.

https://github.com/user-attachments/assets/da113871-35dc-4c1c-a09b-54c36f9697d7

---

> *Architecture Note:* This repository contains the client-side user interface, interactive financial calculators, and local edge proxy. Real-world institutional transactional databases and settlement services are simulated locally to provide a complete, self-contained demonstration environment.

---

## 🏛️ System Architecture & Technology Stack

The project follows clean frontend architecture principles, separating calculation and mathematical helper logic from user interface presentation components and state management.

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
  * `react` (`^19.0.1`) & `react-dom` (`^19.0.1`): Declarative UI rendering and modern component lifecycle management.
  * `typescript` (`~5.8.2`): Strict static typing across asset models, financial calculations, and domain schemas.

* **UI, Visual Analytics & Motion:**
  * `tailwindcss` (`^4.1.14`) & `@tailwindcss/vite` (`^4.1.14`): Utility-first styling engine with a dark institutional color scheme.
  * `recharts` (`^3.10.1`): Responsive charts for financial indicators, amortization, and cash flow projections.
  * `motion` (`^12.23.24`): Smooth state transitions and dialog entrance animations.
  * `lucide-react` (`^0.546.0`): Consistent, minimalist technical iconography.
  * `canvas-confetti` (`^1.9.4`): Visual feedback for key interactive milestone actions.

* **Backend, Proxy & Edge Server:**
  * `express` (`^4.21.2`): Lightweight local proxy server for endpoint handling.
  * `vite` (`^6.2.3`): Fast development server and production bundler.
  * `tsx` (`^4.21.0`) & `esbuild` (`^0.25.0`): TypeScript server compilation and bundling tools.

---

## 📦 Operational Modules (Deployed)

1. **Asset Management & Portfolio Overview (`PortfolioView`)**
   * Clear display of key portfolio metrics: Gross Asset Value (GAV), Net Operating Income (NOI), weighted Cap Rate, and vacancy rates.
   * Multi-variable filtering across typologies (Office, Industrial/Logistics, Retail, Healthcare, Hospitality) and regional locations.

2. **Underwriting & Financial Calculations (`FinancialCalculator`)**
   * Capital structure modeling tools: Debt amortization schedules, LTV/DSCR calculations, Cash-on-Cash returns, and multi-year DCF projections.

3. **Multivariable Stress & Sensitivity Matrix (`SensitivityMatrix`)**
   * Interactive scenario matrices evaluating the impact of varying interest rates, exit capitalization rates, and occupancy levels on Internal Rate of Return (IRR).

4. **Cross-Asset Comparative Analysis (`AssetComparator`)**
   * Side-by-side asset comparison weighing key financial indicators, tenant diversification, and Weighted Average Lease Term (WALT).

5. **Analytical Insights & Summary Reports (`AiAdvisorModal`, `ExecutiveReportModal`)**
   * Contextual scenario analysis and structured report summaries designed for review and evaluation.

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
