'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Features = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Features data
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-accent-glow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
        </svg>
      ),
      title: "Snelle Implementatie",
      description: "Binnen 2 weken je eerste automatisering live. Onze no-code aanpak zorgt ervoor dat je niet maanden hoeft te wachten op resultaat."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-accent-glow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
      ),
      title: "AI-integratie",
      description: "Voeg AI-intelligentie toe aan je workflows zonder complexe ML-modellen te bouwen. Gebruik bestaande AI-diensten voor tekst, beelden en data-analyse."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-accent-glow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
        </svg>
      ),
      title: "Kostenefficiënt",
      description: "Bespaar tot 80% op ontwikkelkosten door gebruik te maken van no-code tools in plaats van op maat ontwikkelde software oplossingen."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-accent-glow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11z" clipRule="evenodd"></path>
        </svg>
      ),
      title: "Schaalbare Oplossingen",
      description: "Begin klein en schaal moeiteloos op naarmate je bedrijf groeit. Onze automatiseringen verwerken probleemloos toenemende werklasten."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-accent-glow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      ),
      title: "Naadloze Integratie",
      description: "Verbind met meer dan 1000+ applicaties en diensten zonder complexe API-kennis. Van CRM tot boekhouding, alles werkt naadloos samen."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-accent-glow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
        </svg>
      ),
      title: "Aanpasbaar & Flexibel",
      description: "Pas je workflows eenvoudig aan zonder opnieuw te programmeren. Reageer direct op veranderende bedrijfsbehoeften zonder ontwikkelaars."
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
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
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent-blue/10 blur-[150px]"
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-accent-glow/10 blur-[150px]"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-glow text-sm font-medium uppercase tracking-wide">
              Waarom kiezen voor no-code AI-automatisering
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gradient">Maximaliseer efficiëntie</span> zonder te programmeren
          </motion.h2>
          
          <motion.p 
            className="text-lg text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Met onze no-code aanpak en AI-integraties bouwen we slimme oplossingen die repetitieve taken automatiseren, zodat jouw team kan focussen op werk dat échte waarde toevoegt.
          </motion.p>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glassmorphism p-8 relative group"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue/30 to-accent-glow/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <div className="relative z-10">
                <div className="bg-darkBg-700/50 rounded-xl p-4 inline-block mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Statistics */}
        <motion.div 
          className="mt-24 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="glassmorphism-dark p-10">
            <h3 className="text-2xl font-bold mb-10 text-center text-white">No-code automatisering in cijfers</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-accent-glow">80%</div>
                <p className="text-blue-100">minder ontwikkeltijd dan traditionele software</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-accent-glow">50%</div>
                <p className="text-blue-100">lagere kosten door no-code aanpak</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-accent-glow">14</div>
                <p className="text-blue-100">dagen tot eerste werkende automatisering</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 