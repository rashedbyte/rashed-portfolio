import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profileData } from '../../data/profile';

// --- Crash-Proof Multi-Role Dynamic Typewriter Component ---
const MultiRoleTypewriter = ({ roles }: { roles: any }) => {
  // ডাটা যেভাবেই থাকুক না কেন (Object/Array/String), সেটিকে নিখুঁত String Array-তে কনভার্ট করা
  const safeRoles: string[] = useMemo(() => {
    if (!roles) return ["Software Developer"];
    
    // যদি সিঙ্গেল স্ট্রিং হয়
    if (typeof roles === 'string') return [roles];
    
    // যদি এরে (Array) হয়
    if (Array.isArray(roles)) {
      return roles
        .map((r) => {
          if (typeof r === 'string') return r;
          if (typeof r === 'object' && r !== null) {
            return r.title || r.role || r.name || String(r);
          }
          return String(r);
        })
        .filter(Boolean);
    }
    
    // যদি সিঙ্গেল অবজেক্ট হয়
    if (typeof roles === 'object' && roles !== null) {
      return [roles.title || roles.role || roles.name || "Software Developer"];
    }

    return ["Software Developer"];
  }, [roles]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking Cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (safeRoles.length === 0) return;

    const currentRole = safeRoles[roleIndex % safeRoles.length] || "";

    // Word complete -> Pause before deleting
    if (subIndex === currentRole.length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    // Word deleted -> Switch to next role
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % safeRoles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, roleIndex, isDeleting, safeRoles]);

  // Safely extract string substring
  const currentRoleText = safeRoles[roleIndex % safeRoles.length] || "";
  const currentText = String(currentRoleText).substring(0, subIndex);

  return (
    <span className="inline-block">
      {currentText}
      <span className={`text-purple-600 dark:text-purple-400 font-bold ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

const Hero = () => {
  // profile.ts থেকে roles, role বা fallback ডাটা নেওয়া
  const rolesData = (profileData as any).roles || (profileData as any).role || ["Software Developer"];
  const userPhoto = (profileData as any).avatarUrl || (profileData as any).photoUrl || "https://via.placeholder.com/400x400";

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 transition-colors duration-300">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left z-10"
        >
          {/* Status Badge */}
          {profileData.status && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {profileData.status}
            </div>
          )}

          <p className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide text-lg">
            Hello, I'm
          </p>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {profileData.name}
          </h1>
          
          {/* Multi-role Safe Typing Animation */}
          <div className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400 min-h-[44px] flex items-center justify-center lg:justify-start">
            <MultiRoleTypewriter roles={rolesData} />
          </div>
          
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {profileData.shortIntro}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 dark:shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            
            {/* 🟢 আপডেট করা হয়েছে: <a> ট্যাগ পরিবর্তন করে <Link> ট্যাগ ব্যবহার করা হয়েছে */}
            {/* 🟢 আপডেট করা বাটন (Icon ওভারল্যাপ ফিক্সড) */}
            <Link 
              to="/resume"
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-[#121320] border border-slate-200 dark:border-purple-500/30 hover:border-purple-500 text-slate-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md whitespace-nowrap"
            >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 18a4 4 0 01-.88-7.903A5.002 5.002 0 0116.9 8.1 4.5 4.5 0 0118 17h-1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12v7m0 0l-3-3m3 3l3-3"
              />
            </svg>
              <span>View & Download CV</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center z-10"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-[3px] border-purple-500/30 dark:border-purple-500/40 animate-[spin_12s_linear_infinite]"></div>
            <div className="absolute inset-2 rounded-full border-[2px] border-indigo-500/20 dark:border-indigo-500/30 animate-[spin_18s_linear_infinite_reverse]"></div>
            
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-[#0b0d17] shadow-xl dark:shadow-[0_0_40px_rgba(147,51,234,0.3)] bg-slate-100 dark:bg-gray-900">
              <img 
                src={userPhoto} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;