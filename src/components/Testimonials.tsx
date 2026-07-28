'use client';

import Image from 'next/image';
import { ArrowRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Client Photos & Quote Cards Collage */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          
          <div className="space-y-4">
            <div className="relative h-48 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                alt="Client portrait"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Pastel Blue Quote Glass Card */}
            <div className="bg-sky-50/90 border border-sky-100 p-5 rounded-3xl backdrop-blur-md shadow-sm space-y-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-gray-800 font-medium italic">
                "Our 14-day tour was absolute magic. The chauffeur driver and tour guide made us feel like family!"
              </p>
              <span className="text-[11px] font-bold text-gray-900 block">
                — Sarah & David, UK
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            {/* Pastel Green Quote Glass Card */}
            <div className="bg-emerald-50/90 border border-emerald-100 p-5 rounded-3xl backdrop-blur-md shadow-sm space-y-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-gray-800 font-medium italic">
                "Seamless visa assistance and stunning luxury hotels in Dubai & Abu Dhabi. Flawless execution."
              </p>
              <span className="text-[11px] font-bold text-gray-900 block">
                — Marcus L., Germany
              </span>
            </div>

            <div className="relative h-48 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                alt="Client smiling"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Right Side: Header Text & Button */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700">
            Client Testimonials
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 leading-tight">
            What Our Clients Say
          </h2>

          <p className="text-base text-gray-600 leading-relaxed font-sans">
            Hear stories from real travelers who embarked on unforgettable journeys with My Sky Travels across the globe.
          </p>

          <div>
            <a href="#contact" className="btn-black-pill">
              View All Reviews
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
