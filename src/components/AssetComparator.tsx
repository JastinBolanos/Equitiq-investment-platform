import React, { useState, useMemo } from 'react';
import { 
  GitCompare, 
  Building2, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  ShieldCheck, 
  TrendingUp, 
  Percent 
} from 'lucide-react';
import { CommercialProperty } from '../types';
import { calculatePropertyFinancials, formatCurrency, formatPercent, formatNumber } from '../utils/financialCalculations';
import { useLanguage } from '../context/LanguageContext';

interface AssetComparatorProps {
  properties: CommercialProperty[];
  onSelectPropertyForAnalysis: (p: CommercialProperty) => void;
}

export const AssetComparator: React.FC<AssetComparatorProps> = ({
  properties,
  onSelectPropertyForAnalysis,
}) => {
  const { t, translateCategory } = useLanguage();
  // Up to 3 selected properties
  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    properties.slice(0, 3).map((p) => p.id)
  );

  const toggleProperty = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds((prev) => prev.filter((item) => item !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds((prev) => [...prev, id]);
      } else {
        setSelectedIds((prev) => [...prev.slice(1), id]);
      }
    }
  };

  const { comparedProps, evaluatedProps, highestCapRate, highestCashOnCash, highestIRR } = useMemo(() => {
    const compared = properties.filter((p) => selectedIds.includes(p.id));
    const evaluated = compared.map((p) => ({
      property: p,
      financials: calculatePropertyFinancials(p),
    }));

    const maxCap = evaluated.length > 0 ? Math.max(...evaluated.map((ep) => ep.financials.acquisitionCapRate)) : 0;
    const maxCoC = evaluated.length > 0 ? Math.max(...evaluated.map((ep) => ep.financials.cashOnCashReturn)) : 0;
    const maxIrr = evaluated.length > 0 ? Math.max(...evaluated.map((ep) => ep.financials.internalRateOfReturn)) : 0;

    return {
      comparedProps: compared,
      evaluatedProps: evaluated,
      highestCapRate: maxCap,
      highestCashOnCash: maxCoC,
      highestIRR: maxIrr,
    };
  }, [properties, selectedIds]);

  return (
    <div className="space-y-8 pb-16 font-sans">
      {/* Header */}
      <div className="rounded-2xl glass p-6 lg:p-8 bg-[#0A0A0A]/80 border border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded glass text-gold text-[10px] font-mono-num font-semibold uppercase tracking-[0.25em]">
                {t.comparatorTag}
              </span>
              <span className="text-xs text-neutral-500 font-mono-num">| {t.comparatorBenchmarking}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              {t.comparatorTitle} <span className="text-gold italic">{t.comparatorTitleHighlight}</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl font-light">
              {t.comparatorDesc}
            </p>
          </div>
        </div>

        {/* Property Selector Pills */}
        <div className="pt-6">
          <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium block mb-2.5">
            {t.selectUpTo3(selectedIds.length)}
          </span>
          <div className="flex flex-wrap gap-2">
            {properties.map((p) => {
              const isSelected = selectedIds.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => toggleProperty(p.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-gold text-black font-bold shadow-lg shadow-gold/20'
                      : 'bg-[#050505] text-neutral-300 hover:text-white border border-white/10 hover:border-gold/50'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {evaluatedProps.map(({ property, financials }) => {
          const isBestCap = financials.acquisitionCapRate === highestCapRate;
          const isBestCoC = financials.cashOnCashReturn === highestCashOnCash;
          const isBestIRR = financials.internalRateOfReturn === highestIRR;

          return (
            <div
              key={property.id}
              className="rounded-2xl glass p-6 flex flex-col justify-between relative overflow-hidden bg-[#0A0A0A]/80 border border-white/10 hover:border-gold/50 transition-all duration-300"
            >
              {/* Top Image & Name */}
              <div className="space-y-4">
                <div className="relative h-44 rounded-xl overflow-hidden bg-[#050505]">
                  <img
                    src={property.imageUrl}
                    alt={property.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded glass-gold text-[10px] font-bold text-gold uppercase tracking-wider">
                    {translateCategory(property.category)} • {t.classLabel} {property.classRating}
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="text-[11px] text-neutral-400">{property.city}, {property.country}</span>
                    <h3 className="text-lg font-serif font-semibold text-white tracking-tight truncate">
                      {property.name}
                    </h3>
                  </div>
                </div>

                {/* Scorecard Metric Rows */}
                <div className="space-y-2 text-xs font-mono-num">
                  {/* Price */}
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400 font-sans">{t.purchasePriceLabel}</span>
                    <span className="font-bold text-white">{formatCurrency(property.purchasePrice, 'USD', true)}</span>
                  </div>

                  {/* Cap Rate */}
                  <div className={`flex justify-between items-center p-2.5 rounded-lg border ${
                    isBestCap ? 'glass-gold border-gold/40' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <span className="text-neutral-400 font-sans flex items-center gap-1.5">
                      Cap Rate {isBestCap && <Trophy className="w-3.5 h-3.5 text-gold" />}
                    </span>
                    <span className={`font-serif font-bold text-sm ${isBestCap ? 'text-gold' : 'text-neutral-200'}`}>
                      {formatPercent(financials.acquisitionCapRate, 2)}
                    </span>
                  </div>

                  {/* Cash on Cash */}
                  <div className={`flex justify-between items-center p-2.5 rounded-lg border ${
                    isBestCoC ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <span className="text-neutral-400 font-sans flex items-center gap-1.5">
                      Cash-on-Cash {isBestCoC && <Trophy className="w-3.5 h-3.5 text-emerald-400" />}
                    </span>
                    <span className={`font-serif font-bold text-sm ${isBestCoC ? 'text-emerald-400' : 'text-neutral-200'}`}>
                      {formatPercent(financials.cashOnCashReturn, 2)}
                    </span>
                  </div>

                  {/* NOI Anual */}
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400 font-sans">{t.annualNoi}</span>
                    <span className="font-bold text-gold">{formatCurrency(financials.netOperatingIncomeAnnual, 'USD', true)}</span>
                  </div>

                  {/* TIR 10 Años */}
                  <div className={`flex justify-between items-center p-2.5 rounded-lg border ${
                    isBestIRR ? 'bg-gold/10 border-gold/40' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <span className="text-neutral-400 font-sans flex items-center gap-1.5">
                      {t.irr10yLabel} {isBestIRR && <Trophy className="w-3.5 h-3.5 text-gold" />}
                    </span>
                    <span className={`font-serif font-bold text-sm ${isBestIRR ? 'text-gold' : 'text-neutral-200'}`}>
                      {formatPercent(financials.internalRateOfReturn, 1)}
                    </span>
                  </div>

                  {/* DSCR Cobertura */}
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400 font-sans">{t.dscrDebtLabel}</span>
                    <span className="font-bold text-white">
                      {financials.debtServiceCoverageRatio > 50 ? t.noDebt : `${financials.debtServiceCoverageRatio.toFixed(2)}x`}
                    </span>
                  </div>

                  {/* GLA & Ocupación */}
                  <div className="grid grid-cols-2 gap-2 text-center pt-2">
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[9px] text-neutral-500 uppercase block font-sans">{t.glaRentableLabel}</span>
                      <span className="font-bold text-white">{formatNumber(property.grossLeasableAreaM2)} m²</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[9px] text-neutral-500 uppercase block font-sans">{t.occupancyLabel}</span>
                      <span className="font-bold text-gold">{property.occupancyRate}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <button
                onClick={() => onSelectPropertyForAnalysis(property)}
                className="mt-6 w-full py-2.5 rounded-lg bg-white/5 hover:bg-gold hover:text-black text-white font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-gold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.openInDcf}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
