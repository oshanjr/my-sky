'use client';

import Image from 'next/image';
import { Palmtree, Landmark, Mountain, Sparkles, Compass, ShieldAlert } from 'lucide-react';

const categories = [
  { name: 'Beach & Wildlife', bg: 'bg-blue-50/80 border-blue-100', icon: Palmtree },
  { name: 'Cultural Tours', bg: 'bg-emerald-50/80 border-emerald-100', icon: Landmark },
  { name: 'Adventure & Hiking', bg: 'bg-amber-50/80 border-amber-100', icon: Mountain },
  { name: 'Luxury & Wellness', bg: 'bg-rose-50/80 border-rose-100', icon: Sparkles },
];

const packages = [
  {
    days: 14,
    label: 'Days',
    title: 'GRAND ISLAND TOUR',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600&auto=format&fit=crop',
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
    title: 'ESSENTIAL ESCAPES',
    icon: Palmtree,
    image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=600&auto=format&fit=crop',
  },
  {
    days: 10,
    label: 'Days',
    title: 'WILDLIFE & SAFARI',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1566296531481-5e6a8302f385?q=80&w=600&auto=format&fit=crop',
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
    title: 'ULTIMATE SRI LANKA',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
  },
];

export default function TailoredExperiences() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900 tracking-tight">
          Tailored Experiences Just for You
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          Explore handpicked tour packages designed to immerse you in Sri Lanka's breathtaking culture, wildlife, and natural beauty.
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
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
                <Icon size={13} />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
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
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Header Info */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900 font-sans tracking-tight">
                      {pkg.days}
                    </span>
                    <span className="text-sm font-bold text-gray-600 uppercase">
                      {pkg.label}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mt-1">
                    {pkg.title}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
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
