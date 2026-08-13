import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Search,
  Terminal,
  Code2,
  Database,
  TableProperties,
  BrainCircuit,
  Zap,
  Network,
  Layout,
  GitBranch,
  X,
  FolderKanban,
  Component
} from 'lucide-react';

import {
  skillsData,
  skillsCategoryList,
  type Skill,
  type SkillCategory
} from '../../data/skills';

const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ElementType } = {
    Terminal,
    Code2,
    Database,
    TableProperties,
    BrainCircuit,
    Zap,
    Network,
    Layout,
    GitBranch
  };

  const IconComponent = icons[iconName] || Code2;

  return <IconComponent className="w-6 h-6" />;
};

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' || skill.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">

      {/* Header Section */}
      <div className="flex flex-col items-center mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Technical{' '}
            <span className="text-purple-600 dark:text-purple-500">
              Ecosystem
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
            An interactive overview of my tools, languages, and technologies,
            showing how they connect to my projects.
          </p>
        </motion.div>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">

        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills..."
            className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-[#111111]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-sm"
          />
        </div>

        {/* Category Filter */}
        <div className="flex-1 flex overflow-x-auto pb-2 md:pb-0 gap-2 hide-scrollbar items-center">

          {/* All Skills */}
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'All'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            All Skills
          </button>

          {/* Categories */}
          {skillsCategoryList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Living Technical Skill Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
              onClick={() => setSelectedSkill(skill)}
              className="group relative cursor-pointer overflow-hidden flex flex-col h-full p-6 bg-white dark:bg-[#111111]/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-white/10 hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgb(139,92,246,0.12)] transition-all duration-300 transform hover:-translate-y-1"
            >

              {/* Subtle Technical Grid Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none" />

              {/* Header: Icon, Name & Category */}
              <div className="relative flex items-start justify-between mb-4 z-10">

                <div className="flex items-center gap-3">

                  <div className="p-2.5 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                    {getIcon(skill.iconName)}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </h3>

                    <span className="text-[11px] font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </span>
                  </div>

                </div>
              </div>

              {/* Description */}
              <p className="relative text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-6 flex-grow z-10">
                {skill.description}
              </p>

              {/* Bottom Details Area */}
              <div className="relative z-10 mt-auto space-y-3">

                {/* Related Projects Indicator */}
                {skill.relatedProjects &&
                  skill.relatedProjects.length > 0 && (
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">

                      <FolderKanban className="w-3.5 h-3.5" />

                      <span>
                        Used in {skill.relatedProjects.length} Project
                        {skill.relatedProjects.length > 1 ? 's' : ''}
                      </span>

                    </div>
                  )}

                {/* Code Signature */}
                {skill.codeSnippet && (
                  <div className="font-mono text-xs sm:text-sm text-purple-600 dark:text-purple-300 bg-gray-50 dark:bg-black/50 px-3 py-2 rounded-lg border border-gray-200 dark:border-white/5 opacity-90 group-hover:opacity-100 group-hover:border-purple-500/40 transition-all duration-300 overflow-hidden w-full shadow-inner">

                    <TypeAnimation
                      sequence={[
                        // Type the code
                        skill.codeSnippet,

                        // Keep it visible for 2.5 seconds
                        2500,

                        // Delete the entire text
                        '',

                        // Small pause before typing again
                        800
                      ]}
                      wrapper="span"
                      speed={50}
                      cursor={true}
                      repeat={Infinity}
                    />

                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          No skills found matching your criteria.
        </div>
      )}

      {/* Connection Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20
              }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 z-50"
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">

                <div className="p-4 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl">
                  {getIcon(selectedSkill.iconName)}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedSkill.name}
                  </h2>

                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {selectedSkill.category}
                  </span>
                </div>

              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {selectedSkill.description}
              </p>

              <div className="space-y-6">

                {/* Related Skills */}
                {selectedSkill.relatedSkills &&
                  selectedSkill.relatedSkills.length > 0 && (
                    <div>

                      <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">

                        <Component className="w-4 h-4 text-gray-400" />

                        Related Ecosystem

                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {selectedSkill.relatedSkills.map((rs) => (
                          <span
                            key={rs}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                          >
                            {rs}
                          </span>
                        ))}

                      </div>

                    </div>
                  )}

                {/* Related Projects */}
                {selectedSkill.relatedProjects &&
                  selectedSkill.relatedProjects.length > 0 && (
                    <div>

                      <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">

                        <FolderKanban className="w-4 h-4 text-gray-400" />

                        Used in Projects

                      </h4>

                      <ul className="space-y-2">

                        {selectedSkill.relatedProjects.map((rp) => (
                          <li
                            key={rp}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
                          >

                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />

                            <span className="text-sm font-medium">
                              {rp}
                            </span>

                          </li>
                        ))}

                      </ul>

                    </div>
                  )}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Skills;