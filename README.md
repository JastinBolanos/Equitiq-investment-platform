# EQUITIQ Enterprise Platform `v2.0.0-ENT`

[![Build Status](https://img.shields.io/badge/Build-Passing-059669?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/)
[![Deployment Status](https://img.shields.io/badge/Deployment-Live%20Edge-C5A059?style=for-the-badge&logo=google-cloud&logoColor=white)](https://github.com/)
[![Architecture & Compliance](https://img.shields.io/badge/Compliance-Clean%20Architecture%20%7C%20ISO%2027001-2563EB?style=for-the-badge)](https://github.com/)
[![Security Proxy](https://img.shields.io/badge/Security-Zero--Trust%20Proxy-111827?style=for-the-badge&logo=shield&logoColor=white)](https://github.com/)

> **EQUITIQ** es la suite institucional de grado empresarial diseñada para la orquestación, underwriting, simulación econométrica y gestión integral de carteras de inversión en Commercial Real Estate (CRE). La plataforma implementa modelos deterministas de flujos descontados (DCF), matrices de estrés multidimensional, cobertura de servicio de deuda (DSCR) y optimización de estructura de capital bajo estándares internacionales de reporting financiero.
>
> [Ver Plataforma en Vivo (Producción) 🟢](https://equitiq-platform.internal.network/live-demo)

---

> *Nota de Seguridad y Cumplimiento Normativo:* Este repositorio comprende la capa de orquestación de cliente, micro-frontend y proxy de borde seguro. Los servicios de persistencia distribuida, microservicios transaccionales de backend y motores de liquidación bancaria permanecen en repositorios privados y redes aisladas (VPC) bajo estrictas políticas de gobernanza, confidencialidad y cumplimiento normativo (SOC2 / ISO 27001).

---

## 🏛️ Arquitectura de Sistema y Stack Tecnológico

La solución está estructurada siguiendo principios de **Clean Architecture**, desacoplando los motores matemáticos deterministas de las capas de presentación y orquestación de contexto.

```
┌─────────────────────────────────────────────────────────────┐
│               EQUITIQ Client / Edge Gateway                 │
├──────────────────────────────┬──────────────────────────────┤
│      UI & Motion Layer       │    Financial Core Engines    │
│  (React 19 + Tailwind CSS)   │   (DCF, IRR, Amortization)   │
├──────────────────────────────┼──────────────────────────────┤
│     Cognitive AI Layer       │     Security & Edge Proxy    │
│    (@google/genai SDK)       │    (Express + Vite Engine)   │
└──────────────────────────────┴──────────────────────────────┘
```

### Especificación de Dependencias Clave (`package.json`)

* **Core & Runtime:**
  * `react` (`^19.0.1`) & `react-dom` (`^19.0.1`): Capa de renderizado concurrente y ciclo de vida de componentes de última generación.
  * `typescript` (`~5.8.2`): Sistema de tipado estático estricto para modelos patrimoniales y contratos de dominio.

* **UI, Visual Analytics & Motion:**
  * `tailwindcss` (`^4.1.14`) & `@tailwindcss/vite` (`^4.1.14`): Motor de diseño utilitario de alto rendimiento con temática dark/luxury institutional.
  * `recharts` (`^3.10.1`): Motor de renderizado vectorial de telemetría financiera y proyecciones de flujos.
  * `motion` (`^12.23.24`): Orquestador de transiciones declarativas de estados de interfaz.
  * `lucide-react` (`^0.546.0`): Sistema unificado de iconografía técnica.
  * `canvas-confetti` (`^1.9.4`): Retroalimentación visual háptica para eventos de alta prioridad.

* **Motor de Inferencia e Inteligencia:**
  * `@google/genai` (`^2.4.0`): SDK de inferencia para análisis cualitativo y auditoría asistida de escenarios de inversión.

* **Backend, Proxy & Servidor de Borde:**
  * `express` (`^4.21.2`): Servidor de borde y proxy reverso para mediación segura de endpoints.
  * `vite` (`^6.2.3`): Herramienta de compilación optimizada y módulo de servidor HMR.
  * `tsx` (`^4.21.0`) & `esbuild` (`^0.25.0`): Compilador y ejecutor de TypeScript en runtime de servidor.
  * `dotenv` (`^17.2.3`): Gestión segura de variables de entorno del sistema.

---

## 📦 Módulos Operativos (Desplegados)

1. **Asset Management & Portfolio Orchestration (`PortfolioView`)**
   * Control y supervisión de métricas macro: Gross Asset Value (GAV), Net Operating Income (NOI), Cap Rate ponderado global y tasa de desocupación estructural.
   * Filtros multidimensionales por tipología (Oficinas, Industrial/Logístico, Retail, Salud, Hospitality) y geolocalización.

2. **Underwriting & Financial Modeling Core (`FinancialCalculator`)**
   * Modelado integral de estructuras de capital: Modelos de amortización de deuda, ratios LTV/DSCR, retornos Cash-on-Cash y proyecciones DCF con escalamiento inflacionario.

3. **Multivariable Stress & Sensitivity Matrix (`SensitivityMatrix`)**
   * Análisis de escenarios bidimensionales evaluando variaciones cruzadas de tasas de interés, *Exit Cap Rates* y variaciones en ocupación sobre la Tasa Interna de Retorno (TIR).

4. **Cross-Asset Comparative Analytics (`AssetComparator`)**
   * Benchmarking simultáneo de activos comerciales, ponderando métricas de rendimiento financiero, perfil crediticio de inquilinos y Weighted Average Lease Term (WALT).

5. **AI Investment Advisor & Executive Reporting (`AiAdvisorModal`, `ExecutiveReportModal`)**
   * Generación automatizada de tesis de inversión y síntesis ejecutivas auditables para comités de inversión y comités fiduciarios.

---

## 🚀 Guía de Despliegue y Auditoría

### Requisitos de Entorno
* **Node.js**: `v20.0.0` o superior (LTS recomendado).
* **Gestor de Paquetes**: `npm` `v10.0.0+`.

### Pasos de Despliegue Local

1. **Clonación de Repositorio:**
   ```bash
   git clone https://github.com/JastinBolanos/equitiq-investment-platform.git
   cd equitiq-investment-platform
   ```

2. **Instalación de Dependencias:**
   ```bash
   npm install
   ```

3. **Aprovisionamiento de Variables de Entorno:**
   ```bash
   cp .env.example .env
   ```

4. **Ejecución en Entorno de Desarrollo / Sandbox:**
   ```bash
   npm run dev
   ```
   *Acceso al gateway local: `http://localhost:3000`*

---

## ⚙️ Herramientas de Integración y Despliegue (CI/CD)

| Comando | Contexto de Ejecución | Descripción del Pipeline |
| :--- | :--- | :--- |
| `npm run dev` | Desarrollo Local / Edge | Inicia el servidor de desarrollo y proxy con recarga en caliente en el puerto 3000. |
| `npm run build` | Pipeline CI/CD | Ejecuta la compilación de producción de Vite y empaqueta el servidor con esbuild en `dist/`. |
| `npm run lint` | Auditoría de Código | Valida consistencia sintáctica, tipado estricto y ausencia de regresiones con `tsc --noEmit`. |
| `npm start` | Runtime de Producción | Lanza el artefacto empaquetado `dist/server.cjs` para ejecución contenerizada. |

---

## 📂 Arquitectura de Dominio (`src/`)

```
src/
├── components/          # Componentes modulares y vistas operativas (Portfolio, Calculator, Matrix, etc.)
│   ├── calculator/      # Submódulos de ingresos, OpEx, valuación de salida y proyecciones
│   ├── common/          # Primitivas visuales institucionales (KPI cards, toggles, badges)
│   ├── detail/          # Pestañas de auditoría de activo (inquilinos, gastos, flujos)
│   └── portfolio/       # Componentes de agregación y tablas de activos
├── context/             # Proveedores globales de estado (i18n, divisas)
├── core/                # Constantes inmutables, enums y tipos base de dominio
├── data/                # Dataset inicial estructurado y modelos de referencia
├── hooks/               # Custom hooks de orquestación de sesión, portafolio y escenarios
├── i18n/                # Diccionarios de traducción corporativa (ES / EN)
├── services/            # Capa de servicios matemáticos y formateo desacoplado
│   ├── financial/       # Motores de amortización, DCF, cálculo de TIR numérica y sensibilidad
│   ├── formatters/      # Formateadores monetarios e indicadores de precisión
│   └── storage/         # Abstracción de persistencia local segura
└── utils/               # Funciones utilitarias y cálculos auxiliares
```

---

Propiedad de Arquitectura de Software - Jastin Bolaños © 2026. Proyecto de Demostración Técnica Empresarial.
