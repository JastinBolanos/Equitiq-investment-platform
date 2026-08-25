import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { CommercialProperty } from '../types';
import { INITIAL_PROPERTIES } from '../data/initialProperties';
import { LocalStorageService } from '../services/storage/localStorageService';

export function usePortfolio() {
  const [properties, setProperties] = useState<CommercialProperty[]>(() => {
    return LocalStorageService.loadProperties();
  });

  const [selectedProperty, setSelectedProperty] = useState<CommercialProperty>(() => {
    return properties[0] || INITIAL_PROPERTIES[0];
  });

  // Automatically synchronize with localStorage whenever properties state changes
  useEffect(() => {
    LocalStorageService.saveProperties(properties);
  }, [properties]);

  // Ensure selected property remains valid if deleted or modified
  useEffect(() => {
    if (selectedProperty) {
      const match = properties.find((p) => p.id === selectedProperty.id);
      if (match && match !== selectedProperty) {
        setSelectedProperty(match);
      }
    }
  }, [properties, selectedProperty]);

  const updateProperty = useCallback((updated: CommercialProperty) => {
    setProperties((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    setSelectedProperty((prev) => (prev.id === updated.id ? updated : prev));
  }, []);

  const addProperty = useCallback((newProperty: CommercialProperty) => {
    setProperties((prev) => [newProperty, ...prev]);
    setSelectedProperty(newProperty);

    // Confetti celebration on asset onboarded
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#10b981', '#ffffff', '#3b82f6'],
    });
  }, []);

  const deleteProperty = useCallback((id: string) => {
    setProperties((prev) => {
      const filtered = prev.filter((p) => p.id !== id);
      return filtered;
    });
    setSelectedProperty((prev) => {
      if (prev.id === id) {
        const remaining = properties.filter((p) => p.id !== id);
        return remaining[0] || INITIAL_PROPERTIES[0];
      }
      return prev;
    });
  }, [properties]);

  const selectProperty = useCallback((property: CommercialProperty) => {
    setSelectedProperty(property);
  }, []);

  return {
    properties,
    selectedProperty,
    updateProperty,
    addProperty,
    deleteProperty,
    selectProperty,
    setSelectedProperty,
    setProperties,
  };
}
