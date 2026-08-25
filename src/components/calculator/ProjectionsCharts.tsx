import React, { useState, useMemo } from 'react';
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
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { CommercialProperty, FinancialCalculationResults } from '../../types';
import { formatCurrency } from '../../services/formatters/numberFormatters';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectionsChartsProps {
  params: CommercialProperty;
  financials: FinancialCalculationResults;
}

export const ProjectionsCharts: React.FC<ProjectionsChartsProps> = ({ params, financials }) => {
  const { t } = useLanguage();
  const [activeChartTab, setActiveChartTab] = useState<
    'cashflow' | 'equity' | 'breakdown' | 'schedule'
  >('cashflow');

  const cashflowChartData = useMemo(() => {
    return financials.annualCashflows.map((cf) => ({
      name: `${t.yearLabel} ${cf.year}`,
      IngresosBrutos: Math.round(cf.effectiveGrossIncome),
      OpEx: Math.round(cf.operatingExpenses),
      ServicioDeuda: Math.round(cf.debtService),
      FlujoNeto: Math.round(cf.netCashFlow),
      ValorPropiedad: Math.round(cf.propertyValue),
    }));
  }, [financials, t.yearLabel]);

  const equityChartData = useMemo(() => {
    return financials.annualCashflows.map((cf) => ({
      name: `${t.yearLabel} ${cf.year}`,
      DeudaRestante: Math.round(cf.remainingLoanBalance),
      PatrimonioNeto: Math.round(cf.propertyEquity),
      ValorTotal: Math.round(cf.propertyValue),
    }));
  }, [financials, t.yearLabel]);

  const opexBreakdownData = useMemo(() => {
    return [
      { name: t.opexBreakdownTax, value: financials.propertyTax, color: '#C5A059' },
      { name: t.opexBreakdownInsurance, value: financials.insurance, color: '#9B7B36' },
      { name: t.opexBreakdownMaintenance, value: financials.maintenance, color: '#10b981' },
      { name: t.opexBreakdownManagement, value: financials.managementFee, color: '#6366f1' },
      { name: t.opexBreakdownUtilities, value: financials.utilitiesCommon, color: '#ec4899' },
      { name: t.opexBreakdownReserves, value: financials.reserves, color: '#737373' },
    ].filter((item) => item.value > 0);
  }, [financials, t]);

  return (
    <div className="space-y-6">
      {/* Chart View Switcher */}
      <div className="rounded-2xl glass bg-[#0A0A0A]/70 border border-white/10 p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-base font-bold font-serif text-white">{t.chartModelingTitle}</h3>
            <p className="text-xs text-neutral-400 font-light">{t.chartModelingSubtitle}</p>
          </div>

          {/* Chart Tabs */}
          <div className="flex items-center rounded-lg glass border border-white/10 p-1">
            <button
              onClick={() => setActiveChartTab('cashflow')}
              className={`px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                activeChartTab === 'cashflow'
                  ? 'bg-gold text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.chartTabCashflow}
            </button>
            <button
              onClick={() => setActiveChartTab('equity')}
              className={`px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                activeChartTab === 'equity'
                  ? 'bg-gold text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.chartTabEquity}
            </button>
            <button
              onClick={() => setActiveChartTab('breakdown')}
              className={`px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                activeChartTab === 'breakdown'
                  ? 'bg-gold text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.chartTabOpex}
            </button>
            <button
              onClick={() => setActiveChartTab('schedule')}
              className={`px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                activeChartTab === 'schedule'
                  ? 'bg-gold text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.chartTabSchedule}
            </button>
          </div>
        </div>

        {/* TAB 1: 10-Year Cash Flow Projection */}
        {activeChartTab === 'cashflow' && (
          <div className="space-y-4">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cashflowChartData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis dataKey="name" stroke="#737373" fontSize={10} fontStyle="italic" />
                  <YAxis
                    stroke="#737373"
                    fontSize={10}
                    tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A0A0A',
                      border: '1px solid rgba(197, 160, 89, 0.4)',
                      borderRadius: '8px',
                      fontSize: '11px',
                      color: '#E5E5E5',
                    }}
                    formatter={(val: any) => formatCurrency(Number(val))}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                  <Bar
                    dataKey="IngresosBrutos"
                    fill="#E5E5E5"
                    name={t.chartLegendEgi}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="OpEx"
                    fill="#737373"
                    name={t.chartLegendOpex}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="ServicioDeuda"
                    fill="#ef4444"
                    name={t.chartLegendDebt}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="FlujoNeto"
                    fill="#C5A059"
                    name={t.chartLegendNetFlow}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono-num">
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase tracking-wider font-sans">
                  {t.calcTotalFlow10y}
                </span>
                <span className="text-sm font-bold text-gold">
                  {formatCurrency(
                    financials.annualCashflows.reduce((a, b) => a + b.netCashFlow, 0),
                    'USD',
                    true
                  )}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase tracking-wider font-sans">
                  {t.calcNetSaleProceeds}
                </span>
                <span className="text-sm font-bold text-white">
                  {formatCurrency(financials.netSaleProceeds, 'USD', true)}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase tracking-wider font-sans">
                  {t.calcPaybackCapital}
                </span>
                <span className="text-sm font-bold text-gold">
                  {financials.paybackPeriodYears} {t.welcomeYears}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Debt Amortization vs Equity Growth */}
        {activeChartTab === 'equity' && (
          <div className="space-y-4">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={equityChartData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C5A059" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#C5A059" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="debtGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis dataKey="name" stroke="#737373" fontSize={10} />
                  <YAxis
                    stroke="#737373"
                    fontSize={10}
                    tickFormatter={(v) => `$${(v / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A0A0A',
                      border: '1px solid rgba(197, 160, 89, 0.4)',
                      borderRadius: '8px',
                      fontSize: '11px',
                    }}
                    formatter={(val: any) => formatCurrency(Number(val))}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                  <Area
                    type="monotone"
                    dataKey="PatrimonioNeto"
                    stroke="#C5A059"
                    fillOpacity={1}
                    fill="url(#equityGrad)"
                    name={t.chartLegendEquity}
                  />
                  <Area
                    type="monotone"
                    dataKey="DeudaRestante"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#debtGrad)"
                    name={t.chartLegendDebtBalance}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 flex items-center justify-between">
              <span className="text-neutral-400">{t.calcAccumulatedAmortization}:</span>
              <span className="font-bold text-gold font-mono-num">
                {formatCurrency(financials.loanAmount - financials.remainingLoanBalanceAtExit)}
              </span>
            </div>
          </div>
        )}

        {/* TAB 3: OpEx Breakdown Pie */}
        {activeChartTab === 'breakdown' && (
          <div className="space-y-4">
            <div className="h-80 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={opexBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={105}
                    paddingAngle={4}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {opexBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A0A0A',
                      border: '1px solid rgba(197, 160, 89, 0.4)',
                      borderRadius: '8px',
                      fontSize: '11px',
                    }}
                    formatter={(val: any) => formatCurrency(Number(val))}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {opexBreakdownData.map((item) => (
                <div
                  key={item.name}
                  className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <div className="truncate">
                    <span className="text-neutral-500 block text-[9px] uppercase tracking-wider font-sans truncate">
                      {item.name}
                    </span>
                    <span className="font-bold text-white font-mono-num">
                      {formatCurrency(item.value)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Detailed Multi-Year Schedule Table */}
        {activeChartTab === 'schedule' && (
          <div className="overflow-x-auto max-h-80 border border-white/10 rounded-xl">
            <table className="w-full text-left text-xs text-neutral-200">
              <thead className="bg-[#050505] text-[9px] uppercase font-sans tracking-wider text-neutral-400 sticky top-0 border-b border-white/10">
                <tr>
                  <th className="py-2.5 px-3">{t.tableYearCol}</th>
                  <th className="py-2.5 px-3 text-right">EGI</th>
                  <th className="py-2.5 px-3 text-right">OpEx</th>
                  <th className="py-2.5 px-3 text-right">NOI</th>
                  <th className="py-2.5 px-3 text-right">{t.chartLegendDebt}</th>
                  <th className="py-2.5 px-3 text-right">{t.chartLegendNetFlow}</th>
                  <th className="py-2.5 px-3 text-right">CoC %</th>
                  <th className="py-2.5 px-3 text-right">{t.tableValueCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono-num">
                {financials.annualCashflows.map((row) => (
                  <tr key={row.year} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3 font-bold text-gold">
                      {t.yearLabel} {row.year}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      {formatCurrency(row.effectiveGrossIncome, 'USD', true)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-neutral-400">
                      {formatCurrency(row.operatingExpenses, 'USD', true)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-white font-bold">
                      {formatCurrency(row.netOperatingIncome, 'USD', true)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-neutral-500">
                      {formatCurrency(row.debtService, 'USD', true)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-gold font-bold">
                      {formatCurrency(row.netCashFlow, 'USD', true)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-white font-semibold">
                      {row.cashOnCash.toFixed(2)}%
                    </td>
                    <td className="py-2.5 px-3 text-right text-neutral-400">
                      {formatCurrency(row.propertyValue, 'USD', true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Underwriting Waterfall Card */}
      <div className="rounded-2xl glass bg-[#0A0A0A]/70 border border-white/10 p-6">
        <h3 className="text-xs uppercase tracking-wider font-bold text-white mb-4 flex items-center justify-between">
          <span>{t.waterfallTitle}</span>
          <span className="text-[10px] text-neutral-500 font-mono-num">{t.waterfallSubtitle}</span>
        </h3>

        <div className="space-y-2 text-xs font-mono-num">
          <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-neutral-300 font-sans">{t.waterfallGpi}</span>
            <span className="font-bold text-white">
              {formatCurrency(financials.grossPotentialIncomeAnnual)}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg text-rose-400">
            <span className="font-sans text-[11px]">
              (-) {t.waterfallVacancyCredit} ({params.vacancyRate + params.creditLossRate}%)
            </span>
            <span>
              -{formatCurrency(financials.vacancyLossAnnual + financials.creditLossAnnual)}
            </span>
          </div>
          <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.03] border border-white/5 font-bold">
            <span className="text-white font-sans">(=) {t.waterfallEgi}</span>
            <span className="text-white">
              {formatCurrency(financials.effectiveGrossIncomeAnnual)}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg text-neutral-400">
            <span className="font-sans text-[11px]">(-) {t.waterfallOpex}</span>
            <span>-{formatCurrency(financials.totalOpExAnnual)}</span>
          </div>
          <div className="flex justify-between items-center p-2.5 rounded-lg glass-gold border border-gold/30 font-bold text-sm">
            <span className="text-gold font-sans uppercase tracking-wider text-xs">
              (=) {t.waterfallNoi}
            </span>
            <span className="text-gold font-serif text-lg">
              {formatCurrency(financials.netOperatingIncomeAnnual)}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg text-neutral-500">
            <span className="font-sans text-[11px]">(-) {t.waterfallDebtService}</span>
            <span>-{formatCurrency(financials.annualDebtService)}</span>
          </div>
          <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.04] border border-white/10 font-bold text-sm">
            <span className="text-white font-sans uppercase tracking-wider text-xs">
              (=) {t.waterfallFreeCashFlow}
            </span>
            <span className="text-white font-serif text-lg">
              {formatCurrency(financials.cashFlowBeforeTax)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
