import React from 'react';
import { Award, Leaf, ShieldCheck } from 'lucide-react';
import { CommercialProperty } from '../../types';
import { formatNumber } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface PropertyDetailOverviewTabProps {
  property: CommercialProperty;
}

export const PropertyDetailOverviewTab: React.FC<PropertyDetailOverviewTabProps> = ({
  property,
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Executive Summary */}
      <div>
        <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">
          {t.modalInvestmentThesisTitle}
        </h4>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
          {property.description}
        </p>
      </div>

      {/* Physical Specifications Blueprint */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-num text-xs">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[9px] text-neutral-500 uppercase block font-sans">
            {t.modalTotalArea}
          </span>
          <span className="text-base font-bold text-white">
            {formatNumber(property.totalAreaM2)} m²
          </span>
          <span className="text-[10px] text-neutral-400 block mt-0.5">{t.modalGrossAreaSub}</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[9px] text-neutral-500 uppercase block font-sans">
            {t.modalLeasableArea}
          </span>
          <span className="text-base font-bold text-gold">
            {formatNumber(property.grossLeasableAreaM2)} m²
          </span>
          <span className="text-[10px] text-neutral-400 block mt-0.5">
            {t.modalEfficiency}:{' '}
            {((property.grossLeasableAreaM2 / property.totalAreaM2) * 100).toFixed(1)}%
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[9px] text-neutral-500 uppercase block font-sans">
            {t.modalStabilizedOccupancy}
          </span>
          <span className="text-base font-bold text-emerald-400">{property.occupancyRate}%</span>
          <span className="text-[10px] text-neutral-400 block mt-0.5">
            {t.modalVacancySub}: {property.vacancyRate}%
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[9px] text-neutral-500 uppercase block font-sans">
            {t.modalParkingSpaces}
          </span>
          <span className="text-base font-bold text-white">
            {property.parkingSpaces} {language === 'es' ? 'Cajones' : 'Spaces'}
          </span>
          <span className="text-[10px] text-neutral-400 block mt-0.5">
            {t.modalParkingRatio}:{' '}
            {(property.grossLeasableAreaM2 / Math.max(1, property.parkingSpaces)).toFixed(0)} m²/
            {language === 'es' ? 'cajón' : 'space'}
          </span>
        </div>
      </div>

      {/* Architectural Badges & Certifications */}
      <div className="p-4 rounded-xl glass border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="flex items-start gap-2.5">
          <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-sans">{t.modalClassQualityTitle}</strong>
            <span className="text-neutral-400 text-[11px]">
              {t.modalClassQualityDesc(property.classRating)}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Leaf className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-sans">{t.modalEsgTitle}</strong>
            <span className="text-neutral-400 text-[11px]">{t.modalEsgDesc}</span>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-sans">{t.modalWaltQualityTitle}</strong>
            <span className="text-neutral-400 text-[11px]">
              {t.modalWaltQualityDesc(property.waltYears)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
