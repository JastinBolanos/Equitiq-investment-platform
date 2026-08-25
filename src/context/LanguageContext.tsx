import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, TRANSLATIONS } from '../i18n/translations';
import { PropertyCategory } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  translateCategory: (category: PropertyCategory | string) => string;
  translateStatus: (status: string) => string;
  translateIndustry: (industry: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const CATEGORY_TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    'Oficinas': 'Oficinas',
    'Logístico': 'Logístico',
    'Retail': 'Retail',
    'Salud & Lab': 'Salud & Lab',
    'Uso Mixto': 'Uso Mixto',
    'Hospitality': 'Hospitality',
    'Todas': 'Todas',
  },
  en: {
    'Oficinas': 'Offices',
    'Logístico': 'Logistics',
    'Retail': 'Retail',
    'Salud & Lab': 'Healthcare & Labs',
    'Uso Mixto': 'Mixed-Use',
    'Hospitality': 'Hospitality',
    'Todas': 'All',
  },
};

const STATUS_TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    'En Operación': 'En Operación',
    'En Adquisición': 'En Adquisición',
    'Bajo Análisis': 'Bajo Análisis',
    'En Remodelación': 'En Remodelación',
  },
  en: {
    'En Operación': 'Operating',
    'En Adquisición': 'Under Acquisition',
    'Bajo Análisis': 'Under Analysis',
    'En Remodelación': 'Under Renovation',
  },
};

const INDUSTRY_TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    'Servicios Financieros': 'Servicios Financieros',
    'Tecnología & Software': 'Tecnología & Software',
    'Consultoría Global': 'Consultoría Global',
    'E-commerce & Retail': 'E-commerce & Retail',
    'Operador 3PL': 'Operador 3PL',
    'Distribución Farmacéutica': 'Distribución Farmacéutica',
    'Biotecnología & Genómica': 'Biotecnología & Genómica',
    'Farmacéutica Global': 'Farmacéutica Global',
    'Dispositivos Médicos': 'Dispositivos Médicos',
    'Supermercados & Retail': 'Supermercados & Retail',
    'Moda & Calzado': 'Moda & Calzado',
    'Gastronomía Prime': 'Gastronomía Prime',
    'Servicios Profesionales': 'Servicios Profesionales',
    'Manufactura Ligera': 'Manufactura Ligera',
    'Almacenamiento en Frío': 'Almacenamiento en Frío',
  },
  en: {
    'Servicios Financieros': 'Financial Services',
    'Tecnología & Software': 'Tech & Software',
    'Consultoría Global': 'Global Consulting',
    'E-commerce & Retail': 'E-commerce & Retail',
    'Operador 3PL': '3PL Logistics Operator',
    'Distribución Farmacéutica': 'Pharma Distribution',
    'Biotecnología & Genómica': 'Biotech & Genomics',
    'Farmacéutica Global': 'Global Pharma',
    'Dispositivos Médicos': 'Medical Devices',
    'Supermercados & Retail': 'Supermarket & Retail',
    'Moda & Calzado': 'Fashion & Apparel',
    'Gastronomía Prime': 'Prime Gastronomy',
    'Servicios Profesionales': 'Professional Services',
    'Manufactura Ligera': 'Light Industrial',
    'Almacenamiento en Frío': 'Cold Storage',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = (localStorage.getItem('equitiq_cre_language') || localStorage.getItem('aura_cre_language')) as Language;
      if (saved === 'es' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('equitiq_cre_language', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const t = TRANSLATIONS[language];

  const translateCategory = (cat: PropertyCategory | string): string => {
    return CATEGORY_TRANSLATIONS[language][cat] || cat;
  };

  const translateStatus = (status: string): string => {
    return STATUS_TRANSLATIONS[language][status] || status;
  };

  const translateIndustry = (ind: string): string => {
    return INDUSTRY_TRANSLATIONS[language][ind] || ind;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        translateCategory,
        translateStatus,
        translateIndustry,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
