'use client';

import Link from 'next/link';
import { Compass, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b13] bg-gradient-to-br from-sky-900/40 via-purple-900/20 to-[#0b0b13] border-t border-white/10 text-white pt-16 pb-8 px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Top Grid - Perfectly balanced 4-4-4 layout on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-12 lg:col-span-4 space-y-8 pr-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-transform group-hover:scale-105">
                <Compass size={28} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                My Sky <span className="font-serif italic font-normal text-sky-200">Travels</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted travel agency for worldwide holiday packages, visa consultations, air tickets, and luxury international experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Elegant Split Navigation */}
          <div className="md:col-span-6 lg:col-span-4 flex justify-between sm:justify-around lg:justify-center lg:gap-24">
            {/* Nav Group 1 */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase font-semibold tracking-[0.25em] text-gray-200">
                Explore
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
                <li><Link href="/packages" className="hover:text-white transition-colors duration-300">Tour Packages</Link></li>
                <li><Link href="/destinations" className="hover:text-white transition-colors duration-300">Destinations</Link></li>
              </ul>
            </div>
            {/* Nav Group 2 */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase font-semibold tracking-[0.25em] text-gray-200">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors duration-300">Our Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter */}
          <div className="md:col-span-6 lg:col-span-4 space-y-6 lg:pl-8">
            <h4 className="text-xs uppercase font-semibold tracking-[0.25em] text-gray-200">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to get exclusive global tour deals and travel inspiration delivered straight to your inbox.
            </p>
            <div className="relative group mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full blur opacity-15 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-black/50 backdrop-blur-xl rounded-full p-1.5 border border-white/10 focus-within:border-white/30 transition-colors duration-300">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-transparent text-sm text-white px-4 py-2 focus:outline-none w-full placeholder:text-gray-500"
                />
                <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors duration-300">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Payment Gateways Integrated */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <h4 className="text-[10px] uppercase font-semibold tracking-[0.2em] text-gray-500 mb-4">
                Secure Payments
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {/* KOKO */}
                <div className="flex items-center justify-center bg-white/5 rounded-lg px-4 py-2 border border-white/10 h-10 hover:bg-white/10 transition-colors">
                  <span className="text-[#00c9e8] font-bold italic tracking-wider text-[13px] leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>KOKO</span>
                </div>
                
                {/* MintPay */}
                <div className="flex items-center justify-center bg-white/5 rounded-lg px-4 py-2 border border-white/10 h-10 hover:bg-white/10 transition-colors">
                  <span className="text-[#3FFDD3] font-bold lowercase tracking-tight text-[13px] leading-none" style={{ fontFamily: 'system-ui, sans-serif' }}>mintpay</span>
                </div>
                
                {/* Global Cards */}
                <div className="flex items-center justify-center bg-white/5 rounded-lg px-4 py-2 border border-white/10 h-[44px] gap-3.5 hover:bg-white/10 transition-colors">
                  <svg width="32" height="11" viewBox="0 0 32 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[14px] w-auto opacity-90">
                    <path d="M12.9248 0.179688L8.46825 10.7482H5.4055L3.43572 2.37893C3.25055 1.8385 3.09069 1.6369 2.65171 1.38556C2.01639 1.01826 0.957723 0.686566 0 0.50974L0.0888998 0.179688H4.72302C5.31346 0.179688 5.85043 0.551846 6.0003 1.25877L7.1758 7.37765L10.0526 0.179688H12.9248ZM23.0031 7.29177C23.0232 4.54228 19.3241 4.39178 19.3496 3.12502C19.3582 2.74834 19.7042 2.34211 20.4859 2.22857C20.8719 2.17296 21.8038 2.11585 23.0456 2.68962L23.5332 0.38006C22.8659 0.138407 21.7334 0 20.4578 0C17.7011 0 15.8239 1.48809 15.8033 3.63937C15.7828 5.22867 17.2023 6.11307 18.2562 6.63462C19.3411 7.17004 19.7077 7.50537 19.697 8.01683C19.6806 8.79678 18.7617 9.14175 18.006 9.16016C16.3985 9.19838 15.421 8.7297 14.6738 8.37562L14.1685 10.7487C14.9299 11.1009 16.4259 11.4116 17.9866 11.4312C20.9238 11.4312 22.775 9.9723 22.7997 7.74797V7.29177ZM29.9861 10.7482H32.7475L30.9392 0.179688H28.4357C27.915 0.179688 27.4695 0.47355 27.261 0.942978L23.3619 10.7482H26.3503L26.9458 9.10397H30.5699L30.9861 10.7482V10.7482ZM27.7816 6.8159L29.2783 2.65158L30.1352 6.8159H27.7816ZM15.4057 0.179688L13.3361 10.7482H10.5369L12.606 0.179688H15.4057Z" fill="white" />
                  </svg>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-[24px] object-contain opacity-90" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="American Express" className="h-[24px] object-contain opacity-90" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left text-sm text-gray-500">
            <p>© {new Date().getFullYear()} My Sky Travels SL. All rights reserved.</p>
            <span className="hidden sm:inline text-gray-700">•</span>
            <p className="flex items-center gap-2">
              Developed by{' '}
              <a
                href="https://oshanjr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/5 hover:border-white/20 transition-all duration-300 group"
              >
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  oshanjr
                </span>
                <ArrowRight size={12} className="text-gray-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
              </a>
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
