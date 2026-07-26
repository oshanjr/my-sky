'use client';

import { motion } from 'motion/react';
import { Plane, ScrollText, Map, ShieldCheck, Globe, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Visa Consultation',
    description: 'Expert assistance for visa cancellation, fine settlement, and status change with professional guidance.',
    icon: ScrollText,
  },
  {
    title: 'Visit Visa',
    description: '30 and 60 day visit visas with renewal and inside-country extension support.',
    icon: Globe,
  },
  {
    title: 'Freelance Visa',
    description: 'Support for freelance permits and long-term employment visas for professionals.',
    icon: ShieldCheck,
  },
  {
    title: 'Tour Packages',
    description: 'International and UAE tour packages including city tours, adventure, and luxury experiences.',
    icon: Map,
  },
  {
    title: 'Accommodation',
    description: '3 and 4 star hotels, hotel apartments, and luxury stays tailored to your travel needs.',
    icon: Plane,
  },
  {
    title: 'Air Tickets',
    description: 'Inbound and outbound air ticket booking with competitive pricing and fast confirmation.',
    icon: CreditCard,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-bg-surface-alt relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-brand-cyan font-bold uppercase tracking-widest text-sm">
            <Sparkles size={16} /> What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy font-serif">
            Our Premium <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive travel solutions tailored to provide a seamless and luxurious experience from departure to arrival.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="white-card p-8 rounded-3xl group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle gradient hover hint */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-brand-cyan to-brand-cyan-light shadow-md text-white group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan group/link"
                >
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
