'use client';

import React from 'react';
import Link from 'next/link';
import { HiMail, HiPhone, HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

// Grid pattern CSS as a separate component
const GridPattern = () => (
  <style jsx global>{`
    .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 40px 40px;
    }
  `}</style>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationLinks = [
    {
      title: 'Oplossingen',
      links: [
        { name: 'AI Workflow Automatisering', href: '/oplossingen/workflow' },
        { name: 'Data Verwerking & Analyse', href: '/oplossingen/dataprocessing' },
        { name: 'No-Code Integraties', href: '/oplossingen/integraties' },
      ],
    },
    {
      title: 'Bedrijf',
      links: [
        { name: 'Aanpak', href: '/aanpak' },
        { name: 'Prijzen', href: '/prijzen' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Gratis automatisering-scan', href: '/contact' },
        { name: 'Email: leon@bespokeautomation.ai', href: 'mailto:leon@bespokeautomation.ai' },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden pt-20 pb-10 background-transition">
      {/* Background elements */}
      <div className="absolute inset-0 bg-darkBg-900 z-0"></div>
      
      {/* Dot pattern and glow effects */}
      <div className="absolute inset-0 dot-pattern opacity-10 z-0"></div>
      <div className="absolute -left-20 top-0 w-80 h-80 rounded-full bg-accent-blue/5 blur-[100px] z-0"></div>
      <div className="absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-accent-blue/5 blur-[100px] z-0"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 futuristic-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter signup */}
        <div className="glassmorphism mb-16 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-accent-glow/10"></div>
          <div className="p-8 relative">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-white mb-2">Gratis tips voor AI-automatisering</h3>
                <p className="text-blue-100">Ontvang wekelijks praktische tips en strategieën om je bedrijfsprocessen te automatiseren.</p>
              </div>
              <div className="md:col-span-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Email adres" 
                    className="px-4 py-3 rounded-lg flex-grow bg-darkBg-800/80 border border-accent-glow/30 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-accent-glow/50"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    <span>Aanmelden</span>
                    <HiArrowRight />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="block mb-6 group">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center mr-3 overflow-hidden transition-transform duration-300 group-hover:scale-110 border border-accent-glow/30 bg-darkBg-700/80">
                  <img 
                    src="/logo/logotest.png" 
                    alt="Bespoke Automation Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white">Bespoke<span className="text-accent-glow">Automation</span></span>
              </div>
            </Link>
            <p className="text-blue-100 mb-8 max-w-md leading-relaxed">
              Wij helpen bedrijven tijd te besparen met AI-automatisering en no-code oplossingen. Bespaar minimaal 10 uur per week door repetitieve taken te automatiseren, zonder ontwikkelaars in te huren.
            </p>
            
            <motion.div 
              className="flex items-center mb-4 group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-accent-blue/20 p-2 rounded-full mr-3 border border-accent-glow/30">
                <HiMail className="w-5 h-5 text-accent-glow" />
              </div>
              <a 
                href="mailto:leon@bespokeautomation.ai" 
                className="text-blue-100 group-hover:text-white transition-colors"
              >
                leon@bespokeautomation.ai
              </a>
            </motion.div>
          </div>

          {navigationLinks.map((column, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="animated-section"
            >
              <h3 className="font-bold text-lg mb-4 text-gradient">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-blue-100 hover:text-white transition-colors relative group flex items-center"
                    >
                      <span>{link.name}</span>
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-accent-glow group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-accent-blue/20 pt-8 mt-8 text-center text-blue-100/70 text-sm">
          <p>© {currentYear} Bespoke Automation. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 