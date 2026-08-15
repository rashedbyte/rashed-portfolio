import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export type SortOption = 'featured' | 'newest' | 'oldest' | 'a-z' | 'z-a';

export const useProjectFilter = (projects: any[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  // ট্যাগগুলোকে এখন Array হিসেবে রাখছি যাতে একাধিক সিলেক্ট করা যায়
  const [activeTags, setActiveTags] = useState<string[]>(
    searchParams.get('tags') ? searchParams.get('tags')!.split(',') : []
  );
  const [sortOption, setSortOption] = useState<SortOption>(
    (searchParams.get('sort') as SortOption) || 'featured'
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (activeTags.length > 0) params.set('tags', activeTags.join(','));
    if (sortOption !== 'featured') params.set('sort', sortOption);
    setSearchParams(params, { replace: true });
  }, [searchQuery, activeTags, sortOption, setSearchParams]);

  // প্রজেক্ট থেকে সব ইউনিক ট্যাগ বের করা
  const availableTags = useMemo(() => {
    const allItems = projects.flatMap(p => p.tags || []);
    const uniqueItems = new Set(allItems.filter(Boolean));
    return Array.from(uniqueItems).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let result = projects;

    // Multi-tag filtering (সিলেক্ট করা সব ট্যাগ থাকতে হবে)
    if (activeTags.length > 0) {
      result = result.filter(p => 
        activeTags.every(tag => p.tags && p.tags.includes(tag))
      );
    }

    // Search filtering & Relevance Scoring
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      
      result = result.map(p => {
        let score = 0;
        const title = p.title?.toLowerCase() || '';
        const desc = p.description?.toLowerCase() || '';
        const tags = p.tags ? p.tags.map((t: string) => t.toLowerCase()) : [];

        if (title === query) score += 10;
        else if (title.includes(query)) score += 5;
        if (tags.some((t: string) => t.includes(query))) score += 4;
        if (desc.includes(query)) score += 1;

        return { project: p, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.project);
    } 
    // Sorting (সার্চ না থাকলে ম্যানুয়াল সর্টিং কাজ করবে)
    else {
      result = [...result].sort((a, b) => {
        // আপনার ডেটার 'year' প্রপার্টি ব্যবহার করে সর্টিং
        if (sortOption === 'newest') {
           const yearA = parseInt(a.year) || 0;
           const yearB = parseInt(b.year) || 0;
           return yearB - yearA; // বড় সাল (নতুন) আগে আসবে
        }
        if (sortOption === 'oldest') {
           const yearA = parseInt(a.year) || 0;
           const yearB = parseInt(b.year) || 0;
           return yearA - yearB; // ছোট সাল (পুরোনো) আগে আসবে
        }
        
        if (sortOption === 'a-z') return (a.title || '').localeCompare(b.title || '');
        if (sortOption === 'z-a') return (b.title || '').localeCompare(a.title || '');
        
        // Default: Featured first
        return (b.featured === true ? 1 : 0) - (a.featured === true ? 1 : 0);
      });
    }

    return result;
  }, [projects, activeTags, searchQuery, sortOption]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveTags([]);
    setSortOption('featured');
  };

  return {
    searchQuery,
    setSearchQuery,
    activeTags,
    toggleTag,
    availableTags,
    sortOption,
    setSortOption,
    filteredProjects,
    clearFilters,
    isFiltering: searchQuery !== '' || activeTags.length > 0 || sortOption !== 'featured'
  };
};