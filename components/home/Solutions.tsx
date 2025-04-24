'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PopupModal } from 'react-calendly';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Check if we're in browser environment
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  const solutions = [
    {
      id: "workflow",
      title: "Email & Formulier Verwerking",
      subtitle: "Laat AI je inbox en formulieren beheren",
      description: "Gedaan met het handmatig afhandelen van inkomende e-mails en formulieren. Onze AI leest, categoriseert en verwerkt automatisch je berichten, extraheert belangrijke gegevens en zet acties in gang zonder menselijke tussenkomst.",
      features: [
        "Automatische beantwoording van veelgestelde vragen",
        "Extractie van gegevens uit contactformulieren en direct in je CRM",
        "Sorteren en prioriteren van inkomende e-mails op basis van inhoud",
        "Automatisch aanmaken van tickets, taken of projecten",
        "70% minder tijd kwijt aan e-mailbeheer"
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: "dataprocessing",
      title: "Administratie Automatisering",
      subtitle: "Excel, facturen en administratieve taken geautomatiseerd",
      description: "Stop met het handmatig verwerken van facturen, kopiëren van gegevens tussen systemen of het maken van rapporten. We automatiseren repetitieve administratieve taken door AI te gebruiken om documenten te lezen en gegevens over te zetten.",
      features: [
        "Automatische factuurverwerking en invoer in je boekhouding",
        "Gegevens overzetten tussen Excel, Google Sheets en andere systemen",
        "Automatisch aanmaken van offertes, contracten en documenten",
        "Bijwerken van prijzen, voorraden of andere data tussen platforms",
        "3-5 uur per week besparing op administratieve taken"
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: "appintegration",
      title: "Klantportalen & Dashboards",
      subtitle: "Creëer slimme klantomgevingen zonder programmeren",
      description: "Bouw gepersonaliseerde klantportalen, interne dashboards en zelfbedieningsplatforms zonder code te schrijven. Koppel aan je bestaande systemen en bied een naadloze ervaring die uren klantenservice bespaart.",
      features: [
        "Klantenportalen waar klanten zelf gegevens kunnen beheren",
        "Real-time dashboards voor interne teams met belangrijke KPI's",
        "Automatische notificaties bij statuswijzigingen of acties",
        "Connectie met CRM, boekhouding en andere tools",
        "80% minder support- en opvolgtickets door zelfbediening"
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  // Calendly functions
  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-darkBg-900 z-0"></div>
      
      {/* Light overlay to brighten the background */}
      <div className="absolute inset-0 light-overlay"></div>
      
      {/* Subtle glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-96 rounded-full bg-accent-blue/10 blur-[180px]"
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-blue/10 blur-[150px]"
      ></motion.div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern-faded opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-glow text-sm font-medium uppercase tracking-wide mb-6"
          >
            Praktische AI-automatisering voor jouw bedrijf
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Concrete oplossingen</span> die direct tijd besparen
          </motion.h2>
          
          <motion.p 
            className="text-lg text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Wij bouwen praktische automatiseringen voor specifieke bedrijfsprocessen die direct waarde opleveren. Geen vage beloftes, maar concrete tijdsbesparing.
          </motion.p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution, index) => (
            <motion.button
              key={solution.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20' 
                  : 'bg-darkBg-800 text-blue-100 hover:bg-darkBg-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <div className="flex items-center">
                <span className={`mr-2 ${activeTab === index ? 'text-white' : 'text-accent-glow'}`}>
                  {solution.icon}
                </span>
                <span className="font-medium">{solution.title}</span>
              </div>
            </motion.button>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={`${activeTab === index ? 'block' : 'hidden'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glassmorphism p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-accent-blue/20 flex items-center justify-center mr-4 border border-accent-glow/30">
                        <span className="text-accent-glow">{solution.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                        <p className="text-accent-glow">{solution.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-blue-100 mb-8">
                      {solution.description}
                    </p>
                    
                    <motion.div 
                      className="mt-8"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-semibold mb-4 text-white">Voordelen:</h4>
                      <ul className="space-y-3">
                        {solution.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start" 
                            variants={itemVariants}
                          >
                            <span className="text-accent-glow mr-3 mt-1">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33337 8.00004L7.33337 10L10.6667 6.00004" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span className="text-blue-100">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="card-glowing p-8 text-center">
                      <h4 className="text-xl font-bold mb-6 text-white">
                        Bespaar gegarandeerd 10+ uur per week
                      </h4>
                      <p className="text-blue-100 mb-4">
                        Wij garanderen dat je minimaal 10 uur per week bespaart binnen 30 dagen met onze automatisering-oplossingen.
                      </p>
                      <p className="text-accent-glow font-semibold mb-8">
                        Geen resultaat? Dan werken we gratis door tot we de beloofde tijdsbesparing wel leveren!
                      </p>
                      <motion.div 
                        className="btn-primary inline-flex items-center justify-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={openCalendly}
                      >
                        <span>Plan je gratis automatisering-scan</span>
                        <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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

export default Solutions; 