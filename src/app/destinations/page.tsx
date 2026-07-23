'use client';

import Navbar from '../../components/Navbar';
import FeaturedDestinations from '../../components/FeaturedDestinations';
import Footer from '../../components/Footer';
import { motion } from 'motion/react';
import { MapPin, Sparkles } from 'lucide-react';

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="pt-32">
        <section className="px-6 mb-12 relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-300 uppercase backdrop-blur-md bg-white/10 border border-white/15 rounded-full">
                <Sparkles size={14} className="text-cyan-300" />
                Explore the Island
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white font-serif tracking-tight">
                Unforgettable <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Destinations</span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                From misty cloud forests in the central highlands to golden coconut beaches along the southern coast, discover Sri Lanka's most breathtaking wonders.
              </p>
            </motion.div>
          </div>
        </section>

        <FeaturedDestinations />
      </main>
      <Footer />
    </div>
  );
}
