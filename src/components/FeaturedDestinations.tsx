'use client';

import { motion } from 'motion/react';
import { Star, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  {
    name: 'Sigiriya Rock Fortress',
    location: 'Matale District',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9,
    price: 'LKR 45,000',
    tag: 'Cultural Heritage',
  },
  {
    name: 'Ella Nine Arch Bridge',
    location: 'Badulla District',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8,
    price: 'LKR 38,000',
    tag: 'Scenic Views',
  },
  {
    name: 'Galle Dutch Fort',
    location: 'Southern Province',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2070&auto=format&fit=crop',
    rating: 4.7,
    price: 'LKR 32,000',
    tag: 'Coastal History',
  },
];

export default function FeaturedDestinations() {
  return (
    <section id="tours" className="py-28 px-6 bg-slate-950 text-white overflow-hidden relative">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-cyan-300 bg-white/10 border border-white/15 backdrop-blur-md uppercase"
            >
              <Sparkles size={14} className="text-cyan-300" />
              Explore Sri Lanka
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight font-serif"
            >
              Discover the Pearl of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                The Indian Ocean
              </span>
            </motion.h2>
          </div>
          <Link 
            href="/destinations"
            className="text-cyan-300 font-bold flex items-center gap-2 border border-white/20 backdrop-blur-md bg-white/5 px-6 py-3.5 rounded-2xl hover:bg-white/15 hover:border-cyan-400/50 hover:text-white transition-all active:scale-95 shadow-lg w-fit"
          >
            <span>View All Destinations</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl border border-white/15 backdrop-blur-xl bg-slate-900/40">
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Floating Tag */}
                <div className="absolute top-6 left-6 backdrop-blur-md bg-black/40 border border-white/20 text-cyan-300 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                  {dest.tag}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{dest.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">{dest.name}</h3>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1.5 text-amber-400 bg-black/40 px-3 py-1 rounded-xl border border-white/10">
                      <Star size={15} className="fill-amber-400" />
                      <span className="text-white font-bold text-sm">{dest.rating}</span>
                    </div>
                    <div className="text-white">
                      <span className="text-xs text-slate-300">Starting at </span>
                      <span className="text-xl font-extrabold text-cyan-300">{dest.price}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:to-cyan-400 text-white py-3.5 rounded-2xl font-bold transition-all active:scale-95 text-center block shadow-lg shadow-cyan-500/20">
                    Book Your Trip
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
