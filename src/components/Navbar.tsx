'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Plane, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-3.5 rounded-2xl transition-all duration-700"
        style={{
          background: scrolled
            ? 'rgba(5, 13, 26, 0.92)'
            : 'rgba(5, 13, 26, 0.50)',
          backdropFilter: `blur(${scrolled ? '32px' : '20px'})`,
          WebkitBackdropFilter: `blur(${scrolled ? '32px' : '20px'})`,
          border: scrolled
            ? '1px solid rgba(14, 165, 233, 0.15)'
            : '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.06)'
            : '0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="p-2.5 rounded-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0369A1, #0EA5E9, #38BDF8)',
              boxShadow: '0 4px 20px rgba(14, 165, 233, 0.35)',
            }}
          >
            <Plane className="text-white w-5 h-5 relative z-10" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
              }}
            />
          </div>
          <span
            className="text-lg sm:text-xl font-bold tracking-tight gradient-text"
            style={{
              background: 'linear-gradient(90deg, #38BDF8, #7DD3FC, #BAE6FD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            My Sky Travels
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-sm font-medium tracking-wide"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="cta-button text-sm !py-2.5 !px-7 !rounded-xl"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2.5 rounded-xl cursor-pointer transition-all duration-300"
          style={{
            background: 'var(--glass-dark-bg)',
            border: '1px solid var(--glass-dark-border)',
            color: 'var(--text-on-dark)',
            backdropFilter: 'blur(16px)',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav — Glassmorphism Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden absolute top-[5rem] left-4 right-4 p-7 rounded-2xl z-50 flex flex-col gap-1"
          style={{
            background: 'rgba(5, 13, 26, 0.95)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(14, 165, 233, 0.15)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="block text-base font-medium py-3 px-4 rounded-xl transition-all duration-300"
                style={{ color: 'var(--text-on-dark-secondary)' }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.08)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-on-dark-secondary)';
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Link
              href="/contact"
              className="cta-button w-full text-center !rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
