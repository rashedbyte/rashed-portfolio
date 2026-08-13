import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, GraduationCap, Cpu, BarChart3, Code2 } from 'lucide-react';
import { aboutData, type StatItem } from '../../data/about';

// --- Custom Animated Doughnut Stat Card Component ---
const NeonStatCard = ({
  label,
  value,
  suffix,
  percentage,
  strokeColor,
  glowClass
}: StatItem) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
      }}
      className={`relative p-6 rounded-3xl bg-white dark:bg-[#121320]/80 border border-gray-200 dark:border-purple-500/20 backdrop-blur-xl flex flex-col items-center justify-center text-center group shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-purple-400 dark:hover:border-purple-500/40 transition-all duration-500 ${glowClass}`}
    >
      <div className="relative w-36 h-36 flex items-center justify-center my-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-gray-200 dark:stroke-gray-800/60"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={strokeColor}
            strokeWidth="8"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: circumference - (percentage / 100) * circumference } : { strokeDashoffset: circumference }}
            transition={{ duration: 2, ease: "easeOut" as const }}
            style={{
              filter: `drop-shadow(0px 0px 6px ${strokeColor})`
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-extrabold text-gray-900 dark:text-white">
          {count}{suffix}
        </div>
      </div>

      <div className="mt-2 text-xs sm:text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-300 uppercase">
        {label}
      </div>
    </motion.div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const About = () => {
  const { personalInfo, stats, expertise, workflow, journey, educationPreview } = aboutData;

  const getExpertiseIcon = (id: string) => {
    switch (id) {
      case 'ml': return <Cpu className="w-6 h-6" />;
      case 'ds': return <BarChart3 className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0d17] text-gray-900 dark:text-gray-100 overflow-hidden font-sans selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full space-y-28">

        {/* 1. INTRO & PROFILE CARD */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                {personalInfo.availability}
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-purple-600 dark:text-purple-400">{personalInfo.name}</span>.
              </h1>

              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
                {personalInfo.role}
              </h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </motion.p>

            {/* Quick Tech Badges */}
            <motion.div variants={fadeInUp} className="pt-2 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.primaryTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Profile Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 rounded-3xl blur-lg opacity-20 dark:opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white dark:bg-[#121320]/90 border border-gray-200 dark:border-purple-500/20 backdrop-blur-xl rounded-3xl p-6 shadow-xl dark:shadow-[0_0_30px_rgba(147,51,234,0.15)] space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
                    {personalInfo.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{personalInfo.role}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-500" />
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                <hr className="border-gray-100 dark:border-purple-500/20" />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Open for Collaborations</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md transition-all duration-300"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. DYNAMIC NEON DOUGHNUT STATISTICAL CHARTS */}
        <section>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <NeonStatCard
                key={index}
                {...stat}
              />
            ))}
          </motion.div>
        </section>

        {/* 3. TAGLINE / PHILOSOPHY QUOTE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center py-4"
        >
          <h3 className="text-2xl md:text-3xl font-serif italic text-gray-800 dark:text-gray-200 leading-snug">
            "{personalInfo.tagline}"
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </motion.section>

        {/* 4. AREAS OF EXPERTISE */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Areas of Expertise</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto text-sm">
              The technical ecosystem I utilize to build scalable and intelligent AI solutions.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {expertise.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-white dark:bg-[#121320]/80 border border-gray-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    {getExpertiseIcon(item.id)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-purple-500/10 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="block text-xs font-semibold text-purple-600 dark:text-purple-400">
                    {item.projectCount} Connected
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 5. WORKFLOW WITH CONNECTING STEP LINES */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How I Approach Problems</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto text-sm">
              A structured methodology from defining the objective to deploying the production model.
            </p>
          </div>

          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-[2px] bg-purple-200 dark:bg-purple-500/20 -z-10"></div>

            {workflow.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-6 group w-full md:w-1/4"
              >
                {/* Mobile Vertical Line */}
                {index !== workflow.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-[-2rem] w-[2px] bg-purple-200 dark:bg-purple-500/20 -z-10"></div>
                )}

                <div className="w-16 h-16 shrink-0 rounded-full bg-white dark:bg-[#121320] border-2 border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:border-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 z-10 shadow-sm font-bold text-sm">
                  0{index + 1}
                </div>

                <div className="md:text-center flex-1 space-y-1">
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">{item.step}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 6. MY JOURNEY & BACKGROUND preview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Journey Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h2>
            <div className="space-y-8 pl-4 border-l-2 border-purple-200 dark:border-purple-500/30">
              {journey.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 group"
                >
                  <div className="absolute w-3.5 h-3.5 bg-white dark:bg-[#0b0d17] border-2 border-purple-500 rounded-full -left-[8px] top-1.5 group-hover:bg-purple-500 transition-all duration-300"></div>
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400">{milestone.year}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-0.5">{milestone.title}</h3>
                  <p className="text-xs text-purple-500/80 mb-2">{milestone.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">{milestone.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {milestone.skills.map(s => (
                      <span key={s} className="text-[10px] font-medium px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Preview Card */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#121320]/80 p-8 rounded-3xl border border-gray-200 dark:border-purple-500/20 shadow-sm space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl border border-purple-200 dark:border-purple-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{educationPreview.degree}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{educationPreview.institution}</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold rounded-full">
                    {educationPreview.status}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {educationPreview.focus}
              </p>

              <div className="pt-4 border-t border-gray-100 dark:border-purple-500/20">
                <Link to="/experience" className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 transition-colors group">
                  <span>View Full Career Background</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default About;