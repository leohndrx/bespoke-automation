'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { PopupModal } from 'react-calendly';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  // Check if we're in browser environment
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Handle scroll event to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      // For header background
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // For floating CTA
      if (window.scrollY > 500) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  const navLinks = [
    { name: 'Oplossingen', href: '#solutions' },
    { name: 'Waarom Kiezen', href: '#features' },
    { name: 'Proces', href: '#process' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-darkBg-800/90 backdrop-blur-md shadow-lg shadow-accent-blue/5 py-2' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center mr-3 overflow-hidden transition-transform duration-300 group-hover:scale-110 border border-accent-glow/30 bg-darkBg-700/80">
                  <img 
                    src="/logo/logotest.png" 
                    alt="Bespoke Automation Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="transition-all duration-300">
                  <span className="text-xl font-bold text-white">Bespoke<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-accent-glow">Automation</span></span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-blue-50 font-medium transition-colors relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-accent-glow transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={openCalendly}
                className="btn-primary"
              >
                Gratis Strategie-gesprek
              </button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-blue-50 z-20 p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <HiX className="h-7 w-7" />
            ) : (
              <HiMenuAlt3 className="h-7 w-7" />
            )}
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-gradient-to-br from-darkBg-900 to-darkBg-800 z-10 flex flex-col items-center justify-center"
              >
                <div className="absolute inset-0 dot-pattern opacity-10"></div>
                <div className="absolute inset-0 bg-accent-blue/5 backdrop-blur-sm"></div>
                
                <nav className="flex flex-col items-center space-y-8 z-10">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link 
                        href={link.href}
                        className="text-white text-2xl font-medium hover:text-accent-glow transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button 
                      onClick={() => {
                        setIsMenuOpen(false);
                        openCalendly();
                      }}
                      className="btn-primary px-6 py-3 text-lg inline-block"
                    >
                      Gratis Strategie-gesprek
                    </button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Floating CTA Button */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 z-40 md:right-10 md:bottom-10"
          >
            <button onClick={openCalendly}>
              <motion.div 
                className="flex items-center justify-center gap-2 btn-primary py-4 px-6 rounded-full shadow-xl shadow-accent-blue/30 border-accent-glow/80"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px 5px rgba(49, 120, 205, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">Gratis gesprek</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendly Modal - Only render in browser */}
      {isBrowser && isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/bespokeautomation/discovery-call"
          onModalClose={closeCalendly}
          open={true}
          rootElement={document.body}
        />
      )}
    </>
  );
};

export default Header; 