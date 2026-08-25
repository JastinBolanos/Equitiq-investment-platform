import { useState, useEffect, useCallback } from 'react';
import { UserSession } from '../components/AuthModal';
import { LocalStorageService } from '../services/storage/localStorageService';

export function useAuthSession() {
  const [user, setUser] = useState<UserSession | null>(() => {
    return LocalStorageService.loadUserSession();
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Automatically persist user changes
  useEffect(() => {
    LocalStorageService.saveUserSession(user);
  }, [user]);

  const login = useCallback((session: UserSession) => {
    setUser(session);
    setIsAuthModalOpen(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const openAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  return {
    user,
    isAuthenticated: !!user,
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal,
    login,
    logout,
    setUser,
  };
}
