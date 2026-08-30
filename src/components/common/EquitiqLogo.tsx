import React, { memo } from 'react';
import { motion } from 'motion/react';

interface EquitiqLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const EquitiqLogo: React.FC<EquitiqLogoProps> = memo(({
  size = 'md',
  showText = true,
  showSubtitle = true,
  subtitleText,
  className = '',
  onClick,
}) => {
  // Size-specific crisp geometry
  const sizeConfig = {
    xs: {
      box: 'w-[18px] h-[18px] border-[1.2px]',
      innerBox: 'w-[4px] h-[4px]',
      pingSize: 'w-[12px] h-[12px]',
      title: 'text-[10px] tracking-[0.18em]',
      sub: 'text-[6.5px] tracking-[0.14em]',
      gap: 'gap-2',
    },
    sm: {
      box: 'w-[22px] h-[22px] border-[1.5px]',
      innerBox: 'w-[5px] h-[5px]',
      pingSize: 'w-[15px] h-[15px]',
      title: 'text-xs sm:text-[13px] tracking-[0.2em]',
      sub: 'text-[7.5px] tracking-[0.16em]',
      gap: 'gap-2.5',
    },
    md: {
      box: 'w-[26px] h-[26px] border-[1.8px]',
      innerBox: 'w-[6px] h-[6px]',
      pingSize: 'w-[18px] h-[18px]',
      title: 'text-xs sm:text-sm tracking-[0.22em]',
      sub: 'text-[8px] tracking-[0.18em]',
      gap: 'gap-3',
    },
    lg: {
      box: 'w-[32px] h-[32px] border-2',
      innerBox: 'w-[8px] h-[8px]',
      pingSize: 'w-[22px] h-[22px]',
      title: 'text-sm sm:text-base tracking-[0.25em]',
      sub: 'text-[9px] tracking-[0.2em]',
      gap: 'gap-3.5',
    },
    xl: {
      box: 'w-[38px] h-[38px] border-2',
      innerBox: 'w-[9px] h-[9px]',
      pingSize: 'w-[26px] h-[26px]',
      title: 'text-base sm:text-lg tracking-[0.3em]',
      sub: 'text-[10px] tracking-[0.22em]',
      gap: 'gap-4',
    },
  };

  const config = sizeConfig[size];

  return (
    <div
      className={`inline-flex items-center ${config.gap} select-none group/logo transform-gpu ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
      title="EQUITIQ Commercial Real Estate Intelligence"
    >
      {/* Container with hardware acceleration */}
      <div className="relative flex items-center justify-center p-1.5 flex-shrink-0">
        
        {/* 1. Subtle High-End Radial Gold Aura */}
        <div 
          className="absolute inset-0 rounded-full bg-[#C5A059]/15 blur-sm pointer-events-none group-hover/logo:bg-[#C5A059]/30 transition-colors duration-300 transform-gpu" 
        />

        {/* 2. THE CARD (Diamond rotated 45° with luxury metallic card shimmer effect) */}
        <div
          className={`${config.box} border-[#C5A059] bg-gradient-to-br from-[#121212] via-[#080808] to-[#151515] rotate-45 flex items-center justify-center flex-shrink-0 relative overflow-hidden shadow-[0_0_12px_rgba(0,0,0,0.9),inset_0_0_8px_rgba(0,0,0,0.8)] group-hover/logo:border-[#FFE59E] transition-all duration-300 transform-gpu`}
        >
          {/* Metallic Card Diagonal Sheen / Light Reflection Sweep */}
          <motion.div
            animate={{
              x: ['-220%', '220%'],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 1.2,
            }}
            style={{ willChange: 'transform' }}
            className="absolute inset-y-[-100%] w-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 pointer-events-none transform-gpu"
          />

          {/* Border Edge Glint / Secondary Specular Reflection */}
          <motion.div
            animate={{
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 border border-[#FFE59E]/40 pointer-events-none"
          />

          {/* 3. CENTER UPDATE BEACON (Punto de actualización / Live Status Pulse) */}
          <div className="relative flex items-center justify-center z-20">
            
            {/* Live Update Concentric Radar Ping Wave */}
            <motion.div
              animate={{
                scale: [1, 2.8],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeOut',
                repeatDelay: 0.4,
              }}
              style={{ willChange: 'transform, opacity' }}
              className={`absolute ${config.innerBox} bg-[#C5A059] rounded-sm pointer-events-none transform-gpu`}
            />

            {/* Secondary Harmonic Wave */}
            <motion.div
              animate={{
                scale: [1, 2.2],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 0.6,
                repeatDelay: 0.4,
              }}
              style={{ willChange: 'transform, opacity' }}
              className={`absolute ${config.innerBox} bg-white rounded-sm pointer-events-none transform-gpu`}
            />

            {/* The Solid Live Golden Update Node (Pulses rhythmically like a live data stream indicator) */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                backgroundColor: ['#C5A059', '#FFFFFF', '#C5A059'],
                boxShadow: [
                  '0 0 4px #C5A059',
                  '0 0 10px #FFFFFF, 0 0 14px #C5A059',
                  '0 0 4px #C5A059',
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.4,
              }}
              style={{ willChange: 'transform, background-color, box-shadow' }}
              className={`${config.innerBox} rounded-[1px] relative z-30 transform-gpu`}
            />
          </div>
        </div>

      </div>

      {/* Typography Block */}
      {showText && (
        <div className="flex flex-col min-w-0">
          <div className="flex items-center">
            <span
              className={`font-sans font-bold uppercase tracking-[0.22em] transition-colors duration-200 leading-none ${config.title} text-[#C5A059] group-hover/logo:text-white group-hover/logo:drop-shadow-[0_0_8px_rgba(255,224,130,0.6)]`}
            >
              EQUITIQ COMMERCIAL
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`text-neutral-400 uppercase font-mono-num leading-tight mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-200 ${
                config.sub
              } group-hover/logo:text-neutral-200`}
            >
              {subtitleText || 'INSTITUTIONAL REAL ESTATE INTELLIGENCE PLATFORM'}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

EquitiqLogo.displayName = 'EquitiqLogo';
