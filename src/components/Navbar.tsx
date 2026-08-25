import React, { useState } from 'react';
import { 
  Building2, 
  BarChart3, 
  Layers, 
  GitCompare, 
  FileText, 
  Plus, 
  Sparkles, 
  Home,
  Bot,
  User,
  LogOut,
  KeyRound,
  Compass,
  ChevronDown
} from 'lucide-react';
import { CurrencyConfig } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { UserSession } from './AuthModal';

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
  currentCurrency: CurrencyConfig;
  setCurrency: (c: CurrencyConfig) => void;
  currencies: CurrencyConfig[];
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
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/10 no-print font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand with Diamond Emblem */}
          <div className="flex items-center gap-3.5 cursor-pointer" onClick={onOpenWelcome}>
            <div className="w-6 h-6 border-2 border-gold rotate-45 flex items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 bg-gold" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-sm sm:text-base tracking-[0.25em] uppercase text-white">
                  {t.brandName}
                </span>
              </div>
              <span className="hidden sm:block text-[8px] tracking-[0.25em] text-neutral-500 uppercase font-mono-num">
                {t.brandTagline}
              </span>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl glass border border-white/10">
            <button
              id="nav-tab-portfolio"
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-2 rounded-lg text-[11px] uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'portfolio'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.navPortfolio}</span>
            </button>

            <button
              id="nav-tab-calculator"
              onClick={() => setActiveTab('calculator')}
              className={`px-4 py-2 rounded-lg text-[11px] uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'calculator'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{t.navCalculator}</span>
              {selectedPropertyName && (
                <span className="px-1.5 py-0.5 rounded bg-black/20 text-[9px] truncate max-w-[80px] normal-case font-mono-num">
                  {selectedPropertyName}
                </span>
              )}
            </button>

            <button
              id="nav-tab-sensitivity"
              onClick={() => setActiveTab('sensitivity')}
              className={`px-4 py-2 rounded-lg text-[11px] uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'sensitivity'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.navSensitivity}</span>
            </button>

            <button
              id="nav-tab-comparator"
              onClick={() => setActiveTab('comparator')}
              className={`px-4 py-2 rounded-lg text-[11px] uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'comparator'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>{t.navComparator}</span>
            </button>
          </nav>

          {/* Action Buttons & User / Demo Status */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Switcher Toggle */}
            <LanguageToggle />

            {/* Workflow Tour Button */}
            <button
              id="nav-workflow-tour-btn"
              onClick={onOpenWorkflowTour}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gold/30 hover:border-gold text-gold text-xs font-semibold uppercase tracking-wider transition-all hover:bg-gold/10 cursor-pointer"
              title="Ver Flujo de Trabajo"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Tour</span>
            </button>

            {/* AI Advisor Button */}
            <button
              id="nav-advisor-btn"
              onClick={onOpenAdvisorModal}
              className="px-3 py-2 rounded-lg glass-gold text-gold border border-gold/40 text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer hover:bg-gold/10"
              title={t.navAdvisor}
            >
              <Bot className="w-3.5 h-3.5 text-gold" />
              <span className="hidden sm:inline">{t.navAdvisor}</span>
            </button>

            {/* Executive Report Button */}
            <button
              id="nav-report-btn"
              onClick={onOpenExecutiveReport}
              className="px-3 py-2 rounded-lg border border-white/20 hover:border-gold/50 text-[#E5E5E5] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer hover:bg-white/5"
            >
              <FileText className="w-3.5 h-3.5 text-gold" />
              <span className="hidden sm:inline">{t.navExecutiveReport}</span>
            </button>

            {/* Add Property Button */}
            <button
              id="nav-add-property-btn"
              onClick={onOpenAddModal}
              className="px-3.5 sm:px-4 py-2 rounded-lg bg-gold hover:bg-white text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#C5A059]/20"
            >
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
              <span className="hidden md:inline">{t.navNewProperty}</span>
            </button>

            {/* User Session Profile or Login CTA */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg bg-white/5 border border-gold/40 hover:border-gold text-xs transition-all cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-gold text-black font-bold flex items-center justify-center text-[10px]">
                    {user.name.charAt(0)}
                  </div>
                  <div className="text-left hidden md:block max-w-[110px]">
                    <div className="text-white text-[11px] font-semibold truncate leading-tight">
                      {user.name.split(' ')[0]}
                    </div>
                    <div className="text-neutral-400 text-[8px] truncate leading-tight">
                      {user.organization}
                    </div>
                  </div>
                  <ChevronDown className="w-3 h-3 text-neutral-400" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-64 rounded-xl bg-[#0D0D0D] border border-white/15 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="pb-3 border-b border-white/10">
                      <div className="font-semibold text-white text-xs">{user.name}</div>
                      <div className="text-[10px] text-neutral-400 truncate">{user.email}</div>
                      <div className="text-[9px] text-gold font-mono-num mt-1">{user.organization}</div>
                    </div>
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        onSignOut();
                      }}
                      className="w-full mt-2.5 px-3 py-2 rounded-lg text-xs text-red-400 hover:bg-red-500/10 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>{t.authSignOut}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                id="nav-login-cta-btn"
                onClick={onOpenAuth}
                className="px-3 sm:px-3.5 py-2 rounded-lg bg-gold/10 hover:bg-gold hover:text-black border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.authTabLogin}</span>
              </button>
            )}

            {/* Return to Welcome Screen */}
            <button
              id="nav-welcome-screen-btn"
              onClick={onOpenWelcome}
              className="p-2 rounded-lg border border-white/10 hover:border-gold text-neutral-400 hover:text-gold transition-colors cursor-pointer"
              title={t.navReturnHome}
            >
              <Home className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1 border-t border-white/10 scrollbar-none">
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap uppercase tracking-wider ${
              activeTab === 'portfolio' ? 'bg-gold text-black font-bold' : 'text-neutral-400'
            }`}
          >
            {t.navPortfolio}
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap uppercase tracking-wider ${
              activeTab === 'calculator' ? 'bg-gold text-black font-bold' : 'text-neutral-400'
            }`}
          >
            {t.navCalculator}
          </button>
          <button
            onClick={() => setActiveTab('sensitivity')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap uppercase tracking-wider ${
              activeTab === 'sensitivity' ? 'bg-gold text-black font-bold' : 'text-neutral-400'
            }`}
          >
            {t.navSensitivity}
          </button>
          <button
            onClick={() => setActiveTab('comparator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap uppercase tracking-wider ${
              activeTab === 'comparator' ? 'bg-gold text-black font-bold' : 'text-neutral-400'
            }`}
          >
            {t.navComparator}
          </button>
        </div>
      </div>
    </header>
  );
};

