'use client';

import Image from 'next/image';
import { Percent, Award, ArrowUpRight } from 'lucide-react';

export default function StatsHighlight() {
  return (
    <section className="py-16 space-y-20">
      
      {/* Banner 1: Explore, Experience & Embrace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Explore, Experience & Embrace Wonders of the World
        </h2>

        <div className="relative h-[350px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522083111811-37d45a7bd786?q=80&w=1800&auto=format&fit=crop"
            alt="Majestic Mountain Range"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Feature Block: Embrace the Wonders with 68% Dark Glass Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 leading-tight">
              Embrace the Wonders of the World
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
              From majestic safaris in Africa to tranquil mountain escapes in the Swiss Alps, we design journeys that resonate with your spirit. Experience unmatched hospitality with 24/7 dedicated local assistance.
            </p>

            <div className="pt-2">
              <a href="#contact" className="btn-black-pill">
                Start Planning
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Visual Side (Dark Glass Stats Card + Swing Photo) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            
            {/* Dark Glass 68% Card */}
            <div className="dark-glass-card rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden text-white min-h-[280px]">
              {/* Background thumbnail */}
              <div className="absolute inset-0 opacity-25 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600&auto=format&fit=crop"
                  alt="Background preview"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Satisfaction Rate
                </span>
                <Award size={20} className="text-amber-400" />
              </div>

              <div className="relative z-10 my-4">
                <span className="text-6xl font-extrabold tracking-tight font-sans block">
                  68%
                </span>
                <span className="text-xs text-gray-300 font-medium mt-1 block">
                  Repeat travelers & direct referrals across 40+ countries
                </span>
              </div>

              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Verified Client Reviews</span>
                <span className="text-white font-semibold">5.0 ★</span>
              </div>
            </div>

            {/* Traveler Swing Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop"
                alt="Traveler on African Safari"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
