'use client';

import Image from 'next/image';
import { Palmtree, Landmark, Mountain, Sparkles, Compass, ShieldAlert } from 'lucide-react';

const categories = [
  { name: 'Beach & Wildlife', bg: 'bg-blue-100/90 border-blue-200 text-blue-900', icon: Palmtree },
  { name: 'Cultural Tours', bg: 'bg-emerald-100/90 border-emerald-200 text-emerald-900', icon: Landmark },
  { name: 'Adventure & Hiking', bg: 'bg-amber-100/90 border-amber-200 text-amber-900', icon: Mountain },
  { name: 'Luxury & Wellness', bg: 'bg-rose-100/90 border-rose-200 text-rose-900', icon: Sparkles },
];

const packages = [
  {
    days: 14,
    label: 'Days',
    title: 'GRAND EUROPE TOUR',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop',
  },
  {
    days: 10,
    label: 'Days',
    title: 'CLASSIC HIGHLIGHTS',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=600&auto=format&fit=crop',
  },
  {
    days: 7,
    label: 'Days',
    title: 'MALDIVES ESCAPE',
    icon: Palmtree,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop',
  },
  {
    days: 10,
    label: 'Days',
    title: 'AFRICAN SAFARI',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
  },
  {
    days: 4,
    label: 'Days',
    title: 'QUICK GETAWAY',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
  },
  {
    days: 16,
    label: 'Days',
    title: 'ULTIMATE JAPAN',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
  },
];

export default function TailoredExperiences() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight">
          Tailored Experiences Just for You
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Explore handpicked tour packages designed to immerse you in the world's most breathtaking cultures, wildlife, and natural wonders.
        </p>
      </div>

      {/* Pastel Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
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

      {/* Tour Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {packages.map((pkg, idx) => {
          const Icon = pkg.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Header Info */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-bold text-slate-900 font-sans tracking-tight">
                      {pkg.days}
                    </span>
                    <span className="text-sm font-bold text-slate-600 uppercase">
                      {pkg.label}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">
                    {pkg.title}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-purple-950 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                  <Icon size={16} />
                </div>
              </div>

              {/* Bottom Thumbnail Image */}
              <div className="relative h-28 w-full rounded-2xl overflow-hidden mt-4">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
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
