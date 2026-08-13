import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SortOption } from '../../hooks/useProjectFilter';

interface ProjectFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTags: string[];
  toggleTag: (tag: string) => void;
  availableTags: string[];
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
  resultCount: number;
  clearFilters: () => void;
  isFiltering: boolean;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  searchQuery,
  setSearchQuery,
  activeTags,
  toggleTag,
  availableTags,
  sortOption,
  setSortOption,
  resultCount,
  clearFilters,
  isFiltering
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12 space-y-6">
      {/* Search Input Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group"
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects, technologies, or keywords..."
          className="w-full pl-12 pr-12 py-4 bg-white/50 dark:bg-[#111111]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-purple-500 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </motion.div>

      {/* Tags Filter & Sort Dropdown Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-4"
      >
        {/* Top Row: Label & Sort Option */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Filter by Technologies:
          </span>
          
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
            >
              <option value="featured" className="dark:bg-gray-900">Featured First</option>
              <option value="a-z" className="dark:bg-gray-900">A to Z</option>
              <option value="z-a" className="dark:bg-gray-900">Z to A</option>
            </select>
          </div>
        </div>

        {/* Wrapped Tags Cloud (No scroll needed) */}
        <div className="flex flex-wrap items-center gap-2 w-full">
          {availableTags.map((tag) => {
            const isActive = activeTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700'
                    : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Active Filter Chips & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        {/* Chips */}
        <div className="flex flex-wrap items-center gap-2 min-h-[32px]">
          <AnimatePresence>
            {activeTags.map(tag => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1.5 px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium shadow-sm shadow-purple-500/25"
              >
                {tag}
                <button 
                  onClick={() => toggleTag(tag)}
                  className="hover:bg-purple-700 rounded-full p-0.5 transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Status Counter */}
        <div className="flex items-center gap-4 text-sm bg-white/50 dark:bg-[#111111]/80 px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 ml-auto">
          <span className="text-gray-500 dark:text-gray-400">
            Showing <strong className="text-gray-900 dark:text-white">{resultCount}</strong> projects
          </span>
          {isFiltering && (
            <>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
              <button
                onClick={clearFilters}
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
              >
                Clear All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};