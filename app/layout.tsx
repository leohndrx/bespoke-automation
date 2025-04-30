import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Bespoke Automation | 10+ Uur Per Week Besparen Met AI Automatisering",
  description: "Zeg vaarwel tegen handmatig werk. Binnen 30 dagen draaien je workflows op AI-automatisering, of we werken gratis door. Groei zonder nieuw personeel.",
  keywords: "procesautomatisering, workflow automatisering, AI integratie, bedrijfsgroei, no-code automatisering, handmatige taken automatiseren, documentverwerking AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-darkBg-900 text-white`}>
        <div className="fixed inset-0 dot-pattern opacity-5 pointer-events-none z-0"></div>
        {children}
        <Script id="animation-observer" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', () => {
              const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
              };
              
              const handleIntersect = (entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animated-section')) {
                      entry.target.classList.add('is-visible');
                    }
                    if (entry.target.classList.contains('reveal')) {
                      entry.target.classList.add('reveal-visible');
                    }
                    if (entry.target.classList.contains('reveal-up')) {
                      entry.target.classList.add('reveal-up-visible');
                    }
                    if (entry.target.classList.contains('reveal-right')) {
                      entry.target.classList.add('reveal-right-visible');
                    }
                    observer.unobserve(entry.target);
                  }
                });
              };
              
              const observer = new IntersectionObserver(handleIntersect, observerOptions);
              
              document.querySelectorAll('.animated-section, .reveal, .reveal-up, .reveal-right').forEach(el => {
                observer.observe(el);
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}