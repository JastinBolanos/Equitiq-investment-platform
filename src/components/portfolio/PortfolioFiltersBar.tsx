import React from 'react';
import { Search, LayoutGrid, Table as TableIcon } from 'lucide-react';
import { PropertyCategory } from '../../types';
import { PROPERTY_CATEGORIES } from '../../core/constants';
import { useLanguage } from '../../context/LanguageContext';

interface PortfolioFiltersBarProps {
  selectedCategory: 'Todas' | PropertyCategory;
  onSelectCategory: (cat: 'Todas' | PropertyCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'grid' | 'table';
  onViewModeChange: (mode: 'grid' | 'table') => void;
}

export const PortfolioFiltersBar: React.FC<PortfolioFiltersBarProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
}) => {
  const { t, translateCategory } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {PROPERTY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gold text-black shadow-md'
                : 'glass text-neutral-400 hover:text-white border border-white/10 hover:border-gold/40'
            }`}
          >
            {translateCategory(cat)}
          </button>
        ))}
      </div>

      {/* Search, Sort & View Switcher */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 sm:w-72">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-lg glass border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold transition-all font-sans"
          />
        </div>

        <div className="flex items-center rounded-lg glass border border-white/10 p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-md transition-colors cursor-pointer ${
              viewMode === 'grid' ? 'bg-gold text-black' : 'text-neutral-400 hover:text-white'
            }`}
            title={t.viewCardTooltip}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange('table')}
            className={`p-2 rounded-md transition-colors cursor-pointer ${
              viewMode === 'table' ? 'bg-gold text-black' : 'text-neutral-400 hover:text-white'
            }`}
            title={t.viewTableTooltip}
          >
            <TableIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
