'use client';

import Image from 'next/image';

export default function LandscapeBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Title */}
      <div className="text-right ml-auto max-w-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900 tracking-tight leading-tight">
          A Journey Through Breathtaking Landscapes,
        </h2>
        <p className="text-2xl sm:text-3xl font-serif text-emerald-800 italic mt-2">
          Iconic Landmarks, and Unforgettable Experiences
        </p>
      </div>

      {/* Large Banner Image */}
      <div className="relative h-[380px] sm:h-[480px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1800&auto=format&fit=crop"
          alt="Lush Sri Lanka Coastline"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Floating Tag in corner */}
        <div className="absolute bottom-8 left-8 text-white max-w-md">
          <span className="text-xs uppercase font-bold tracking-widest bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30">
            Sri Lanka Aerial Coast
          </span>
          <h3 className="text-2xl font-serif font-bold mt-3">
            Where Turquoise Waters Meet Emerald Palms
          </h3>
        </div>
      </div>

    </section>
  );
}
