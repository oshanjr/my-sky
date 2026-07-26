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
    <section id="services" className="gradient-mesh-light py-32 px-6 relative overflow-hidden">


      {/* Ambient glow orbs */}
      <div className="glow-orb-light absolute top-1/3 -left-40 w-[600px] h-[600px] animate-glow-breathe" />
      <div className="glow-orb-light absolute bottom-10 -right-40 w-[600px] h-[600px] animate-glow-breathe" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header — Clean & Spacious */}
        <div className="text-center mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08), rgba(56, 189, 248, 0.05))',
              border: '1px solid rgba(14, 165, 233, 0.15)',
              color: 'var(--accent-teal)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Sparkles size={14} style={{ color: '#0EA5E9' }} />
            What We Offer
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif"
            style={{ color: 'var(--text-on-light)' }}
          >
            Our Travel{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #0369A1, #0EA5E9, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-on-light-secondary)' }}
          >
            Expert assistance for visa cancellation, fine settlement, and status change with professional guidance.
          </motion.p>
        </div>

        {/* Service Cards — Glassmorphism on Light */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel-light p-9 group overflow-hidden relative cursor-pointer"
            >
              {/* Gradient hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.04), rgba(56, 189, 248, 0.02), transparent)',
                }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Gradient Icon Container */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 group-hover:shadow-lg transition-all duration-400 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #0369A1, #0EA5E9, #38BDF8)',
                      boxShadow: '0 4px 16px rgba(14, 165, 233, 0.25)',
                    }}
                  >
                    <service.icon className="w-6 h-6 text-white relative z-10" />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
                      }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: 'var(--text-on-light)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: 'var(--text-on-light-secondary)' }}
                  >
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-2 text-sm font-bold w-fit group/link"
                  style={{ color: 'var(--accent-teal)' }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}
