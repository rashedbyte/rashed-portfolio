import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contactConfig, socialLinks, inquiryContexts, type InquiryCategory } from '../../data/contact'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Freelance Project' as InquiryCategory,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message is too short (min 10 chars)';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    
    try {
      // TODO: Replace these with your actual EmailJS IDs
      const SERVICE_ID = 'service_40i6gyi';
      const TEMPLATE_ID = 'template_6tgjrlp';
      const PUBLIC_KEY = 'K0zTiGu5he2ldujlb';

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          category: formData.category,
          message: formData.message,
          to_name: 'Rashed', // Your name
        },
        PUBLIC_KEY
      );

      setStatus('success');
      // Reset form after success
      setFormData({ name: '', email: '', category: 'Freelance Project', message: '' });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    }
  };

  const activeContext = inquiryContexts[formData.category];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10"
      >
        
        {/* LEFT COLUMN: Info & Social Hub */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Let's Build <br/>
              <span className="text-purple-600 dark:text-purple-500">Something.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
              Have an idea, project, or opportunity? Let's turn it into something meaningful.
            </p>
          </motion.div>

          {/* Availability Indicator */}
          <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-[#111111]/50 border border-gray-100 dark:border-white/5 backdrop-blur-sm w-fit">
            <div className="relative flex h-4 w-4 mt-1">
              {contactConfig.availability.status === 'available' && (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                </>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {contactConfig.availability.message}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {contactConfig.availability.subtext}
              </p>
            </div>
          </motion.div>

          {/* Social Hub */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Connect With Me
            </h4>
            <div className="flex flex-col gap-3 max-w-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-white dark:bg-[#111111]/80 border border-gray-200 dark:border-white/10 rounded-xl hover:border-purple-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {social.svg}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{social.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {social.username}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Interactive Form */}
        <motion.div variants={itemVariants} className="lg:col-span-7">
          <div className="bg-white dark:bg-[#111111]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                    {/* SVG: CheckCircle2 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Received</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                    Thanks for reaching out! I've received your message and will get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Category Selector */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      What are you interested in?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(Object.keys(inquiryContexts) as InquiryCategory[]).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: cat })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            formData.category === cat
                              ? 'bg-purple-600 text-white shadow-md'
                              : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 border border-transparent dark:border-white/5'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if(errors.name) setErrors({...errors, name: ''}); }}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/40 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-purple-500'
                        } text-gray-900 dark:text-white placeholder-gray-400`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          {/* SVG: AlertCircle */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> 
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if(errors.email) setErrors({...errors, email: ''}); }}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/40 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-purple-500'
                        } text-gray-900 dark:text-white placeholder-gray-400`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-end mb-1">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 hidden sm:block">{activeContext.helper}</span>
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => { setFormData({ ...formData, message: e.target.value }); if(errors.message) setErrors({...errors, message: ''}); }}
                      placeholder={activeContext.placeholder}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/40 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-purple-500'
                      } text-gray-900 dark:text-white placeholder-gray-400`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error State Banner */}
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <div>
                        <h4 className="text-sm font-bold text-red-800 dark:text-red-400">Something went wrong</h4>
                        <p className="text-sm text-red-600 dark:text-red-300 mt-1">Please try again later or verify your network connection.</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
                  >
                    {status === 'loading' ? (
                      <>
                        {/* SVG: Loader2 */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        {/* SVG: Send */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;