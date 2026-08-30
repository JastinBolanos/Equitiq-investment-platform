import React, { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { CommercialProperty, CurrencyConfig } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { usePortfolio } from './hooks/usePortfolio';
import { useAuthSession } from './hooks/useAuthSession';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Navbar } from './components/Navbar';
import { PortfolioView } from './components/PortfolioView';
import { FinancialCalculator } from './components/FinancialCalculator';
import { SensitivityMatrix } from './components/SensitivityMatrix';
import { AssetComparator } from './components/AssetComparator';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { AddPropertyModal } from './components/AddPropertyModal';
import { ExecutiveReportModal } from './components/ExecutiveReportModal';
import { AiAdvisorModal } from './components/AiAdvisorModal';
import { AuthModal, UserSession } from './components/AuthModal';
import { WorkflowTourModal } from './components/WorkflowTourModal';
import { Sparkles, KeyRound, Compass, X } from 'lucide-react';

const CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', symbol: '$', rateToUSD: 1, name: 'USD ($)' },
  { code: 'EUR', symbol: '€', rateToUSD: 0.92, name: 'EUR (€)' },
  { code: 'MXN', symbol: '$', rateToUSD: 17.5, name: 'MXN ($)' },
  { code: 'CLP', symbol: '$', rateToUSD: 940, name: 'CLP ($)' },
  { code: 'COP', symbol: '$', rateToUSD: 3950, name: 'COP ($)' },
];

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { t } = useLanguage();
  // Always start with the majestic Welcome Screen
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'portfolio' | 'calculator' | 'sensitivity' | 'comparator'>(
    'portfolio'
  );

  // Authentication and Portfolio custom hooks
  const { user, login, logout } = useAuthSession();
  const {
    properties,
    selectedProperty,
    setSelectedProperty,
    updateProperty,
    addProperty,
    deleteProperty,
  } = usePortfolio();

  // Modals UI state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWorkflowTourOpen, setIsWorkflowTourOpen] = useState(false);
  const [showDemoBanner, setShowDemoBanner] = useState(true);
  const [detailModalProperty, setDetailModalProperty] = useState<CommercialProperty | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isExecutiveReportOpen, setIsExecutiveReportOpen] = useState(false);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [currency, setCurrency] = useState<CurrencyConfig>(CURRENCIES[0]);

  // Callbacks memoized for zero-lag interactions
  const handleAddProperty = useCallback((newProp: CommercialProperty) => {
    addProperty(newProp);
    setActiveTab('calculator');

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#10b981', '#ffffff', '#3b82f6'],
    });
  }, [addProperty]);

  const handleEnterFromWelcome = useCallback((
    targetTab: 'portfolio' | 'calculator' | 'sensitivity' | 'comparator' = 'portfolio'
  ) => {
    setShowWelcomeScreen(false);
    setActiveTab(targetTab);
  }, []);

  const handleSuccessAuth = useCallback((authenticatedUser: UserSession) => {
    login(authenticatedUser);
    setShowWelcomeScreen(false);
    setActiveTab('portfolio');
  }, [login]);

  const handleSelectPropertyForAnalysis = useCallback((prop: CommercialProperty) => {
    setSelectedProperty(prop);
    setActiveTab('calculator');
  }, [setSelectedProperty]);

  const handleOpenDetailModal = useCallback((prop: CommercialProperty) => {
    setDetailModalProperty(prop);
  }, []);

  const handleSelectProperty = useCallback((prop: CommercialProperty) => {
    setSelectedProperty(prop);
  }, [setSelectedProperty]);

  const handleOpenAddModal = useCallback(() => {
    setIsAddModalOpen(true);
  }, []);

  const handleOpenExecutiveReport = useCallback(() => {
    setIsExecutiveReportOpen(true);
  }, []);

  const handleOpenAdvisorModal = useCallback(() => {
    setIsAdvisorModalOpen(true);
  }, []);

  const handleOpenAuth = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const handleOpenWorkflowTour = useCallback(() => {
    setIsWorkflowTourOpen(true);
  }, []);

  const handleOpenWelcome = useCallback(() => {
    setShowWelcomeScreen(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#E5E5E5] font-sans selection:bg-[#C5A059]/30 selection:text-[#C5A059] relative">
      {showWelcomeScreen ? (
        <WelcomeScreen
          onEnter={handleEnterFromWelcome}
          properties={properties}
          onSelectPropertyForAnalysis={(prop) => {
            setSelectedProperty(prop);
          }}
          onOpenAuth={handleOpenAuth}
          onOpenWorkflowTour={handleOpenWorkflowTour}
        />
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Main Navigation Bar */}
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenWelcome={handleOpenWelcome}
            onOpenAddModal={handleOpenAddModal}
            onOpenExecutiveReport={handleOpenExecutiveReport}
            onOpenAdvisorModal={handleOpenAdvisorModal}
            onOpenAuth={handleOpenAuth}
            onOpenWorkflowTour={handleOpenWorkflowTour}
            user={user}
            onSignOut={logout}
            currentCurrency={currency}
            setCurrency={setCurrency}
            currencies={CURRENCIES}
            selectedPropertyName={selectedProperty?.name}
          />

          {/* Interactive Demo Mode Banner for Non-Clients / Guests */}
          {!user && showDemoBanner && (
            <div className="bg-gradient-to-r from-[#C5A059]/15 via-black to-[#C5A059]/10 border-b border-gold/30 px-4 py-2.5 sm:py-3 transition-all no-print">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-center sm:text-left">
                  <span className="p-1 rounded bg-gold/20 text-gold flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-neutral-200">
                    <strong className="text-gold font-semibold">{t.demoBannerTitle}:</strong>{' '}
                    <span className="text-neutral-300">{t.demoBannerText}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={handleOpenWorkflowTour}
                    className="px-3 py-1 rounded-lg border border-gold/40 hover:border-gold text-gold text-[11px] font-bold uppercase tracking-wider hover:bg-gold/10 transition-all cursor-pointer flex items-center gap-1"
                  >
                    <Compass className="w-3 h-3" />
                    <span>{t.demoBannerActionTour}</span>
                  </button>

                  <button
                    onClick={handleOpenAuth}
                    className="px-3.5 py-1 rounded-lg bg-gold hover:bg-white text-black text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 shadow-sm"
                  >
                    <KeyRound className="w-3 h-3" />
                    <span>{t.demoBannerActionLogin}</span>
                  </button>

                  <button
                    onClick={() => setShowDemoBanner(false)}
                    className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Ocultar aviso de demostración"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Content Views with Instant Zero-Lag Keep-Alive Switch */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className={activeTab === 'portfolio' ? 'block' : 'hidden'} aria-hidden={activeTab !== 'portfolio'}>
              <PortfolioView
                properties={properties}
                onSelectPropertyForAnalysis={handleSelectPropertyForAnalysis}
                onOpenDetailModal={handleOpenDetailModal}
                onDeleteProperty={deleteProperty}
                onOpenAddModal={handleOpenAddModal}
              />
            </div>

            <div className={activeTab === 'calculator' ? 'block' : 'hidden'} aria-hidden={activeTab !== 'calculator'}>
              <FinancialCalculator
                properties={properties}
                selectedProperty={selectedProperty}
                onUpdateProperty={updateProperty}
                onSelectProperty={handleSelectProperty}
                onOpenExecutiveReport={handleOpenExecutiveReport}
              />
            </div>

            <div className={activeTab === 'sensitivity' ? 'block' : 'hidden'} aria-hidden={activeTab !== 'sensitivity'}>
              <SensitivityMatrix
                properties={properties}
                selectedProperty={selectedProperty}
                onSelectProperty={handleSelectProperty}
              />
            </div>

            <div className={activeTab === 'comparator' ? 'block' : 'hidden'} aria-hidden={activeTab !== 'comparator'}>
              <AssetComparator
                properties={properties}
                onSelectPropertyForAnalysis={handleSelectPropertyForAnalysis}
              />
            </div>
          </main>
        </div>
      )}

      {/* Institutional Modals rendered at root level */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccessAuth={handleSuccessAuth}
        onEnterDemo={() => {
          setIsAuthModalOpen(false);
          setShowWelcomeScreen(false);
          setActiveTab('portfolio');
        }}
        onOpenWorkflowTour={() => {
          setIsAuthModalOpen(false);
          setIsWorkflowTourOpen(true);
        }}
      />

      <WorkflowTourModal
        isOpen={isWorkflowTourOpen}
        onClose={() => setIsWorkflowTourOpen(false)}
        onStartDemo={() => {
          setIsWorkflowTourOpen(false);
          setShowWelcomeScreen(false);
          setActiveTab('portfolio');
        }}
        onOpenAuth={() => {
          setIsWorkflowTourOpen(false);
          setIsAuthModalOpen(true);
        }}
      />

      <PropertyDetailModal
        property={detailModalProperty}
        onClose={() => setDetailModalProperty(null)}
        onSelectForAnalysis={(prop) => {
          setSelectedProperty(prop);
          setActiveTab('calculator');
        }}
      />

      <AddPropertyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProperty={handleAddProperty}
      />

      <ExecutiveReportModal
        property={selectedProperty}
        isOpen={isExecutiveReportOpen}
        onClose={() => setIsExecutiveReportOpen(false)}
      />

      <AiAdvisorModal
        property={selectedProperty}
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
      />
    </div>
  );
}
