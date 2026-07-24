'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Globe, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Happy Travelers', value: '15K+', icon: Users },
  { label: 'Global Destinations', value: '120+', icon: Globe },
  { label: 'Customer Satisfaction', value: '98%', icon: Award },
  { label: 'Safety Rating', value: '100%', icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Story Section — Dark background */}
        <section className="section-dark pt-32 px-6 py-20 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="glow-orb absolute top-1/4 -left-32 w-[500px] h-[500px] animate-glow-breathe" />
          <div className="glow-orb absolute bottom-10 -right-32 w-[500px] h-[500px] animate-glow-breathe" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full"
                  style={{
                    color: 'var(--accent-teal)',
                    background: 'var(--glass-dark-bg)',
                    border: '1px solid var(--glass-dark-border)',
                    backdropFilter: 'blur(var(--glass-blur))',
                  }}
                >
                  <Sparkles size={14} style={{ color: 'var(--accent-teal)' }} />
                  Our Story
                </div>

                <h1
                  className="text-4xl md:text-6xl font-extrabold font-serif leading-tight tracking-tight"
                  style={{ color: 'var(--text-on-dark)' }}
                >
                  Travel Smarter.{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Fly Better.
                  </span>{' '}
                  Effortlessly.
                </h1>

                <p
                  className="text-base md:text-lg font-light leading-relaxed"
                  style={{ color: 'var(--text-on-dark-secondary)' }}
                >
                  We are a trusted online air ticket booking platform designed to make travel planning simple, fast, and convenient. Our mission is to connect travelers with the best flight options from leading airlines around the world.
                </p>

                <p
                  className="text-base md:text-lg font-light leading-relaxed"
                  style={{ color: 'var(--text-on-dark-secondary)' }}
                >
                  Our mission is to connect people with the world through seamless flight bookings, trusted travel services, and transparent pricing, without the stress.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {stats.map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="glass-card glass-card--accent-hover p-5 !rounded-2xl group"
                    >
                      <stat.icon
                        className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform"
                        style={{ color: 'var(--accent-teal)' }}
                      />
                      <div
                        className="text-3xl font-extrabold"
                        style={{ color: 'var(--text-on-dark)' }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs uppercase tracking-wider font-semibold mt-1"
                        style={{ color: 'var(--text-on-dark-muted)' }}
                      >
                        {stat.label}
                      </div>
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
                <div
                  className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Image 
                    src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop"
                    alt="Sri Lanka Highlands"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(10, 22, 40, 0.80), transparent, transparent)',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section — Light background */}
        <section
          className="section-light px-6 py-24 relative overflow-hidden section-divider-top"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl md:text-5xl font-bold font-serif"
              style={{ color: 'var(--text-on-light)' }}
            >
              Our Vision
            </h2>
            <p
              className="text-xl md:text-2xl font-light italic leading-relaxed font-serif"
              style={{ color: 'var(--text-on-light-secondary)' }}
            >
              &quot;To become Sri Lanka&apos;s most trusted digital travel platform, empowering travelers with affordable choices, transparent pricing, and world-class service.&quot;
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
