'use client';

import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { motion } from 'motion/react';
import { PhoneCall, Sparkles } from 'lucide-react';

export default function ContactPage() {
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
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white font-serif tracking-tight">
                Let's Plan Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Adventure</span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                Have questions about our custom packages or need a personalized tour itinerary? Our consultants are available 24/7.
              </p>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
