import { PrismaClient } from '@prisma/client';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const prisma = new PrismaClient();

const categories = [
  { name: 'Beach & Wildlife', bg: 'bg-blue-100/90 border-blue-200 text-blue-900', icon: 'Palmtree' },
  { name: 'Cultural Tours', bg: 'bg-sky-100/90 border-sky-200 text-sky-900', icon: 'Landmark' },
  { name: 'Adventure & Hiking', bg: 'bg-amber-100/90 border-amber-200 text-amber-900', icon: 'Mountain' },
  { name: 'Luxury & Wellness', bg: 'bg-rose-100/90 border-rose-200 text-rose-900', icon: 'Sparkles' },
];

export default async function TailoredExperiences() {
  const tours = await prisma.tourPackage.findMany({
    orderBy: { createdAt: 'asc' },
    take: 6
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
            Tailored Experiences
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight font-serif">
            Journeys Designed For <span className="text-sky-600">You</span>
          </h2>
        </div>
        <Link 
          href="/packages"
          className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:text-sky-800 transition-colors bg-sky-50 hover:bg-sky-100 px-6 py-3 rounded-full shrink-0 group border border-sky-100"
        >
          View all itineraries 
          <LucideIcons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
        {categories.map((cat) => {
          // @ts-ignore
          const Icon = LucideIcons[cat.icon] || LucideIcons.Map;
          return (
            <button
              key={cat.name}
              className={`flex items-center gap-3 px-5 py-2.5 rounded-full border ${cat.bg} backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer`}
            >
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-purple-950 text-white flex items-center justify-center text-xs">
                <Icon size={13} />
              </span>
              <span className="text-xs sm:text-sm font-semibold">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {tours.map((tour) => {
          // @ts-ignore
          const Icon = LucideIcons[tour.icon] || LucideIcons.Map;
          
          return (
            <Link
              key={tour.id}
              href={`/packages/${tour.id}`}
              className="group relative bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-xl hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-2 border border-slate-200 cursor-pointer flex flex-col"
            >
              {/* Top Image Area */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Floating Badge (Days) */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-baseline gap-1.5 shadow-[0_8px_16px_rgba(0,0,0,0.1)] border border-white/50 transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-black text-slate-900 font-sans leading-none">{tour.days}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Days</span>
                </div>

                {/* Floating Icon */}
                <div className="absolute top-5 right-5 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-sky-600 shadow-[0_8px_16px_rgba(0,0,0,0.1)] border border-white/50 transform group-hover:rotate-12 transition-transform duration-300">
                  <Icon size={20} strokeWidth={2.5} />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-7 flex-1 flex flex-col justify-between bg-white relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3 group-hover:text-sky-600 transition-colors duration-300">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    Immerse yourself in a carefully crafted journey tailored for unforgettable moments and discoveries, with expert guides and premium accommodations.
                  </p>
                  
                  {/* Meta Tags */}
                  <div className="mt-6 flex items-center gap-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md"><LucideIcons.Plane size={12} className="text-sky-500"/> Flights</span>
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md"><LucideIcons.Hotel size={12} className="text-sky-500"/> Hotels</span>
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md"><LucideIcons.Utensils size={12} className="text-sky-500"/> Meals</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <span className="flex items-center justify-center gap-2 w-full bg-sky-600 text-white px-6 py-3.5 rounded-2xl uppercase tracking-widest text-[11px] font-bold group-hover:bg-sky-700 transition-all duration-300 shadow-sm hover:shadow-md">
                    Explore Itinerary
                    <LucideIcons.ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
