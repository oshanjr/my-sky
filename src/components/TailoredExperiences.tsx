import { PrismaClient } from '@prisma/client';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const prisma = new PrismaClient();

const categories = [
  { name: 'Beach & Wildlife', bg: 'bg-blue-100/90 border-blue-200 text-blue-900', icon: 'Palmtree' },
  { name: 'Cultural Tours', bg: 'bg-emerald-100/90 border-emerald-200 text-emerald-900', icon: 'Landmark' },
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
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            Tailored Experiences
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight font-serif">
            Journeys Designed For <span className="text-emerald-600">You</span>
          </h2>
        </div>
        <Link 
          href="/packages"
          className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors bg-emerald-50 hover:bg-emerald-100 px-6 py-3 rounded-full shrink-0 group border border-emerald-100"
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
            <div
              key={tour.id}
              className="group relative bg-white rounded-[32px] overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 border border-slate-100 cursor-pointer flex flex-col"
            >
              {/* Top Image Area */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
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
                <div className="absolute top-5 right-5 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-emerald-600 shadow-[0_8px_16px_rgba(0,0,0,0.1)] border border-white/50 transform group-hover:rotate-12 transition-transform duration-300">
                  <Icon size={20} strokeWidth={2.5} />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-7 flex-1 flex flex-col justify-between bg-white relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    Immerse yourself in a carefully crafted journey tailored for unforgettable moments and discoveries.
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between text-sm font-semibold border-t border-slate-100/80 pt-5">
                  <span className="text-emerald-600 group-hover:text-emerald-700 transition-colors uppercase tracking-widest text-[11px] font-bold">Explore Itinerary</span>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <LucideIcons.ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
