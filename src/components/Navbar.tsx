'use client';

import Link from 'next/link';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Tour Packages', href: '#packages' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
            ? 'glass-card shadow-lg bg-white/80 backdrop-blur-md border border-gray-200/80'
            : 'bg-white/40 backdrop-blur-sm border border-white/40'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <Compass size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 font-sans">
            My Sky <span className="font-serif italic font-normal text-gray-700">Travels</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#contact" className="btn-black-pill text-xs px-5 py-2.5">
            Plan Your Trip
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-800 hover:text-black transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[5.5rem] left-4 right-4 p-6 rounded-3xl glass-card bg-white/95 shadow-2xl z-50 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-semibold text-gray-800 py-2.5 px-4 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 pt-4 border-t border-gray-100">
            <Link
              href="#contact"
              className="btn-black-pill w-full justify-center py-3"
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
