import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, ChevronLeft, ChevronRight, 
  Folder, LayoutGrid, Code, ChevronDown, Check, SlidersHorizontal
} from 'lucide-react';

// ==========================================
// Types
// ==========================================
interface ProjectFilterProps {
  projects: any[]; 
  totalProjects: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTags: string[];
  toggleTag: (tag: string) => void;
  availableTags: string[];
  sortOption: any; // 👈 এখানে string এর বদলে any করা হয়েছে
  setSortOption: (option: any) => void; // 👈 এখানেও any করা হয়েছে
  resultCount: number;
  clearFilters: () => void;
  isFiltering: boolean;
}

interface Suggestion {
  label: string;
  type: 'Project' | 'Category' | 'Technology';
}

const sortOptions = ['Featured', 'Newest', 'Oldest', 'A-Z', 'Z-A'];

// ==========================================
// Main Component
// ==========================================
export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  projects,
  totalProjects,
  searchQuery,
  setSearchQuery,
  activeTags,
  toggleTag,
  availableTags,
  sortOption,
  setSortOption,
  resultCount,
  clearFilters,
  isFiltering,
}) => {
  // Refs
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const sortContainerRef = useRef<HTMLDivElement>(null);

  // States
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState(searchQuery);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Sync external search query with local input
  useEffect(() => {
    setSearchInputValue(searchQuery);
  }, [searchQuery]);

  // ==========================================
  // Horizontal Scroll Logic
  // ==========================================
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
  };

  useEffect(() => {
    handleScroll(); // Initial check
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [availableTags]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // ==========================================
  // Dynamic Search Suggestions Logic
  // ==========================================
  const suggestions = useMemo(() => {
    if (!searchInputValue.trim()) return [];
    
    const lowerInput = searchInputValue.toLowerCase();
    const results: Suggestion[] = [];
    const seenLabels = new Set<string>();

    projects.forEach(p => {
      // 1. Check Title
      if (p.title.toLowerCase().includes(lowerInput) && !seenLabels.has(p.title)) {
        results.push({ label: p.title, type: 'Project' });
        seenLabels.add(p.title);
      }
      // 2. Check Category
      if (p.category && p.category.toLowerCase().includes(lowerInput) && !seenLabels.has(p.category)) {
        results.push({ label: p.category, type: 'Category' });
        seenLabels.add(p.category);
      }
      // 3. Check Tags
      p.tags?.forEach((t: string) => {
        if (t.toLowerCase().includes(lowerInput) && !seenLabels.has(t)) {
          results.push({ label: t, type: 'Technology' });
          seenLabels.add(t);
        }
      });
    });

    return results.slice(0, 6); // Limit to 6 suggestions for premium feel
  }, [searchInputValue, projects]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
      if (sortContainerRef.current && !sortContainerRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard Navigation for Search
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isSearchFocused || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) {
        handleSuggestionClick(suggestions[selectedIndex].label);
      } else {
        setSearchQuery(searchInputValue);
        setIsSearchFocused(false);
      }
    } else if (e.key === 'Escape') {
      setIsSearchFocused(false);
    }
  };

  const handleSuggestionClick = (value: string) => {
    setSearchInputValue(value);
    setSearchQuery(value);
    setIsSearchFocused(false);
    setSelectedIndex(-1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    setSearchQuery(e.target.value); // Real-time filtering
    setSelectedIndex(-1);
    setIsSearchFocused(true);
  };

  // Helper for text highlight
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="text-purple-600 dark:text-purple-400 font-bold">{part}</span>
          ) : (part)
        )}
      </span>
    );
  };

  const getSuggestionIcon = (type: string) => {
    if (type === 'Project') return <Folder className="w-4 h-4" />;
    if (type === 'Category') return <LayoutGrid className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  return (
    <div className="w-full flex flex-col gap-6 mb-10">
      
      {/* Top Bar: Search & Sort */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between w-full relative z-30">
        
        {/* Search Bar */}
        <div className="relative w-full md:max-w-md" ref={searchContainerRef}>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
            </div>
            <input
              type="text"
              className="w-full pl-11 pr-10 py-3.5 bg-white/80 dark:bg-[#111]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl text-sm text-gray-900 dark:text-white placeholder-gray-500 outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all shadow-sm"
              placeholder="Search projects, tags, or categories..."
              value={searchInputValue}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchFocused(true)}
              onKeyDown={handleKeyDown}
            />
            {searchInputValue && (
              <button
                onClick={() => {
                  setSearchInputValue('');
                  setSearchQuery('');
                }}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Suggestions Dropdown Panel */}
          <AnimatePresence>
            {isSearchFocused && searchInputValue.trim() && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-2xl border border-gray-100 dark:border-white/10 rounded-2xl shadow-xl shadow-purple-900/5 overflow-hidden z-50"
              >
                {suggestions.length > 0 ? (
                  <div className="py-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion.label)}
                        className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                          selectedIndex === index 
                            ? 'bg-purple-50 dark:bg-purple-900/20' 
                            : 'hover:bg-gray-50 dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-md ${
                            selectedIndex === index ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                          }`}>
                            {getSuggestionIcon(suggestion.type)}
                          </div>
                          <span className="text-sm text-gray-800 dark:text-gray-200">
                            {highlightMatch(suggestion.label, searchInputValue)}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500">
                          {suggestion.type}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    No matching suggestions found for <span className="font-semibold text-gray-900 dark:text-gray-200">"{searchInputValue}"</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Custom Sort Dropdown */}
        <div className="relative w-full md:w-48" ref={sortContainerRef}>
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="w-full flex items-center justify-between px-4 py-3.5 bg-white/80 dark:bg-[#111]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl text-sm text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-white/20 transition-all shadow-sm"
          >
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              <span>{sortOption || 'Sort by'}</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-full bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden z-50"
              >
                <div className="py-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortOption(option);
                        setIsSortOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                    >
                      <span className={sortOption === option ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-gray-700 dark:text-gray-300'}>
                        {option}
                      </span>
                      {sortOption === option && <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Technology / Tags Horizontal Scrolling Row */}
      <div className="relative group w-full flex items-center z-20">
        
        {/* Left Arrow */}
        <AnimatePresence>
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={() => scroll('left')}
              className="absolute left-0 -ml-4 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Tags Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-3 py-2 scroll-smooth items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
        >
          {/* Default "All Projects" Chip */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (activeTags.length > 0) clearFilters();
            }}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeTags.length === 0
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-transparent text-white shadow-lg shadow-purple-500/25'
                : 'bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-purple-300 dark:hover:border-purple-700'
            }`}
          >
            All Projects
          </motion.button>

          {/* Available Tags */}
          {availableTags.map((tag) => {
            const isActive = activeTags.includes(tag);
            return (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleTag(tag)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-transparent text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                {tag}
              </motion.button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <AnimatePresence>
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={() => scroll('right')}
              className="absolute right-0 -mr-4 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Active Filters Summary */}
      <AnimatePresence>
        {isFiltering && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap items-center justify-between gap-4 py-2 border-t border-gray-200 dark:border-white/10 mt-2"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-gray-200">
                Showing {resultCount} {resultCount === 1 ? 'project' : 'projects'}
              </span>
              <span className="hidden sm:inline">out of {totalProjects}</span>
              
              {/* Highlight active search if any */}
              {searchQuery && (
                <span className="hidden sm:flex items-center gap-1 ml-2 px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-md">
                  <Search className="w-3 h-3" /> "{searchQuery}"
                </span>
              )}
            </div>

            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-sm font-medium text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 px-3 py-1.5 rounded-lg"
            >
              <X className="w-4 h-4" />
              Clear all filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};