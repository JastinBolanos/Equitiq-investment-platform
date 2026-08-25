import React from 'react';
import { CommercialProperty } from '../../types';
import { formatCurrency, formatNumber } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface PropertyDetailTenantsTabProps {
  property: CommercialProperty;
}

export const PropertyDetailTenantsTab: React.FC<PropertyDetailTenantsTabProps> = ({ property }) => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold">
            {t.modalTenantRosterTitle}
          </h4>
          <p className="text-xs text-neutral-400 font-light">
            {t.modalTenantRosterSubtitle}:{' '}
            <strong className="text-gold font-mono-num">
              {property.waltYears} {t.reportYears}
            </strong>
          </p>
        </div>

        <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono-num text-neutral-300">
          {property.tenants.length} {t.modalActiveLeases}
        </span>
      </div>

      {/* Tenants Table */}
      <div className="border border-white/10 rounded-xl overflow-hidden divide-y divide-white/5 bg-[#050505]/60 text-xs">
        {property.tenants.map((item) => {
          const areaPercent = (
            (item.areaOccupiedM2 / property.grossLeasableAreaM2) *
            100
          ).toFixed(1);
          const annualRent = item.areaOccupiedM2 * item.monthlyRentPerM2 * 12;

          return (
            <div key={item.id} className="p-4 hover:bg-white/[0.02] transition-colors space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <strong className="text-white font-sans text-sm">{item.name}</strong>
                  {item.isAnchor && (
                    <span className="px-2 py-0.5 rounded glass-gold text-gold text-[9px] font-bold uppercase tracking-wider">
                      {t.modalAnchorTenantBadge}
                    </span>
                  )}
                  {item.creditRating && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono-num font-bold">
                      {t.modalCreditRatingBadge} {item.creditRating}
                    </span>
                  )}
                </div>

                <div className="text-right font-mono-num">
                  <span className="text-gold font-bold">
                    {formatCurrency(annualRent)}/{language === 'es' ? 'año' : 'yr'}
                  </span>
                  <span className="text-neutral-500 text-[10px] block">
                    (${item.monthlyRentPerM2}/m²/{t.reportMonth})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono-num text-neutral-400 pt-1">
                <div>
                  <span className="text-neutral-500 text-[9px] block uppercase font-sans">
                    {language === 'es' ? 'Sector' : 'Sector'}:
                  </span>
                  <span className="text-neutral-200">{item.industry}</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[9px] block uppercase font-sans">
                    {language === 'es' ? 'Superficie' : 'Area'}:
                  </span>
                  <span className="text-white">
                    {formatNumber(item.areaOccupiedM2)} m² ({areaPercent}%)
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[9px] block uppercase font-sans">
                    {language === 'es' ? 'Inicio Contrato' : 'Lease Start'}:
                  </span>
                  <span className="text-neutral-200">{item.leaseStartYear}</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[9px] block uppercase font-sans">
                    {t.reportExpires}:
                  </span>
                  <span className="text-gold font-bold">{item.leaseEndYear}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
