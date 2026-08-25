import React from 'react';
import { 
  X, 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Target 
} from 'lucide-react';
import { CommercialProperty } from '../types';
import { calculatePropertyFinancials, formatCurrency, formatPercent } from '../utils/financialCalculations';
import { useLanguage } from '../context/LanguageContext';

interface AiAdvisorModalProps {
  property: CommercialProperty;
  isOpen: boolean;
  onClose: () => void;
}

export const AiAdvisorModal: React.FC<AiAdvisorModalProps> = ({
  property,
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const financials = calculatePropertyFinancials(property);

  // Diagnostic grading logic
  let grade = 'A';
  let gradeColor = 'text-gold';
  let ratingExplanation = t.ratingExplanationDefault;

  if (financials.debtServiceCoverageRatio >= 1.4 && financials.acquisitionCapRate >= 7.5 && property.occupancyRate >= 95) {
    grade = 'AAA';
    gradeColor = 'text-gold';
    ratingExplanation = t.ratingExplanationAAA;
  } else if (financials.debtServiceCoverageRatio >= 1.25 && financials.acquisitionCapRate >= 6.5) {
    grade = 'AA';
    gradeColor = 'text-white';
    ratingExplanation = t.ratingExplanationAA;
  } else if (financials.debtServiceCoverageRatio < 1.15 || property.vacancyRate > 15) {
    grade = 'BBB-';
    gradeColor = 'text-rose-400';
    ratingExplanation = t.ratingExplanationBBB;
  }

  // Strategic Upside Recommendations
  const recommendations = [
    {
      title: t.recIndexationTitle,
      impact: t.recIndexationImpact,
      description: t.recIndexationDesc,
      priority: t.recPriorityHigh,
    },
    {
      title: t.recEnergyTitle,
      impact: t.recEnergyImpact,
      description: t.recEnergyDesc,
      priority: t.recPriorityMed,
    },
    {
      title: t.recWaltTitle,
      impact: t.recWaltImpact,
      description: t.recWaltDesc(property.waltYears),
      priority: t.recPriorityHigh,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 pt-16 sm:pt-20 md:pt-24 pb-16 bg-black/85 backdrop-blur-md overflow-y-auto no-print font-sans">
      <div className="relative w-full max-w-3xl rounded-2xl glass p-6 sm:p-8 bg-[#0A0A0A] border border-gold/30 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass-gold text-gold flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-serif font-semibold text-white">
                  {t.aiAdvisorTitle}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full glass-gold text-gold text-[10px] font-mono-num font-semibold">
                  AI Investment Underwriter
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-light">
                {t.aiAdvisorSubtitle(property.name)}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-black/60 hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Investment Grade Scorecard */}
        <div className="p-6 rounded-xl glass-gold border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          <div className="text-center sm:text-left">
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans block">
              {t.riskQualityRating}
            </span>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1 flex items-center justify-center sm:justify-start gap-3">
              <span className={gradeColor}>{grade}</span>
              <span className="text-sm font-normal text-neutral-300 font-sans tracking-wide">Investment Grade</span>
            </div>
            <p className="text-xs text-neutral-300 mt-1.5 max-w-md font-light leading-relaxed">
              {ratingExplanation}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono-num w-full sm:w-auto">
            <div className="p-3 rounded-lg bg-black/60 border border-white/5 text-center">
              <span className="text-[9px] text-neutral-500 block uppercase font-sans">{t.dscrDebtLabel}</span>
              <span className="font-serif font-bold text-gold text-base">
                {financials.debtServiceCoverageRatio > 50 ? t.noDebt : `${financials.debtServiceCoverageRatio.toFixed(2)}x`}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-black/60 border border-white/5 text-center">
              <span className="text-[9px] text-neutral-500 block uppercase font-sans">{t.equityMultipleLabel}</span>
              <span className="font-serif font-bold text-white text-base">{financials.equityMultiple.toFixed(2)}x</span>
            </div>
          </div>
        </div>

        {/* Strategic Value-Add Playbook */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3 flex items-center gap-2">
            <Target className="w-4 h-4" />
            <span>{t.valueAddPlaybookTitle}</span>
          </h3>

          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all text-xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white font-sans text-sm flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-gold" />
                    {rec.title}
                  </span>
                  <span className="px-2.5 py-0.5 rounded glass-gold text-gold text-[10px] font-mono-num font-bold">
                    {rec.impact}
                  </span>
                </div>
                <p className="text-neutral-400 leading-relaxed font-light mt-1">
                  {rec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gold hover:bg-gold-light text-black font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors shadow-lg shadow-gold/20"
          >
            {t.understoodBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
