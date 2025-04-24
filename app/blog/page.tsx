import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Helper function to safely get image URL as a string
  const getImageUrl = (image: any): string => {
    if (!image) return 'https://via.placeholder.com/600x400?text=No+Image';
    const imageUrl = urlForImage(image);
    return typeof imageUrl.url === 'function' ? imageUrl.url() : String(imageUrl);
  };

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
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Onze </span>
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Lees onze laatste artikelen over AI automatisering, no-code tools, en tips voor bedrijfsefficiëntie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link 
                  key={post._id} 
                  href={`/blog/${post.slug.current}`}
                  className="block"
                >
                  <div className="glassmorphism h-full transition-all duration-300 hover:border-accent-glow/40 hover:shadow-lg hover:shadow-accent-blue/10 overflow-hidden group">
                    <div className="relative h-52 overflow-hidden">
                      {post.mainImage ? (
                        <Image
                          src={getImageUrl(post.mainImage)}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-darkBg-700 flex items-center justify-center">
                          <span className="text-blue-100/50">No image available</span>
                        </div>
                      )}
                      {post.categories && post.categories.length > 0 && (
                        <div className="absolute bottom-3 left-3 bg-accent-blue/90 text-white text-xs px-3 py-1 rounded-full">
                          {post.categories[0]}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-glow transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-blue-100 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm text-blue-100/70">
                        <div className="flex items-center">
                          {post.author?.image && (
                            <div className="w-8 h-8 rounded-full overflow-hidden mr-2 border border-accent-glow/20">
                              <Image
                                src={getImageUrl(post.author.image)}
                                alt={post.author.name}
                                width={32}
                                height={32}
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          )}
                          <span>{post.author?.name || 'Bespoke Automation'}</span>
                        </div>
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString('nl-NL', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 glassmorphism p-12 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Binnenkort beschikbaar</h3>
                <p className="text-blue-100">
                  We werken momenteel aan onze eerste artikelen. Kom binnenkort terug voor meer content over AI en automatisering!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 