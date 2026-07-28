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
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-bold text-slate-900 font-sans tracking-tight">
                      {tour.days}
                    </span>
                    <span className="text-sm font-bold text-slate-600 uppercase">
                      Days
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">
                    {tour.title}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-purple-950 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                  <Icon size={16} />
                </div>
              </div>

              <div className="relative h-48 w-full rounded-2xl overflow-hidden mt-4">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
