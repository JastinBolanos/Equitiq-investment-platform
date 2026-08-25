import React from 'react';
import { CommercialProperty, FinancialCalculationResults } from '../../types';
import { formatCurrency, formatPercent } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface PropertyDetailFinancialsTabProps {
  property: CommercialProperty;
  financials: FinancialCalculationResults;
}

export const PropertyDetailFinancialsTab: React.FC<PropertyDetailFinancialsTabProps> = ({
  property,
  financials,
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Core Return Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-num">
        <div className="p-4 rounded-xl glass-gold border border-gold/40">
          <span className="text-[10px] text-gold uppercase block font-sans font-bold">
            {t.modalEntryCapRate}
          </span>
          <div className="text-2xl font-serif font-bold text-gold mt-1">
            {formatPercent(financials.acquisitionCapRate, 2)}
          </div>
          <span className="text-[10px] text-neutral-400 block mt-0.5">
            NOI / {t.purchasePriceLabel}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <span className="text-[10px] text-emerald-400 uppercase block font-sans font-bold">
            {t.modalCashOnCashReturn}
          </span>
          <div className="text-2xl font-serif font-bold text-emerald-400 mt-1">
            {formatPercent(financials.cashOnCashReturn, 2)}
          </div>
          <span className="text-[10px] text-neutral-400 block mt-0.5">
            {language === 'es' ? 'Flujo Neto / Equity' : 'Net Flow / Equity'}
          </span>
        </div>

        <div className="p-4 rounded-xl glass border border-white/10">
          <span className="text-[10px] text-neutral-400 uppercase block font-sans">
            {t.modalIrr10Years}
          </span>
          <div className="text-2xl font-serif font-bold text-white mt-1">
            {formatPercent(financials.internalRateOfReturn, 1)}
          </div>
          <span className="text-[10px] text-neutral-400 block mt-0.5">
            {language === 'es' ? 'Retorno Total Anualizado' : 'Annualized Total Return'}
          </span>
        </div>

        <div className="p-4 rounded-xl glass border border-white/10">
          <span className="text-[10px] text-neutral-400 uppercase block font-sans">
            {t.modalEquityMultiple}
          </span>
          <div className="text-2xl font-serif font-bold text-white mt-1">
            {financials.equityMultiple.toFixed(2)}x
          </div>
          <span className="text-[10px] text-neutral-400 block mt-0.5">Equity Multiple (10y)</span>
        </div>
      </div>

      {/* Acquisition & Debt Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-num">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5">
          <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold font-sans">
            {t.modalCapitalStructureTitle}
          </h4>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-neutral-400 font-sans">{t.purchasePriceLabel}:</span>
            <strong className="text-white">{formatCurrency(property.purchasePrice)}</strong>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-neutral-400 font-sans">
              {t.modalClosingCosts} ({property.closingCostsPercent}%):
            </span>
            <span className="text-neutral-300">{formatCurrency(financials.closingCosts)}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-neutral-400 font-sans">{t.modalInitialCapex}:</span>
            <span className="text-neutral-300">{formatCurrency(property.initialCapEx)}</span>
          </div>
          <div className="flex justify-between font-bold pt-1">
            <span className="text-gold font-sans">{t.modalTotalEquityRequired}:</span>
            <span className="text-gold">{formatCurrency(financials.equityInvested)}</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5">
          <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold font-sans">
            {t.modalDebtStructureTitle}
          </h4>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-neutral-400 font-sans">
              {t.modalLoanAmount} (LTV {financials.ltv.toFixed(0)}%):
            </span>
            <strong className="text-white">{formatCurrency(financials.loanAmount)}</strong>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-neutral-400 font-sans">{t.modalMortgageInterestRate}:</span>
            <span className="text-neutral-300">
              {property.loanInterestRate}% {language === 'es' ? 'Anual' : 'Annual'}
            </span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-neutral-400 font-sans">{t.modalAnnualDebtService}:</span>
            <span className="text-neutral-300">
              {formatCurrency(financials.annualDebtService)}
            </span>
          </div>
          <div className="flex justify-between font-bold pt-1">
            <span className="text-emerald-400 font-sans">{t.modalDscrCoverage}:</span>
            <span className="text-emerald-400">
              {financials.debtServiceCoverageRatio > 50
                ? t.noDebt
                : `${financials.debtServiceCoverageRatio.toFixed(2)}x`}
            </span>
          </div>
        </div>
      </div>

      {/* Operating Statement Summary */}
      <div className="p-4 rounded-xl glass border border-white/10 text-xs font-mono-num space-y-2">
        <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold font-sans mb-3">
          {t.modalOperatingStatementTitle}
        </h4>
        <div className="flex justify-between text-neutral-300">
          <span className="font-sans">{t.modalGrossPotentialIncome} (GPI):</span>
          <span>{formatCurrency(financials.grossPotentialIncomeAnnual)}</span>
        </div>
        <div className="flex justify-between text-rose-400">
          <span className="font-sans">
            (-) {t.modalVacancyCreditLoss} ({property.vacancyRate + property.creditLossRate}%):
          </span>
          <span>
            -{formatCurrency(financials.vacancyLossAnnual + financials.creditLossAnnual)}
          </span>
        </div>
        <div className="flex justify-between font-bold text-white border-t border-white/10 pt-1">
          <span className="font-sans">{t.modalEffectiveGrossIncome} (EGI):</span>
          <span>{formatCurrency(financials.effectiveGrossIncomeAnnual)}</span>
        </div>
        <div className="flex justify-between text-rose-400">
          <span className="font-sans">
            (-) {t.modalOperatingExpenses} (OpEx Ratio: {financials.expenseRatio.toFixed(1)}%):
          </span>
          <span>-{formatCurrency(financials.totalOpExAnnual)}</span>
        </div>
        <div className="flex justify-between font-bold text-gold text-sm border-t border-gold/30 pt-1.5">
          <span className="font-sans">{t.modalNetOperatingIncome} (NOI):</span>
          <span>{formatCurrency(financials.netOperatingIncomeAnnual)}</span>
        </div>
        <div className="flex justify-between text-neutral-400">
          <span className="font-sans">(-) {t.modalAnnualDebtService}:</span>
          <span>-{formatCurrency(financials.annualDebtService)}</span>
        </div>
        <div className="flex justify-between font-bold text-emerald-400 text-sm border-t border-white/10 pt-1.5">
          <span className="font-sans">{t.modalCashFlowBeforeTax} (CFBT):</span>
          <span>{formatCurrency(financials.cashFlowBeforeTax)}</span>
        </div>
      </div>
    </div>
  );
};
