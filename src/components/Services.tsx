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
    <section id="services" className="section-light py-28 px-6 relative overflow-hidden">
      {/* Subtle ambient glow on light bg */}
      <div className="glow-orb-light absolute top-1/3 -left-32 w-[500px] h-[500px] animate-glow-breathe" />
      <div className="glow-orb-light absolute bottom-10 -right-32 w-[500px] h-[500px] animate-glow-breathe" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              color: 'var(--accent-teal)',
              background: 'var(--accent-teal-frost)',
              border: '1px solid var(--accent-teal-border)',
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--accent-teal)' }} />
            What We Offer
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif"
            style={{ color: 'var(--text-on-light)' }}
          >
            Our Travel{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #0EA5E9, #0284C7)',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="light-card p-8 rounded-3xl group overflow-hidden relative cursor-pointer"
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), transparent)',
                }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{
                      background: 'var(--accent-teal-frost)',
                      border: '1px solid var(--accent-teal-border)',
                    }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: 'var(--accent-teal)' }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 transition-colors"
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
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold w-fit group/link"
                  style={{ color: 'var(--accent-teal)' }}
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
