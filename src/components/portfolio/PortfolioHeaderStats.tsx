import React from 'react';
import { Building2 } from 'lucide-react';
import { formatCurrency, formatPercent, formatNumber } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface PortfolioHeaderStatsProps {
  totalAssetsCount: number;
  totalValue: number;
  totalNOI: number;
  weightedCapRate: number;
  averageOccupancy: number;
  totalAreaGLA: number;
  onOpenAddModal: () => void;
}

export const PortfolioHeaderStats: React.FC<PortfolioHeaderStatsProps> = ({
  totalAssetsCount,
  totalValue,
  totalNOI,
  weightedCapRate,
  averageOccupancy,
  totalAreaGLA,
  onOpenAddModal,
}) => {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl glass p-6 lg:p-8 bg-[#0A0A0A]/80 border border-white/10 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded glass text-gold text-[10px] font-mono-num uppercase tracking-[0.25em] font-semibold">
              {t.portfolioAumTag}
            </span>
            <span className="text-xs text-neutral-500 font-mono-num">
              | {totalAssetsCount} {t.portfolioAssetsInCustody}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light font-serif text-white tracking-tight">
            {t.portfolioTitle} <span className="italic text-gold">{t.portfolioTitleHighlight}</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl font-light">
            {t.portfolioSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAddModal}
            className="px-5 py-3 rounded-lg bg-gold hover:bg-white text-black font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#C5A059]/20"
          >
            <Building2 className="w-4 h-4" />
            <span>{t.portfolioAddButton}</span>
          </button>
        </div>
      </div>

      {/* Aggregate KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans block mb-1">
            {t.portfolioStatTotalValue}
          </span>
          <div className="text-xl sm:text-2xl font-serif font-light text-white mt-0.5">
            {formatCurrency(totalValue, 'USD', true)}
          </div>
          <span className="text-[10px] text-neutral-500 font-mono-num uppercase">
            {t.portfolioStatAcqBase}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans block mb-1">
            {t.portfolioStatConsolidatedNoi}
          </span>
          <div className="text-xl sm:text-2xl font-serif font-light text-gold mt-0.5">
            {formatCurrency(totalNOI, 'USD', true)}
          </div>
          <span className="text-[10px] text-gold/60 font-mono-num uppercase">
            {t.portfolioStatAnnualFlow}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans block mb-1">
            {t.portfolioStatWeightedCap}
          </span>
          <div className="text-xl sm:text-2xl font-serif font-semibold text-gold mt-0.5">
            {formatPercent(weightedCapRate, 2)}
          </div>
          <span className="text-[10px] text-neutral-500 font-mono-num uppercase">
            {t.portfolioStatRealYield}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans block mb-1">
            {t.portfolioStatAvgOccupancy}
          </span>
          <div className="text-xl sm:text-2xl font-serif font-light text-white mt-0.5">
            {formatPercent(averageOccupancy, 1)}
          </div>
          <span className="text-[10px] text-emerald-400/80 font-mono-num uppercase">
            {t.portfolioStatGradeATenants}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans block mb-1">
            {t.portfolioStatLeasableGla}
          </span>
          <div className="text-xl sm:text-2xl font-serif font-light text-white mt-0.5">
            {formatNumber(totalAreaGLA)} <span className="text-xs font-sans text-neutral-400">m²</span>
          </div>
          <span className="text-[10px] text-neutral-500 font-mono-num uppercase">
            {t.portfolioStatTotalSurface}
          </span>
        </div>
      </div>
    </div>
  );
};
