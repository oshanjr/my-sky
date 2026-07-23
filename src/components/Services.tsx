'use client';

import { motion } from 'motion/react';
import { Plane, ScrollText, Map, ShieldCheck, Globe, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Flight Bookings',
    description: 'Best rates for international and domestic flights with 24/7 dedicated support.',
    icon: <Plane className="w-7 h-7 text-cyan-300" />,
    color: 'from-blue-600/30 to-cyan-500/30',
    border: 'hover:border-cyan-400/60',
  },
  {
    title: 'Visa Assistance',
    description: 'Expert guidance for Sri Lankan and international visa applications.',
    icon: <ScrollText className="w-7 h-7 text-purple-300" />,
    color: 'from-purple-600/30 to-pink-500/30',
    border: 'hover:border-purple-400/60',
  },
  {
    title: 'Custom Tours',
    description: 'Tailor-made itineraries exploring the hidden gems and ancient marvels of Sri Lanka.',
    icon: <Map className="w-7 h-7 text-emerald-300" />,
    color: 'from-emerald-600/30 to-teal-500/30',
    border: 'hover:border-emerald-400/60',
  },
  {
    title: 'Travel Insurance',
    description: 'Comprehensive global coverage for a stress-free and protected journey.',
    icon: <ShieldCheck className="w-7 h-7 text-amber-300" />,
    color: 'from-amber-600/30 to-yellow-500/30',
    border: 'hover:border-amber-400/60',
  },
  {
    title: 'Global Hotel Deals',
    description: 'Exclusive partnerships with luxury resorts and boutiqe stays worldwide.',
    icon: <Globe className="w-7 h-7 text-indigo-300" />,
    color: 'from-indigo-600/30 to-blue-500/30',
    border: 'hover:border-indigo-400/60',
  },
  {
    title: 'Payment Solutions',
    description: 'Flexible payment plans, multi-currency options and secure transactions.',
    icon: <CreditCard className="w-7 h-7 text-rose-300" />,
    color: 'from-rose-600/30 to-orange-500/30',
    border: 'hover:border-rose-400/60',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow Ambient Blobs */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-cyan-300 bg-white/10 border border-white/15 backdrop-blur-md uppercase"
          >
            <Sparkles size={14} className="text-cyan-300" />
            What We Offer
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight font-serif"
          >
            Seamless Travel <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Experiences</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-300 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed"
          >
            Beyond just tickets, we craft complete luxury travel solutions designed to make every step of your journey effortless and unforgettable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl transition-all duration-300 group overflow-hidden relative ${service.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm font-light">{service.description}</p>
                </div>

                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-cyan-400 text-sm font-bold group/link w-fit hover:text-cyan-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
