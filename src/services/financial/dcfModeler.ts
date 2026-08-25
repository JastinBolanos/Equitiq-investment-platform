import { CommercialProperty, FinancialCalculationResults, CashflowYearRecord } from '../../types';
import { calculateMonthlyPayment, calculateAnnualPrincipalAndInterest } from './amortizationEngine';
import { calculateIRR } from './irrEngine';

/**
 * Full Commercial Real Estate Underwriting Engine
 * Computes 10-year discounted cash flows, OpEx breakdown, Cap Rates, Debt yields, and IRR.
 */
export function calculatePropertyFinancials(property: CommercialProperty): FinancialCalculationResults {
  const {
    purchasePrice,
    closingCostsPercent = 2.5,
    initialCapEx = 0,
    downPaymentPercent = 35,
    loanInterestRate = 6.5,
    loanTermYears = 20,
    grossLeasableAreaM2 = 1000,
    averageRentPerM2Month = 25,
    otherMonthlyIncome = 0,
    vacancyRate = 5,
    creditLossRate = 1,
    annualRentGrowth = 3,
    propertyTaxAnnual = 0,
    insuranceAnnual = 0,
    maintenanceAnnual = 0,
    propertyManagementRate = 4,
    utilitiesAndCommonAnnual = 0,
    replacementReservesAnnual = 0,
    annualExpenseInflation = 2.5,
    holdingPeriodYears = 10,
    exitCapRate = 7.5,
    sellingCostsPercent = 2.0,
  } = property;

  // Initial Outlay
  const closingCosts = (purchasePrice * closingCostsPercent) / 100;
  const totalAcquisitionCost = purchasePrice + closingCosts + initialCapEx;
  const downPaymentAmount = (purchasePrice * downPaymentPercent) / 100;
  const loanAmount = Math.max(0, purchasePrice - downPaymentAmount);
  const equityInvested = downPaymentAmount + closingCosts + initialCapEx;
  const ltv = purchasePrice > 0 ? (loanAmount / purchasePrice) * 100 : 0;

  // Year 1 Income
  const grossPotentialRentAnnual = grossLeasableAreaM2 * averageRentPerM2Month * 12;
  const otherIncomeAnnual = otherMonthlyIncome * 12;
  const grossPotentialIncomeAnnual = grossPotentialRentAnnual + otherIncomeAnnual;
  const vacancyLossAnnual = (grossPotentialRentAnnual * vacancyRate) / 100;
  const creditLossAnnual = (grossPotentialRentAnnual * creditLossRate) / 100;
  const effectiveGrossIncomeAnnual = grossPotentialIncomeAnnual - vacancyLossAnnual - creditLossAnnual;

  // Year 1 Expenses
  const managementFee = (effectiveGrossIncomeAnnual * propertyManagementRate) / 100;
  const totalOpExAnnual =
    propertyTaxAnnual +
    insuranceAnnual +
    maintenanceAnnual +
    managementFee +
    utilitiesAndCommonAnnual +
    replacementReservesAnnual;

  const expenseRatio = effectiveGrossIncomeAnnual > 0 ? (totalOpExAnnual / effectiveGrossIncomeAnnual) * 100 : 0;

  // Net Operating Income (NOI)
  const netOperatingIncomeAnnual = effectiveGrossIncomeAnnual - totalOpExAnnual;
  const acquisitionCapRate = purchasePrice > 0 ? (netOperatingIncomeAnnual / purchasePrice) * 100 : 0;
  const costCapRate = totalAcquisitionCost > 0 ? (netOperatingIncomeAnnual / totalAcquisitionCost) * 100 : 0;

  // Debt Service
  const monthlyMortgagePayment = calculateMonthlyPayment(loanAmount, loanInterestRate, loanTermYears);
  const annualDebtService = monthlyMortgagePayment * 12;
  const debtServiceCoverageRatio = annualDebtService > 0 ? netOperatingIncomeAnnual / annualDebtService : 999;
  const debtYield = loanAmount > 0 ? (netOperatingIncomeAnnual / loanAmount) * 100 : 0;

  // Cash Flow & Cash on Cash
  const cashFlowBeforeTax = netOperatingIncomeAnnual - annualDebtService;
  const cashOnCashReturn = equityInvested > 0 ? (cashFlowBeforeTax / equityInvested) * 100 : 0;
  const grossRentMultiplier = grossPotentialRentAnnual > 0 ? purchasePrice / grossPotentialRentAnnual : 0;

  // Multi-Year Projections (1 to holdingPeriodYears)
  const annualCashflows: CashflowYearRecord[] = [];
  const irrCashflows: number[] = [-equityInvested];

  let runningLoanBalance = loanAmount;
  let cumulativeCash = 0;
  let paybackPeriodYears = holdingPeriodYears;
  let paybackFound = false;

  for (let yr = 1; yr <= holdingPeriodYears; yr++) {
    const rentGrowthFactor = Math.pow(1 + annualRentGrowth / 100, yr - 1);
    const expInflationFactor = Math.pow(1 + annualExpenseInflation / 100, yr - 1);

    const yrGrossIncome = grossPotentialIncomeAnnual * rentGrowthFactor;
    const yrEffectiveIncome = effectiveGrossIncomeAnnual * rentGrowthFactor;

    // OpEx grows with inflation (management fee adjusts with EGI)
    const yrBaseOpEx = (totalOpExAnnual - managementFee) * expInflationFactor;
    const yrMgmtFee = (yrEffectiveIncome * propertyManagementRate) / 100;
    const yrTotalOpEx = yrBaseOpEx + yrMgmtFee;

    const yrNOI = yrEffectiveIncome - yrTotalOpEx;

    // Debt amortisation
    const remainingYears = Math.max(1, loanTermYears - (yr - 1));
    const debtBreakdown = calculateAnnualPrincipalAndInterest(
      runningLoanBalance,
      loanInterestRate,
      loanTermYears,
      remainingYears
    );

    const yrDebtService = annualDebtService;
    const yrNetCashFlow = yrNOI - yrDebtService;
    cumulativeCash += yrNetCashFlow;

    if (!paybackFound && cumulativeCash >= equityInvested) {
      paybackPeriodYears = yr - 1 + (equityInvested - (cumulativeCash - yrNetCashFlow)) / Math.max(1, yrNetCashFlow);
      paybackFound = true;
    }

    // Property Valuation projection
    const yrValue = purchasePrice * Math.pow(1 + property.appreciationAnnualRate / 100, yr);
    const yrEquity = yrValue - debtBreakdown.endBalance;
    const yrCoC = equityInvested > 0 ? (yrNetCashFlow / equityInvested) * 100 : 0;

    annualCashflows.push({
      year: yr,
      grossIncome: yrGrossIncome,
      effectiveGrossIncome: yrEffectiveIncome,
      operatingExpenses: yrTotalOpEx,
      netOperatingIncome: yrNOI,
      debtService: yrDebtService,
      principalPaid: debtBreakdown.principal,
      interestPaid: debtBreakdown.interest,
      remainingLoanBalance: debtBreakdown.endBalance,
      netCashFlow: yrNetCashFlow,
      cumulativeCashFlow: cumulativeCash,
      propertyValue: yrValue,
      propertyEquity: yrEquity,
      cashOnCash: yrCoC,
    });

    runningLoanBalance = debtBreakdown.endBalance;

    if (yr < holdingPeriodYears) {
      irrCashflows.push(yrNetCashFlow);
    }
  }

  // Exit Valuation at end of Holding Period
  const yr11RentFactor = Math.pow(1 + annualRentGrowth / 100, holdingPeriodYears);
  const yr11ExpFactor = Math.pow(1 + annualExpenseInflation / 100, holdingPeriodYears);
  const yr11EffectiveIncome = effectiveGrossIncomeAnnual * yr11RentFactor;
  const yr11OpEx = (totalOpExAnnual - managementFee) * yr11ExpFactor + (yr11EffectiveIncome * propertyManagementRate) / 100;
  const yr11NOI = yr11EffectiveIncome - yr11OpEx;

  // Valuation via Exit Cap Rate
  const projectedExitValue = exitCapRate > 0 ? yr11NOI / (exitCapRate / 100) : purchasePrice * 1.5;
  const sellingCosts = (projectedExitValue * sellingCostsPercent) / 100;
  const remainingLoanBalanceAtExit = runningLoanBalance;
  const netSaleProceeds = projectedExitValue - sellingCosts - remainingLoanBalanceAtExit;

  // Final year terminal cash flow
  const finalYearCF = (annualCashflows[holdingPeriodYears - 1]?.netCashFlow || 0) + netSaleProceeds;
  irrCashflows.push(finalYearCF);

  const internalRateOfReturn = calculateIRR(irrCashflows);
  const totalCashInflows = cumulativeCash + netSaleProceeds;
  const totalProfit = totalCashInflows - equityInvested;
  const equityMultiple = equityInvested > 0 ? (totalCashInflows + equityInvested - equityInvested) / equityInvested : 0;

  return {
    purchasePrice,
    closingCosts,
    initialCapEx,
    totalAcquisitionCost,
    loanAmount,
    equityInvested,
    grossPotentialRentAnnual,
    otherIncomeAnnual,
    grossPotentialIncomeAnnual,
    vacancyLossAnnual,
    creditLossAnnual,
    effectiveGrossIncomeAnnual,
    propertyTax: propertyTaxAnnual,
    insurance: insuranceAnnual,
    maintenance: maintenanceAnnual,
    managementFee,
    utilitiesCommon: utilitiesAndCommonAnnual,
    reserves: replacementReservesAnnual,
    totalOpExAnnual,
    expenseRatio,
    netOperatingIncomeAnnual,
    acquisitionCapRate,
    costCapRate,
    monthlyMortgagePayment,
    annualDebtService,
    debtServiceCoverageRatio,
    debtYield,
    ltv,
    cashFlowBeforeTax,
    cashOnCashReturn,
    grossRentMultiplier,
    annualCashflows,
    projectedExitValue,
    remainingLoanBalanceAtExit,
    netSaleProceeds,
    totalProfit,
    equityMultiple,
    internalRateOfReturn,
    paybackPeriodYears: Number(paybackPeriodYears.toFixed(1)),
  };
}
