import { CurrencyConfig, PropertyCategory } from '../types';

export const CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', symbol: '$', rateToUSD: 1, name: 'USD ($)' },
  { code: 'EUR', symbol: '€', rateToUSD: 0.92, name: 'EUR (€)' },
  { code: 'MXN', symbol: '$', rateToUSD: 17.5, name: 'MXN ($)' },
  { code: 'CLP', symbol: '$', rateToUSD: 940, name: 'CLP ($)' },
  { code: 'COP', symbol: '$', rateToUSD: 3950, name: 'COP ($)' },
];

export const PROPERTY_CATEGORIES: ('Todas' | PropertyCategory)[] = [
  'Todas',
  'Oficinas',
  'Logístico',
  'Retail',
  'Salud & Lab',
  'Uso Mixto',
  'Hospitality',
];

export const STORAGE_KEYS = {
  USER_SESSION: 'equitiq_cre_user_session',
  USER_SESSION_LEGACY: 'aura_cre_user_session',
  PROPERTIES_V3: 'equitiq_cre_properties_v3',
  PROPERTIES_LEGACY: 'equitiq_cre_properties',
  PROPERTIES_AURA_V3: 'aura_cre_properties_v3',
  PROPERTIES_AURA_LEGACY: 'aura_cre_properties',
  LANGUAGE: 'equitiq_cre_language',
  LANGUAGE_LEGACY: 'aura_cre_language',
} as const;
