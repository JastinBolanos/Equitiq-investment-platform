import React from 'react';
import { CommercialProperty } from '../types';
import { useFinancialScenario, ScenarioType } from '../hooks/useFinancialScenario';
import { CalculatorHeader } from './calculator/CalculatorHeader';
import { CalculatorKpiBar } from './calculator/CalculatorKpiBar';
import { AcquisitionSection } from './calculator/AcquisitionSection';
import { RevenueSection } from './calculator/RevenueSection';
import { OpexSection } from './calculator/OpexSection';
import { ExitValuationSection } from './calculator/ExitValuationSection';
import { ProjectionsCharts } from './calculator/ProjectionsCharts';

interface FinancialCalculatorProps {
  properties: CommercialProperty[];
  selectedProperty: CommercialProperty;
  onUpdateProperty: (updated: CommercialProperty) => void;
  onSelectProperty: (property: CommercialProperty) => void;
  onOpenExecutiveReport: () => void;
}

export const FinancialCalculator: React.FC<FinancialCalculatorProps> = ({
  properties,
  selectedProperty,
  onUpdateProperty,
  onSelectProperty,
  onOpenExecutiveReport,
}) => {
  const { params, activeScenario, updateParam, applyScenario, financials } = useFinancialScenario(
    selectedProperty,
    onUpdateProperty
  );

  const handleNumChange = (field: keyof CommercialProperty, value: number) => {
    updateParam(field, value);
  };

  return (
    <div className="space-y-8 pb-16 font-sans">
      {/* Top Header & Property Switcher */}
      <CalculatorHeader
        properties={properties}
        selectedProperty={params}
        onSelectProperty={onSelectProperty}
        activeScenario={activeScenario}
        onApplyScenario={(scenario: ScenarioType) => applyScenario(scenario)}
        onOpenExecutiveReport={onOpenExecutiveReport}
      />

      {/* Primary KPI Metrics Bar */}
      <CalculatorKpiBar financials={financials} />

      {/* Main Two-Column Layout: Controls vs Visual Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Underwriting Controls (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <AcquisitionSection
            params={params}
            financials={financials}
            onChange={handleNumChange}
          />
          <RevenueSection
            params={params}
            financials={financials}
            onChange={handleNumChange}
          />
          <OpexSection
            params={params}
            financials={financials}
            onChange={handleNumChange}
          />
          <ExitValuationSection
            params={params}
            financials={financials}
            onChange={handleNumChange}
          />
        </div>

        {/* Right Column: Visual Charts & Analytics (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <ProjectionsCharts params={params} financials={financials} />
        </div>
      </div>
    </div>
  );
};
