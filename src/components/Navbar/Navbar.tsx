import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { ThemeToggle } from './ThemeToggle'; 

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-[#0b0d17]/80 backdrop-blur-xl border-b border-cyan-500/20 dark:border-cyan-500/30 py-3 shadow-[0_4px_25px_-5px_rgba(6,182,212,0.15)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Neon Logo */}
          <Link 
            to="/" 
            className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white z-50 group flex items-center gap-1.5"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              {siteConfig.name}
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
          </Link>

          {/* Desktop Neon Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/60 dark:bg-black/40 px-3 py-1.5 rounded-full border border-cyan-500/30 dark:border-cyan-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.08)]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 text-sm font-medium transition-colors z-10 group"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNeonPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full -z-10 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`${
                    isActive 
                      ? 'text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' 
                      : 'text-gray-600 dark:text-gray-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center">
            <div className="p-1 rounded-full border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <div className="p-1 rounded-full border border-cyan-500/20">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 hover:bg-cyan-500/20 transition-colors focus:outline-none shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full overflow-hidden bg-white/95 dark:bg-[#0b0d17]/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-cyan-500/5 hover:text-cyan-500 border border-transparent'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;