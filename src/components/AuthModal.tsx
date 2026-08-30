import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Mail, 
  ShieldCheck, 
  Building2, 
  User, 
  ArrowRight, 
  AlertTriangle, 
  KeyRound, 
  Sparkles,
  Eye,
  EyeOff,
  Compass,
  Play,
  RotateCcw,
  CheckCircle2,
  ShieldAlert,
  Clock,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  avatarUrl?: string;
  isDemo?: boolean;
}

interface PendingApplication {
  id: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  ticket: string;
  submittedAt: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessAuth: (user: UserSession) => void;
  onOpenWorkflowTour?: () => void;
  onEnterDemo?: () => void;
  initialTab?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccessAuth,
  onOpenWorkflowTour,
  onEnterDemo,
  initialTab = 'login',
}) => {
  const { t } = useLanguage();
  const [tab, setTab] = useState<'login' | 'register'>(initialTab);
  
  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Authentication Failure / Feedback State
  const [loginError, setLoginError] = useState<{
    show: boolean;
    title: string;
    message: string;
    attempts: number;
  }>({
    show: false,
    title: '',
    message: '',
    attempts: 0,
  });

  // Register Form State
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerOrg, setRegisterOrg] = useState('');
  const [registerRole, setRegisterRole] = useState('FundManager');
  const [registerTicket, setRegisterTicket] = useState('$10M - $50M');
  const [registerPassword, setRegisterPassword] = useState('');
  const [pendingApplication, setPendingApplication] = useState<PendingApplication | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Intentionally structured login verification that reports invalid / unauthorized access as requested
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError({ ...loginError, show: false });

    setTimeout(() => {
      setIsSubmitting(false);

      // Standard login attempt returns an institutional access rejection
      const nextAttempts = loginError.attempts + 1;
      setLoginError({
        show: true,
        title: 'Inicio de Sesión Incorrecto • Credenciales No Válidas',
        message: 'El correo o la contraseña ingresada no corresponden a una cuenta de inversionista acreditado activa en el servidor de producción. Si aún no eres cliente registrado, puedes explorar la plataforma completa en Modo Demostración.',
        attempts: nextAttempts,
      });
    }, 700);
  };

  const handleQuickDemoLogin = (profile: 'fund' | 'family' | 'analyst') => {
    setIsSubmitting(true);
    setLoginError({ ...loginError, show: false });

    setTimeout(() => {
      setIsSubmitting(false);
      let user: UserSession;

      if (profile === 'fund') {
        user = {
          id: 'usr-fund-01',
          name: 'Lic. Carlos Mendoza',
          email: 'carlos.mendoza@equitiqpartners.com',
          organization: 'Equitiq Capital Global REIT',
          role: 'Managing Director & LP Principal',
          isDemo: true,
        };
      } else if (profile === 'family') {
        user = {
          id: 'usr-family-02',
          name: 'Dra. Valentina Silveira',
          email: 'v.silveira@vallefamilyoffice.ch',
          organization: 'Valle & Co. Single Family Office',
          role: 'Chief Investment Officer (CIO)',
          isDemo: true,
        };
      } else {
        user = {
          id: 'usr-analyst-03',
          name: 'Ing. Mateo Arismendi',
          email: 'mateo.arismendi@creintelligence.com',
          organization: 'CRE Capital Advisory Group',
          role: 'Lead Quantitative Underwriter',
          isDemo: true,
        };
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#3b82f6', '#ffffff'],
      });

      onSuccessAuth(user);
      onClose();
    }, 500);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerName || !registerEmail || !registerOrg) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const app: PendingApplication = {
        id: `REQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
        name: registerName,
        email: registerEmail,
        organization: registerOrg,
        role: registerRole === 'FundManager' ? 'Fund Manager' : registerRole,
        ticket: registerTicket,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setPendingApplication(app);
      // Strictly remain in pending / on hold status. NEVER claim to be attended / approved.
    }, 700);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 pt-16 sm:pt-20 md:pt-24 bg-black/85 backdrop-blur-md overflow-y-auto no-print animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Floating Card - Spaced safely from ceiling with top margin and smooth shadow */}
      <div className="relative w-full max-w-lg bg-[#0C0C0C] border border-[#C5A059]/40 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden mb-12 transform transition-all animate-in zoom-in-95 duration-200">
        
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#99732B] via-[#E2C785] to-[#99732B]" />

        {/* Modal Header */}
        <div className="p-6 sm:p-7 pb-4 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-9 h-9 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] flex-shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-sm tracking-[0.2em] uppercase text-white">
                  EQUITIQ
                </span>
                <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-gold/10 text-gold border border-gold/30 font-bold font-mono-num">
                  PORTAL PRIVADO
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-white mt-0.5">
                {t.authModalTitle}
              </h2>
            </div>
          </div>
          
          <p className="text-xs text-neutral-400 leading-relaxed mt-1">
            {t.authModalSubtitle}
          </p>

          {/* Navigation Tabs: Iniciar Sesión vs Registro */}
          <div className="flex items-center gap-2 mt-5 p-1 bg-black/50 rounded-xl border border-white/10">
            <button
              onClick={() => {
                setTab('login');
                setLoginError({ ...loginError, show: false });
              }}
              className={`flex-1 py-2.5 rounded-lg text-xs font-sans tracking-wider font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                tab === 'login'
                  ? 'bg-gold text-black shadow-md shadow-gold/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>{t.authTabLogin}</span>
            </button>
            <button
              onClick={() => {
                setTab('register');
                setLoginError({ ...loginError, show: false });
              }}
              className={`flex-1 py-2.5 rounded-lg text-xs font-sans tracking-wider font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                tab === 'register'
                  ? 'bg-gold text-black shadow-md shadow-gold/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.authTabRegister}</span>
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 space-y-5">
          {tab === 'login' ? (
            /* Login Form with Realistic Institutional Error Feedback */
            <div className="space-y-4">

              {/* Login Error Notification Banner (Appears on incorrect attempt) */}
              {loginError.show && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-red-500/20 text-red-400 flex-shrink-0 mt-0.5">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-2">
                        <span>{loginError.title}</span>
                      </div>
                      <p className="text-[11px] text-neutral-300 leading-relaxed">
                        {loginError.message}
                      </p>
                      
                      {/* Interactive alternatives within error state */}
                      <div className="pt-2 flex flex-wrap gap-2 border-t border-red-500/20 mt-2">
                        {onEnterDemo && (
                          <button
                            type="button"
                            onClick={() => {
                              onClose();
                              onEnterDemo();
                            }}
                            className="px-3 py-1.5 rounded-lg bg-gold text-black text-[11px] font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Entrar en Modo Demostración</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => setTab('register')}
                          className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-[11px] font-semibold hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          Solicitar Acreditación
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-neutral-300 mb-1.5 font-sans">
                    {t.authEmailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className={`w-full bg-[#141414] border ${
                        loginError.show ? 'border-red-500/60 focus:border-red-400' : 'border-white/15 focus:border-gold'
                      } rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold transition-all`}
                      placeholder="inversionista@fondo.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-neutral-300 font-sans">
                      {t.authPasswordLabel}
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setLoginError({
                          show: true,
                          title: 'Restablecimiento de Contraseña Corporativa',
                          message: 'Por protocolos de seguridad SOC-2, el restablecimiento de contraseñas de cuentas institucionales debe ser autorizado por el oficial de cumplimiento de su entidad.',
                          attempts: loginError.attempts + 1,
                        });
                      }}
                      className="text-[10px] text-gold hover:underline cursor-pointer"
                    >
                      {t.authForgotPassword}
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className={`w-full bg-[#141414] border ${
                        loginError.show ? 'border-red-500/60 focus:border-red-400' : 'border-white/15 focus:border-gold'
                      } rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold transition-all`}
                      placeholder="••••••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-400 hover:text-neutral-200">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-gold focus:ring-gold/30"
                    />
                    <span>{t.authRememberMe}</span>
                  </label>
                </div>

                {/* Submit Login Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-gold hover:bg-white text-black font-bold uppercase tracking-widest text-xs py-3.5 rounded-xl shadow-lg shadow-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Verificando Credenciales...</span>
                    </div>
                  ) : (
                    <>
                      <span>{t.authSubmitLogin}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Guest / Demo Alternative Box */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-300 font-sans">
                      ¿No eres cliente aún? Explora sin registrarte
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/40 transition-all flex flex-col gap-2.5">
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">Modo Demostración Interactivo</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">Acceso completo e ilimitado a todos los 32 activos y modelos DCF.</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 w-full pt-1">
                    {onOpenWorkflowTour && (
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onOpenWorkflowTour();
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-white/20 hover:border-gold text-[10px] font-bold uppercase text-neutral-300 hover:text-gold transition-all flex items-center justify-center gap-1 cursor-pointer truncate"
                      >
                        <Compass className="w-3 h-3 text-gold flex-shrink-0" />
                        <span className="truncate">Ver Tour</span>
                      </button>
                    )}

                    {onEnterDemo && (
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onEnterDemo();
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-gold/15 hover:bg-gold text-gold hover:text-black border border-gold/40 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer truncate shadow-sm"
                      >
                        <Play className="w-3 h-3 fill-current flex-shrink-0" />
                        <span className="truncate">Entrar a Demo</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Optional 1-Click Institutional Demo Profiles */}
                <div className="mt-3.5">
                  <div className="text-[9px] uppercase font-bold tracking-wider text-neutral-500 mb-2">
                    O prueba con perfiles de simulación acreditados:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickDemoLogin('fund')}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-left transition-all text-xs group cursor-pointer"
                    >
                      <div className="font-semibold text-white group-hover:text-gold text-[10px] truncate">
                        Equitiq Partners LP
                      </div>
                      <div className="text-[8px] text-neutral-400 truncate">Fund Director</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickDemoLogin('family')}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-left transition-all text-xs group cursor-pointer"
                    >
                      <div className="font-semibold text-white group-hover:text-gold text-[10px] truncate">
                        Valle Family Office
                      </div>
                      <div className="text-[8px] text-neutral-400 truncate">CIO Principal</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickDemoLogin('analyst')}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-left transition-all text-xs group cursor-pointer"
                    >
                      <div className="font-semibold text-white group-hover:text-gold text-[10px] truncate">
                        Lead Underwriter
                      </div>
                      <div className="text-[8px] text-neutral-400 truncate">CRE Analyst Lead</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : pendingApplication ? (
            /* Dedicated Institutional "SOLICITUD EN ESPERA" Confirmation Screen */
            <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
              
              {/* Header Box with Amber / Gold Pending Warning & Status Badge */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-left space-y-2">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider font-mono-num">
                    <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>{t.authPendingStatusBadge}</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono-num">
                    {pendingApplication.submittedAt}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-white tracking-wide">
                    {t.authPendingTitle}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {t.authPendingSubtitle}
                  </p>
                </div>
              </div>

              {/* Application Reference Receipt Card */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/15 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-sans">
                    {t.authPendingFolio}
                  </span>
                  <span className="text-xs font-mono font-bold text-gold">
                    {pendingApplication.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-500 block font-sans">
                      Inversionista
                    </span>
                    <span className="font-semibold text-white truncate block">
                      {pendingApplication.name}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-500 block font-sans">
                      Entidad / Fondo
                    </span>
                    <span className="font-semibold text-white truncate block">
                      {pendingApplication.organization}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-500 block font-sans">
                      Correo Corporativo
                    </span>
                    <span className="text-neutral-300 truncate block text-[11px]">
                      {pendingApplication.email}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-500 block font-sans">
                      {t.authPendingTicket}
                    </span>
                    <span className="font-semibold text-gold truncate block text-[11px]">
                      {pendingApplication.ticket}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">Estado de Trámite:</span>
                  <span className="inline-flex items-center gap-1 text-amber-300 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    En Espera de Dictamen
                  </span>
                </div>
              </div>

              {/* Explanatory Notice: Received but NEVER attended yet */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-left">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  {t.authPendingNotice}
                </p>
              </div>

              {/* Action Buttons while on hold */}
              <div className="space-y-2 pt-1">
                {onEnterDemo && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onEnterDemo();
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-gold hover:bg-white text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-gold/20 hover:scale-[1.01]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t.authPendingExploreDemo}</span>
                  </button>
                )}

                <div className="grid grid-cols-2 gap-2">
                  {onOpenWorkflowTour && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenWorkflowTour();
                      }}
                      className="py-2.5 px-3 rounded-lg border border-white/20 hover:border-gold text-[10px] font-bold uppercase text-neutral-300 hover:text-gold transition-all flex items-center justify-center gap-1.5 cursor-pointer truncate"
                    >
                      <Compass className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span className="truncate">Ver Tour del Flujo</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setPendingApplication(null)}
                    className="py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-semibold text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer truncate"
                  >
                    <RotateCcw className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{t.authPendingNewRequest}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Register / Institutional Onboarding Form */
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-neutral-300 mb-1 font-sans">
                    {t.authFullNameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="w-full bg-[#141414] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold"
                      placeholder="Ej. Santiago Larraín"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-neutral-300 mb-1 font-sans">
                    {t.authOrganizationLabel}
                  </label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={registerOrg}
                      onChange={(e) => setRegisterOrg(e.target.value)}
                      className="w-full bg-[#141414] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold"
                      placeholder="Ej. Santander Real Estate Capital"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-neutral-300 mb-1 font-sans">
                  {t.authEmailLabel}
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold"
                    placeholder="contacto@entidad.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-neutral-300 mb-1 font-sans">
                    {t.authRoleLabel}
                  </label>
                  <select
                    value={registerRole}
                    onChange={(e) => setRegisterRole(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="FundManager">{t.authRoleFundManager}</option>
                    <option value="FamilyOffice">{t.authRoleFamilyOffice}</option>
                    <option value="Underwriter">{t.authRoleUnderwriter}</option>
                    <option value="Institutional">{t.authRoleInstitutional}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-neutral-300 mb-1 font-sans">
                    {t.authTicketSizeLabel}
                  </label>
                  <select
                    value={registerTicket}
                    onChange={(e) => setRegisterTicket(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="$1M - $10M">$1M - $10M USD</option>
                    <option value="$10M - $50M">$10M - $50M USD</option>
                    <option value="$50M - $200M">$50M - $200M USD</option>
                    <option value="$200M+">$200M+ USD (Megafunds)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-neutral-300 mb-1 font-sans">
                  {t.authPasswordLabel}
                </label>
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold"
                    placeholder="Mínimo 8 caracteres corporativos"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gold/5 border border-gold/20 flex items-start gap-2.5 mt-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-[10px] text-neutral-300 leading-normal">
                  {t.authCreateAccountBadge} — Recepción formal de expediente institucional con auditoría KYC previa a la habilitación.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-gold hover:bg-white text-black font-bold uppercase tracking-widest text-xs py-3.5 rounded-xl shadow-lg shadow-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Radicando Expediente de Admisión...</span>
                  </div>
                ) : (
                  <>
                    <span>{t.authSubmitRegister}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Institutional Compliance Seal */}
          <div className="flex items-center justify-center gap-2 pt-1 text-[10px] text-neutral-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.authSecurityBadge}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
