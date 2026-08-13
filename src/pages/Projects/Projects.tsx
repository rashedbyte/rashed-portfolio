import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { useProjectFilter } from '../../hooks/useProjectFilter';
import { ProjectFilter } from '../../components/ProjectFilter/ProjectFilter';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// ==========================================
// 1. Types & Interfaces
// ==========================================
interface ProjectMetric {
  label: string;
  value: string;
}

interface Project {
  title: string;
  description: string;
  image?: string;
  category?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  metrics?: ProjectMetric[];
}

// ==========================================
// 2. SVG Icons (No external dependencies)
// ==========================================
const SparklesIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 3L11.2 8.5L16 10L11.2 11.5L9 17L6.8 11.5L2 10L6.8 8.5L9 3Z"/></svg>
);
const ImageIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
);
const ChevronDownIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9"/></svg>
);
const GithubIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 4.3 4.3 0 0 0 0-3.8s-1.2-.4-3.9 2.4a13.3 13.3 0 0 0-7 0C6.2 3.4 5 3.8 5 3.8a4.3 4.3 0 0 0 0 3.8 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.5 6 6.76a4.8 4.8 0 0 0-1 3.24v4"/></svg>
);
const ExternalLinkIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);
const LayoutGridIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
);

// ==========================================
// 3. Project Card Component
// ==========================================
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [0, 1], [5, -5]);
  const rotateY = useTransform(springX, [0, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    
    x.set(xPos / rect.width);
    y.set(yPos / rect.height);
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    x.set(0.5);
    y.set(0.5);
  };

  const visibleTags = isExpanded ? project.tags : (project.tags || []).slice(0, 3);
  const hiddenTagsCount = (project.tags || []).length - 3;

  return (
    <motion.div
      layout // Added layout for smooth grid reflow during filtering
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      style={{ perspective: 1000 }}
      className="group w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={prefersReducedMotion ? {} : { rotateX, rotateY }}
        className="relative flex flex-col h-full bg-white dark:bg-[#111111] rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-purple-900/10 hover:-translate-y-1"
      >
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-transparent group-hover:border-purple-500/20 dark:group-hover:border-purple-400/30 transition-colors duration-500 z-20" />

        <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden bg-gray-50 dark:bg-gray-900 shrink-0">
          {project.featured && (
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 text-xs font-semibold tracking-wider text-purple-900 dark:text-purple-200 bg-purple-100/80 dark:bg-purple-900/40 backdrop-blur-md rounded-full border border-purple-200/50 dark:border-purple-700/50">
              <SparklesIcon className="w-3 h-3" /> Featured
            </div>
          )}
          {project.category && (
            <div className="absolute top-4 right-4 z-20 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 bg-white/70 dark:bg-black/50 backdrop-blur-md rounded-full border border-white/20 dark:border-gray-700/50">
              {project.category}
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          
          {!project.image || imageError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 opacity-80">
              <ImageIcon className="w-10 h-10 text-gray-400 dark:text-gray-600 mb-2" />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
            />
          )}
        </div>

        <div className="relative z-20 p-6 flex flex-col flex-grow">
          <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors cursor-pointer">
              {project.title}
            </h3>
          </Link>
          
          <p className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {project.description}
          </p>

          <AnimatePresence initial={false}>
            {isExpanded && project.metrics && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-2 gap-3 mb-5 overflow-hidden"
              >
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                    <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">{metric.label}</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{metric.value}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {visibleTags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all hover:-translate-y-0.5">
                {tag}
              </span>
            ))}
            {!isExpanded && hiddenTagsCount > 0 && (
              <span className="px-3 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700">
                +{hiddenTagsCount}
              </span>
            )}
          </div>

          <div className="w-full h-[1px] bg-gray-200 dark:bg-white/10 mb-4" />

          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/btn"
            >
              {isExpanded ? 'Show Less' : 'See More'}
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDownIcon className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
              </motion.span>
            </button>

            <div className="flex gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-all hover:scale-105">
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 bg-gray-100 hover:bg-purple-50 dark:bg-white/5 dark:hover:bg-purple-900/20 rounded-full transition-all hover:scale-105">
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// 4. Main Page Component
// ==========================================
const Projects = () => {
  const {
    searchQuery,
    setSearchQuery,
    activeTags,       // Changed
    toggleTag,        // Changed
    availableTags,    // Changed
    sortOption,       // Added
    setSortOption,    // Added
    filteredProjects,
    clearFilters,
    isFiltering
  } = useProjectFilter(projects);

  // ... (if projects empty logic remains same) ...

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
        </h2>
        <div className="w-20 h-1.5 bg-purple-600 rounded-full mx-auto"></div>
      </motion.div>

      {/* Updated Component Props */}
      <ProjectFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTags={activeTags}
        toggleTag={toggleTag}
        availableTags={availableTags}
        sortOption={sortOption}
        setSortOption={setSortOption}
        resultCount={filteredProjects.length}
        clearFilters={clearFilters}
        isFiltering={isFiltering}
      />

      {/* Projects Grid with AnimatePresence for smooth filtering */}
      <motion.div layout className="min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project: any, index: number) => (
                <ProjectCard 
                  key={project.title || index} 
                  project={project} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="col-span-full flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800/50 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No matching projects found
              </h3>
              <p className="text-gray-500 max-w-md mb-6">
                We couldn't find anything matching "{searchQuery}". Try exploring other categories or clearing your filters.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;