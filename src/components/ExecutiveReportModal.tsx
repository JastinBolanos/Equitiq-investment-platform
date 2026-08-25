import React from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  Download, 
  FileText 
} from 'lucide-react';
import { CommercialProperty } from '../types';
import { calculatePropertyFinancials, formatCurrency, formatPercent, formatNumber } from '../utils/financialCalculations';
import { useLanguage } from '../context/LanguageContext';

interface ExecutiveReportModalProps {
  property: CommercialProperty | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveReportModal: React.FC<ExecutiveReportModalProps> = ({
  property,
  isOpen,
  onClose,
}) => {
  const { t, translateCategory } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !property) return null;

  const financials = calculatePropertyFinancials(property);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const summaryText = `
${t.reportHeaderTitle} — ${property.name.toUpperCase()}
${t.reportAddressLabel}: ${property.address}, ${property.city}, ${property.country}
${t.propCategoryLabel}: ${translateCategory(property.category)} (${t.classLabel} ${property.classRating})
${t.reportGlaOccupancy(formatNumber(property.grossLeasableAreaM2), property.occupancyRate)}

${t.reportKeyMetrics}:
• ${t.purchasePriceLabel}: ${formatCurrency(property.purchasePrice)}
• ${t.reportInitialEquity}: ${formatCurrency(financials.equityInvested)} (LTV: ${financials.ltv.toFixed(1)}%)
• ${t.annualNoi} (${t.year1Label}): ${formatCurrency(financials.netOperatingIncomeAnnual)}
• Cap Rate: ${formatPercent(financials.acquisitionCapRate, 2)}
• Cash-on-Cash Return: ${formatPercent(financials.cashOnCashReturn, 2)}
• DSCR: ${financials.debtServiceCoverageRatio.toFixed(2)}x
• ${t.irr10yLabel}: ${formatPercent(financials.internalRateOfReturn, 1)}
• ${t.equityMultipleLabel}: ${financials.equityMultiple.toFixed(2)}x
• ${t.totalProfit10y}: ${formatCurrency(financials.totalProfit)}

${t.reportTenantsContracts}:
WALT: ${property.waltYears} ${t.reportYears}
${property.tenants.map(tn => `- ${tn.name} (${tn.industry}): ${formatNumber(tn.areaOccupiedM2)} m² @ $${tn.monthlyRentPerM2}/m²`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-20 pb-16 bg-black/85 backdrop-blur-md overflow-y-auto font-sans">
      <div className="relative w-full max-w-4xl rounded-2xl glass p-0 border border-white/20 overflow-hidden shadow-2xl bg-[#0A0A0A] text-neutral-100 print:bg-white print:text-black print:border-none print:shadow-none animate-in fade-in zoom-in-95 duration-200">
        {/* Header Action Bar */}
        <div className="p-4 sm:p-6 bg-[#050505] border-b border-white/10 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gold" />
            <span className="text-sm font-serif font-bold text-white tracking-wide">
              {t.reportHeaderTitle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-white/10 text-xs text-neutral-200 border border-white/10 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-gold" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t.copiedBtn : t.copySummaryBtn}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-gold hover:bg-gold-light text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-lg shadow-gold/20 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.printSavePdfBtn}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#141414] hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto print:max-h-none print:overflow-visible">
          {/* Institutional Teaser Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-gold/30">
            <div>
              <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-gold block mb-1">
                EQUITIQ REAL ESTATE ADVISORS • INVESTMENT MEMORANDUM
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-white tracking-tight">
                {property.name}
              </h1>
              <p className="text-xs text-neutral-400 mt-1 font-light">
                {property.address}, {property.city}, {property.country}
              </p>
            </div>

            <div className="text-right sm:border-l sm:border-white/10 sm:pl-6">
              <span className="text-[9px] text-neutral-400 uppercase tracking-wider font-sans block">{t.classificationLabel}</span>
              <span className="text-base font-serif font-bold text-gold">{t.classLabel} {property.classRating} • {translateCategory(property.category)}</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5 font-mono-num">WALT: {property.waltYears} {t.reportYears}</span>
            </div>
          </div>

          {/* Executive Overview */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">
              {t.thesisSectionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {property.description} {t.thesisDescriptionExtension(formatNumber(property.grossLeasableAreaM2), property.parkingSpaces, property.occupancyRate)}
            </p>
          </div>

          {/* Financial Scorecard Box */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3">
              {t.financialSectionTitle}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono-num">
              <div>
                <span className="text-neutral-500 text-[9px] block uppercase font-sans">{t.purchasePriceLabel}</span>
                <span className="text-base font-serif font-bold text-white">{formatCurrency(property.purchasePrice)}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] block uppercase font-sans">{t.equityInvestedLabel}</span>
                <span className="text-base font-serif font-bold text-gold">{formatCurrency(financials.equityInvested)}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] block uppercase font-sans">{t.annualNoi} {t.year1Label}</span>
                <span className="text-base font-serif font-bold text-white">{formatCurrency(financials.netOperatingIncomeAnnual)}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] block uppercase font-sans">Cap Rate</span>
                <span className="text-base font-serif font-bold text-gold">{formatPercent(financials.acquisitionCapRate, 2)}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] block uppercase font-sans">Cash-on-Cash</span>
                <span className="text-base font-serif font-bold text-emerald-400">{formatPercent(financials.cashOnCashReturn, 2)}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] block uppercase font-sans">{t.dscrDebtLabel}</span>
                <span className="text-base font-serif font-bold text-white">{financials.debtServiceCoverageRatio > 50 ? t.noDebt : `${financials.debtServiceCoverageRatio.toFixed(2)}x`}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] block uppercase font-sans">{t.irr10yLabel}</span>
                <span className="text-base font-serif font-bold text-gold">{formatPercent(financials.internalRateOfReturn, 1)}</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] block uppercase font-sans">{t.equityMultipleLabel}</span>
                <span className="text-base font-serif font-bold text-white">{financials.equityMultiple.toFixed(2)}x</span>
              </div>
            </div>
          </div>

          {/* Tenants Section */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3">
              {t.tenantsSectionTitle}
            </h3>
            <div className="divide-y divide-white/5 border border-white/10 rounded-xl overflow-hidden text-xs">
              {property.tenants.map((item) => (
                <div key={item.id} className="p-3 bg-[#050505]/60 flex justify-between items-center font-mono-num">
                  <div>
                    <span className="font-bold text-white font-sans">{item.name}</span>
                    <span className="text-neutral-400 text-[11px] font-sans ml-2">({item.industry})</span>
                  </div>
                  <div className="text-right text-neutral-300">
                    <span>{formatNumber(item.areaOccupiedM2)} m²</span> • <span>${item.monthlyRentPerM2}/m²/{t.reportMonth}</span> • <span>{t.reportExpires}: {item.leaseEndYear}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="pt-6 border-t border-white/10 text-[10px] text-neutral-500 leading-relaxed font-light">
            {t.reportDisclaimer}
          </div>
        </div>
      </div>
    </div>
  );
};
