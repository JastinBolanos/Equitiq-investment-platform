/**
 * Internal Rate of Return (IRR / TIR) solver using Newton-Raphson method
 */
export function calculateIRR(cashFlows: number[], guess: number = 0.1): number {
  const maxIterations = 100;
  const tolerance = 1e-6;
  let rate = guess;

  for (let i = 0; i < maxIterations; i++) {
    let npv = 0;
    let dNpv = 0;

    for (let t = 0; t < cashFlows.length; t++) {
      const denom = Math.pow(1 + rate, t);
      if (denom === 0) continue;
      npv += cashFlows[t] / denom;
      if (t > 0) {
        dNpv -= (t * cashFlows[t]) / Math.pow(1 + rate, t + 1);
      }
    }

    if (Math.abs(npv) < tolerance) {
      return rate * 100;
    }

    if (Math.abs(dNpv) < 1e-10) {
      rate += 0.01;
      continue;
    }

    const nextRate = rate - npv / dNpv;
    if (isNaN(nextRate) || !isFinite(nextRate)) {
      break;
    }
    rate = nextRate;
  }

  // Fallback bisection if Newton-Raphson fails or diverges
  let low = -0.99;
  let high = 5.0;
  for (let iter = 0; iter < 100; iter++) {
    const mid = (low + high) / 2;
    let npv = 0;
    for (let t = 0; t < cashFlows.length; t++) {
      npv += cashFlows[t] / Math.pow(1 + mid, t);
    }
    if (Math.abs(npv) < 1e-4) return mid * 100;
    if (npv > 0) low = mid;
    else high = mid;
  }

  return rate * 100;
}
