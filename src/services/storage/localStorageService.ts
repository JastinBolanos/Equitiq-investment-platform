import { CommercialProperty } from '../../types';
import { UserSession } from '../../components/AuthModal';
import { STORAGE_KEYS } from '../../core/constants';
import { INITIAL_PROPERTIES } from '../../data/initialProperties';

/**
 * Storage Service
 * Encapsulates all interactions with browser LocalStorage, ensuring error resilience,
 * version migration, and strongly-typed data persistence.
 */
export class LocalStorageService {
  /**
   * Load properties from localStorage with multi-version fallback and migration support
   */
  static loadProperties(): CommercialProperty[] {
    try {
      const savedV3 =
        localStorage.getItem(STORAGE_KEYS.PROPERTIES_V3) ||
        localStorage.getItem(STORAGE_KEYS.PROPERTIES_AURA_V3);

      if (savedV3) {
        const parsed: CommercialProperty[] = JSON.parse(savedV3);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }

      const legacySaved =
        localStorage.getItem(STORAGE_KEYS.PROPERTIES_LEGACY) ||
        localStorage.getItem(STORAGE_KEYS.PROPERTIES_AURA_LEGACY);

      if (legacySaved) {
        const parsed: CommercialProperty[] = JSON.parse(legacySaved);
        const initialMap = new Map(INITIAL_PROPERTIES.map((p) => [p.id, p]));
        const customUserProps = parsed.filter((p) => !initialMap.has(p.id));
        return [...INITIAL_PROPERTIES, ...customUserProps];
      }
    } catch (error) {
      console.error('[LocalStorageService] Failed to load properties:', error);
    }
    return INITIAL_PROPERTIES;
  }

  /**
   * Save properties to localStorage
   */
  static saveProperties(properties: CommercialProperty[]): void {
    try {
      const serialized = JSON.stringify(properties);
      localStorage.setItem(STORAGE_KEYS.PROPERTIES_V3, serialized);
      localStorage.setItem(STORAGE_KEYS.PROPERTIES_LEGACY, serialized);
    } catch (error) {
      console.error('[LocalStorageService] Failed to save properties:', error);
    }
  }

  /**
   * Load active user session
   */
  static loadUserSession(): UserSession | null {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEYS.USER_SESSION) ||
        localStorage.getItem(STORAGE_KEYS.USER_SESSION_LEGACY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('[LocalStorageService] Failed to load user session:', error);
    }
    return null;
  }

  /**
   * Save or clear user session
   */
  static saveUserSession(user: UserSession | null): void {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEYS.USER_SESSION, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEYS.USER_SESSION);
        localStorage.removeItem(STORAGE_KEYS.USER_SESSION_LEGACY);
      }
    } catch (error) {
      console.error('[LocalStorageService] Failed to save user session:', error);
    }
  }
}
