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
    <section id="tours" className="gradient-mesh-dark py-32 px-6 overflow-hidden relative" style={{ color: 'var(--text-on-dark)' }}>


      {/* Gradient Mesh Orbs */}
      <div className="glow-orb absolute top-1/4 -right-40 w-[600px] h-[600px] animate-glow-breathe" />
      <div className="glow-orb-accent absolute bottom-1/4 -left-40 w-[500px] h-[500px] animate-glow-breathe" style={{ animationDelay: '2s' }} />
      <div className="glow-orb absolute top-1/2 left-1/3 w-[350px] h-[350px] animate-glow-breathe" style={{ animationDelay: '3.5s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12), rgba(56, 189, 248, 0.06))',
                border: '1px solid rgba(14, 165, 233, 0.20)',
                color: '#38BDF8',
                backdropFilter: 'blur(16px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <Sparkles size={14} style={{ color: '#38BDF8' }} />
              Tour Packages
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif"
              style={{ color: 'var(--text-on-dark)' }}
            >
              Tour Packages <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #0EA5E9, #38BDF8, #7DD3FC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Service
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="glass-btn font-bold flex items-center gap-2.5 px-7 py-4 rounded-2xl active:scale-95 w-fit transition-all duration-300"
            >
              <span>View All Packages</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Destination Cards — Enhanced Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-3xl aspect-[4/5]"
                style={{
                  border: '1px solid rgba(14, 165, 233, 0.12)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.04)',
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
                {/* Cinematic overlay gradient */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: 'linear-gradient(to top, rgba(5, 13, 26, 0.95) 0%, rgba(5, 13, 26, 0.45) 45%, rgba(5, 13, 26, 0.10) 70%, transparent 100%)',
                  }}
                />

                {/* Floating Tag — Glassmorphism */}
                <div
                  className="absolute top-6 left-6 z-20 text-xs font-bold px-4 py-2.5 rounded-xl uppercase tracking-wider"
                  style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(5, 13, 26, 0.50))',
                    border: '1px solid rgba(14, 165, 233, 0.20)',
                    color: '#7DD3FC',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}
                >
                  {dest.tag}
                </div>

                {/* Content Overlay — Glass Panel */}
                <div className="absolute bottom-0 left-0 right-0 p-7 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3" style={{ color: '#38BDF8' }}>
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{dest.location}</span>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-5"
                    style={{ color: 'var(--text-on-dark)' }}
                  >
                    {dest.name}
                  </h3>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="flex items-center gap-1.5 text-amber-400 px-3.5 py-1.5 rounded-xl"
                      style={{
                        background: 'rgba(0,0,0,0.40)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                      }}
                    >
                      <Star size={15} className="fill-amber-400" />
                      <span className="font-bold text-sm text-white">{dest.rating}</span>
                    </div>
                    <div>
                      <span
                        className="text-xl font-extrabold"
                        style={{
                          background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {dest.price}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="cta-button w-full !rounded-2xl !py-4 text-center text-sm"
                  >
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
