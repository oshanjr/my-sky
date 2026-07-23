'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Plane, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-2xl bg-slate-950/60 border border-white/15 rounded-[2rem] px-6 sm:px-8 py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all hover:border-white/25">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20">
            <Plane className="text-white w-5 h-5" />
          </div>
          <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200">
            My Sky Travels
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors" 
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
          className="md:hidden absolute top-20 left-4 right-4 backdrop-blur-2xl bg-slate-900/90 border border-white/15 rounded-3xl p-6 shadow-2xl shadow-slate-950 flex flex-col gap-4 z-50"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-semibold text-slate-200 hover:text-cyan-300 py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/20 active:scale-95 transition-all text-center"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
