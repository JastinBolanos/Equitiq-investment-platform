/**
 * Formats numeric values to institutional currency presentation
 */
export function formatCurrency(
  amount: number,
  currencyCode: string = 'USD',
  compact: boolean = false
): string {
  if (isNaN(amount)) return '$0';

  if (compact && Math.abs(amount) >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(2)}M`;
  }
  if (compact && Math.abs(amount) >= 1_000) {
    return `$${(amount / 1_000).toFixed(1)}k`;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode === 'USD' ? 'USD' : 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats percentage value with specified decimal precision
 */
export function formatPercent(value: number, decimals: number = 2): string {
  if (isNaN(value)) return '0.00%';
  return `${value.toFixed(decimals)}%`;
}

/**
 * Formats standard numbers with thousands separators
 */
export function formatNumber(value: number, decimals: number = 0): string {
  if (isNaN(value)) return '0';
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: decimals,
  }).format(value);
}
