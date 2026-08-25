import React from 'react';

interface KpiCardProps {
  label: string;
  value: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  highlight?: boolean;
  badge?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  label,
  value,
  subtitle,
  highlight = false,
  badge,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl glass bg-[#0A0A0A]/70 relative overflow-hidden transition-all duration-200 ${
        highlight ? 'border border-gold/40 shadow-lg shadow-gold/5' : 'border border-white/10'
      } ${onClick ? 'cursor-pointer hover:border-gold/50' : ''} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-sans">
          {label}
        </span>
        {badge}
      </div>
      <div
        className={`text-xl sm:text-2xl font-serif font-semibold mt-1 truncate ${
          highlight ? 'text-gold' : 'text-white'
        }`}
      >
        {value}
      </div>
      {subtitle && (
        <span className="text-[10px] text-neutral-500 font-mono-num mt-0.5 block truncate">
          {subtitle}
        </span>
      )}
    </div>
  );
};
