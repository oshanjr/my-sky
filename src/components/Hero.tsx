'use client';

import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full flex flex-col items-center justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Aerial Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000&auto=format&fit=crop"
          alt="Aerial view of Sri Lanka palms and coast"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Soft dark vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-16 sm:mt-24 space-y-6">
        
        {/* White Glass Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            Tour Packages
          </span>
        </div>

        {/* Huge Serif Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white font-serif drop-shadow-md">
          Sri Lanka
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-serif italic tracking-wide max-w-3xl mx-auto drop-shadow">
          Embark on a Journey That's Uniquely Yours
        </p>

        <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto font-sans leading-relaxed">
          Curated travel itineraries, authentic cultural experiences, and tailor-made holidays across paradise island.
        </p>
      </div>

      {/* Floating Glass Search Panel at Bottom */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-12 mb-4">
        <div className="glass-card bg-white/70 backdrop-blur-xl p-4 sm:p-6 rounded-3xl sm:rounded-full border border-white/60 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
            
            {/* Destination Input */}
            <div className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-full border border-gray-200/60">
              <MapPin size={18} className="text-gray-600 flex-shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Destination</span>
                <input 
                  type="text" 
                  placeholder="Sigiriya, Ella, Kandy..." 
                  className="bg-transparent text-xs font-semibold text-gray-900 focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Duration Input */}
            <div className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-full border border-gray-200/60">
              <Calendar size={18} className="text-gray-600 flex-shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Duration</span>
                <input 
                  type="text" 
                  placeholder="7 - 14 Days" 
                  className="bg-transparent text-xs font-semibold text-gray-900 focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Travelers Input */}
            <div className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-full border border-gray-200/60">
              <Users size={18} className="text-gray-600 flex-shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Guests</span>
                <input 
                  type="text" 
                  placeholder="2 Adults" 
                  className="bg-transparent text-xs font-semibold text-gray-900 focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="btn-black-pill py-3.5 px-6 rounded-full w-full justify-center text-sm shadow-lg">
              <Search size={16} />
              Find Packages
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}
