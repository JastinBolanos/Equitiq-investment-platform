import React, { useState } from 'react';
import { X, Building2, Plus, Sparkles, Check } from 'lucide-react';
import { CommercialProperty, PropertyCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProperty: (newProp: CommercialProperty) => void;
}

const CATEGORY_DEFAULT_IMAGES: Record<PropertyCategory, string> = {
  Oficinas: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
  Logístico: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
  Retail: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
  'Salud & Lab': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
  Hospitality: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  'Uso Mixto': 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
};

export const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  isOpen,
  onClose,
  onAddProperty,
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    category: 'Oficinas' as PropertyCategory,
    city: '',
    country: 'México',
    address: '',
    purchasePrice: 25000000,
    grossLeasableAreaM2: 12000,
    averageRentPerM2Month: 22.5,
    occupancyRate: 95.0,
    downPaymentPercent: 35,
    loanInterestRate: 6.5,
    loanTermYears: 20,
    description: '',
    imageUrl: CATEGORY_DEFAULT_IMAGES['Oficinas'],
  });

  if (!isOpen) return null;

  const handleCategoryChange = (newCat: PropertyCategory) => {
    const isCurrentDefault = Object.values(CATEGORY_DEFAULT_IMAGES).includes(formData.imageUrl);
    setFormData((prev) => ({
      ...prev,
      category: newCat,
      imageUrl: isCurrentDefault || !prev.imageUrl ? CATEGORY_DEFAULT_IMAGES[newCat] : prev.imageUrl,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newProperty: CommercialProperty = {
      id: `prop-${Date.now()}`,
      name: formData.name,
      code: `CP-${Math.floor(100 + Math.random() * 900)}`,
      category: formData.category,
      city: formData.city || 'Ciudad Principal',
      country: formData.country || 'México',
      address: formData.address || 'Distrito Financiero Central',
      yearBuilt: 2022,
      imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      description: formData.description || 'Inmueble comercial premium con arrendatarios corporativos de primer nivel y contratos a largo plazo.',
      
      totalAreaM2: Math.round(formData.grossLeasableAreaM2 * 1.25),
      grossLeasableAreaM2: Number(formData.grossLeasableAreaM2),
      parkingSpaces: Math.round(formData.grossLeasableAreaM2 / 35),
      occupancyRate: Number(formData.occupancyRate),
      floorsCount: 12,
      classRating: 'A+',

      purchasePrice: Number(formData.purchasePrice),
      closingCostsPercent: 2.2,
      initialCapEx: Math.round(Number(formData.purchasePrice) * 0.02),
      downPaymentPercent: Number(formData.downPaymentPercent),
      loanInterestRate: Number(formData.loanInterestRate),
      loanTermYears: Number(formData.loanTermYears),

      averageRentPerM2Month: Number(formData.averageRentPerM2Month),
      otherMonthlyIncome: Math.round(Number(formData.grossLeasableAreaM2) * 1.5),
      vacancyRate: Math.max(0, 100 - Number(formData.occupancyRate)),
      creditLossRate: 0.8,
      annualRentGrowth: 3.5,

      propertyTaxAnnual: Math.round(Number(formData.purchasePrice) * 0.005),
      insuranceAnnual: Math.round(Number(formData.purchasePrice) * 0.0025),
      maintenanceAnnual: Math.round(Number(formData.purchasePrice) * 0.006),
      propertyManagementRate: 3.5,
      utilitiesAndCommonAnnual: Math.round(Number(formData.purchasePrice) * 0.004),
      replacementReservesAnnual: Math.round(Number(formData.purchasePrice) * 0.002),
      annualExpenseInflation: 2.8,

      appreciationAnnualRate: 4.2,
      holdingPeriodYears: 10,
      exitCapRate: 7.25,
      sellingCostsPercent: 2.0,

      waltYears: 7.5,
      status: 'En Operación',

      tenants: [
        {
          id: `t-${Date.now()}-1`,
          name: 'Corporativo Líder S.A.',
          industry: 'Servicios Profesionales',
          areaOccupiedM2: Math.round(Number(formData.grossLeasableAreaM2) * 0.6),
          monthlyRentPerM2: Number(formData.averageRentPerM2Month),
          leaseStartYear: 2023,
          leaseEndYear: 2033,
          isAnchor: true,
          creditRating: 'AA',
        },
      ],
    };

    onAddProperty(newProperty);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-20 pb-16 bg-black/85 backdrop-blur-md overflow-y-auto no-print font-sans">
      <div className="relative w-full max-w-2xl rounded-2xl glass p-6 sm:p-8 bg-[#0A0A0A] border border-white/20 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg glass-gold text-gold flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-semibold text-white">
                {t.addPropertyModalTitle}
              </h2>
              <p className="text-xs text-neutral-400 font-light">
                {t.addPropertyModalSubtitle}
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.propNameLabel} *</label>
              <input
                type="text"
                required
                placeholder={t.propNamePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.propCategoryLabel}</label>
              <select
                value={formData.category}
                onChange={(e) => handleCategoryChange(e.target.value as PropertyCategory)}
                className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="Oficinas">{t.catOfficeFull}</option>
                <option value="Logístico">{t.catLogisticFull}</option>
                <option value="Retail">{t.catRetailFull}</option>
                <option value="Salud & Lab">{t.catHealthFull}</option>
                <option value="Hospitality">{t.catHospitalityFull}</option>
                <option value="Uso Mixto">{t.catMixedFull}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.cityLabel}</label>
              <input
                type="text"
                placeholder={t.cityPlaceholder}
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.countryLabel}</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.purchasePriceModalLabel}</label>
              <input
                type="number"
                step="500000"
                value={formData.purchasePrice}
                onChange={(e) => setFormData({ ...formData, purchasePrice: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.glaAreaLabel}</label>
              <input
                type="number"
                step="500"
                value={formData.grossLeasableAreaM2}
                onChange={(e) => setFormData({ ...formData, grossLeasableAreaM2: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.rentPerM2MonthModalLabel}</label>
              <input
                type="number"
                step="0.5"
                value={formData.averageRentPerM2Month}
                onChange={(e) => setFormData({ ...formData, averageRentPerM2Month: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.occupancyModalLabel}</label>
              <input
                type="number"
                step="1"
                min="0"
                max="100"
                value={formData.occupancyRate}
                onChange={(e) => setFormData({ ...formData, occupancyRate: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs font-mono-num text-white focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.imageUrlLabel}</label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-sans">{t.thesisDescLabel}</label>
            <textarea
              rows={2}
              placeholder={t.thesisDescPlaceholder}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-xs text-white focus:outline-none focus:border-gold font-sans"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium cursor-pointer transition-colors"
            >
              {t.cancelBtn}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-gold hover:bg-gold-light text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold/20 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>{t.registerAssetBtn}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
