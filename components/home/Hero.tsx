'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PopupModal } from 'react-calendly';

// Dot pattern is defined in globals.css

const Hero = () => {
  // Array of business outcomes
  const businessOutcomes = [
    "Werkprocessen tot 80% sneller geautomatiseerd",
    "Groei zonder extra personeel aan te nemen",
    "Tot 95% minder handmatige fouten in dagelijkse taken",
    "AI-integratie zonder technische kennis"
  ];

  const [currentOutcome, setCurrentOutcome] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  const [particles, setParticles] = useState([]);
  
  // Check if we're in browser environment and initialize particles
  useEffect(() => {
    setIsBrowser(true);
    
    // Generate particles only on client-side to avoid hydration mismatch
    const particlesArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10
    }));
    
    setParticles(particlesArray);
  }, []);
  
  // Calendly functions
  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };
  
  // Rotate through the outcomes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentOutcome((prevIndex) => (prevIndex + 1) % businessOutcomes.length);
        setIsChanging(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-darkBg-900 min-h-screen overflow-hidden">
      {/* Unified background with smooth blends */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-darkBg-900"></div>
        
        {/* Light overlay to brighten the background */}
        <div className="absolute inset-0 light-overlay"></div>
        
        {/* Subtle glow effects with smoother transitions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[180px]"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-glow/10 blur-[150px]"
        ></motion.div>
        
        {/* Dot pattern background with gradual fade-in */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 dot-pattern-faded"
        ></motion.div>
        
        {/* Animated particles with staggered animation - only render when particles are initialized */}
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-accent-glow/10"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.1 % 2, // Staggered delay for more natural appearance
            }}
          />
        ))}
      </div>

      {/* Hero Section with smoother transitions */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-center"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-accent-blue/10 border border-accent-glow/30 text-accent-glow font-medium text-sm uppercase tracking-wide shadow-lg shadow-accent-blue/20">
                Binnen 30 dagen gegarandeerd, of we werken gratis door
              </span>
            </motion.div>
            
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                <span className="text-white">Bespaar minimaal </span>
                <span className="text-gradient">10+ uur per week</span>
                <br className="md:hidden" />
                <span className="text-white md:ml-2">met AI & automatisering</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mt-5 max-w-3xl mx-auto leading-relaxed">
                Stop met handmatig werk. Onze no-code AI-oplossingen nemen repetitieve taken over, zodat jij kunt focussen op wat echt belangrijk is.
              </p>
            </motion.div>
            
            {/* Business outcomes section with smoother animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="my-8 max-w-4xl mx-auto"
            >
              <div className="glassmorphism-dark p-6 relative overflow-hidden group">
                {/* Subtle background animation behind the card */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-glow/5"
                  animate={{ 
                    opacity: [0.1, 0.2, 0.1] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center mr-3 border border-accent-glow/30">
                      <svg className="w-4 h-4 text-accent-glow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Resultaten die je kunt verwachten</h3>
                  </div>
                  
                  <div className="h-16 relative flex items-center justify-center">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-accent-blue/20"></div>
                    
                    {/* Animated outcome item with improved transitions */}
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentOutcome}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative px-4 py-2 rounded-lg bg-darkBg-800/50 border border-accent-glow/10 backdrop-blur-sm"
                      >
                        <motion.div
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(49, 120, 205, 0)", "0 0 15px rgba(49, 120, 205, 0.3)", "0 0 0px rgba(49, 120, 205, 0)"] 
                          }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 rounded-lg"
                        />
                        
                        {/* Text with highlight */}
                        <span className="text-lg md:text-xl text-white font-medium">
                          {businessOutcomes[currentOutcome]}
                        </span>
                        
                        {/* Animated underline with smoother animation */}
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-blue/0 via-accent-glow to-accent-blue/0 rounded-full"
                          initial={{ width: "0%", left: "50%", x: "-50%" }}
                          animate={{ width: ["0%", "90%", "0%"] }}
                          transition={{ 
                            duration: 4, 
                            times: [0, 0.5, 1], 
                            repeat: 1, 
                            repeatType: "loop", 
                            ease: "easeInOut" 
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="my-8 text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button 
                  onClick={openCalendly}
                  className="btn-primary text-lg px-10 py-4 shadow-xl shadow-accent-blue/30 border-accent-glow/70 flex items-center justify-center space-x-2 group"
                >
                  <span>Gratis automatisering-scan inplannen</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </motion.div>
              
              <p className="text-accent-glow/80 mt-3 text-sm">
                Geen verplichtingen. Ontdek welke processen je kunt automatiseren binnen 14 dagen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section - Now above the tools section */}
      <section className="relative py-16 z-10">
        {/* Subtle divider */}
        <motion.div 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "33%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"
        ></motion.div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-white">Vertrouwd door innovatieve </span>
                <span className="text-gradient">bedrijven</span>
              </h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Ontdek hoe diverse organisaties hun operationele processen hebben verbeterd met onze automatiseringsoplossingen.
              </p>
            </motion.div>
            
            <div className="glassmorphism py-8 px-4 overflow-hidden relative">
              {/* Continuous right-to-left scrolling animation for logos */}
              <motion.div 
                animate={{ 
                  x: ["0%", "-50%"] 
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
                className="flex items-center gap-12 min-w-max"
              >
                {/* First set of logos */}
                {[
                  { name: "Rivermate", src: "/images/Rivermate Blacj.png", width: 140 },
                  { name: "MarketLeap", src: "/images/MarketLeap Black.png", width: 140 },
                  { name: "Green Bubble", src: "/images/Green Bubble Black.png", width: 140 },
                  { name: "EveryPlants", src: "/images/EveryPlants Black.png", width: 140 },
                  { name: "Clearly", src: "/images/Clearly Black.png", width: 120 },
                  { name: "Cargomate", src: "/images/Cargomate Black.png", width: 140 },
                ].map((company, index) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-center p-4 border border-accent-glow/20 rounded-lg bg-darkBg-800/30"
                  >
                    <Image
                      src={company.src}
                      alt={`${company.name} logo`}
                      width={company.width}
                      height={50}
                      style={{ 
                        objectFit: "contain", 
                        maxHeight: "40px",
                        filter: "brightness(0) invert(1)" // Makes logos white
                      }}
                    />
                  </div>
                ))}
                
                {/* Duplicate set for seamless scrolling */}
                {[
                  { name: "Rivermate-2", src: "/images/Rivermate Blacj.png", width: 140 },
                  { name: "MarketLeap-2", src: "/images/MarketLeap Black.png", width: 140 },
                  { name: "Green Bubble-2", src: "/images/Green Bubble Black.png", width: 140 },
                  { name: "EveryPlants-2", src: "/images/EveryPlants Black.png", width: 140 },
                  { name: "Clearly-2", src: "/images/Clearly Black.png", width: 120 },
                  { name: "Cargomate-2", src: "/images/Cargomate Black.png", width: 140 },
                ].map((company, index) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-center p-4 border border-accent-glow/20 rounded-lg bg-darkBg-800/30"
                  >
                    <Image
                      src={company.src}
                      alt={`${company.name} logo`}
                      width={company.width}
                      height={50}
                      style={{ 
                        objectFit: "contain", 
                        maxHeight: "40px",
                        filter: "brightness(0) invert(1)" // Makes logos white
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section with seamless transition */}
      <section className="relative py-20 z-10">
        {/* Improved smooth divider with animation */}
        <motion.div 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "33%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"
        ></motion.div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                <span className="text-gradient">No-code</span> automatisering
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-blue-100 max-w-3xl mx-auto"
              >
                Wij bouwen oplossingen met diverse no-code platforms. Deze populaire tools uit onze tech stack maken het mogelijk om snel te automatiseren zonder code.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Tool 1 - n8n */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 relative overflow-hidden group"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="absolute -inset-px bg-gradient-to-r from-accent-glow/10 to-accent-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                ></motion.div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-glow/30 shadow-lg shadow-accent-blue/10 bg-darkBg-700 flex items-center justify-center">
                      <Image 
                        src="/logos/n8n-logo.png" 
                        alt="n8n logo" 
                        width={40} 
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">n8n</h3>
                    <p className="text-blue-100 text-sm">
                      Verbind apps en services om complexe workflows te creëren die je bedrijfsprocessen automatiseren.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Tool 2 - Make.com */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 relative overflow-hidden group"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="absolute -inset-px bg-gradient-to-r from-accent-blue/10 to-accent-glow/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                ></motion.div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-glow/30 shadow-lg shadow-accent-blue/10 bg-darkBg-700 flex items-center justify-center">
                      <Image 
                        src="/logos/make-logo.png" 
                        alt="Make.com logo" 
                        width={40} 
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Make.com</h3>
                    <p className="text-blue-100 text-sm">
                      Creëer krachtige integraties met een intuïtieve visuele interface, zonder code te schrijven.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Tool 3 - Airtable */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 relative overflow-hidden group"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="absolute -inset-px bg-gradient-to-r from-accent-glow/10 to-accent-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                ></motion.div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-glow/30 shadow-lg shadow-accent-blue/10 bg-darkBg-700 flex items-center justify-center">
                      <Image 
                        src="/logos/airtable-logo.webp" 
                        alt="Airtable logo" 
                        width={40} 
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Airtable</h3>
                    <p className="text-blue-100 text-sm">
                      Combineer database, spreadsheet en automatisering in één flexibel platform voor je workflows.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-blue-100 text-lg">
                We helpen je met het opzetten van AI-gestuurde automatisering die direct resultaat oplevert - zonder ingewikkelde ontwikkeltrajecten.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Modal - Only render in browser */}
      {isBrowser && isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/bespokeautomation/discovery-call"
          onModalClose={closeCalendly}
          open={true}
          rootElement={document.body}
        />
      )}
    </div>
  );
};

export default Hero; 