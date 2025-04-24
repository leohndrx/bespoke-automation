import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCaseStudies } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { projectId, dataset } from '../../sanity/env';

export const revalidate = 3600; // Revalidate every hour

// Helper function to safely get image URL as a string
const getImageUrl = (image: any): string => {
  if (!image) return 'https://via.placeholder.com/600x400?text=No+Image';
  
  try {
    // Direct URL construction for Sanity images when needed
    if (image?.asset?._ref) {
      // Extract parts from the image reference
      const ref = image.asset._ref;
      
      // Handle different Sanity image reference formats
      // Format is typically: image-{assetId}-{dimensions}-{format}
      if (ref.startsWith('image-')) {
        const [_, assetId, dimensions, format] = ref.split('-');
        
        // Properly handle the format which might contain extra parts
        const formatExtension = format.split('.')[0]; // Get just the file extension
        
        // Construct direct Sanity CDN URL - hardcoding project ID and dataset for reliability
        const directUrl = `https://cdn.sanity.io/images/ut778fbn/production/${assetId}-${dimensions}.${formatExtension}`;
        return directUrl;
      }
    }
    
    // Fall back to the standard image builder if reference parsing fails
    const imageBuilder = urlForImage(image);
    if (typeof imageBuilder.url === 'function') {
      return imageBuilder.url();
    } else {
      return String(imageBuilder);
    }
  } catch (error) {
    console.error('Error generating image URL:', error, image);
    return 'https://via.placeholder.com/600x400?text=Image+Error';
  }
};

export default async function CaseStudiesPage() {
  let caseStudies = [];
  
  try {
    caseStudies = await getCaseStudies();
  } catch (error) {
    console.error('Error fetching case studies:', error);
    // Continue with empty array so we show the "Coming soon" message
  }

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
            
            {caseStudies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto">
                {caseStudies.map((caseStudy) => (
                  <Link 
                    key={caseStudy._id} 
                    href={`/case-studies/${caseStudy.slug.current}`}
                    className="block"
                  >
                    <div className="glassmorphism h-full transition-all duration-300 hover:border-accent-glow/40 hover:shadow-lg hover:shadow-accent-blue/10 overflow-hidden group">
                      <div className="relative h-64 overflow-hidden">
                        {caseStudy.mainImage ? (
                          <Image
                            src={getImageUrl(caseStudy.mainImage)}
                            alt={caseStudy.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-darkBg-700 flex items-center justify-center">
                            <span className="text-blue-100/50">No image available</span>
                          </div>
                        )}
                        
                        {caseStudy.clientLogo && (
                          <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 rounded-full p-2 flex items-center justify-center">
                            <Image
                              src={getImageUrl(caseStudy.clientLogo)}
                              alt={caseStudy.clientName || ''}
                              width={48}
                              height={48}
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-glow transition-colors">
                          {caseStudy.title}
                        </h3>
                        
                        <p className="text-blue-100 mb-6 line-clamp-3">
                          {caseStudy.introduction}
                        </p>
                        
                        {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {caseStudy.technologies.map((tech, index) => (
                              <span 
                                key={index}
                                className="text-xs px-3 py-1 bg-darkBg-700 text-accent-glow rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center text-sm text-blue-100/70">
                          <span>{caseStudy.clientName}</span>
                          <span>
                            {new Date(caseStudy.publishedAt).toLocaleDateString('nl-NL', {
                              year: 'numeric',
                              month: 'short',
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 