import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = '',
  variant = 'full',
}) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        id="lang-toggle-btn-compact"
        onClick={toggleLanguage}
        className={`px-2.5 py-1.5 rounded-lg glass border border-white/10 hover:border-gold/50 text-xs font-mono-num font-bold transition-all flex items-center gap-1.5 cursor-pointer text-white hover:text-gold ${className}`}
        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        aria-label="Toggle language"
      >
        <Globe className="w-3.5 h-3.5 text-gold" />
        <span className="uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
      </button>
    );
  }

  return (
    <div
      id="lang-toggle-container"
      className={`inline-flex items-center p-0.5 rounded-lg glass border border-white/15 bg-black/40 ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        id="lang-btn-es"
        type="button"
        onClick={() => setLanguage('es')}
        className={`px-2.5 py-1 rounded-md text-[11px] font-mono-num font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
          language === 'es'
            ? 'bg-gold text-black shadow-sm font-extrabold'
            : 'text-neutral-400 hover:text-white hover:bg-white/5'
        }`}
        title="Español"
      >
        <span className="text-[10px]">🇪🇸</span>
        <span>ES</span>
      </button>

      <button
        id="lang-btn-en"
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-md text-[11px] font-mono-num font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
          language === 'en'
            ? 'bg-gold text-black shadow-sm font-extrabold'
            : 'text-neutral-400 hover:text-white hover:bg-white/5'
        }`}
        title="English"
      >
        <span className="text-[10px]">🇺🇸</span>
        <span>EN</span>
      </button>
    </div>
  );
};
