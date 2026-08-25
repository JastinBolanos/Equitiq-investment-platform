/**
 * Amortization Engine
 * Handles mortgage payments, remaining balances, and principal/interest amortization schedules.
 */

/**
 * Calculates monthly mortgage payment using standard amortization formula
 */
export function calculateMonthlyPayment(
  principal: number,
  annualRatePercent: number,
  years: number
): number {
  if (principal <= 0 || years <= 0) return 0;
  if (annualRatePercent <= 0) return principal / (years * 12);

  const monthlyRate = annualRatePercent / 100 / 12;
  const totalMonths = years * 12;
  const factor = Math.pow(1 + monthlyRate, totalMonths);
  return principal * ((monthlyRate * factor) / (factor - 1));
}

/**
 * Calculates remaining loan balance after a specific number of years
 */
export function calculateRemainingLoanBalance(
  principal: number,
  annualRatePercent: number,
  years: number,
  elapsedYears: number
): number {
  if (principal <= 0 || elapsedYears <= 0) return principal;
  if (elapsedYears >= years) return 0;
  if (annualRatePercent <= 0) {
    const monthlyPayment = principal / (years * 12);
    return Math.max(0, principal - monthlyPayment * elapsedYears * 12);
  }

  const monthlyRate = annualRatePercent / 100 / 12;
  const totalMonths = years * 12;
  const elapsedMonths = elapsedYears * 12;

  const payment = calculateMonthlyPayment(principal, annualRatePercent, years);
  const factorElapsed = Math.pow(1 + monthlyRate, elapsedMonths);
  const balance = principal * factorElapsed - (payment / monthlyRate) * (factorElapsed - 1);

  return Math.max(0, balance);
}

/**
 * Calculates principal and interest breakdown for a specific year
 */
export function calculateAnnualPrincipalAndInterest(
  startBalance: number,
  annualRatePercent: number,
  totalLoanYears: number,
  remainingYearsAtStart: number
): { principal: number; interest: number; endBalance: number } {
  if (startBalance <= 0) return { principal: 0, interest: 0, endBalance: 0 };

  const monthlyRate = annualRatePercent / 100 / 12;
  const monthlyPayment = calculateMonthlyPayment(
    startBalance,
    annualRatePercent,
    remainingYearsAtStart
  );

  let currentBalance = startBalance;
  let totalInterestYear = 0;
  let totalPrincipalYear = 0;

  for (let m = 0; m < 12; m++) {
    if (currentBalance <= 0) break;
    const interestMonth = currentBalance * monthlyRate;
    const principalMonth = Math.min(currentBalance, monthlyPayment - interestMonth);

    totalInterestYear += interestMonth;
    totalPrincipalYear += principalMonth;
    currentBalance -= principalMonth;
  }

  return {
    principal: totalPrincipalYear,
    interest: totalInterestYear,
    endBalance: Math.max(0, currentBalance),
  };
}
