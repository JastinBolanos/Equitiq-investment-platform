import React from 'react';
import { MapPin, Eye, Trash2, ArrowUpRight } from 'lucide-react';
import { CommercialProperty } from '../../types';
import { calculatePropertyFinancials } from '../../services/financial';
import { formatCurrency, formatPercent, formatNumber } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface PropertyCardProps {
  property: CommercialProperty;
  onSelectForAnalysis: (property: CommercialProperty) => void;
  onOpenDetailModal: (property: CommercialProperty) => void;
  onDeleteProperty: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelectForAnalysis,
  onOpenDetailModal,
  onDeleteProperty,
}) => {
  const { t, translateCategory } = useLanguage();
  const financials = calculatePropertyFinancials(property);

  return (
    <div className="rounded-2xl overflow-hidden glass bg-[#0A0A0A]/70 border border-white/10 luxury-card-hover flex flex-col justify-between group">
      {/* Image Header */}
      <div>
        <div className="relative h-52 w-full overflow-hidden bg-neutral-900">
          <img
            src={property.imageUrl}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

          {/* Top Chips */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-gold/40 text-[10px] font-bold text-gold uppercase tracking-wider">
              {translateCategory(property.category)}
            </span>
            <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-neutral-300">
              {t.classLabel} {property.classRating}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetailModal(property);
              }}
              className="p-1.5 rounded-lg bg-black/70 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title={t.viewDetails}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (confirm(t.confirmDeleteProperty(property.name))) {
                  onDeleteProperty(property.id);
                }
              }}
              className="p-1.5 rounded-lg bg-black/70 hover:bg-rose-950 text-neutral-400 hover:text-rose-400 border border-white/10 transition-colors cursor-pointer"
              title={t.deleteProperty}
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bottom overlay info */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-1 text-xs text-neutral-300 font-light">
              <MapPin className="w-3 h-3 text-gold" />
              <span>
                {property.city}, {property.country}
              </span>
            </div>
            <h3 className="text-lg font-serif italic text-white tracking-tight truncate mt-0.5">
              {property.name}
            </h3>
          </div>
        </div>

        {/* Financial Highlights Pill Grid */}
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans">
                {t.entryCapRate}
              </span>
              <span className="text-lg font-serif font-semibold text-gold">
                {formatPercent(financials.acquisitionCapRate, 2)}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans">
                {t.cashOnCash}
              </span>
              <span className="text-lg font-serif font-semibold text-white">
                {formatPercent(financials.cashOnCashReturn, 2)}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans">
                {t.annualNoi}
              </span>
              <span className="text-sm font-mono-num font-medium text-white">
                {formatCurrency(financials.netOperatingIncomeAnnual, 'USD', true)}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans">
                {t.irr10y}
              </span>
              <span className="text-sm font-mono-num font-bold text-gold">
                {formatPercent(financials.internalRateOfReturn, 1)}
              </span>
            </div>
          </div>

          {/* Secondary Specs */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono-num text-neutral-300 border-t border-white/5 pt-3">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block font-sans">
                {t.glaLabel}
              </span>
              <span className="font-semibold">{formatNumber(property.grossLeasableAreaM2)} m²</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block font-sans">
                {t.occupancyLabel}
              </span>
              <span className="font-semibold text-emerald-400">{property.occupancyRate}%</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block font-sans">
                {t.waltLabel}
              </span>
              <span className="font-semibold">{property.waltYears} yrs</span>
            </div>
          </div>

          {/* Anchor Tenants */}
          {property.tenants.length > 0 && (
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 bg-white/[0.02] p-2 rounded-lg truncate border border-white/5">
              <span className="text-gold font-medium shrink-0">{t.tenantsLabel}:</span>
              <span className="truncate">{property.tenants.map((t) => t.name).join(', ')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 bg-[#050505]/90 border-t border-white/5 flex items-center justify-between gap-3">
        <div>
          <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-sans block">
            {t.cardAcquisitionPrice}
          </span>
          <span className="text-sm font-serif font-semibold text-white">
            {formatCurrency(property.purchasePrice, 'USD', true)}
          </span>
        </div>

        <button
          onClick={() => onSelectForAnalysis(property)}
          className="px-4 py-2 rounded-lg bg-gold hover:bg-white text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
        >
          <span>{t.cardSimulateDcf}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
