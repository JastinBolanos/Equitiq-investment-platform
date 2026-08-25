export type PropertyCategory = 'Oficinas' | 'Logístico' | 'Retail' | 'Salud & Lab' | 'Uso Mixto' | 'Hospitality';

export interface TenantInfo {
  id: string;
  name: string;
  industry: string;
  areaOccupiedM2: number;
  monthlyRentPerM2: number;
  leaseStartYear: number;
  leaseEndYear: number;
  isAnchor: boolean;
  creditRating?: string;
}

export interface CommercialProperty {
  id: string;
  name: string;
  code: string;
  category: PropertyCategory;
  city: string;
  country: string;
  address: string;
  yearBuilt: number;
  yearRenovated?: number;
  imageUrl: string;
  additionalImages?: string[];
  description: string;
  
  // Physical specifications
  totalAreaM2: number;
  grossLeasableAreaM2: number; // GLA
  parkingSpaces: number;
  occupancyRate: number; // percentage, e.g. 94.5
  floorsCount: number;
  classRating: 'A+' | 'A' | 'B+' | 'B' | 'Prime';

  // Acquisition & Capital structure
  purchasePrice: number;
  closingCostsPercent: number; // e.g. 2.5%
  initialCapEx: number; // Remodelación / adecuación inicial
  downPaymentPercent: number; // e.g. 35% (Equity)
  loanInterestRate: number; // Annual % e.g. 6.75%
  loanTermYears: number; // e.g. 20 or 25 years

  // Revenue parameters
  averageRentPerM2Month: number; // USD / m² / month
  otherMonthlyIncome: number; // Parking, signage, antennas, storage
  vacancyRate: number; // % e.g. 6%
  creditLossRate: number; // % e.g. 1%
  annualRentGrowth: number; // % e.g. 3.5%

  // Operating Expenses (OpEx) annual
  propertyTaxAnnual: number;
  insuranceAnnual: number;
  maintenanceAnnual: number;
  propertyManagementRate: number; // % of EGI e.g. 4%
  utilitiesAndCommonAnnual: number;
  replacementReservesAnnual: number;
  annualExpenseInflation: number; // % e.g. 3.0%

  // Valuation & Exit assumptions
  appreciationAnnualRate: number; // % e.g. 4.0%
  holdingPeriodYears: number; // e.g. 10 years
  exitCapRate: number; // % e.g. 7.5%
  sellingCostsPercent: number; // % e.g. 2.0%

  // Tenants & Leases
  tenants: TenantInfo[];
  waltYears: number; // Weighted Average Lease Term (años)
  
  // Status
  status: 'En Operación' | 'En Adquisición' | 'Bajo Análisis' | 'En Remodelación';
  featured?: boolean;
}

export interface FinancialCalculationResults {
  // Initial Outlay
  purchasePrice: number;
  closingCosts: number;
  initialCapEx: number;
  totalAcquisitionCost: number;
  loanAmount: number;
  equityInvested: number; // Initial Cash Required

  // Income Metrics (Year 1)
  grossPotentialRentAnnual: number;
  otherIncomeAnnual: number;
  grossPotentialIncomeAnnual: number; // GPI
  vacancyLossAnnual: number;
  creditLossAnnual: number;
  effectiveGrossIncomeAnnual: number; // EGI

  // Expenses (Year 1)
  propertyTax: number;
  insurance: number;
  maintenance: number;
  managementFee: number;
  utilitiesCommon: number;
  reserves: number;
  totalOpExAnnual: number;
  expenseRatio: number; // OpEx / EGI %

  // Operating Profits
  netOperatingIncomeAnnual: number; // NOI (EGI - OpEx)
  acquisitionCapRate: number; // NOI / PurchasePrice %
  costCapRate: number; // NOI / TotalAcquisitionCost %

  // Debt & Leverage
  monthlyMortgagePayment: number;
  annualDebtService: number; // P&I
  debtServiceCoverageRatio: number; // DSCR = NOI / DebtService
  debtYield: number; // NOI / LoanAmount %
  ltv: number; // Loan to Value %

  // Cash Flow
  cashFlowBeforeTax: number; // CFBT = NOI - DebtService
  cashOnCashReturn: number; // CFBT / EquityInvested %
  grossRentMultiplier: number; // PurchasePrice / GrossPotentialRentAnnual

  // 10-Year Projections
  annualCashflows: CashflowYearRecord[];
  projectedExitValue: number;
  remainingLoanBalanceAtExit: number;
  netSaleProceeds: number;
  totalProfit: number;
  equityMultiple: number; // Total Cash Inflows / EquityInvested
  internalRateOfReturn: number; // IRR / TIR %
  paybackPeriodYears: number;
}

export interface CashflowYearRecord {
  year: number;
  grossIncome: number;
  effectiveGrossIncome: number;
  operatingExpenses: number;
  netOperatingIncome: number;
  debtService: number;
  principalPaid: number;
  interestPaid: number;
  remainingLoanBalance: number;
  netCashFlow: number;
  cumulativeCashFlow: number;
  propertyValue: number;
  propertyEquity: number;
  cashOnCash: number;
}

export interface SensitivityMatrixCell {
  rowValue: number; // e.g. Vacancy % or Purchase Price
  colValue: number; // e.g. Rent $/m² or Exit Cap Rate
  noi: number;
  capRate: number;
  cashOnCash: number;
  irr: number;
  dscr: number;
  isBaseCase?: boolean;
}

export interface CurrencyConfig {
  code: 'USD' | 'EUR' | 'MXN' | 'COP' | 'CLP';
  symbol: string;
  rateToUSD: number;
  name: string;
}
