'use client';

import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero header — Dark */}
        <section className="section-dark pt-32 pb-16 px-6 relative">
          <div className="glow-orb absolute top-1/3 -left-32 w-[400px] h-[400px] animate-glow-breathe" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
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
                Get in Touch
              </div>
              <h1
                className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight"
                style={{ color: 'var(--text-on-dark)' }}
              >
                Your Smooth{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Travel Experience
                </span>
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
                style={{ color: 'var(--text-on-dark-secondary)' }}
              >
                Reach out to us for quick responses, clear guidance, and reliable assistance tailored to your travel needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact form — Light */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
