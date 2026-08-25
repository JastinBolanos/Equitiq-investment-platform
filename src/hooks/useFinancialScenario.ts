import { useState, useEffect, useMemo, useCallback } from 'react';
import { CommercialProperty, FinancialCalculationResults } from '../types';
import { calculatePropertyFinancials } from '../services/financial';

export type ScenarioType = 'base' | 'bear' | 'bull';

export function useFinancialScenario(
  initialProperty: CommercialProperty,
  onPropertyUpdated?: (property: CommercialProperty) => void
) {
  const [params, setParams] = useState<CommercialProperty>(initialProperty);
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('base');

  // Synchronize when active property ID changes
  useEffect(() => {
    setParams(initialProperty);
    setActiveScenario('base');
  }, [initialProperty.id]);

  const updateParam = useCallback(
    (field: keyof CommercialProperty, value: number | string) => {
      setParams((prev) => {
        const updated = { ...prev, [field]: value };
        if (onPropertyUpdated) onPropertyUpdated(updated);
        return updated;
      });
    },
    [onPropertyUpdated]
  );

  const applyScenario = useCallback(
    (scenario: ScenarioType) => {
      setActiveScenario(scenario);
      let updated: CommercialProperty = { ...initialProperty };

      if (scenario === 'bear') {
        // Stress test scenario
        updated = {
          ...updated,
          vacancyRate: Math.min(25, initialProperty.vacancyRate + 6),
          averageRentPerM2Month: Number((initialProperty.averageRentPerM2Month * 0.9).toFixed(1)),
          exitCapRate: Number((initialProperty.exitCapRate + 0.75).toFixed(2)),
          annualRentGrowth: 2.0,
        };
      } else if (scenario === 'bull') {
        // Expansion / Upside scenario
        updated = {
          ...updated,
          vacancyRate: Math.max(1, initialProperty.vacancyRate - 2.5),
          averageRentPerM2Month: Number((initialProperty.averageRentPerM2Month * 1.1).toFixed(1)),
          exitCapRate: Number((initialProperty.exitCapRate - 0.5).toFixed(2)),
          annualRentGrowth: 4.5,
        };
      }

      setParams(updated);
      if (onPropertyUpdated) onPropertyUpdated(updated);
    },
    [initialProperty, onPropertyUpdated]
  );

  const financials: FinancialCalculationResults = useMemo(() => {
    return calculatePropertyFinancials(params);
  }, [params]);

  return {
    params,
    setParams,
    activeScenario,
    updateParam,
    applyScenario,
    financials,
  };
}
