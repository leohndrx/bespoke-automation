import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseStudyBySlug } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { PortableText } from '@portabletext/react';
import { projectId, dataset } from '../../../sanity/env';

export const revalidate = 3600; // Revalidate every hour

// Helper function to safely get image URL as a string
const getImageUrl = (image: any): string => {
  if (!image) return 'https://via.placeholder.com/600x400?text=No+Image';
  
  try {
    // Direct URL construction for Sanity images when needed
    if (image?.asset?._ref) {
      // Extract parts from the image reference
      // Format is image-{assetId}-{dimensions}-{format}
      const refParts = image.asset._ref.split('-');
      
      // Extract the asset ID and format
      if (refParts.length >= 4) {
        const assetId = refParts[1];
        const dimensions = refParts[2];
        let format = refParts[3];
        
        // Log for debugging
        console.log('Image ref:', image.asset._ref);
        
        // Construct direct Sanity CDN URL
        const directUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}-${dimensions}.${format}`;
        console.log('Generated image URL:', directUrl);
        console.log('FINAL Main image URL:', directUrl);
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

// Fix for Next.js 14 dynamic params
export async function generateMetadata({ params }: { params: any }) {
  // Await params before accessing properties
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  return {
    title: `Case Study: ${slug}`,
  };
}

// Fix for Next.js 14 dynamic params
export default async function CaseStudyPage({ params }: { params: any }) {
  // Await params before accessing properties
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  if (!slug) {
    return (
      <main>
        <Header />
        <div className="container mx-auto px-4 py-40 text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Case studie niet gevonden</h1>
          <p className="text-xl text-blue-100 mb-8">De case studie die je zoekt is niet beschikbaar.</p>
          <Link href="/case-studies" className="btn-primary">
            Terug naar alle case studies
          </Link>
        </div>
        <Footer />
      </main>
    );
  }
  
  try {
    // Use the slug to fetch the case study
    const caseStudy = await getCaseStudyBySlug(slug);

    if (!caseStudy) {
      return (
        <main>
          <Header />
          <div className="container mx-auto px-4 py-40 text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Case studie niet gevonden</h1>
            <p className="text-xl text-blue-100 mb-8">De case studie die je zoekt is niet beschikbaar.</p>
            <Link href="/case-studies" className="btn-primary">
              Terug naar alle case studies
            </Link>
          </div>
          <Footer />
        </main>
      );
    }

    // Log image data to debug in production
    console.log('Case study main image:', caseStudy.mainImage);
    
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
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-10">
                <Link href="/case-studies" className="text-blue-100 hover:text-accent-glow transition-colors">
                  ← Terug naar alle case studies
                </Link>
              </div>
              
              {/* Case Study Header */}
              <div className="text-center mb-12">
                {caseStudy.clientName && (
                  <div className="mb-4">
                    <span className="inline-block px-6 py-2 rounded-full bg-accent-blue/10 border border-accent-glow/30 text-accent-glow font-medium text-sm">
                      {caseStudy.clientName}
                    </span>
                  </div>
                )}
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  {caseStudy.title}
                </h1>
              </div>
              
              {/* Main Image */}
              {caseStudy.mainImage && (
                <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={getImageUrl(caseStudy.mainImage)}
                    alt={caseStudy.title}
                    width={1200}
                    height={675}
                    className="w-full"
                    priority
                  />
                </div>
              )}
              
              {/* Introduction */}
              {caseStudy.introduction && (
                <div className="glassmorphism p-8 mb-12">
                  <p className="text-xl text-blue-100 leading-relaxed">
                    {caseStudy.introduction}
                  </p>
                </div>
              )}
              
              {/* Results Highlight */}
              {caseStudy.results && caseStudy.results.length > 0 && (
                <div className="my-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    <span className="text-gradient">Resultaten</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {caseStudy.results.map((result: any, index: number) => (
                      <div 
                        key={index} 
                        className="glassmorphism p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/20 hover:border-accent-glow/40"
                      >
                        <div className="text-3xl font-bold text-accent-glow mb-2">
                          {result.value}
                        </div>
                        <div className="text-lg font-medium text-white mb-2">
                          {result.metric}
                        </div>
                        {result.description && (
                          <p className="text-sm text-blue-100">
                            {result.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Challenge and Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                {/* Challenge */}
                {caseStudy.challenge && (
                  <div className="glassmorphism p-8">
                    <h2 className="text-2xl font-bold mb-6 text-white">
                      De Uitdaging
                    </h2>
                    <div className="text-blue-100 rich-text">
                      <PortableText value={caseStudy.challenge} />
                    </div>
                  </div>
                )}
                
                {/* Solution */}
                {caseStudy.solution && (
                  <div className="glassmorphism p-8">
                    <h2 className="text-2xl font-bold mb-6 text-white">
                      Onze Oplossing
                    </h2>
                    <div className="text-blue-100 rich-text">
                      <PortableText value={caseStudy.solution} />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Technologies */}
              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <div className="my-12">
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Gebruikte Technologieën
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-darkBg-800 border border-accent-glow/20 rounded-full text-accent-glow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Testimonial */}
              {caseStudy.testimonial && caseStudy.testimonial.quote && (
                <div className="my-16">
                  <div className="glassmorphism p-8 relative">
                    <div className="text-5xl text-accent-glow/30 absolute top-4 left-6">
                      "
                    </div>
                    <blockquote className="text-xl text-blue-100 italic pl-8 relative z-10">
                      {caseStudy.testimonial.quote}
                    </blockquote>
                    {(caseStudy.testimonial.author || caseStudy.testimonial.role) && (
                      <div className="mt-4 text-right">
                        <p className="text-white font-medium">
                          {caseStudy.testimonial.author && (
                            <span>— {caseStudy.testimonial.author}</span>
                          )}
                          {caseStudy.testimonial.role && (
                            <span className="text-blue-100 ml-1">
                              {caseStudy.testimonial.role}
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Gallery */}
              {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
                <div className="my-16">
                  <h2 className="text-2xl font-bold mb-8 text-white">
                    Project Galerij
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudy.galleryImages.map((image: any, index: number) => (
                      <div key={index} className="glassmorphism p-2 overflow-hidden">
                        <div className="relative h-48 md:h-64">
                          <Image
                            src={getImageUrl(image)}
                            alt={image.caption || `Gallery image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {image.caption && (
                          <p className="text-sm text-blue-100 pt-2 px-2">
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* CTA */}
              <div className="mt-16 mb-8 text-center">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Klaar om jouw processen te automatiseren?
                </h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Ontdek hoe wij ook jouw bedrijf kunnen helpen met slimme automatiseringen die tijd en geld besparen.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center">
                  Plan een vrijblijvend gesprek
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error fetching case study:', error);
    return (
      <main>
        <Header />
        <div className="container mx-auto px-4 py-40 text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Er is een fout opgetreden</h1>
          <p className="text-xl text-blue-100 mb-8">Er is een fout opgetreden bij het ophalen van de case studie.</p>
          <Link href="/case-studies" className="btn-primary">
            Terug naar alle case studies
          </Link>
        </div>
        <Footer />
      </main>
    );
  }
} 