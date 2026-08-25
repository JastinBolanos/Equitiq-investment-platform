import React from 'react';
import { ChevronDown, Share2 } from 'lucide-react';
import { CommercialProperty } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { formatNumber } from '../../services/formatters/numberFormatters';

interface CalculatorHeaderProps {
  properties: CommercialProperty[];
  selectedProperty: CommercialProperty;
  onSelectProperty: (property: CommercialProperty) => void;
  activeScenario: 'base' | 'bear' | 'bull';
  onApplyScenario: (scenario: 'base' | 'bear' | 'bull') => void;
  onOpenExecutiveReport: () => void;
}

export const CalculatorHeader: React.FC<CalculatorHeaderProps> = ({
  properties,
  selectedProperty,
  onSelectProperty,
  activeScenario,
  onApplyScenario,
  onOpenExecutiveReport,
}) => {
  const { t, translateCategory } = useLanguage();

  return (
    <div className="rounded-2xl glass p-6 bg-[#0A0A0A]/80 border border-white/10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded glass text-gold text-[10px] font-mono-num font-semibold uppercase tracking-[0.25em]">
              {t.dcfUnderwritingTag}
            </span>
            <span className="text-xs text-neutral-500 font-mono-num">
              | {t.flowsHoldingPeriod(selectedProperty.holdingPeriodYears)}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight flex items-center gap-3">
            <span className="font-light">{selectedProperty.name}</span>
            <span className="text-xs font-sans font-bold px-2.5 py-1 rounded bg-black/60 border border-gold/30 text-gold uppercase tracking-wider">
              {translateCategory(selectedProperty.category)}
            </span>
          </h1>
          <p className="text-xs text-neutral-400 font-light mt-1">
            {selectedProperty.city}, {selectedProperty.country} •{' '}
            {formatNumber(selectedProperty.grossLeasableAreaM2)} m² GLA • {t.classLabel}{' '}
            {selectedProperty.classRating}
          </p>
        </div>

        {/* Quick Select & Scenarios */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Property Selector */}
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
                  {p.name} ({p.city})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Scenario Buttons */}
          <div className="flex items-center rounded-lg glass border border-white/10 p-1">
            <button
              onClick={() => onApplyScenario('bear')}
              className={`px-3 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeScenario === 'bear'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title={t.scenarioBearTooltip}
            >
              {t.scenarioBear}
            </button>
            <button
              onClick={() => onApplyScenario('base')}
              className={`px-3 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeScenario === 'base'
                  ? 'bg-gold text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title={t.scenarioBaseTooltip}
            >
              {t.scenarioBase}
            </button>
            <button
              onClick={() => onApplyScenario('bull')}
              className={`px-3 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeScenario === 'bull'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title={t.scenarioBullTooltip}
            >
              {t.scenarioBull}
            </button>
          </div>

          {/* Teaser Export */}
          <button
            onClick={onOpenExecutiveReport}
            className="px-4 py-2.5 rounded-lg border border-white/20 hover:border-gold text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer hover:bg-white/5"
          >
            <Share2 className="w-3.5 h-3.5 text-gold" />
            <span>{t.exportTeaserButton}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
