import React from 'react';
import { FinancialCalculationResults } from '../../types';
import { formatCurrency, formatPercent } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface CalculatorKpiBarProps {
  financials: FinancialCalculationResults;
}

export const CalculatorKpiBar: React.FC<CalculatorKpiBarProps> = ({ financials }) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {/* Cap Rate */}
      <div className="p-4 rounded-xl glass bg-[#0A0A0A]/70 border border-gold/30 relative overflow-hidden">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-sans">
          {t.calcCapRateEntry}
        </span>
        <div className="text-2xl font-serif font-semibold text-gold mt-1">
          {formatPercent(financials.acquisitionCapRate, 2)}
        </div>
        <span className="text-[10px] text-neutral-500 font-mono-num mt-0.5 block">
          {t.calcOnCost}: {formatPercent(financials.costCapRate, 2)}
        </span>
      </div>

      {/* Cash-on-Cash */}
      <div className="p-4 rounded-xl glass bg-[#0A0A0A]/70 border border-white/10 relative overflow-hidden">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-sans">
          {t.calcCashOnCashReturn}
        </span>
        <div className="text-2xl font-serif font-semibold text-white mt-1">
          {formatPercent(financials.cashOnCashReturn, 2)}
        </div>
        <span className="text-[10px] text-neutral-500 font-mono-num mt-0.5 block">
          {t.calcYieldOnEquity}
        </span>
      </div>

      {/* Net Operating Income (NOI) */}
      <div className="p-4 rounded-xl glass bg-[#0A0A0A]/70 border border-white/10">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-sans">
          {t.calcAnnualNoiYear1}
        </span>
        <div className="text-xl font-serif font-semibold text-gold mt-1 truncate">
          {formatCurrency(financials.netOperatingIncomeAnnual, 'USD', true)}
        </div>
        <span className="text-[10px] text-neutral-500 font-mono-num mt-0.5 block">
          {t.calcMargin}: {formatPercent(100 - financials.expenseRatio, 1)}
        </span>
      </div>

      {/* Cash Flow Free */}
      <div className="p-4 rounded-xl glass bg-[#0A0A0A]/70 border border-white/10">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-sans">
          {t.calcFreeCashFlow}
        </span>
        <div className="text-xl font-serif font-semibold text-white mt-1 truncate">
          {formatCurrency(financials.cashFlowBeforeTax, 'USD', true)}
        </div>
        <span className="text-[10px] text-neutral-500 font-mono-num mt-0.5 block">
          {t.calcPostDebtService}
        </span>
      </div>

      {/* 10-Yr IRR / TIR */}
      <div className="p-4 rounded-xl glass bg-[#0A0A0A]/70 border border-gold/30">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-sans">
          {t.calcProjectedIrr10y}
        </span>
        <div className="text-2xl font-serif font-semibold text-gold mt-1">
          {formatPercent(financials.internalRateOfReturn, 1)}
        </div>
        <span className="text-[10px] text-neutral-500 font-mono-num mt-0.5 block">
          {t.calcMultiple}: {financials.equityMultiple.toFixed(2)}x
        </span>
      </div>

      {/* DSCR (Debt Service Coverage) */}
      <div className="p-4 rounded-xl glass bg-[#0A0A0A]/70 border border-white/10">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-sans flex items-center justify-between">
          <span>{t.calcBankDscr}</span>
          {financials.debtServiceCoverageRatio >= 1.25 ? (
            <span className="w-2 h-2 rounded-full bg-gold" title={t.calcDscrSafeTooltip} />
          ) : (
            <span className="w-2 h-2 rounded-full bg-rose-400" title={t.calcDscrRiskTooltip} />
          )}
        </span>
        <div className="text-2xl font-serif font-semibold text-white mt-1">
          {financials.debtServiceCoverageRatio > 50
            ? t.noDebt
            : `${financials.debtServiceCoverageRatio.toFixed(2)}x`}
        </div>
        <span className="text-[10px] text-neutral-500 font-mono-num mt-0.5 block">
          {financials.debtServiceCoverageRatio >= 1.25
            ? t.calcDscrCompliant
            : t.calcDscrRisk}
        </span>
      </div>
    </div>
  );
};
