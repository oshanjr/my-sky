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
        className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-3 rounded-2xl transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10, 22, 40, 0.92)'
            : 'rgba(10, 22, 40, 0.60)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: scrolled
            ? '1px solid rgba(255,255,255,0.10)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.30)'
            : '0 4px 16px rgba(0,0,0,0.10)',
        }}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="p-2 rounded-xl group-hover:scale-110 transition-transform"
            style={{
              background: 'var(--cta-bg)',
              boxShadow: '0 4px 16px var(--cta-glow)',
            }}
          >
            <Plane className="text-white w-5 h-5" />
          </div>
          <span
            className="text-lg sm:text-xl font-bold tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            My Sky Travels
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-sm font-medium tracking-wide"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="cta-button text-sm !py-2.5 !px-6 !rounded-xl">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl cursor-pointer"
          style={{
            background: 'var(--glass-dark-bg)',
            border: '1px solid var(--glass-dark-border)',
            color: 'var(--text-on-dark)',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden absolute top-[4.5rem] left-4 right-4 p-6 rounded-2xl z-50 flex flex-col gap-4"
          style={{
            background: 'rgba(10, 22, 40, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.40)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-medium py-1.5"
              style={{ color: 'var(--text-on-dark-secondary)' }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="cta-button w-full text-center !rounded-xl mt-2"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
