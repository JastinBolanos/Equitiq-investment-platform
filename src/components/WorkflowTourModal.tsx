import React from 'react';
import { 
  X, 
  Building2, 
  BarChart3, 
  Layers, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2,
  Lock,
  Play
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WorkflowTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartDemo: () => void;
  onOpenAuth: () => void;
}

export const WorkflowTourModal: React.FC<WorkflowTourModalProps> = ({
  isOpen,
  onClose,
  onStartDemo,
  onOpenAuth,
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-20 pb-16 bg-black/90 backdrop-blur-md overflow-y-auto no-print">
      <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-gold/40 rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Gold Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#99732B] via-[#E2C785] to-[#99732B]" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded bg-gold/10 text-gold border border-gold/30 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Demostración del Flujo de Trabajo Institucional</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">
            {t.workflowTourTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2 leading-relaxed">
            {t.workflowTourSubtitle}
          </p>
        </div>

        {/* 4-Step Institutional Workflow Pipeline */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono-num font-bold px-2 py-0.5 rounded bg-white/5 text-neutral-300">
                  FASE 01
                </span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-gold transition-colors mb-1.5 font-sans">
                {t.workflowStep1Title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.workflowStep1Desc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2 text-[10px] text-neutral-400 font-mono-num">
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">AUM: $640M+</span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">WALT: 9.4 Años</span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Ocupación: 97.4%</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono-num font-bold px-2 py-0.5 rounded bg-white/5 text-neutral-300">
                  FASE 02
                </span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-gold transition-colors mb-1.5 font-sans">
                {t.workflowStep2Title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.workflowStep2Desc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2 text-[10px] text-neutral-400 font-mono-num">
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">TIR (IRR): 14.8%</span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Equity Multiple: 2.1x</span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">DSCR: 1.85x</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono-num font-bold px-2 py-0.5 rounded bg-white/5 text-neutral-300">
                  FASE 03
                </span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-gold transition-colors mb-1.5 font-sans">
                {t.workflowStep3Title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.workflowStep3Desc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2 text-[10px] text-neutral-400 font-mono-num">
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Estrés Vacancia ±15%</span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Cap Rate Salida ±100bps</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono-num font-bold px-2 py-0.5 rounded bg-white/5 text-neutral-300">
                  FASE 04
                </span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-gold transition-colors mb-1.5 font-sans">
                {t.workflowStep4Title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.workflowStep4Desc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2 text-[10px] text-neutral-400 font-mono-num">
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Exportación PDF</span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Inquilinos AAA</span>
                <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Tesis de Inversión</span>
              </div>
            </div>
          </div>

          {/* Highlights Box */}
          <div className="p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Acceso Inmediato en Demostración Interactiva
                </div>
                <div className="text-[11px] text-neutral-300">
                  Puedes interactuar con 17 activos comerciales institucionales, ajustar parámetros en vivo y generar reportes ejecutivos.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 sm:p-8 bg-[#050505] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenAuth();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/5 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-gold" />
            <span>{t.workflowTourLoginBtn}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onStartDemo();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gold hover:bg-white text-black font-bold text-xs uppercase tracking-widest shadow-lg shadow-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-black" />
            <span>{t.workflowTourTryDemoBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
