import React, { useState } from 'react';
import {
  Building2,
  Coins,
  BarChart3,
  Users,
  PieChart as PieChartIcon,
  ArrowUpRight,
} from 'lucide-react';
import { CommercialProperty } from '../types';
import { calculatePropertyFinancials } from '../services/financial';
import { formatCurrency, formatPercent } from '../services/formatters/numberFormatters';
import { useLanguage } from '../context/LanguageContext';
import { PropertyDetailHeader } from './detail/PropertyDetailHeader';
import { PropertyDetailOverviewTab } from './detail/PropertyDetailOverviewTab';
import { PropertyDetailFinancialsTab } from './detail/PropertyDetailFinancialsTab';
import { PropertyDetailChartsTab } from './detail/PropertyDetailChartsTab';
import { PropertyDetailTenantsTab } from './detail/PropertyDetailTenantsTab';
import { PropertyDetailOpexTab } from './detail/PropertyDetailOpexTab';

interface PropertyDetailModalProps {
  property: CommercialProperty | null;
  onClose: () => void;
  onSelectForAnalysis: (property: CommercialProperty) => void;
}

type ModalTab = 'overview' | 'financials' | 'charts' | 'tenants' | 'opex';

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onSelectForAnalysis,
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  if (!property) return null;

  const financials = calculatePropertyFinancials(property);

  // Collect all images (hero + additional)
  const allImages = [property.imageUrl, ...(property.additionalImages || [])];
  const activeImage = allImages[selectedImageIndex] || property.imageUrl;

  // Chart data: 10-year projection
  const projectionData = financials.annualCashflows.map((cf) => ({
    year: `${language === 'es' ? 'Año' : 'Year'} ${cf.year}`,
    noi: Math.round(cf.netOperatingIncome),
    debt: Math.round(cf.debtService),
    cashflow: Math.round(cf.netCashFlow),
    propertyValue: Math.round(cf.propertyValue),
    equity: Math.round(cf.propertyEquity),
    loanBalance: Math.round(cf.remainingLoanBalance),
  }));

  // OpEx Pie Chart Data
  const opexBreakdown = [
    {
      name: language === 'es' ? 'Predial / Taxes' : 'Property Tax',
      value: property.propertyTaxAnnual,
      color: '#C5A059',
    },
    {
      name: language === 'es' ? 'Mantenimiento & BMS' : 'Maintenance & BMS',
      value: property.maintenanceAnnual,
      color: '#10B981',
    },
    {
      name: language === 'es' ? 'Seguros & Pólizas' : 'Insurance',
      value: property.insuranceAnnual,
      color: '#3B82F6',
    },
    {
      name: language === 'es' ? 'Gestión / Management' : 'Property Management',
      value: Math.round(financials.managementFee),
      color: '#8B5CF6',
    },
    {
      name: language === 'es' ? 'Servicios & Comunes' : 'Utilities & Common',
      value: property.utilitiesAndCommonAnnual,
      color: '#F59E0B',
    },
    {
      name: language === 'es' ? 'Fondo de Reserva' : 'Replacement Reserves',
      value: property.replacementReservesAnnual,
      color: '#EC4899',
    },
  ].filter((item) => item.value > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-20 pb-16 bg-black/90 backdrop-blur-md overflow-y-auto font-sans">
      <div className="relative w-full max-w-5xl rounded-2xl glass p-0 bg-[#0A0A0A] border border-white/20 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header & Gallery */}
        <PropertyDetailHeader
          property={property}
          activeImage={activeImage}
          allImages={allImages}
          selectedImageIndex={selectedImageIndex}
          onSelectImageIndex={setSelectedImageIndex}
          onClose={onClose}
          onSelectForAnalysis={onSelectForAnalysis}
        />

        {/* Interactive Navigation Tabs */}
        <div className="px-4 sm:px-6 bg-[#050505] border-b border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3.5 border-b-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-gold text-gold font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.modalTabOverview}</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`py-3 px-3.5 border-b-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'financials'
                ? 'border-gold text-gold font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>{t.modalTabFinancials}</span>
          </button>

          <button
            onClick={() => setActiveTab('charts')}
            className={`py-3 px-3.5 border-b-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'charts'
                ? 'border-gold text-gold font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t.modalTabCharts}</span>
          </button>

          <button
            onClick={() => setActiveTab('tenants')}
            className={`py-3 px-3.5 border-b-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'tenants'
                ? 'border-gold text-gold font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>
              {t.modalTabTenants} ({property.tenants.length})
            </span>
          </button>

          <button
            onClick={() => setActiveTab('opex')}
            className={`py-3 px-3.5 border-b-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'opex'
                ? 'border-gold text-gold font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <PieChartIcon className="w-3.5 h-3.5" />
            <span>{t.modalTabOpex}</span>
          </button>
        </div>

        {/* Modal Body with Tab Content */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[56vh] overflow-y-auto text-neutral-200">
          {activeTab === 'overview' && <PropertyDetailOverviewTab property={property} />}
          {activeTab === 'financials' && (
            <PropertyDetailFinancialsTab property={property} financials={financials} />
          )}
          {activeTab === 'charts' && (
            <PropertyDetailChartsTab projectionData={projectionData} />
          )}
          {activeTab === 'tenants' && <PropertyDetailTenantsTab property={property} />}
          {activeTab === 'opex' && (
            <PropertyDetailOpexTab
              property={property}
              financials={financials}
              opexBreakdown={opexBreakdown}
            />
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-[#050505] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4 text-neutral-400 font-mono-num">
            <span>
              {t.purchasePriceLabel}:{' '}
              <strong className="text-white font-serif text-sm">
                {formatCurrency(property.purchasePrice)}
              </strong>
            </span>
            <span>
              • NOI:{' '}
              <strong className="text-gold font-serif text-sm">
                {formatCurrency(financials.netOperatingIncomeAnnual)}
              </strong>
            </span>
            <span>
              • Cap Rate:{' '}
              <strong className="text-gold">
                {formatPercent(financials.acquisitionCapRate, 2)}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors cursor-pointer"
            >
              {t.modalClose}
            </button>

            <button
              onClick={() => {
                onSelectForAnalysis(property);
                onClose();
              }}
              className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-gold hover:bg-white text-black font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-gold/20 transition-all cursor-pointer"
            >
              <span>{t.modalOpenDcfSimulator}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
