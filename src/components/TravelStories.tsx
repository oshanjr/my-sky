'use client';

import Image from 'next/image';
import { ArrowRight, Bookmark } from 'lucide-react';

const articles = [
  {
    title: 'Why Sri Lanka is the Ultimate 2024 Destination',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: "Ella's Secret Waterfalls & Scenic Train Journey",
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Top 10 Hidden Gems in Sri Lanka Hill Country',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'A Tea Country Experience: Nuwara Eliya Uncovered',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1566296531481-5e6a8302f385?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Whale Watching in Mirissa: Best Season & Tips',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'A Culinary Journey Through Traditional Ceylonese Spices',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
  },
];

export default function TravelStories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900 tracking-tight">
          Travel Stories & Guides
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Inspiration, local tips, and curated itineraries to help you plan your next Ceylonese adventure.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((art, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-4 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Image */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-800 shadow">
                  <Bookmark size={14} />
                </span>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block mb-2">
                {art.category}
              </span>

              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-black transition-colors line-clamp-2">
                {art.title}
              </h3>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="btn-black-pill text-[11px] px-3.5 py-1.5">
                Read Article
                <ArrowRight size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
