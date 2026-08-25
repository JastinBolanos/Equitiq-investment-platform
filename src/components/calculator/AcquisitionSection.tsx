import React from 'react';
import { Coins } from 'lucide-react';
import { CommercialProperty, FinancialCalculationResults } from '../../types';
import { formatCurrency } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface AcquisitionSectionProps {
  params: CommercialProperty;
  financials: FinancialCalculationResults;
  onChange: (field: keyof CommercialProperty, value: number) => void;
}

export const AcquisitionSection: React.FC<AcquisitionSectionProps> = ({
  params,
  financials,
  onChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl glass bg-[#0A0A0A]/70 border border-white/10 p-5 space-y-4">
      <h3 className="text-xs uppercase tracking-wider font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
        <Coins className="w-4 h-4 text-gold" />
        <span>{t.section1Title}</span>
      </h3>

      {/* Purchase Price */}
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-neutral-300">{t.purchasePriceLabel}</span>
          <span className="font-mono-num font-bold text-white">
            {formatCurrency(params.purchasePrice)}
          </span>
        </div>
        <input
          type="range"
          min={1000000}
          max={100000000}
          step={500000}
          value={params.purchasePrice}
          onChange={(e) => onChange('purchasePrice', Number(e.target.value))}
          className="w-full accent-[#C5A059] cursor-pointer"
        />
      </div>

      {/* Down Payment % (Equity) */}
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-neutral-300">{t.downPaymentLabel}</span>
          <span className="font-mono-num font-bold text-gold">
            {params.downPaymentPercent}% (
            {formatCurrency((params.purchasePrice * params.downPaymentPercent) / 100, 'USD', true)})
          </span>
        </div>
        <input
          type="range"
          min={10}
          max={100}
          step={5}
          value={params.downPaymentPercent}
          onChange={(e) => onChange('downPaymentPercent', Number(e.target.value))}
          className="w-full accent-[#C5A059] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-neutral-500 font-mono-num mt-0.5">
          <span>
            {t.leverageLtv}: {100 - params.downPaymentPercent}%
          </span>
          <span>
            {t.debtAmount}: {formatCurrency(financials.loanAmount, 'USD', true)}
          </span>
        </div>
      </div>

      {/* Loan Interest Rate & Term */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.loanInterestRateLabel}
          </label>
          <input
            type="number"
            step="0.1"
            min="1"
            max="20"
            value={params.loanInterestRate}
            onChange={(e) => onChange('loanInterestRate', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.loanTermYearsLabel}
          </label>
          <input
            type="number"
            min="5"
            max="35"
            value={params.loanTermYears}
            onChange={(e) => onChange('loanTermYears', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      {/* Initial CapEx & Closing Costs */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.initialCapexLabel}
          </label>
          <input
            type="number"
            step="50000"
            value={params.initialCapEx}
            onChange={(e) => onChange('initialCapEx', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.closingCostsLabel}
          </label>
          <input
            type="number"
            step="0.1"
            value={params.closingCostsPercent}
            onChange={(e) => onChange('closingCostsPercent', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-mono-num flex justify-between">
        <span className="text-neutral-400">{t.totalEquityRequired}:</span>
        <span className="font-bold text-gold">{formatCurrency(financials.equityInvested)}</span>
      </div>
    </div>
  );
};
