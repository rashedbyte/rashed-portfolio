import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { journeyData, type JourneyType } from '../../data/experiences';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<JourneyType>('experience');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredData = journeyData.filter((item) => item.type === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header & Toggle */}
      <div className="flex flex-col items-center mb-16 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Career <span className="text-purple-600 dark:text-purple-500">Journey</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
            A timeline of my professional experience and educational background.
          </p>
        </motion.div>

        {/* Custom Toggle Switch */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex p-1.5 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10"
        >
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-sm'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-sm'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            Education
          </button>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent -translate-x-1/2 rounded-full" />

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-purple-600 ring-4 ring-purple-100 dark:ring-purple-900/30 -translate-x-1/2 shadow-lg z-10" />

                  {/* Empty space for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div 
                      className={`bg-white dark:bg-[#111111]/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 ${
                        isEven ? 'md:mr-12' : 'md:ml-12'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1.5 font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {item.startDate} - {item.endDate}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                        {item.organization}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2">
                        {item.description}
                      </p>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
                      >
                        {isExpanded ? 'View Less' : 'View Details'}
                        <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                      </button>

                      {/* Expandable Details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/10 space-y-6">
                              {item.achievements && (
                                <div>
                                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Highlights & Achievements</h5>
                                  <ul className="space-y-2">
                                    {item.achievements.map((ach, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                        <span>{ach}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {item.technologies && (
                                <div>
                                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Skills & Technologies</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {item.technologies.map((tech, i) => (
                                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {item.link && (
                                <a 
                                  href={item.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  View Related Project/Certificate
                                </a>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Experience;