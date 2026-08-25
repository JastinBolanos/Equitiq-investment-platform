import { CommercialProperty, SensitivityMatrixCell } from '../../types';
import { calculatePropertyFinancials } from './dcfModeler';

/**
 * Generate Sensitivity Matrix for Stress-Testing
 */
export function generateSensitivityMatrix(
  baseProperty: CommercialProperty,
  type: 'vacancy_vs_rent' | 'price_vs_caprate' = 'vacancy_vs_rent'
): {
  rowLabel: string;
  colLabel: string;
  rowValues: number[];
  colValues: number[];
  matrix: SensitivityMatrixCell[][];
} {
  if (type === 'vacancy_vs_rent') {
    const vacancySteps = [0, 3, 6, 10, 15, 20]; // Vacancy %
    const rentFactors = [0.85, 0.92, 1.0, 1.08, 1.15, 1.25]; // Rent variation
    const baseRent = baseProperty.averageRentPerM2Month;
    const rentValues = rentFactors.map((f) => Number((baseRent * f).toFixed(1)));

    const matrix: SensitivityMatrixCell[][] = [];

    for (let r = 0; r < vacancySteps.length; r++) {
      const rowCells: SensitivityMatrixCell[] = [];
      const vac = vacancySteps[r];

      for (let c = 0; c < rentValues.length; c++) {
        const rent = rentValues[c];
        const testProp: CommercialProperty = {
          ...baseProperty,
          vacancyRate: vac,
          averageRentPerM2Month: rent,
        };

        const res = calculatePropertyFinancials(testProp);
        const isBaseCase = vac === baseProperty.vacancyRate && rent === baseRent;

        rowCells.push({
          rowValue: vac,
          colValue: rent,
          noi: res.netOperatingIncomeAnnual,
          capRate: res.acquisitionCapRate,
          cashOnCash: res.cashOnCashReturn,
          irr: res.internalRateOfReturn,
          dscr: res.debtServiceCoverageRatio,
          isBaseCase,
        });
      }
      matrix.push(rowCells);
    }

    return {
      rowLabel: 'Tasa de Vacancia (%)',
      colLabel: 'Renta Mensual ($/m²)',
      rowValues: vacancySteps,
      colValues: rentValues,
      matrix,
    };
  } else {
    // Price vs Exit Cap Rate
    const priceFactors = [0.85, 0.92, 1.0, 1.08, 1.15, 1.25];
    const basePrice = baseProperty.purchasePrice;
    const priceValues = priceFactors.map((f) => Math.round(basePrice * f));
    const exitCapRates = [6.0, 6.75, 7.5, 8.25, 9.0, 9.75];

    const matrix: SensitivityMatrixCell[][] = [];

    for (let r = 0; r < priceValues.length; r++) {
      const rowCells: SensitivityMatrixCell[] = [];
      const price = priceValues[r];

      for (let c = 0; c < exitCapRates.length; c++) {
        const exitCap = exitCapRates[c];
        const testProp: CommercialProperty = {
          ...baseProperty,
          purchasePrice: price,
          exitCapRate: exitCap,
        };

        const res = calculatePropertyFinancials(testProp);
        const isBaseCase = price === basePrice && exitCap === baseProperty.exitCapRate;

        rowCells.push({
          rowValue: price,
          colValue: exitCap,
          noi: res.netOperatingIncomeAnnual,
          capRate: res.acquisitionCapRate,
          cashOnCash: res.cashOnCashReturn,
          irr: res.internalRateOfReturn,
          dscr: res.debtServiceCoverageRatio,
          isBaseCase,
        });
      }
      matrix.push(rowCells);
    }

    return {
      rowLabel: 'Precio de Adquisición ($)',
      colLabel: 'Exit Cap Rate (%)',
      rowValues: priceValues,
      colValues: exitCapRates,
      matrix,
    };
  }
}
