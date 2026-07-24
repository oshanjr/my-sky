'use client';

import { motion } from 'motion/react';
import { Star, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  {
    name: 'International Tours',
    location: 'Global Destinations',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 'Custom Pricing',
    tag: 'Foreign Tours',
  },
  {
    name: 'Dubai & Abu Dhabi City Tours',
    location: 'UAE',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 'Custom Pricing',
    tag: 'City Tours',
  },
  {
    name: 'Nature & Adventure Tours',
    location: 'UAE & Beyond',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 'Custom Pricing',
    tag: 'Adventure',
  },
];

export default function FeaturedDestinations() {
  return (
    <section id="tours" className="section-dark py-28 px-6 overflow-hidden relative">
      {/* Glow Orbs */}
      <div className="glow-orb absolute top-1/4 -right-32 w-[500px] h-[500px] animate-glow-breathe" />
      <div className="glow-orb absolute bottom-1/4 -left-32 w-[500px] h-[500px] animate-glow-breathe" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                color: 'var(--accent-teal)',
                background: 'var(--glass-dark-bg)',
                border: '1px solid var(--glass-dark-border)',
                backdropFilter: 'blur(var(--glass-blur))',
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--accent-teal)' }} />
              Tour Packages
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif"
              style={{ color: 'var(--text-on-dark)' }}
            >
              Tour Packages <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Service
              </span>
            </motion.h2>
          </div>
          <Link
            href="/services"
            className="glass-btn font-bold flex items-center gap-2 px-6 py-3.5 rounded-2xl active:scale-95 shadow-lg w-fit"
          >
            <span>View All Packages</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-2xl"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                />
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: 'linear-gradient(to top, rgba(10, 22, 40, 0.90) 0%, rgba(10, 22, 40, 0.40) 50%, transparent 100%)',
                  }}
                />

                {/* Floating Tag */}
                <div
                  className="absolute top-6 left-6 z-20 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider"
                  style={{
                    backdropFilter: 'blur(16px)',
                    background: 'rgba(10, 22, 40, 0.60)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#FFFFFF',
                  }}
                >
                  {dest.tag}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--accent-teal)' }}>
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{dest.location}</span>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--text-on-dark)' }}
                  >
                    {dest.name}
                  </h3>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="flex items-center gap-1.5 text-amber-400 px-3 py-1 rounded-xl"
                      style={{
                        background: 'rgba(0,0,0,0.40)',
                        border: '1px solid rgba(255,255,255,0.10)',
                      }}
                    >
                      <Star size={15} className="fill-amber-400" />
                      <span className="font-bold text-sm text-white">{dest.rating}</span>
                    </div>
                    <div>
                      <span
                        className="text-xl font-extrabold"
                        style={{ color: 'var(--accent-teal)' }}
                      >
                        {dest.price}
                      </span>
                    </div>
                  </div>
                  <Link href="/contact" className="cta-button w-full !rounded-2xl !py-3.5 text-center">
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
