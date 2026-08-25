import React from 'react';
import { Eye } from 'lucide-react';
import { CommercialProperty } from '../../types';
import { calculatePropertyFinancials } from '../../services/financial';
import { formatCurrency, formatPercent, formatNumber } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface PropertyTableProps {
  properties: CommercialProperty[];
  onSelectPropertyForAnalysis: (property: CommercialProperty) => void;
  onOpenDetailModal: (property: CommercialProperty) => void;
}

export const PropertyTable: React.FC<PropertyTableProps> = ({
  properties,
  onSelectPropertyForAnalysis,
  onOpenDetailModal,
}) => {
  const { t, translateCategory } = useLanguage();

  return (
    <div className="rounded-2xl glass border border-white/10 overflow-hidden bg-[#0A0A0A]/80">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-neutral-200">
          <thead className="bg-[#050505] text-[10px] uppercase font-sans tracking-wider text-neutral-400 border-b border-white/10">
            <tr>
              <th className="py-4 px-4 font-semibold">{t.colProperty}</th>
              <th className="py-4 px-4 font-semibold">{t.colCategory}</th>
              <th className="py-4 px-4 font-semibold text-right">{t.colPrice}</th>
              <th className="py-4 px-4 font-semibold text-right">{t.colGla}</th>
              <th className="py-4 px-4 font-semibold text-right">{t.colNoi}</th>
              <th className="py-4 px-4 font-semibold text-right">{t.colCapRate}</th>
              <th className="py-4 px-4 font-semibold text-right">{t.colCashOnCash}</th>
              <th className="py-4 px-4 font-semibold text-right">{t.colDscr}</th>
              <th className="py-4 px-4 font-semibold text-right">{t.colIrr}</th>
              <th className="py-4 px-4 font-semibold text-center">{t.colActions}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-mono-num">
            {properties.map((property) => {
              const fin = calculatePropertyFinancials(property);
              return (
                <tr key={property.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-sans">
                    <div className="flex items-center gap-3">
                      <img
                        src={property.imageUrl}
                        alt=""
                        className="w-10 h-10 rounded-lg object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
                        }}
                      />
                      <div>
                        <div className="font-semibold text-white text-sm">{property.name}</div>
                        <div className="text-[11px] text-neutral-500">
                          {property.city}, {property.country}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded bg-black/60 border border-gold/30 text-gold text-[10px] font-sans uppercase font-bold tracking-wider">
                      {translateCategory(property.category)}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right font-bold text-white">
                    {formatCurrency(property.purchasePrice, 'USD', true)}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    {formatNumber(property.grossLeasableAreaM2)} m²
                  </td>
                  <td className="py-3.5 px-4 text-right text-gold font-semibold">
                    {formatCurrency(fin.netOperatingIncomeAnnual, 'USD', true)}
                  </td>
                  <td className="py-3.5 px-4 text-right font-serif text-sm font-bold text-gold">
                    {formatPercent(fin.acquisitionCapRate, 2)}
                  </td>
                  <td className="py-3.5 px-4 text-right text-white font-semibold">
                    {formatPercent(fin.cashOnCashReturn, 2)}
                  </td>
                  <td className="py-3.5 px-4 text-right text-neutral-300">
                    {fin.debtServiceCoverageRatio > 50
                      ? t.noDebt
                      : `${fin.debtServiceCoverageRatio.toFixed(2)}x`}
                  </td>
                  <td className="py-3.5 px-4 text-right text-gold font-bold">
                    {formatPercent(fin.internalRateOfReturn, 1)}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onSelectPropertyForAnalysis(property)}
                        className="px-3 py-1.5 rounded bg-gold hover:bg-white text-black font-bold text-[10px] uppercase tracking-wider cursor-pointer transition-colors"
                      >
                        {t.actionModel}
                      </button>
                      <button
                        onClick={() => onOpenDetailModal(property)}
                        className="p-1.5 rounded border border-white/10 hover:border-gold text-neutral-300 hover:text-gold cursor-pointer"
                        title={t.viewDetails}
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
