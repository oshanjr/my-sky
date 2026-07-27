'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000&auto=format&fit=crop", // Aerial palms
  "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2000&auto=format&fit=crop", // Ocean view
  "https://images.unsplash.com/photo-1566296531481-5e6a8302f385?q=80&w=2000&auto=format&fit=crop"  // Cultural / Nature
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 bg-black">
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={src}
              alt={`Sri Lanka Hero Image ${idx + 1}`}
              fill
              className="object-cover object-center"
              priority={idx === 0} // Only preload the first image
            />
          </div>
        ))}
        {/* Dark vignette gradient overlay - made slightly darker as requested */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-30 max-w-5xl mx-auto text-center space-y-6">
        
        {/* White Glass Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            Tour Packages
          </span>
        </div>

        {/* Huge Serif Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white font-serif drop-shadow-md">
          Sri Lanka
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-serif italic tracking-wide max-w-3xl mx-auto drop-shadow">
          Embark on a Journey That's Uniquely Yours
        </p>

        <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto font-sans leading-relaxed">
          Curated travel itineraries, authentic cultural experiences, and tailor-made holidays across paradise island.
        </p>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 z-30 flex items-center justify-center gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIdx ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
