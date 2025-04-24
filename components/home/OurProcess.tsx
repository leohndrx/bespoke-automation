'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { PopupModal } from 'react-calendly';

const OurProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Check if we're in browser environment
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  // Calendly functions
  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  const processSteps = [
    {
      number: "01",
      title: "Quickscan",
      description: "30-minuten videogesprek om je processen en pijnpunten in kaart te brengen.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Tijdwinst Analyse",
      description: "We identificeren specifieke taken die direct 10+ uur per week kunnen besparen.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12h6m-6 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Ontwerp",
      description: "We selecteren de juiste no-code tools en ontwerpen je automatiseringsoplossing.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "04",
      title: "Snelle Implementatie",
      description: "Binnen 14 dagen bouwen en implementeren we je automatisering.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "05",
      title: "Kennisoverdracht",
      description: "Korte training en duidelijke documentatie zodat je team zelfstandig verder kan.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14l-9-5 9 5 9-5-9 5M12 14v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="process" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-darkBg-900 z-0"></div>
      
      {/* Light overlay to brighten the background */}
      <div className="absolute inset-0 light-overlay"></div>
      
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern-faded opacity-60"></div>
      
      {/* Subtle glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute top-40 left-10 w-64 h-64 rounded-full bg-accent-blue/10 blur-[150px]"
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-accent-glow/10 blur-[150px]"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-glow text-sm font-medium uppercase tracking-wide">
              Zo werken wij
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gradient">Van probleem naar oplossing</span> in 5 stappen
          </motion.h2>
          
          <motion.p 
            className="text-lg text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ons gestructureerde proces zorgt ervoor dat we binnen 30 dagen je eerste automatisering live hebben staan, met een gegarandeerde tijdsbesparing van minimaal 10 uur per week.
          </motion.p>
        </div>
        
        {/* Process cards in grid instead of timeline for clearer presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative ${index === 3 || index === 4 ? 'md:col-span-3/2' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="glassmorphism p-8 h-full relative overflow-hidden">
                {/* Step number in background */}
                <div className="absolute -top-5 -right-5 text-7xl font-bold text-accent-glow/10">
                  {step.number}
                </div>
                
                {/* Icon and title at top */}
                <div className="flex items-center mb-5 relative">
                  <div className="bg-gradient-to-r from-accent-blue to-accent-glow w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-accent-blue/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                
                <p className="text-blue-100 relative">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button 
            onClick={openCalendly}
            className="btn-primary inline-flex items-center justify-center px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Maak kennis met ons proces</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Calendly Modal - Only render in browser */}
      {isBrowser && isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/bespokeautomation/discovery-call"
          onModalClose={closeCalendly}
          open={true}
          rootElement={document.body}
        />
      )}
    </section>
  );
};

export default OurProcess; 