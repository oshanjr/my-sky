'use client';

import Link from 'next/link';
import { Compass, Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b13] bg-gradient-to-br from-sky-600/30 to-purple-950/60 backdrop-blur-3xl border-t border-white/10 text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-[#111318]/0 to-[#111318]/0 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
                <Compass size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                My Sky <span className="font-serif italic font-normal text-gray-400">Travels</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted travel agency for worldwide holiday packages, visa consultations, air tickets, and luxury international experiences.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Tour Packages</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Tour Packages */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Popular Tours
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">14 Days Europe Explorer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">10 Days Classic Highlights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">7 Days Maldives Escape</a></li>
              <li><a href="#" className="hover:text-white transition-colors">10 Days African Safari</a></li>
              <li><a href="#" className="hover:text-white transition-colors">16 Days Ultimate Japan</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Stay Updated
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe to get exclusive global tour deals & travel tips.
            </p>
            <div className="flex items-center bg-white/10 rounded-full p-1.5 border border-white/15">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-xs text-white px-3 focus:outline-none w-full placeholder:text-gray-500"
              />
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition">
                <Send size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} My Sky Travels SL. All rights reserved.</p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <p className="flex items-center gap-1.5 text-gray-400">
              Developed by{' '}
              <a
                href="https://oshanjr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white font-medium hover:border-white/30 transition-all duration-300 group"
              >
                <span className="bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent font-semibold">
                  oshanjr
                </span>
                <span className="text-[10px] text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
