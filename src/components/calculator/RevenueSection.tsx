import React from 'react';
import { DollarSign } from 'lucide-react';
import { CommercialProperty, FinancialCalculationResults } from '../../types';
import { formatCurrency } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface RevenueSectionProps {
  params: CommercialProperty;
  financials: FinancialCalculationResults;
  onChange: (field: keyof CommercialProperty, value: number) => void;
}

export const RevenueSection: React.FC<RevenueSectionProps> = ({
  params,
  financials,
  onChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl glass bg-[#0A0A0A]/70 border border-white/10 p-5 space-y-4">
      <h3 className="text-xs uppercase tracking-wider font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
        <DollarSign className="w-4 h-4 text-gold" />
        <span>{t.section2Title}</span>
      </h3>

      {/* Rent per m² */}
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-neutral-300">{t.averageRentM2MonthLabel}</span>
          <span className="font-mono-num font-bold text-white">
            ${params.averageRentPerM2Month.toFixed(1)} / m²
          </span>
        </div>
        <input
          type="range"
          min={5}
          max={80}
          step={0.5}
          value={params.averageRentPerM2Month}
          onChange={(e) => onChange('averageRentPerM2Month', Number(e.target.value))}
          className="w-full accent-[#C5A059] cursor-pointer"
        />
      </div>

      {/* Vacancy Rate */}
      <div>
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-neutral-300">{t.vacancyRateLabel}</span>
          <span className="font-mono-num font-bold text-gold">
            {params.vacancyRate.toFixed(1)}% ({t.occupancyLabel}:{' '}
            {(100 - params.vacancyRate).toFixed(1)}%)
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={30}
          step={0.5}
          value={params.vacancyRate}
          onChange={(e) => onChange('vacancyRate', Number(e.target.value))}
          className="w-full accent-[#C5A059] cursor-pointer"
        />
      </div>

      {/* GLA & Rent Growth */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.glaRentableLabel}
          </label>
          <input
            type="number"
            step="500"
            value={params.grossLeasableAreaM2}
            onChange={(e) => onChange('grossLeasableAreaM2', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.annualRentGrowthLabel}
          </label>
          <input
            type="number"
            step="0.1"
            value={params.annualRentGrowth}
            onChange={(e) => onChange('annualRentGrowth', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      {/* Other Monthly Income */}
      <div>
        <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
          {t.otherMonthlyIncomeLabel}
        </label>
        <input
          type="number"
          step="5000"
          value={params.otherMonthlyIncome}
          onChange={(e) => onChange('otherMonthlyIncome', Number(e.target.value))}
          className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
        />
      </div>

      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-mono-num flex justify-between">
        <span className="text-neutral-400">{t.effectiveGrossIncomeAnnual}:</span>
        <span className="font-bold text-white">
          {formatCurrency(financials.effectiveGrossIncomeAnnual)}
        </span>
      </div>
    </div>
  );
};
