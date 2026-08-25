import React from 'react';
import { Building2, ArrowUpRight, X, MapPin } from 'lucide-react';
import { CommercialProperty } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface PropertyDetailHeaderProps {
  property: CommercialProperty;
  activeImage: string;
  allImages: string[];
  selectedImageIndex: number;
  onSelectImageIndex: (index: number) => void;
  onClose: () => void;
  onSelectForAnalysis: (property: CommercialProperty) => void;
}

export const PropertyDetailHeader: React.FC<PropertyDetailHeaderProps> = ({
  property,
  activeImage,
  allImages,
  selectedImageIndex,
  onSelectImageIndex,
  onClose,
  onSelectForAnalysis,
}) => {
  const { t, translateCategory, language } = useLanguage();

  return (
    <>
      {/* Top Header Bar */}
      <div className="p-4 sm:p-5 bg-[#050505] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl glass-gold text-gold flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded glass-gold text-gold text-[9px] font-mono-num font-bold uppercase tracking-wider">
                {translateCategory(property.category)}
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] text-neutral-300 font-mono-num border border-white/10">
                {t.portfolioClass} {property.classRating}
              </span>
              <span className="text-[10px] text-neutral-500 font-mono-num">
                ID: {property.code}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-white tracking-tight truncate max-w-md sm:max-w-xl">
              {property.name}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onSelectForAnalysis(property);
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-gold hover:bg-white text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold/20 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <span>{t.modalModelInDcf}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Gallery Banner */}
      <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-950">
        <img
          src={activeImage}
          alt={property.name}
          className="w-full h-full object-cover transition-all duration-500"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

        {/* Bottom location & price tags on hero */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <p className="text-xs text-neutral-200 flex items-center gap-1.5 font-light">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>
                {property.address}, {property.city}, {property.country}
              </span>
            </p>
            <div className="flex items-center gap-3 mt-1.5 text-xs font-mono-num">
              <span className="text-neutral-400">
                {t.portfolioYearBuilt}: <strong className="text-white">{property.yearBuilt}</strong>
              </span>
              {property.yearRenovated && (
                <span className="text-neutral-400">
                  • {language === 'es' ? 'Remodelación' : 'Renovation'}:{' '}
                  <strong className="text-gold">{property.yearRenovated}</strong>
                </span>
              )}
              <span className="text-neutral-400">
                • WALT: <strong className="text-emerald-400">{property.waltYears} {t.reportYears}</strong>
              </span>
            </div>
          </div>

          {/* Thumbnail Switcher */}
          {allImages.length > 1 && (
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-lg border border-white/10">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectImageIndex(idx)}
                  className={`w-10 h-7 rounded overflow-hidden border transition-all cursor-pointer ${
                    selectedImageIndex === idx
                      ? 'border-gold scale-105 shadow-md shadow-gold/30'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
