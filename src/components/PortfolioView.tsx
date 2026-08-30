import React, { useState, useMemo } from 'react';
import { CommercialProperty, PropertyCategory } from '../types';
import { calculatePropertyFinancials } from '../services/financial';
import { PortfolioHeaderStats } from './portfolio/PortfolioHeaderStats';
import { PortfolioFiltersBar } from './portfolio/PortfolioFiltersBar';
import { PropertyCard } from './portfolio/PropertyCard';
import { PropertyTable } from './portfolio/PropertyTable';

interface PortfolioViewProps {
  properties: CommercialProperty[];
  onSelectPropertyForAnalysis: (property: CommercialProperty) => void;
  onOpenDetailModal: (property: CommercialProperty) => void;
  onDeleteProperty: (id: string) => void;
  onOpenAddModal: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  properties,
  onSelectPropertyForAnalysis,
  onOpenDetailModal,
  onDeleteProperty,
  onOpenAddModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | PropertyCategory>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Memoized Filter properties
  const filteredProperties = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return properties.filter((prop) => {
      const matchCategory = selectedCategory === 'Todas' || prop.category === selectedCategory;
      if (!matchCategory) return false;
      if (!q) return true;
      return (
        prop.name.toLowerCase().includes(q) ||
        prop.city.toLowerCase().includes(q) ||
        prop.country.toLowerCase().includes(q) ||
        prop.tenants.some((t) => t.name.toLowerCase().includes(q))
      );
    });
  }, [properties, selectedCategory, searchQuery]);

  // Memoized Aggregated Portfolio Metrics
  const { totalValue, totalAreaGLA, totalNOI, weightedCapRate, averageOccupancy } = useMemo(() => {
    let val = 0;
    let gla = 0;
    let noi = 0;
    let occSum = 0;

    for (let i = 0; i < properties.length; i++) {
      const p = properties[i];
      val += p.purchasePrice;
      gla += p.grossLeasableAreaM2;
      noi += calculatePropertyFinancials(p).netOperatingIncomeAnnual;
      occSum += p.occupancyRate;
    }

    const capRate = val > 0 ? (noi / val) * 100 : 0;
    const avgOcc = properties.length > 0 ? occSum / properties.length : 0;

    return {
      totalValue: val,
      totalAreaGLA: gla,
      totalNOI: noi,
      weightedCapRate: capRate,
      averageOccupancy: avgOcc,
    };
  }, [properties]);

  return (
    <div className="space-y-8 pb-16 font-sans">
      {/* Header Stats */}
      <PortfolioHeaderStats
        totalAssetsCount={properties.length}
        totalValue={totalValue}
        totalNOI={totalNOI}
        weightedCapRate={weightedCapRate}
        averageOccupancy={averageOccupancy}
        totalAreaGLA={totalAreaGLA}
        onOpenAddModal={onOpenAddModal}
      />

      {/* Filter and Search Bar */}
      <PortfolioFiltersBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {/* Grid or Table View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelectForAnalysis={onSelectPropertyForAnalysis}
              onOpenDetailModal={onOpenDetailModal}
              onDeleteProperty={onDeleteProperty}
            />
          ))}
        </div>
      ) : (
        <PropertyTable
          properties={filteredProperties}
          onSelectPropertyForAnalysis={onSelectPropertyForAnalysis}
          onOpenDetailModal={onOpenDetailModal}
        />
      )}
    </div>
  );
};
