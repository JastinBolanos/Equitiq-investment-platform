import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Zap, CheckCircle2 } from 'lucide-react';
import { CommercialProperty, FinancialCalculationResults } from '../../types';
import { formatCurrency } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface PropertyDetailOpexTabProps {
  property: CommercialProperty;
  financials: FinancialCalculationResults;
  opexBreakdown: Array<{ name: string; value: number; color: string }>;
}

export const PropertyDetailOpexTab: React.FC<PropertyDetailOpexTabProps> = ({
  property,
  financials,
  opexBreakdown,
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold">
            {t.modalOpexBreakdownTitle}
          </h4>
          <p className="text-xs text-neutral-400 font-light">
            {t.modalEfficiencyRatio}:{' '}
            <strong className="text-gold font-mono-num">
              {financials.expenseRatio.toFixed(1)}% {language === 'es' ? 'del EGI' : 'of EGI'}
            </strong>
          </p>
        </div>

        <div className="text-right font-mono-num">
          <span className="text-xs text-neutral-400 block">{t.modalTotalOpexConsolidated}:</span>
          <span className="text-base font-bold text-white">
            {formatCurrency(financials.totalOpExAnnual)}/{language === 'es' ? 'año' : 'yr'}
          </span>
        </div>
      </div>

      {/* OpEx Pie & Line Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* OpEx Donut */}
        <div className="h-56 w-full flex items-center justify-center bg-[#050505] rounded-xl p-2 border border-white/5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={opexBreakdown}
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {opexBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0A0A0A',
                  borderColor: '#C5A059',
                  borderRadius: '8px',
                  fontSize: '11px',
                }}
                formatter={(val: any) => [formatCurrency(Number(val)), '']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* OpEx Lines */}
        <div className="space-y-2 text-xs font-mono-num">
          {opexBreakdown.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-2 rounded bg-white/[0.02] border border-white/5"
            >
              <span className="flex items-center gap-2 font-sans text-neutral-300">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                {item.name}
              </span>
              <span className="font-bold text-white">{formatCurrency(item.value)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ESG & Facilities Details */}
      <div className="p-4 rounded-xl glass border border-white/10 space-y-3">
        <h4 className="text-xs uppercase tracking-wider font-bold text-gold font-sans flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span>{t.modalEsgSystemsTitle}</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300 font-light">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span>{t.modalEsgItem1}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              {t.modalEsgItem2(
                property.replacementReservesAnnual > 0
                  ? language === 'es'
                    ? '0.2% del valor'
                    : '0.2% of value'
                  : language === 'es'
                  ? 'estándar institucional'
                  : 'institutional standard'
              )}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span>{t.modalEsgItem3}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span>{t.modalEsgItem4}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
