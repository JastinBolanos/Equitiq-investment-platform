import React from 'react';
import { PieChart as PieChartIcon } from 'lucide-react';
import { CommercialProperty, FinancialCalculationResults } from '../../types';
import { formatCurrency } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface OpexSectionProps {
  params: CommercialProperty;
  financials: FinancialCalculationResults;
  onChange: (field: keyof CommercialProperty, value: number) => void;
}

export const OpexSection: React.FC<OpexSectionProps> = ({
  params,
  financials,
  onChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl glass bg-[#0A0A0A]/70 border border-white/10 p-5 space-y-4">
      <h3 className="text-xs uppercase tracking-wider font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
        <PieChartIcon className="w-4 h-4 text-gold" />
        <span>{t.section3Title}</span>
      </h3>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.propertyTaxLabel}
          </label>
          <input
            type="number"
            step="10000"
            value={params.propertyTaxAnnual}
            onChange={(e) => onChange('propertyTaxAnnual', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.insuranceLabel}
          </label>
          <input
            type="number"
            step="5000"
            value={params.insuranceAnnual}
            onChange={(e) => onChange('insuranceAnnual', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.maintenanceLabel}
          </label>
          <input
            type="number"
            step="10000"
            value={params.maintenanceAnnual}
            onChange={(e) => onChange('maintenanceAnnual', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-sans">
            {t.propertyManagementRateLabel}
          </label>
          <input
            type="number"
            step="0.5"
            value={params.propertyManagementRate}
            onChange={(e) => onChange('propertyManagementRate', Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-mono-num flex justify-between">
        <span className="text-neutral-400">{t.totalOpexAnnual}:</span>
        <span className="font-bold text-gold">
          {formatCurrency(financials.totalOpExAnnual)} ({financials.expenseRatio.toFixed(1)}% EGI)
        </span>
      </div>
    </div>
  );
};
