import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Sparkles, 
  TrendingUp, 
  AlertCircle, 
  ChevronDown, 
  SlidersHorizontal,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { CommercialProperty } from '../types';
import { generateSensitivityMatrix, formatCurrency, formatPercent } from '../utils/financialCalculations';
import { useLanguage } from '../context/LanguageContext';

interface SensitivityMatrixProps {
  properties: CommercialProperty[];
  selectedProperty: CommercialProperty;
  onSelectProperty: (p: CommercialProperty) => void;
}

export const SensitivityMatrix: React.FC<SensitivityMatrixProps> = ({
  properties,
  selectedProperty,
  onSelectProperty,
}) => {
  const { t } = useLanguage();
  const [matrixType, setMatrixType] = useState<'vacancy_vs_rent' | 'price_vs_caprate'>('vacancy_vs_rent');
  const [activeMetric, setActiveMetric] = useState<'capRate' | 'cashOnCash' | 'irr' | 'noi'>('cashOnCash');

  const matrixData = useMemo(() => {
    return generateSensitivityMatrix(selectedProperty, matrixType);
  }, [selectedProperty, matrixType]);

  // Color helper based on metric value
  const getCellColor = (val: number, metric: 'capRate' | 'cashOnCash' | 'irr' | 'noi', isBaseCase?: boolean) => {
    if (isBaseCase) return 'bg-[#C5A059]/25 border-2 border-gold font-bold text-gold';

    if (metric === 'cashOnCash' || metric === 'irr') {
      if (val >= 14) return 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30';
      if (val >= 9) return 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/20';
      if (val >= 5) return 'bg-[#C5A059]/10 text-gold border border-[#C5A059]/20';
      if (val >= 0) return 'bg-[#0A0A0A] text-neutral-300 border border-white/5';
      return 'bg-rose-950/30 text-rose-400 border border-rose-500/20';
    }

    if (metric === 'capRate') {
      if (val >= 8.5) return 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30';
      if (val >= 7.0) return 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/20';
      if (val >= 5.5) return 'bg-[#C5A059]/10 text-gold border border-[#C5A059]/20';
      return 'bg-rose-950/30 text-rose-400 border border-rose-500/20';
    }

    // NOI
    return 'bg-[#0A0A0A] text-neutral-200 border border-white/5';
  };

  return (
    <div className="space-y-8 pb-16 font-sans">
      {/* Header */}
      <div className="rounded-2xl glass p-6 lg:p-8 bg-[#0A0A0A]/80 border border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded glass text-gold text-[10px] font-mono-num font-semibold uppercase tracking-[0.25em]">
                {t.matrixTag}
              </span>
              <span className="text-xs text-neutral-500 font-mono-num">| {t.matrixStressTesting}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              {t.matrixTitle} <span className="text-gold italic">{t.matrixTitleHighlight}</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl font-light">
              {t.matrixDesc}
            </p>
          </div>

          {/* Property Selector */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={selectedProperty.id}
                onChange={(e) => {
                  const found = properties.find((p) => p.id === e.target.value);
                  if (found) onSelectProperty(found);
                }}
                className="appearance-none bg-[#050505] border border-white/15 hover:border-gold text-xs text-white font-medium pl-3 pr-8 py-2.5 rounded-lg focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {properties.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Matrix Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          {/* Dimension Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{t.dimensionsLabel}:</span>
            <div className="flex items-center rounded-lg glass border border-white/10 p-1">
              <button
                onClick={() => setMatrixType('vacancy_vs_rent')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  matrixType === 'vacancy_vs_rent'
                    ? 'bg-gold text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.dimVacancyRent}
              </button>
              <button
                onClick={() => setMatrixType('price_vs_caprate')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  matrixType === 'price_vs_caprate'
                    ? 'bg-gold text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.dimPriceExitCap}
              </button>
            </div>
          </div>

          {/* Metric Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{t.metricLabel}:</span>
            <div className="flex items-center rounded-lg glass border border-white/10 p-1">
              <button
                onClick={() => setActiveMetric('cashOnCash')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeMetric === 'cashOnCash'
                    ? 'bg-gold text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Cash-on-Cash (%)
              </button>
              <button
                onClick={() => setActiveMetric('capRate')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeMetric === 'capRate'
                    ? 'bg-gold text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Cap Rate (%)
              </button>
              <button
                onClick={() => setActiveMetric('irr')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeMetric === 'irr'
                    ? 'bg-gold text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.metricIrrLabel}
              </button>
              <button
                onClick={() => setActiveMetric('noi')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeMetric === 'noi'
                    ? 'bg-gold text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.metricNoiAnnualLabel}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="rounded-2xl glass p-6 overflow-x-auto bg-[#0A0A0A]/80 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              {t.heatmapTitle}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px] text-neutral-400 font-mono-num">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-gold inline-block" />
              {t.heatmapBaseCase}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-emerald-600/40 border border-emerald-500/50 inline-block" />
              {t.heatmapHighReturn}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-rose-950/60 border border-rose-500/50 inline-block" />
              {t.heatmapStress}
            </span>
          </div>
        </div>

        {/* Matrix Table */}
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-[10px] text-neutral-400 uppercase tracking-wider font-sans border border-white/10 bg-[#050505]">
                {matrixType === 'vacancy_vs_rent' ? t.vacancyRateLabel : t.purchasePriceLabel} ↓ \ {matrixType === 'vacancy_vs_rent' ? t.averageRentM2MonthLabel : t.exitCapRateLabel} →
              </th>
              {matrixData.colValues.map((colVal) => (
                <th
                  key={colVal}
                  className="p-3 text-xs font-bold text-neutral-200 font-mono-num border border-white/10 bg-[#050505]"
                >
                  {matrixType === 'vacancy_vs_rent' ? `$${colVal.toFixed(1)} /m²` : `${colVal.toFixed(2)}%`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrixData.matrix.map((rowCells, rIdx) => {
              const rowVal = matrixData.rowValues[rIdx];
              return (
                <tr key={rIdx}>
                  <td className="p-3 text-xs font-bold text-neutral-200 font-mono-num border border-white/10 bg-[#050505] text-left">
                    {matrixType === 'vacancy_vs_rent' ? `${rowVal}% ${t.vacancyRateLabel}` : formatCurrency(rowVal, 'USD', true)}
                  </td>
                  {rowCells.map((cell, cIdx) => {
                    let displayVal = '';
                    let rawVal = 0;

                    if (activeMetric === 'cashOnCash') {
                      displayVal = formatPercent(cell.cashOnCash, 2);
                      rawVal = cell.cashOnCash;
                    } else if (activeMetric === 'capRate') {
                      displayVal = formatPercent(cell.capRate, 2);
                      rawVal = cell.capRate;
                    } else if (activeMetric === 'irr') {
                      displayVal = formatPercent(cell.irr, 1);
                      rawVal = cell.irr;
                    } else {
                      displayVal = formatCurrency(cell.noi, 'USD', true);
                      rawVal = cell.noi;
                    }

                    const colorClass = getCellColor(rawVal, activeMetric, cell.isBaseCase);

                    return (
                      <td
                        key={cIdx}
                        className={`p-3 text-xs font-mono-num transition-all hover:scale-105 hover:z-10 relative cursor-pointer ${colorClass}`}
                      >
                        <div className="font-bold">{displayVal}</div>
                        {cell.isBaseCase && (
                          <span className="text-[8px] uppercase tracking-widest block text-gold mt-0.5">
                            {t.heatmapBaseBadge}
                          </span>
                        )}
                        <div className="text-[10px] text-neutral-400 font-light mt-0.5">
                          DSCR: {cell.dscr > 50 ? t.noDebt : `${cell.dscr.toFixed(2)}x`}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Stress Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 rounded-xl glass bg-[#0A0A0A]/70 border border-white/10">
          <h4 className="text-xs uppercase tracking-wider font-bold text-gold font-sans mb-2">
            {t.stressBreakEvenTitle}
          </h4>
          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            {t.stressBreakEvenText}
          </p>
        </div>

        <div className="p-5 rounded-xl glass bg-[#0A0A0A]/70 border border-white/10">
          <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-400 font-sans mb-2">
            {t.stressUpsideTitle}
          </h4>
          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            {t.stressUpsideText}
          </p>
        </div>

        <div className="p-5 rounded-xl glass bg-[#0A0A0A]/70 border border-white/10">
          <h4 className="text-xs uppercase tracking-wider font-bold text-white font-sans mb-2">
            {t.stressExitCapRiskTitle}
          </h4>
          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            {t.stressExitCapRiskText}
          </p>
        </div>
      </div>
    </div>
  );
};
