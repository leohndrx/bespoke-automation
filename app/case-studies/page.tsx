import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CaseStudies() {
  return (
    <main>
      <Header />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-darkBg-900 z-0"></div>
        
        {/* Light overlay */}
        <div className="absolute inset-0 light-overlay"></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern-faded opacity-60"></div>
        
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[180px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-glow/10 blur-[150px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-2 rounded-full bg-accent-blue/10 border border-accent-glow/30 text-accent-glow font-medium text-sm uppercase tracking-wide mb-8">
              Case Studies
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Onze </span>
              <span className="text-gradient">Success Stories</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Ontdek hoe we bedrijven hebben geholpen met no-code automatisering om tijd te besparen, efficiënter te werken en groei te realiseren.
            </p>
            
            <div className="glassmorphism p-12 md:p-16 mt-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Binnenkort beschikbaar</h2>
              <p className="text-blue-100 mb-8">
                We werken momenteel aan het documenteren van onze meest recente klantsuccessen. Kom binnenkort terug om gedetailleerde case studies te bekijken.
              </p>
              
              <Link href="/">
                <div className="btn-primary inline-flex items-center justify-center">
                  <span>Terug naar de homepagina</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 