import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Solutions from '../components/home/Solutions';
import OurProcess from '../components/home/OurProcess';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <OurProcess />
      <Solutions />
      <Footer />
    </main>
  );
} 