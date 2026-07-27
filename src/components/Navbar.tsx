'use client';

import Link from 'next/link';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
            : 'bg-slate-900/30 backdrop-blur-md border border-white/10 shadow-sm'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <Compass size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            My Sky <span className="font-serif italic font-normal text-white/80">Travels</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="flex items-center gap-1.5 bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-md">
            Plan Your Trip
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[5.5rem] left-4 right-4 p-6 rounded-3xl bg-slate-950/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-semibold text-white/90 py-2.5 px-4 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 pt-4 border-t border-white/10">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold w-full py-3 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Plan Your Trip
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
