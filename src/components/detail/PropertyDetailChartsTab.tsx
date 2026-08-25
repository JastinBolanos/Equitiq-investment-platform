import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  AreaChart,
  Area,
} from 'recharts';
import { formatCurrency } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface PropertyDetailChartsTabProps {
  projectionData: Array<{
    year: string;
    noi: number;
    debt: number;
    cashflow: number;
    propertyValue: number;
    equity: number;
    loanBalance: number;
  }>;
}

export const PropertyDetailChartsTab: React.FC<PropertyDetailChartsTabProps> = ({
  projectionData,
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Chart 1: 10-Year NOI vs Debt vs Cash Flow */}
      <div className="p-4 rounded-xl glass bg-[#050505] border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-gold font-sans">
              {t.modalProjections10YTitle}
            </h4>
            <p className="text-[11px] text-neutral-400">{t.modalProjections10YSubtitle}</p>
          </div>
        </div>
        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={projectionData}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
              <XAxis dataKey="year" stroke="#737373" tick={{ fontSize: 10 }} />
              <YAxis
                stroke="#737373"
                tick={{ fontSize: 10 }}
                tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0A0A0A',
                  borderColor: '#C5A059',
                  borderRadius: '8px',
                  fontSize: '11px',
                }}
                formatter={(val: any) => [formatCurrency(Number(val)), '']}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Bar
                dataKey="noi"
                name={language === 'es' ? 'NOI Anual' : 'Annual NOI'}
                fill="#C5A059"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="debt"
                name={language === 'es' ? 'Servicio Deuda' : 'Debt Service'}
                fill="#525252"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="cashflow"
                name={language === 'es' ? 'Flujo Neto (CFBT)' : 'Net Cash Flow (CFBT)'}
                fill="#10B981"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Equity Accumulation & Loan Amortization */}
      <div className="p-4 rounded-xl glass bg-[#050505] border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-gold font-sans">
              {t.modalEquityAccumulationTitle}
            </h4>
            <p className="text-[11px] text-neutral-400">{t.modalEquityAccumulationSubtitle}</p>
          </div>
        </div>
        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={projectionData}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C5A059" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#C5A059" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
              <XAxis dataKey="year" stroke="#737373" tick={{ fontSize: 10 }} />
              <YAxis
                stroke="#737373"
                tick={{ fontSize: 10 }}
                tickFormatter={(val) => `$${(val / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0A0A0A',
                  borderColor: '#C5A059',
                  borderRadius: '8px',
                  fontSize: '11px',
                }}
                formatter={(val: any) => [formatCurrency(Number(val)), '']}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Area
                type="monotone"
                dataKey="propertyValue"
                name={t.modalPropertyValueChart}
                stroke="#C5A059"
                fillOpacity={1}
                fill="url(#colorVal)"
              />
              <Area
                type="monotone"
                dataKey="equity"
                name={t.modalPropertyEquityChart}
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorEquity)"
              />
              <Area
                type="monotone"
                dataKey="loanBalance"
                name={t.modalRemainingLoanChart}
                stroke="#EF4444"
                fillOpacity={0}
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
