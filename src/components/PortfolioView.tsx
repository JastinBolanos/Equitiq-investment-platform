import React, { useState } from 'react';
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

  // Filter properties
  const filteredProperties = properties.filter((prop) => {
    const matchCategory = selectedCategory === 'Todas' || prop.category === selectedCategory;
    const matchSearch =
      prop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.tenants.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // Aggregated Portfolio Metrics
  const totalValue = properties.reduce((acc, p) => acc + p.purchasePrice, 0);
  const totalAreaGLA = properties.reduce((acc, p) => acc + p.grossLeasableAreaM2, 0);
  const totalNOI = properties.reduce(
    (acc, p) => acc + calculatePropertyFinancials(p).netOperatingIncomeAnnual,
    0
  );
  const weightedCapRate = totalValue > 0 ? (totalNOI / totalValue) * 100 : 0;
  const averageOccupancy =
    properties.reduce((acc, p) => acc + p.occupancyRate, 0) / (properties.length || 1);

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
