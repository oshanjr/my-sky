'use client';

import { motion } from 'motion/react';
import { Star, MapPin, ArrowRight, PlaneTakeoff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  {
    name: 'Maldives Paradise',
    location: 'Indian Ocean',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 'Custom',
    tag: 'Luxury',
  },
  {
    name: 'Dubai City Tour',
    location: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 'Custom',
    tag: 'City Escapes',
  },
  {
    name: 'Swiss Alps Adventure',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 'Custom',
    tag: 'Adventure',
  },
];

export default function FeaturedDestinations() {
  return (
    <section id="tours" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 text-brand-cyan font-bold uppercase tracking-widest text-sm">
              <PlaneTakeoff size={16} /> Explore the World
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy font-serif">
              Featured <span className="text-gradient-cyan">Destinations</span>
            </h2>
          </div>
          <Link
            href="/destinations"
            className="btn-secondary rounded-full px-6 py-3 text-sm shrink-0"
          >
            View All Packages
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="white-card rounded-3xl overflow-hidden group cursor-pointer flex flex-col"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-bold text-brand-navy shadow-sm">
                  {dest.tag}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1 bg-white">
                <div className="flex items-center gap-1.5 text-text-muted text-sm font-medium mb-2">
                  <MapPin size={14} className="text-brand-cyan" />
                  {dest.location}
                </div>
                
                <h3 className="text-xl font-bold text-brand-navy mb-4">
                  {dest.name}
                </h3>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-md">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-amber-600">{dest.rating}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-text-muted block">Starting from</span>
                    <span className="text-lg font-bold text-brand-cyan">{dest.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
