import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  Layers, 
  Landmark, 
  PieChart, 
  CheckCircle2, 
  Coins, 
  Compass,
  FileSpreadsheet,
  ArrowUpRight,
  Lock,
  Play,
  HelpCircle,
  KeyRound
} from 'lucide-react';
import { CommercialProperty } from '../types';
import { calculatePropertyFinancials, formatCurrency, formatPercent, formatNumber } from '../utils/financialCalculations';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface WelcomeScreenProps {
  onEnter: (targetTab?: 'portfolio' | 'calculator' | 'sensitivity' | 'comparator') => void;
  properties: CommercialProperty[];
  onSelectPropertyForAnalysis: (property: CommercialProperty) => void;
  onOpenAuth: () => void;
  onOpenWorkflowTour: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onEnter,
  properties,
  onSelectPropertyForAnalysis,
  onOpenAuth,
  onOpenWorkflowTour,
}) => {
  const { t, translateCategory } = useLanguage();

  const totalPortfolioValue = properties.reduce((acc, p) => acc + p.purchasePrice, 0);
  const totalNOI = properties.reduce((acc, p) => acc + calculatePropertyFinancials(p).netOperatingIncomeAnnual, 0);
  const averageCapRate = totalPortfolioValue > 0 ? (totalNOI / totalPortfolioValue) * 100 : 7.85;
  const averageOccupancy = properties.reduce((acc, p) => acc + p.occupancyRate, 0) / (properties.length || 1);
  const averageWalt = properties.reduce((acc, p) => acc + p.waltYears, 0) / (properties.length || 1);

  // First property for simulator teaser
  const featuredProp = properties[0];
  const featuredFin = featuredProp ? calculatePropertyFinancials(featuredProp) : null;

  return (
    <div id="equitiq-welcome-screen" className="relative min-h-screen w-full bg-[#050505] text-[#E5E5E5] overflow-x-hidden flex flex-col justify-between font-sans">
      {/* Background Architectural Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Gold Radial Ambient */}
        <div 
          className="absolute bottom-0 right-0 w-[60vw] h-[60vh] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom right, #C5A059 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -top-32 left-1/3 w-[500px] h-[500px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle at top center, #C5A059 0%, transparent 65%)' }}
        />
        
        {/* Subtle Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }} 
        />
      </div>

      {/* Top Brand Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-4">
          {/* Sophisticated Diamond Logo Emblem */}
          <div className="w-7 h-7 border-2 border-gold rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gold" />
          </div>
          <div>
            <span className="font-sans text-xs tracking-[0.4em] uppercase font-semibold text-gold">
              EQUITIQ COMMERCIAL
            </span>
            <span className="block text-[9px] tracking-[0.25em] text-neutral-500 uppercase font-mono-num">
              {t.welcomeTag}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageToggle />

          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs text-neutral-300 font-mono-num">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {t.terminalStatus}
          </div>

          <button
            id="welcome-workflow-tour-btn-top"
            onClick={onOpenWorkflowTour}
            className="hidden sm:flex items-center gap-1.5 border border-gold/30 px-3.5 py-2 rounded-lg text-xs font-sans font-medium text-gold hover:bg-gold/10 transition-all cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Tour del Flujo de Trabajo</span>
          </button>

          <button
            id="welcome-enter-auth-btn-top"
            onClick={onOpenAuth}
            className="bg-gold text-black px-5 py-2 font-sans text-xs tracking-widest font-bold uppercase hover:bg-white transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-gold/20"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>{t.authTabLogin}</span>
          </button>
        </div>
      </header>

      {/* Main Hero & Split Layout */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 lg:py-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left relative">
            {/* Watermark */}
            <div className="absolute -top-12 -left-6 text-[160px] sm:text-[220px] font-serif opacity-[0.03] select-none pointer-events-none tracking-tighter">
              EQUITIQ
            </div>

            <div className="z-10">
              {/* Subtle Tag */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 glass text-[10px] tracking-[0.25em] uppercase text-gold font-semibold">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>{t.welcomeTag}</span>
              </div>

              {/* Title with Cormorant Garamond */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-5xl sm:text-7xl lg:text-[88px] leading-[0.9] font-light mb-6 tracking-tight text-white"
              >
                Equiti<span className="italic font-light text-gold">q</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-2xl sm:text-3xl italic font-light max-w-xl text-neutral-300/90 leading-relaxed mb-8"
              >
                {t.welcomeSubtitle}
              </motion.p>
            </div>

            {/* Metrics Quick Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="z-10 flex flex-wrap gap-8 sm:gap-12 py-6 border-y border-white/10 my-4"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1 font-sans">
                  {t.welcomeAumLabel}
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-white">
                  {formatCurrency(totalPortfolioValue, 'USD', true)}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1 font-sans">
                  {t.welcomeCapRateLabel}
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-gold">
                  {formatPercent(averageCapRate, 2)}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1 font-sans">
                  {t.welcomeOccupancyLabel}
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-white">
                  {formatPercent(averageOccupancy, 1)}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1 font-sans">
                  {t.welcomeWaltLabel}
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-white">
                  {averageWalt.toFixed(1)} <span className="text-sm font-sans font-light opacity-60">{t.welcomeYears}</span>
                </span>
              </div>
            </motion.div>

            {/* Action Gateways: Auth Button & Guest Demo Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="z-10 flex flex-col gap-4 pt-4"
            >
              {/* Row 1: Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Button 1: Ingresar al Portal de Inversiones (Abre Pestaña/Modal de Inicio de Sesión y Registro) */}
                <button
                  id="welcome-enter-auth-main"
                  onClick={onOpenAuth}
                  className="bg-gold text-black px-8 sm:px-10 py-4 font-sans text-xs tracking-widest font-bold uppercase transition-all hover:bg-white hover:text-black flex items-center gap-2 cursor-pointer shadow-xl shadow-[#C5A059]/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>{t.welcomeEnterPortal}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>

                {/* Secondary Quick Access Tools */}
                <button
                  id="welcome-enter-calculator-main"
                  onClick={() => onEnter('calculator')}
                  className="border border-white/20 px-6 py-4 font-sans text-xs tracking-widest font-bold uppercase hover:bg-white/5 text-[#E5E5E5] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-gold" />
                  <span>{t.welcomeEnterCalculator}</span>
                </button>

                <button
                  id="welcome-enter-sensitivity-main"
                  onClick={() => onEnter('sensitivity')}
                  className="border border-white/10 px-5 py-4 font-sans text-xs tracking-widest font-medium uppercase hover:bg-white/5 text-neutral-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-gold" />
                  <span>{t.welcomeEnterSensitivity}</span>
                </button>
              </div>

              {/* Block 2: Modern Institutional Guest Demo Card */}
              <div className="mt-3 p-5 sm:p-6 rounded-2xl bg-[#0C0C0C]/90 border border-gold/30 hover:border-gold/60 backdrop-blur-md shadow-2xl space-y-4 transition-all group">
                {/* Header with Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-wider font-mono-num">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span>MODO DEMOSTRACIÓN • ACCESO INVITADO</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-sans">
                    Sin necesidad de registro previo
                  </span>
                </div>

                {/* Content info */}
                <div className="space-y-1.5 text-left">
                  <h3 className="text-base font-bold text-white font-sans flex items-center gap-2">
                    <span>{t.welcomeDemoSectionTitle}</span>
                  </h3>
                  <p className="text-xs text-neutral-300/80 leading-relaxed max-w-xl">
                    {t.welcomeDemoSectionSubtitle}
                  </p>
                </div>

                {/* Clean responsive action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    id="welcome-tour-modal-btn"
                    type="button"
                    onClick={onOpenWorkflowTour}
                    className="py-3 px-4 rounded-xl border border-white/20 hover:border-gold hover:bg-gold/5 text-xs font-semibold text-neutral-200 hover:text-gold transition-all flex items-center justify-center gap-2 cursor-pointer truncate"
                  >
                    <Compass className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="truncate">{t.welcomeWorkflowTourButton}</span>
                  </button>

                  <button
                    id="welcome-enter-demo-btn"
                    type="button"
                    onClick={() => onEnter('portfolio')}
                    className="py-3 px-4 rounded-xl bg-gold hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold/20 hover:scale-[1.01] active:scale-[0.99] truncate"
                  >
                    <Play className="w-3.5 h-3.5 fill-current flex-shrink-0" />
                    <span className="truncate">{t.welcomeDemoButton}</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sophisticated Glass Teaser Widget */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Glass Return Simulator Card */}
            <div className="glass rounded-2xl p-6 sm:p-8 bg-[#0A0A0A]/70 border border-white/10 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl italic text-white">{t.welcomeDcfTeaserTitle}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400">{t.welcomeDcfTeaserSubtitle}</span>
                </div>
                <span className="bg-gold/10 text-gold border border-gold/30 text-[10px] font-mono-num font-bold px-2.5 py-1 rounded uppercase">
                  {t.welcomeActiveBadge}
                </span>
              </div>

              {featuredProp && featuredFin && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] uppercase tracking-wider opacity-50 font-sans">
                      <span>{t.welcomeAcquisitionValue}</span>
                      <span className="font-mono-num">USD</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-light font-mono-num border-b border-white/10 pb-2 text-white">
                      {featuredProp.purchasePrice.toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] uppercase tracking-wider opacity-50 font-sans">
                      <span>{t.welcomeNetOperatingIncome}</span>
                      <span className="font-mono-num">USD</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-light font-mono-num border-b border-white/10 pb-2 text-gold">
                      {Math.round(featuredFin.netOperatingIncomeAnnual).toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                      <span className="block text-[10px] uppercase opacity-40 mb-1 font-sans">{t.welcomeEntryCapRate}</span>
                      <span className="text-xl font-semibold font-mono-num text-white">
                        {formatPercent(featuredFin.acquisitionCapRate, 2)}
                      </span>
                    </div>
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                      <span className="block text-[10px] uppercase opacity-40 mb-1 font-sans">{t.welcomeCashOnCash}</span>
                      <span className="text-xl font-semibold font-mono-num text-gold">
                        {formatPercent(featuredFin.cashOnCashReturn, 2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectPropertyForAnalysis(featuredProp);
                      onEnter('calculator');
                    }}
                    className="w-full mt-2 py-3 rounded-lg bg-neutral-900 hover:bg-gold hover:text-black border border-white/10 hover:border-gold text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.welcomeAnalyzeFullDcf}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Latest Properties Quick Showcase */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.25em] opacity-40 text-left font-sans">
                {t.welcomeLatestProperties}
              </h4>
              <div className="space-y-2.5">
                {properties.slice(0, 3).map((p) => {
                  const fin = calculatePropertyFinancials(p);
                  return (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectPropertyForAnalysis(p);
                        onEnter('calculator');
                      }}
                      className="flex items-center gap-3.5 glass p-3 rounded-xl hover:border-gold/50 transition-all cursor-pointer group"
                    >
                      <img
                        src={p.imageUrl}
                        alt=""
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
                        }}
                      />
                      <div className="flex-grow min-w-0">
                        <div className="text-sm font-semibold text-white truncate group-hover:text-gold transition-colors">
                          {p.name}
                        </div>
                        <div className="text-[10px] opacity-40 truncate">
                          {p.city}, {p.country} • {translateCategory(p.category)}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs font-bold text-gold font-mono-num">
                          {formatPercent(fin.acquisitionCapRate, 2)}
                        </div>
                        <div className="text-[9px] opacity-40 font-mono-num uppercase">{t.colCapRate}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid (Bottom) */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="glass p-6 rounded-xl border border-white/10 hover:border-gold/30 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <FileSpreadsheet className="w-4 h-4 text-gold" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                {t.welcomeFeature1Title}
              </h4>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {t.welcomeFeature1Desc}
            </p>
          </div>

          <div className="glass p-6 rounded-xl border border-white/10 hover:border-gold/30 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-4 h-4 text-gold" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                {t.welcomeFeature2Title}
              </h4>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {t.welcomeFeature2Desc}
            </p>
          </div>

          <div className="glass p-6 rounded-xl border border-white/10 hover:border-gold/30 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                {t.welcomeFeature3Title}
              </h4>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {t.welcomeFeature3Desc}
            </p>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 border border-gold rotate-45" />
          <span className="font-serif italic text-gold text-sm">Equitiq Commercial Real Estate</span>
          <span>• {t.welcomeTag}</span>
        </div>
        <div className="flex items-center gap-6 text-neutral-400 text-[11px] uppercase tracking-wider font-mono-num">
          <span className="flex items-center gap-1.5 text-gold">
            <CheckCircle2 className="w-3.5 h-3.5" /> {t.welcomeFooterEngine}
          </span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
};
