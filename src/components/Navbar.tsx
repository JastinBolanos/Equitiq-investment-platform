import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  BarChart3, 
  Layers, 
  GitCompare, 
  FileText, 
  Plus, 
  Home,
  Bot,
  LogOut,
  KeyRound,
  Compass,
  Menu,
  X,
  Globe,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { CurrencyConfig } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { UserSession } from './AuthModal';
import { EquitiqLogo } from './common/EquitiqLogo';

interface NavbarProps {
  activeTab: 'portfolio' | 'calculator' | 'sensitivity' | 'comparator';
  setActiveTab: (tab: 'portfolio' | 'calculator' | 'sensitivity' | 'comparator') => void;
  onOpenWelcome: () => void;
  onOpenAddModal: () => void;
  onOpenExecutiveReport: () => void;
  onOpenAdvisorModal: () => void;
  onOpenAuth: () => void;
  onOpenWorkflowTour: () => void;
  user: UserSession | null;
  onSignOut: () => void;
  currentCurrency?: CurrencyConfig;
  setCurrency?: (c: CurrencyConfig) => void;
  currencies?: CurrencyConfig[];
  selectedPropertyName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenWelcome,
  onOpenAddModal,
  onOpenExecutiveReport,
  onOpenAdvisorModal,
  onOpenAuth,
  onOpenWorkflowTour,
  user,
  onSignOut,
  selectedPropertyName,
}) => {
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on Escape key or when route changes
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const handleTabChange = (tab: 'portfolio' | 'calculator' | 'sensitivity' | 'comparator') => {
    setActiveTab(tab);
    setDrawerOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 no-print font-sans select-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Main sleek, compact navbar row */}
          <div className="flex items-center justify-between h-13 sm:h-14 gap-2 sm:gap-4">
            
            {/* 1. Left: Brand Animated Rotating Logo & Title */}
            <div 
              id="nav-brand-logo"
              className="flex items-center flex-shrink-0"
              onClick={onOpenWelcome}
              title={t.navReturnHome}
            >
              <EquitiqLogo 
                size="sm" 
                showSubtitle={true}
                subtitleText="INSTITUTIONAL REAL ESTATE INTELLIGENCE"
                className="py-1"
                interactive={true}
              />
            </div>

            {/* 2. Center: Compact, perfectly fitted primary tab box (Desktop / Laptop) */}
            <nav className="hidden md:flex items-center gap-0.5 p-0.5 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md flex-shrink-0 shadow-inner">
              <button
                id="nav-tab-portfolio"
                onClick={() => handleTabChange('portfolio')}
                className={`px-2.5 lg:px-3 py-1 rounded-md text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap leading-none ${
                  activeTab === 'portfolio'
                    ? 'bg-gold text-black font-bold shadow-sm shadow-gold/30'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{t.navPortfolio}</span>
              </button>

              <button
                id="nav-tab-calculator"
                onClick={() => handleTabChange('calculator')}
                className={`px-2.5 lg:px-3 py-1 rounded-md text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap leading-none ${
                  activeTab === 'calculator'
                    ? 'bg-gold text-black font-bold shadow-sm shadow-gold/30'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{t.navCalculator}</span>
                {selectedPropertyName && (
                  <span className="px-1 py-0.5 rounded bg-black/30 text-[8.5px] truncate max-w-[65px] lg:max-w-[85px] normal-case font-mono-num border border-white/10 leading-none">
                    {selectedPropertyName}
                  </span>
                )}
              </button>

              <button
                id="nav-tab-sensitivity"
                onClick={() => handleTabChange('sensitivity')}
                className={`px-2.5 lg:px-3 py-1 rounded-md text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap leading-none ${
                  activeTab === 'sensitivity'
                    ? 'bg-gold text-black font-bold shadow-sm shadow-gold/30'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{t.navSensitivity}</span>
              </button>

              <button
                id="nav-tab-comparator"
                onClick={() => handleTabChange('comparator')}
                className={`px-2.5 lg:px-3 py-1 rounded-md text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap leading-none ${
                  activeTab === 'comparator'
                    ? 'bg-gold text-black font-bold shadow-sm shadow-gold/30'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <GitCompare className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{t.navComparator}</span>
              </button>
            </nav>

            {/* 3. Right: Compact fitted action boxes & Hamburger Menu */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              
              {/* Primary Action: Nuevo Inmueble (Clean, fitted compact box) */}
              <button
                id="nav-add-property-btn"
                onClick={onOpenAddModal}
                className="px-2.5 sm:px-3 py-1 sm:py-1.2 rounded-md bg-gold hover:bg-white text-black font-bold text-[11px] uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer shadow-sm shadow-gold/20 flex-shrink-0 active:scale-95 leading-none"
                title={t.navNewProperty}
              >
                <Plus className="w-3 h-3 stroke-[2.5]" />
                <span className="hidden sm:inline">{t.navNewProperty}</span>
                <span className="inline sm:hidden">Inmueble</span>
              </button>

              {/* User Account Quick State (if logged in) */}
              {user && (
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="hidden md:flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-md bg-white/5 border border-gold/30 hover:border-gold text-xs transition-all cursor-pointer leading-none"
                  title={`Usuario: ${user.name}`}
                >
                  <div className="w-4.5 h-4.5 rounded-full bg-gold text-black font-bold flex items-center justify-center text-[9.5px]">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-white text-[10.5px] font-semibold truncate max-w-[70px]">
                    {user.name.split(' ')[0]}
                  </span>
                </button>
              )}

              {/* 3 Lines Hamburger Menu Button (Fitted compact box) */}
              <button
                id="nav-drawer-toggle-btn"
                onClick={() => setDrawerOpen(true)}
                className="flex items-center gap-1 px-2 py-1 rounded-md border border-white/20 hover:border-gold text-neutral-200 hover:text-gold bg-white/[0.03] hover:bg-gold/10 transition-all cursor-pointer flex-shrink-0 leading-none"
                aria-label="Abrir menú de herramientas y opciones"
                title="Menú y Herramientas"
              >
                <Menu className="w-3.5 h-3.5 text-gold stroke-[2.5]" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-300">
                  Menú
                </span>
              </button>
            </div>
          </div>

          {/* Secondary Tab Strip for Mobile / Tablet (< md) */}
          <div className="flex md:hidden overflow-x-auto py-1.5 gap-1 border-t border-white/10 scrollbar-none items-center">
            <button
              onClick={() => handleTabChange('portfolio')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap uppercase tracking-wider flex items-center gap-1 transition-all flex-shrink-0 leading-none ${
                activeTab === 'portfolio' 
                  ? 'bg-gold text-black font-bold shadow-sm' 
                  : 'text-neutral-300 hover:text-white bg-white/5'
              }`}
            >
              <Building2 className="w-3 h-3" />
              <span>{t.navPortfolio}</span>
            </button>

            <button
              onClick={() => handleTabChange('calculator')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap uppercase tracking-wider flex items-center gap-1 transition-all flex-shrink-0 leading-none ${
                activeTab === 'calculator' 
                  ? 'bg-gold text-black font-bold shadow-sm' 
                  : 'text-neutral-300 hover:text-white bg-white/5'
              }`}
            >
              <BarChart3 className="w-3 h-3" />
              <span>{t.navCalculator}</span>
              {selectedPropertyName && (
                <span className="px-1 rounded bg-black/20 text-[8px] truncate max-w-[55px] normal-case font-mono-num">
                  {selectedPropertyName}
                </span>
              )}
            </button>

            <button
              onClick={() => handleTabChange('sensitivity')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap uppercase tracking-wider flex items-center gap-1 transition-all flex-shrink-0 leading-none ${
                activeTab === 'sensitivity' 
                  ? 'bg-gold text-black font-bold shadow-sm' 
                  : 'text-neutral-300 hover:text-white bg-white/5'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>{t.navSensitivity}</span>
            </button>

            <button
              onClick={() => handleTabChange('comparator')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap uppercase tracking-wider flex items-center gap-1 transition-all flex-shrink-0 leading-none ${
                activeTab === 'comparator' 
                  ? 'bg-gold text-black font-bold shadow-sm' 
                  : 'text-neutral-300 hover:text-white bg-white/5'
              }`}
            >
              <GitCompare className="w-3 h-3" />
              <span>{t.navComparator}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Elegant Side Drawer (Las tres líneas) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden no-print animate-in fade-in duration-200">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Slide-out Panel */}
          <div 
            ref={drawerRef}
            className="absolute inset-y-0 right-0 max-w-sm w-full bg-[#0D0D0D] border-l border-white/15 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
          >
            {/* Drawer Top Header */}
            <div>
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                <EquitiqLogo 
                  size="xs" 
                  showSubtitle={true}
                  subtitleText="CRE INTELLIGENCE PLATFORM"
                  interactive={true}
                />

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1 rounded-md border border-white/10 hover:border-gold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Cerrar menú"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-4 space-y-4">
                
                {/* 1. Herramientas Especiales & AI */}
                <div>
                  <div className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-gold font-mono-num mb-2 px-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span>Herramientas Avanzadas</span>
                  </div>

                  <div className="space-y-1.5">
                    {/* Asesor IA */}
                    <button
                      onClick={() => {
                        setDrawerOpen(false);
                        onOpenAdvisorModal();
                      }}
                      className="w-full p-2.5 rounded-lg bg-white/[0.03] hover:bg-gold/10 border border-gold/30 hover:border-gold flex items-center justify-between text-left transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1">
                            <span>{t.navAdvisor}</span>
                            <span className="px-1 py-0.2 rounded bg-gold text-black text-[8px] font-bold">AI</span>
                          </div>
                          <div className="text-[10px] text-neutral-400">
                            Análisis cuantitativo con Gemini
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-gold transition-colors" />
                    </button>

                    {/* Memorando Ejecutivo */}
                    <button
                      onClick={() => {
                        setDrawerOpen(false);
                        onOpenExecutiveReport();
                      }}
                      className="w-full p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-gold/50 flex items-center justify-between text-left transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded bg-white/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            {t.navExecutiveReport}
                          </div>
                          <div className="text-[10px] text-neutral-400">
                            Teasers para comités de inversión
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-gold transition-colors" />
                    </button>

                    {/* Workflow Tour */}
                    <button
                      onClick={() => {
                        setDrawerOpen(false);
                        onOpenWorkflowTour();
                      }}
                      className="w-full p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-gold/50 flex items-center justify-between text-left transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded bg-white/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            Workflow Tour Guiado
                          </div>
                          <div className="text-[10px] text-neutral-400">
                            Guía del proceso de underwriting
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-gold transition-colors" />
                    </button>
                  </div>
                </div>

                {/* 2. Preferencias & Idioma */}
                <div>
                  <div className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-neutral-400 font-mono-num mb-2 px-1">
                    Configuración & Idioma
                  </div>
                  
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-gold" />
                      <span className="text-xs font-medium text-neutral-300">Idioma</span>
                    </div>
                    <LanguageToggle variant="full" />
                  </div>
                </div>

                {/* 3. Acciones Globales */}
                <div className="space-y-1.5 pt-1">
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenAddModal();
                    }}
                    className="w-full py-2.5 rounded-lg bg-gold hover:bg-white text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-gold/20 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{t.navNewProperty}</span>
                  </button>

                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenWelcome();
                    }}
                    className="w-full py-2 rounded-lg border border-white/15 hover:border-gold text-neutral-300 hover:text-gold text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>{t.navReturnHome}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer: User Session Management */}
            <div className="p-4 border-t border-white/10 bg-black/60">
              {user ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gold text-black font-bold flex items-center justify-center text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1">
                          <span>{user.name}</span>
                          <ShieldCheck className="w-3 h-3 text-gold" />
                        </div>
                        <div className="text-[9.5px] text-neutral-400 truncate max-w-[150px]">
                          {user.email}
                        </div>
                      </div>
                    </div>
                    <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-gold/10 text-gold border border-gold/30 font-mono-num">
                      {user.role}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onSignOut();
                    }}
                    className="w-full py-1.5 rounded-md text-xs text-red-400 border border-red-500/30 hover:bg-red-500/10 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>{t.authSignOut}</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-gold hover:text-black border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>{t.authTabLogin}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
