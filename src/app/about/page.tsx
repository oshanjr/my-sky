'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Globe, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Happy Travelers', value: '10K+', icon: Users },
  { label: 'Destinations', value: '50+', icon: Globe },
  { label: 'Years Experience', value: '15+', icon: Award },
  { label: 'Safety Rating', value: '100%', icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="pt-32">
        {/* Story Section */}
        <section className="px-6 py-20 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-300 uppercase backdrop-blur-md bg-white/10 border border-white/15 rounded-full">
                  <Sparkles size={14} className="text-cyan-300" />
                  Our Story
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-white font-serif leading-tight tracking-tight">
                  Crafting Timeless Journeys in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Paradise</span>
                </h1>

                <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed">
                  Founded with a passion for showcasing the true essence of Sri Lanka, My Sky Travels has grown from a local boutique agency into a premier travel partner for international luxury travelers.
                </p>

                <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed">
                  Our mission is simple: to provide authentic, immersive, and tailor-made experiences that connect our guests with the heart and soul of our island home while promoting sustainable, eco-friendly travel.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {stats.map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="p-5 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 shadow-xl transition-all group"
                    >
                      <stat.icon className="text-cyan-300 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/15 backdrop-blur-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop"
                    alt="Sri Lanka Highlands"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="px-6 py-24 relative overflow-hidden border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white">Our Vision</h2>
            <p className="text-xl md:text-3xl font-light italic text-slate-200 leading-relaxed font-serif">
              "To be the world's most trusted gateway to Sri Lanka, recognized for our commitment to excellence, authenticity, and the transformative power of luxury travel."
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
