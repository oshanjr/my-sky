'use client';

import Navbar from '../../components/Navbar';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function ServicesPage() {
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
                Our Expertise
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white font-serif tracking-tight">
                Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Travel Services</span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                End-to-end luxury travel solutions. Whether it's custom flight bookings, visa concierge, or private guided tours, we take care of every detail.
              </p>
            </motion.div>
          </div>
        </section>

        <Services />
      </main>
      <Footer />
    </div>
  );
}
